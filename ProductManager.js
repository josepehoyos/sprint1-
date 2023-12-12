// Definición de la clase ProductManager
class ProductManager {
    // Propiedad privada para almacenar productos
    #products = [];
  
    // Método para agregar un producto al arreglo
    create(data) {
      const product = {
        id: this.#products.length === 0 ? 1 : this.#products[this.#products.length - 1].id + 1,
        title: data.title,
        photo: data.photo,
        price: data.price,
        stock: data.stock,
      };
      this.#products.push(product);
    }
  
    // Método para devolver todos los productos
    read() {
      return this.#products;
    }
  
    // Método para devolver un producto según su ID
    readOne(id) {
      return this.#products.find((product) => product.id === Number(id));
    }
  }
  
  // Creación de una instancia de ProductManager
  const productManager = new ProductManager();
  
  // Construcción del primer producto
  productManager.create({
    title: "Producto 1",
    photo: "ruta/imagen1.jpg",
    price: 20.99,
    stock: 50,
  });
  
  // Mostrar todos los productos
  console.log(productManager.read());
  
  // Mostrar un producto específico por su ID
  console.log(productManager.readOne(1));
  