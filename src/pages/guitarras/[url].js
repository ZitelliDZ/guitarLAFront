import { useState } from "react";
import Layout from "../../components/Layout";
import Image from "next/image";
import style from '../../styles/Guitarra.module.css'
const Producto = ({ guitarra,agregarCarrito,carrito }) => {

  const { nombre, imagen, descripcion, precio,id } = guitarra[0]
  const [cantidad, setCantidad ] = useState(1);

  const handleSubmit = e =>{
    e.preventDefault();

    if (cantidad <1) {
      alert('Cantidad no válida');
      return;
    }

    const guitarraSeleccionada = {
      id:id,
      imagen:imagen.url,
      nombre:nombre,
      cantidad,
      precio
    }
    agregarCarrito(guitarraSeleccionada);
  }

  return (
    <Layout pagina={`Guitarra ${nombre}`}>

      <div className={style.guitarra}>
        <Image layout="responsive" width={180} height={350}
          src={imagen.url} alt={`Imagen guitarra ${nombre}`} />
        <div className={style.contenido}>
          <h3>{nombre}</h3>
          <p className={style.descripcion}>{descripcion}</p>
          <p className={style.precio}>${precio}</p>

          <form className={style.formulario} onSubmit={handleSubmit} >
              <label>Cantidad: </label>
              <select value={cantidad} onChange={e => setCantidad(parseInt(e.target.value))}>
                <option value="">-- Seleccione --</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <input type="submit" 
                value='Agregar a Carrito'
              />
          </form>
        </div>
      </div>
    </Layout>


  )
}



export async function getServerSideProps({ query: { url } }) {



  const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}`;
  const respuesta = await fetch(urlGuitarra);
  const guitarra = await respuesta.json();


  return {
    props: {
      guitarra
    }
  }
}


export default Producto