// Definición de la clase UserManager
class UserManager {
    // Propiedad privada para almacenar usuarios
    #users = [];
  
    // Método para agregar un usuario al arreglo
    create(data) {
      const user = {
        id: this.#users.length === 0 ? 1 : this.#users[this.#users.length - 1].id + 1,
        name: data.name,
        photo: data.photo,
        email: data.email,
      };
      this.#users.push(user);
    }
  
    // Método para devolver todos los usuarios
    read() {
      return this.#users;
    }
  
    // Método para devolver un usuario según su ID
    readOne(id) {
      return this.#users.find((user) => user.id === Number(id));
    }
  }
  
  // Creación de una instancia de UserManager
  const userManager = new UserManager();
  
  // Construcción del primer usuario
  userManager.create({
    name: "Usuario 1",
    photo: "ruta/imagen1.jpg",
    email: "usuario1@example.com",
  });
  
  // Mostrar todos los usuarios
  console.log(userManager.read());
  
  // Mostrar un usuario específico por su ID
  console.log(userManager.readOne(1));
  