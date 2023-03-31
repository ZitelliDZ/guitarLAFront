import Layout from "../components/Layout"
import Link from "next/link"
import style from '../styles/NoEncontrado.module.css'

const NoEncontrado = () => {
  return (
    <Layout>
        <div className={style.noEncontrado}> 
        <h1 className="heading">
         Pagina No Encontrada
        </h1>
        <Link href='/'>Volver al Inicio</Link>
        </div>
    </Layout>
  )
}

export default NoEncontrado