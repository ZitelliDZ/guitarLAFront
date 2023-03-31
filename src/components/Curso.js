import Link from "next/link"
import style from "../styles/Curso.module.css"

const Curso = ({curso}) => {
    const {titulo,contenido,imagen} = curso;
    console.log(curso);

  return (
    <section>
        <div className={`contenedor ${style.grid}`}>
            <div className={style.contenido}> 
                <h2 className="heading">{titulo}</h2>
                <p className={style.texto}>{contenido}</p>
                <Link legacyBehavior href='/'>
                    <a className={style.enlace}> Más Info</a>
                </Link>
            </div>
        </div>


        <style jsx>{`
            section{
                padding: 10rem 0;
                margin-top: 10rem;
                background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)),url(${imagen.url});
                background-size: cover;
                width:100%;
                background-position: 50%;
            }
        `}</style>
    </section>
  )
}

export default Curso