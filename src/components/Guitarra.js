import Image from "next/image"
import Link from "next/link"
import style from '../styles/Guitarra.module.css'

const Guitarra = ({guitarra}) => {
    const {nombre,imagen, descripcion,precio,url} = guitarra
    console.log(url)
  return (
    <div className={style.guitarra}>
        <Image layout="responsive" width={180} height={350}
        src={imagen.url} alt={`Imagen guitarra ${nombre}`} />
        <div className={style.contenido}>
            <h3>{nombre}</h3>
            <p className={style.descripcion}>{descripcion}</p>
            <p className={style.precio}>${precio}</p>
            <Link legacyBehavior href={`/guitarras/${url}`}>
                <a className={style.enlace}>
                Ver Producto    
                </a>
            </Link>                
        </div>
    </div>
  )
}

export default Guitarra