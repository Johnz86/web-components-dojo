class EditableList extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({
            mode: 'open'
        });

        // creating a container for the editable-list component
        const editableListContainer = document.createElement('div');

        // get attribute values from getters
        const title = this.title;
        const addItemText = this.addItemText;
        const listItems = this.items;

        // adding a class to our container for the sake of clarity
        editableListContainer.classList.add('editable-list');

        // creating the inner HTML of the editable list element
        editableListContainer.innerHTML = `
                <style>
                    @import "style.css"
                </style>
                <div class="todoapp">
                    <header class="header">
                        <h1>${title}</h1>
                        <input class="new-todo" type="text" placeholder="${addItemText}"></input>
                    </header>
                    <section class="main">
                        <ul class="todo-list">
                        ${listItems.map(item => `
                            <li class="view">
                            <label>${item}</label>
                            <button class="destroy"/>
                            </li>
                        `).join('')}
                        </ul>
                    </section>
                    <footer class="footer"> 
                        <span class="todo-count">${listItems.length} item left</span>
                    </footer>
                </div>
            `;

        // binding methods
        this.addListItem = this.addListItem.bind(this);
        this.handleRemoveItemListeners = this.handleRemoveItemListeners.bind(this);
        this.removeListItem = this.removeListItem.bind(this);

        // appending the container to the shadow DOM
        shadow.appendChild(editableListContainer);
    }

    // add items to the list
    addListItem(e) {
        const key = e.which || e.keyCode;
        const inpuText = e.currentTarget.value;
        if (key === 13 && inpuText) {
            const li = document.createElement('li');
            const label = document.createElement('label');
            const button = document.createElement('button');
            const childrenLength = this.itemList.children.length;
            label.textContent = inpuText;
            button.classList.add('destroy');
            li.appendChild(label);
            this.itemList.appendChild(li);
            this.itemList.children[childrenLength].appendChild(button);

            this.handleRemoveItemListeners([button]);

            e.currentTarget.value = '';
        }
    }

    // fires after the element has been attached to the DOM
    connectedCallback() {
        const removeElementButtons = [...this.shadowRoot.querySelectorAll('.destroy')];
        const textInput = this.shadowRoot.querySelector('.new-todo');

        this.itemList = this.shadowRoot.querySelector('.todo-list');

        this.handleRemoveItemListeners(removeElementButtons);
        textInput.addEventListener('keypress', this.addListItem, false);
    }

    // gathering data from element attributes
    get title() {
        return this.getAttribute('title') || '';
    }

    get items() {
        const items = [];

        [...this.attributes].forEach(attr => {
            if (attr.name.includes('list-item')) {
                items.push(attr.value);
            }
        });

        return items;
    }

    get addItemText() {
        return this.getAttribute('add-item-text') || '';
    }

    handleRemoveItemListeners(arrayOfElements) {
        arrayOfElements.forEach(element => {
            element.addEventListener('click', this.removeListItem, false);
        });
    }

    removeListItem(e) {
        e.target.parentNode.remove();
    }
}

// let the browser know about the custom element
customElements.define('editable-list', EditableList);