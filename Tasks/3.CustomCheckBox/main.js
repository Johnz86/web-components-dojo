const KEYCODE = {
    SPACE: 32,
};

const template = document.createElement('template');
template.innerHTML = `
      <style>
        :host {
          display: inline-block;
          background: url('../images/unchecked-checkbox.svg') no-repeat;
          background-size: contain;
          width: 24px;
          height: 24px;
        }
        :host([hidden]) {
          display: none;
        }
        :host([checked]) {
          background: url('../images/checked-checkbox.svg') no-repeat;
          background-size: contain;
        }
        :host([disabled]) {
          background:
            url('../images/unchecked-checkbox-disabled.svg') no-repeat;
          background-size: contain;
        }
        :host([checked][disabled]) {
          background:
            url('../images/checked-checkbox-disabled.svg') no-repeat;
          background-size: contain;
        }
      </style>
    `;


class CustomCheckbox extends HTMLElement {
    static get observedAttributes() {
        return ['checked', 'disabled'];
    }
    constructor() {
        super();
        this.attachShadow({
            mode: 'open'
        });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {


        if (!this.hasAttribute('role'))
            this.setAttribute('role', 'checkbox');
        if (!this.hasAttribute('tabindex'))
            this.setAttribute('tabindex', 0);

        this._upgradeProperty('checked');
        this._upgradeProperty('disabled');

        this.addEventListener('keyup', this._onKeyUp);
        this.addEventListener('click', this._onClick);
    }

    _upgradeProperty(prop) {
        if (this.hasOwnProperty(prop)) {
            let value = this[prop];
            delete this[prop];
            this[prop] = value;
        }
    }


    disconnectedCallback() {
        this.removeEventListener('keyup', this._onKeyUp);
        this.removeEventListener('click', this._onClick);
    }

    set checked(value) {
        const isChecked = Boolean(value);
        if (isChecked)
            this.setAttribute('checked', '');
        else
            this.removeAttribute('checked');
    }

    get checked() {
        return this.hasAttribute('checked');
    }

    set disabled(value) {
        const isDisabled = Boolean(value);
        if (isDisabled)
            this.setAttribute('disabled', '');
        else
            this.removeAttribute('disabled');
    }

    get disabled() {
        return this.hasAttribute('disabled');
    }

    attributeChangedCallback(name, oldValue, newValue) {
        const hasValue = newValue !== null;
        switch (name) {
            case 'checked':
                this.setAttribute('aria-checked', hasValue);
                break;
            case 'disabled':
                this.setAttribute('aria-disabled', hasValue);
                if (hasValue) {
                    this.removeAttribute('tabindex');
                    this.blur();
                } else {
                    this.setAttribute('tabindex', '0');
                }
                break;
        }
    }

    _onKeyUp(event) {
        if (event.altKey)
            return;

        switch (event.keyCode) {
            case KEYCODE.SPACE:
                event.preventDefault();
                this._toggleChecked();
                break;
            default:
                return;
        }
    }

    _onClick(event) {
        this._toggleChecked();
    }

    _toggleChecked() {
        if (this.disabled)
            return;
        this.checked = !this.checked;
        this.dispatchEvent(new CustomEvent('change', {
            detail: {
                checked: this.checked,
            },
            bubbles: true,
        }));
    }
}

window.customElements.define('custom-checkbox', CustomCheckbox);