import { Product } from "./products";

export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  products: Product[];
};

export enum SomeActions {
  "SAVE_PRODUCT" = "SAVE_PRODUCT",
  "GET_PRODUCT" = "GET_PRODUCT",
}

export interface SaveProductAction {
  action: SomeActions.SAVE_PRODUCT;
  payload: Product;
}

export interface GetProductAction {
  action: SomeActions.GET_PRODUCT;
  payload: Product[];
}

export type Actions = SaveProductAction |GetProductAction ;
