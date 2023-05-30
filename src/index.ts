import "./components/export"
import { dispatch } from "./store";
import { getProduct } from "./store/action";

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    async connectedCallback() {
        dispatch(await getProduct())
        this.render()
    }

    render() {
        const form = this.ownerDocument.createElement('app-form');
        const pList = this.ownerDocument.createElement('products-list');
        this.shadowRoot?.appendChild(form);
        this.shadowRoot?.appendChild(pList);
    }
}

customElements.define('app-container', AppContainer)