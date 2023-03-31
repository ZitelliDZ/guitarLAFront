
import { useState,useEffect } from "react"
import '../styles/normalize.css'
import '../styles/globals.css'


export default function App({ Component, pageProps }) {
  
  const [carrito,setCarrito] = useState([]);

  const actualizarCantidad = producto => {
    const carritoActualizdo = carrito.map( articulo =>{
      if (articulo.id === producto.id) {
        articulo.cantidad =  producto.cantidad;
      }
      return articulo;
    });
    setCarrito (carritoActualizdo)
  }

  const eliminarProducto = (id) =>{
    const carritoActualizado = carrito.filter (articulo => articulo.id !== id)
    setCarrito(carritoActualizado)
  };

  useEffect(() => {
    const carritoLS = JSON.parse( localStorage.getItem('carrito')) ?? [] ;
    setCarrito(carritoLS);
  }, [])

  useEffect(() => {
    localStorage.setItem('carrito',JSON.stringify(carrito));
  
  }, [carrito])
  

  const agregarCarrito = producto => {

    if (carrito.some(articulo => articulo.id === producto.id)) {
      const carritoActualizdo = carrito.map( articulo =>{
        if (articulo.id === producto.id) {
          articulo.cantidad =  producto.cantidad;
        }
        return articulo;
      })
      setCarrito(carritoActualizdo)

    }else{
      setCarrito([...carrito,producto])
    }

  }


  return <Component {...pageProps} carrito={carrito} 
  actualizarCantidad={actualizarCantidad} 
  agregarCarrito={agregarCarrito} 
  eliminarProducto={eliminarProducto}
  />
}

