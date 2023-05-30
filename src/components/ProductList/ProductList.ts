import { addObserver, appState } from "../../store";
import styles from "./ProductList.css"

class ProductsList extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        addObserver(this);
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML="";

        appState.products.forEach((c)=> {
        const pContainer = this.ownerDocument.createElement('article');
        const pTitle = this.ownerDocument.createElement('h3');
        pTitle.textContent = c.name; 

        const pPrice = this.ownerDocument.createElement('h3');
        pPrice.textContent = c.price; 

        pContainer?.appendChild(pTitle);
        pContainer?.appendChild(pPrice);
        this.shadowRoot?.appendChild(pContainer);

        const css = this.ownerDocument.createElement("style");
            css.innerHTML = styles;
            this.shadowRoot?.appendChild(css);
      
        })
    
    }
}

customElements.define('products-list', ProductsList)
export default ProductsList;