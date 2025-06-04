//import { application } from "express";

const url = "https://apiropashop.onrender.com/api/productos"
const urlventas = "https://apiropashop.onrender.com/api/ventas"
const urlusuarios = "https://apiropashop.onrender.com/api/usuarios"


export const obtainProductos = async()=>{
    try {
        const resultado= await fetch(url);//then
        const productos = await resultado.json();
        return productos
    } catch (error) {
        console.error("Error");
    }
}
export const obtainVentas = async()=>{
    try {
        const resultadoventas= await fetch(urlventas);//then
        const ventas = await resultadoventas.json();
        return ventas
    } catch (error) {
        console.error("Error");
    }
}


export const obtainUsuarios = async()=>{
    try {
        const resultaUsuarios= await fetch(urlusuarios);//then
        const usuarios = await resultaUsuarios.json();
        return usuarios
    } catch (error) {
        console.error("Error");
    }
}
//usuarios
export const insertarUsuario = async (nuevoUsuario) => {
    try {
        const respuesta = await fetch("https://apiropashop.onrender.com/api/usuarios", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(nuevoUsuario)
        });

        const resultado = await respuesta.json();
        return resultado;
    } catch (error) {
        console.error("Error al insertar usuario", error);
    }
};


export const actualizarUsuarios = async (usuarioActualizado) => {
    try {
        const respuesta = await fetch(`https://apiropashop.onrender.com/api/usuarios/${usuarioActualizado.u_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuarioActualizado)
        });

        const resultado = await respuesta.json();
        return resultado;
    } catch (error) {
        console.error("Error al actualizar usuario:", error);
    }
};
export const eliminarUsuarios = async (idusuario) => {
    try {
        const respuesta = await fetch(`https://apiropashop.onrender.com/api/usuarios/${idusuario}`, {
            method: "DELETE"
        });

        const resultado = await respuesta.json();
        return resultado;
    } catch (error) {
        console.error("Error al eliminar proveedor:", error);
    }
};





//ventas
export const insertarVentas = async (nuevoVenta) => {
    try {
        const respuesta = await fetch("https://apiropashop.onrender.com/api/ventas", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(nuevoVenta)
        });

        const resultado = await respuesta.json();
        return resultado;
    } catch (error) {
        console.error("Error al insertar Venta", error);
    }
};

export const actualizarVentas = async (ventaActualizada) => {
    try {
        const respuesta = await fetch(`https://apiropashop.onrender.com/api/ventas/${ventaActualizada.v_id_venta}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ventaActualizada)
        });

        const resultado = await respuesta.json();
        return resultado;
    } catch (error) {
        console.error("Error al actualizar Venta:", error);
    }
};
export const eliminarVentas = async (idVenta) => {
    try {
        const respuesta = await fetch(`https://apiropashop.onrender.com/api/ventas/${idVenta}`, {
            method: "DELETE"
        });

        const resultado = await respuesta.json();
        return resultado;
    } catch (error) {
        console.error("Error al eliminar venta:", error);
    }
};

//productos

export const insertarProducto = async (nuevoProducto) => {
    try {
        const respuesta = await fetch("https://apiropashop.onrender.com/api/productos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(nuevoProducto)
        });

        const resultado = await respuesta.json();
        return resultado;
    } catch (error) {
        console.error("Error al insertar Producto", error);
    }
};

export const actualizarProductos = async (productoActualizado) => {
    try {
        const respuesta = await fetch(`https://apiropashop.onrender.com/api/productos/${productoActualizado.p_id_producto}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productoActualizado)
        });

        const resultado = await respuesta.json();
        return resultado;
    } catch (error) {
        console.error("Error al actualizar prodcucto:", error);
    }
};
export const eliminarProductos = async (idProducto) => {
    try {
        const respuesta = await fetch(`https://apiropashop.onrender.com/api/productos/${idProducto}`, {
            method: "DELETE"
        });

        const resultado = await respuesta.json();
        return resultado;
    } catch (error) {
        console.error("Error al eliminar producto:", error);
    }
};






