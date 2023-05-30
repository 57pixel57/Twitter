import { dispatch } from "../../store";
import { saveProduct } from "../../store/action";
import { Product } from "../../types/products";
import styles from "./Form.css"

 const userInput: Product ={
    name:"",
    price: "0",
 }
 
 class Form extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const lName = this.ownerDocument.createElement("label")
        lName.textContent ="Name";
        const name = this.ownerDocument.createElement('input');
        name.addEventListener("change",(s: any)=>{
            console.log (s.target.value);
            userInput.name = s.target.value;
        }) 
        const lPrice = this.ownerDocument.createElement("label")
        lName.textContent ="Name";
        const price = this.ownerDocument.createElement('input');
        lPrice.textContent ="Last name"
        // price.type = "number";
        price.addEventListener("change",(s: any)=>{
            userInput.price = s.target.value;
        }) 
        const btn = this.ownerDocument.createElement('button');
        btn.textContent = "Save"
        btn.addEventListener("click", async () => {
            console.log(userInput)
            dispatch(await saveProduct(userInput))
        });


        this.shadowRoot?.appendChild(lName);
        this.shadowRoot?.appendChild(name);
        this.shadowRoot?.appendChild(lPrice);
        this.shadowRoot?.appendChild(price);
        this.shadowRoot?.appendChild(btn);

        const css = this.ownerDocument.createElement("style");
            css.innerHTML = styles;
            this.shadowRoot?.appendChild(css);
    }
}

customElements.define('app-form', Form)

export default Form;