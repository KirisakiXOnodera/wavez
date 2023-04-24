class Footer extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback(){
        this.innerHTML = `
    <footer>
    <div class = "w-1920 h-269.49 bg-primary absolute left-0 right-0 top-86.54 bottom--0.02">
    <p1 class = "text-white">Company</p1>
    </div>
    </footer>
        `;
    }        
}

customElements.define('footer-component', Footer);