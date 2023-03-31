import Image from "next/image";
import { formatearFecha } from "../helpers";
import Link from "next/link";
import style from '../styles/Entrada.module.css'

const Entrada = ({entrada}) => {
    const {titulo,Resumen,imagen,published_at, id,url} = entrada;

    return(
        <article>
            <Image 
                priority='true'
                  src={imagen.url}
                  alt={`imagen blog ${titulo}`}
                  width={800}
                  height={600}
                  layout='responsive'
                        />
            <div className={style.contenido}>
                <h3>{titulo}</h3>
                <p className={style.fecha}>{formatearFecha(published_at)}</p>
                <p className={style.resumen}>{Resumen}</p>
                <Link legacyBehavior href={`/blog/${url}`}>
                    <a id="link" className={style.enlace}>Leer Entrada </a>
                </Link>
            </div>

        </article>
    )
}

export default Entrada