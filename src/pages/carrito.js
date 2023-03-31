import Layout from "../components/Layout"
import style from '../styles/Carrito.module.css'
import Image from "next/image"
import { useState,useEffect } from "react"

const Carrito = ({carrito,actualizarCantidad,eliminarProducto}) => {
    const [total,setTotal]=useState(0)

    useEffect(() => {
      const calculoTotal = carrito.reduce((total,producto)=>total + producto.cantidad*producto.precio,0)
        setTotal(calculoTotal)
    }, [carrito])
    

  return (
    <Layout pagina={"Carrito de Compras"}>

        <h1 className="heading">Carrito</h1>
        <section className={` ${style.contenido} contenedor`}>
            <div className={style.carrito}>
                <h2>Articulos</h2>
                {carrito.length === 0 ? 'Carrito vacio' : (
                    carrito.map(producto =>(
                        <div key={producto.id} className={style.producto}>
                            <div>
                                <Image layout="responsive" width={250} height={480} src={producto.imagen} alt={producto.nombre} />

                            </div>
                            <div>
                                <p className={style.nombre}>{producto.nombre}</p>
                                <div className={style.cantidad}>
                                <p >Cantidad: </p>
                                <select value={producto.cantidad} className={style.select} onChange={e => actualizarCantidad({
                                    cantidad:e.target.value,
                                    id:producto.id
                                })}>
                                    <option value="">-- Seleccione --</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                                </div>
                                <p className={style.precio}>$ <span>{producto.precio}</span></p>
                                <p className={style.subtotal}>Subtotal: $ <span>{producto.precio * producto.cantidad}</span></p>
                            </div>
                            <button type="button" onClick={()=>(eliminarProducto(producto.id))} className={style.eliminar}>X</button>
                        </div>
                    ))
                )}
            </div>
            <div className={style.resumen}>
                <h3>Resumen del Pedido</h3>
                {total > 0 ? (
                    <>
                        <p>Resumen del pedido</p>
                        <p>Total a Pagar: $ {total}</p>
                    </>
                ) : (<p>No hay productos en el carrito</p>)}
            </div>
        </section>

    </Layout>
  )
}

export default Carrito