
// GET products already exists in DB
function getShop(req, res) {
  res.render("shop", {
    path: "/",
    pageTitle: "Shop",
  });
}

// GET Add product form
function addProduct(req, res) {
  res.render("addProduct", {
    path: "/add-product",
    pageTitle: "Add Product",
  });
}

// GET Products from DB
function getProducts(req, res) {
  res.render('products', {
    path: '/products',
    pageTitle: 'Products'
  })
}

// GET Cart products
function getCart(req, res) {
  res.render('cart', {
    path: '/cart',
    pageTitle: 'Cart'
  })
}

// GET Order products
function getOrders(req, res) {
  res.render('orders', {
    path: '/orders',
    pageTitle: 'Orders'
  })
}

module.exports = { getShop, addProduct, getProducts, getCart, getOrders };
