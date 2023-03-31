import Layout from '../components/Layout'
import Listado from '../components/Listado';

const Tienda = ({guitarras}) => {


  return (
    <Layout 
      pagina='Tienda'
    >
      <section className='contenedor'>
        <h1 className='heading'>Nuestra Colección Virtual</h1>
        
        <Listado guitarras={guitarras} /> 

      </section>
    </Layout>
    
  )
}

export async function getServerSideProps() {
  //const url = `${process.env.API_URL}/guitarras?_sort=created_at:desc`;
  const url = `${process.env.API_URL}/guitarras?_sort=precio:desc`;

  const respuesta = await fetch(url);
  const guitarras = await respuesta.json();

  
  return{
    props:{
      guitarras
    }
  }

}

export default Tienda