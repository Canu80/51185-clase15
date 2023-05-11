import cartsModel from "./models/carts.models.js"

export default class CartsManagerMongo {
  
  // Recibo todos los carritos
  getCarts = async () => {
    const cart = await cartsModel.find();
    return cart;
  };

  // Recibo el carrito en base a su ID
  getCartByID = async (cid) => {
    const cart = await cartsModel.findOne({_id:cid});
    
    if(!cart){
      return {
        code: 400,
        status: "Error",
        message: "No se ha encontrado un carrito con ese número de ID"
      };
    };
    return {
      code: 202,
      status: "Success",
      message: cart
    };
    
  };

  // Creamos un nuevo carrito
  addCart = async () => {
    const result = await cartsModel.create({});
    return {
      code: 202,
      status: "Success",
      message: result
    };
  };

  // Agregamos productos al carrito
  addProductsInCart = async (cid, pid) => {
    
    const cart = await cartsModel.findOne({_id:cid})
    const indexProduct = cart.products.findIndex((cartP) => cartP._id == cid);
    
    if (indexProduct === -1) {
      const product = {
        _id: pid,
        quantity: 1
      }
      cart.products.push(product)
    }
    else{
      let total = cart.products[indexProduct].quantity;
      cart.products[indexProduct].quantity = total + 1;
    }

    const result = await cartsModel.updateOne({_id:cid},{$set:cart})

    return {
      code: 202,
      status: "Success",
      message: cart.products
    };
  };
}
