import { d as defineStore, a as axiosServices } from './server.mjs';
import { sum, filter, map } from 'lodash';

const useEcomStore = defineStore({
  id: "eCommerceone",
  state: () => ({
    products: [],
    cart: [],
    gender: "",
    category: [],
    price: "",
    subTotal: 0,
    discount: 5,
    total: 0,
    addresses: [],
    color: "All"
  }),
  getters: {},
  actions: {
    // Fetch Customers from action
    async fetchProducts() {
      try {
        const data = await axiosServices.get("/api/products/one");
        this.products = data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    // Fetch Customers from addresses
    async fetchAddress() {
      try {
        const data = await axiosServices.get("/api/address/list");
        this.addresses = data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    //select gender
    SelectGender(items) {
      this.gender = items;
    },
    sortByColor(itemcolor) {
      this.color = itemcolor;
    },
    //select category
    SelectCategory(items) {
      this.category = items;
    },
    //select Price
    SelectPrice(items) {
      this.price = items;
    },
    //AddToCart
    AddToCart(item) {
      const product = item;
      this.cart = [...this.cart, product];
    },
    //qty
    incrementQty(item) {
      const productId = item;
      const updateCart = map(this.cart, (product) => {
        if (product.id === productId) {
          return {
            ...product,
            qty: product.qty + 1
          };
        }
        return product;
      });
      this.cart = updateCart;
      this.subTotal = sum(this.cart.map((product) => product.salePrice * product.qty));
      this.discount = Math.round(this.subTotal * (5 / 100));
      this.total = this.subTotal - this.discount;
    },
    //qty
    decrementQty(item) {
      const productId = item;
      const updateCart = map(this.cart, (product) => {
        if (product.id === productId) {
          return {
            ...product,
            qty: product.qty - 1
          };
        }
        return product;
      });
      this.cart = updateCart;
      this.subTotal = sum(this.cart.map((product) => product.salePrice * product.qty));
      this.subTotal = sum(this.cart.map((product) => product.salePrice * product.qty));
      this.discount = Math.round(this.subTotal * (5 / 100));
      this.total = this.subTotal - this.discount;
    },
    // delete Cart
    deleteCart(item) {
      const updateCart = filter(this.cart, (p) => p.id !== item);
      this.cart = updateCart;
    },
    //subtotal
    getsubTotal() {
      this.subTotal = sum(this.cart.map((product) => product.salePrice * product.qty));
    },
    //total
    getTotal() {
      this.total = this.subTotal - this.discount;
    },
    //discount
    getDiscount() {
      this.discount = Math.round(this.subTotal * (5 / 100));
    },
    //Reset Filter
    filterReset() {
    }
  }
});

export { useEcomStore as u };
//# sourceMappingURL=eCommerce-D0OnZgt2.mjs.map
