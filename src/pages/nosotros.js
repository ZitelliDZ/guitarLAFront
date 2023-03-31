import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {

  return (
    <Layout
      pagina='Nosotros'
    >
      <section className='contenedor'>
        <h2 className='heading'>Desde Nosotros</h2>

        <div className={styles.contenido}>
          <Image 
            layout='responsive'
            width={600} 
            height={450} 
            src='/img/nosotros.jpg'
            alt='Imagen sobre Nosotros' 
          />
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae adipisci unde dolor consequuntur facilis. Ut necessitatibus fugiat quam voluptate debitis ad exercitationem? Assumenda inventore praesentium natus repellat rem quod quasi?</p>
          </div>
        </div>

      </section>

    </Layout>

  )
}

export default Nosotros