import Reflux from "reflux";
import ProductsActions from "../actions/ProductsActions";

// let ProductsStore = Reflux.createStore({
//   listenables: [ProductsActions],
//   getProductsAction: function () {
//     const productsList = fetch("/api/users")
//       .then((res) => res.json())
//       .then((json) => json);

//     return productsList;
//   },
// });

var updateAge = Reflux.createAction();

var ageStore = Reflux.createStore({
  init() {
    this.listenTo(updateAge, this.onUpdateAge);
  },

  onUpdateAge(data) {
    console.log(data);
  },
});

updateAge({ age: 50 });
