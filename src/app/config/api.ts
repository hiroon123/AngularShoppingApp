import { environment } from "src/environments/environment";

export const apiUrl = environment.production ? 'http://api.shopsy.com/' : 'http://localhost:3000'
export const productsUrl = apiUrl + '/products'
export const cartItemsUrl = apiUrl + '/cartItems'