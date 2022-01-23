const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const products = require("../../db.json");

server.use(middlewares);
server.listen(4000, () => {
  console.log("JSON Server is running");
});

server.get("/products", (req, res) => {
  res.json(products);
});

server.delete("/ad/delete/:id", (req, res) => {
  let { id } = req.params;
  let idProduct = req.query.idproduct;

  id = +id;
  idProduct = +idProduct;

  const updatedProducts = [
    ...products.productsList.map((product) =>
      product.id === idProduct
        ? { ...product, ads: [...product.ads.filter((ad) => ad.id !== id)] }
        : product
    ),
  ];

  res.json({ updatedProducts });
});

server.use(router);
