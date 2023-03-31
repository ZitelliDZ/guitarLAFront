
//import styles from '@/styles/Home.module.css'

import Layout from '../components/Layout'
import Listado from '../components/Listado'
import Curso from '../components/Curso';
import ListadoBlog from '../components/ListadoBlog';
import style from '../styles/Blog.module.css'



export default function Home({ guitarras, curso, entradas }) {

  

  return (

    <Layout
      pagina='Inicio'
      guitarra={guitarras[3]}
    >
      <main className='contenedor'>
        <h1 className='heading'>Nuestra Coleccion</h1>
        <Listado guitarras={guitarras} />


      </main>

      <Curso
        curso={curso}
      />
      <section className='contenedor'>
      <ListadoBlog
        entradas={entradas}
      />
      </section>

    </Layout>


  )
}

export async function getServerSideProps() {


  const urlGuitarras = `${process.env.API_URL}/guitarras?_sort=precio:desc`;
  const urlCurso = `${process.env.API_URL}/curso`;
  const urlBlog = `${process.env.API_URL}/blogs?_limit=3&_sort=createdAt:desc`;


  const [resGuitarras, resCurso, resBlog] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCurso),
    fetch(urlBlog)
  ])

  const [guitarras, curso, entradas] = await Promise.all([
    resGuitarras.json(),
    resCurso.json(),
    resBlog.json()
  ])

  return {
    props: {
      guitarras,
      curso,
      entradas
    }
  }

}