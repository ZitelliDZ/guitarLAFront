import Layout from '../components/Layout'
import ListadoBlog from '../components/ListadoBlog';
const Blog = ({entradas}) => {
  
  
  return (
    <Layout 
      pagina='Blog'
    >
      <section className='contenedor'>
        
      <ListadoBlog
        entradas={entradas}
      />
      </section>
        
    </Layout>
    
  )
}
/*
export async function getServerSideProps() {
*/
export async function getStaticProps(){
  const url = `${process.env.API_URL}/blogs?_sort=createdAt:desc`;
  const respuesta = await fetch(url);
  const entradas = await respuesta.json();
  

  return{
    props:{
      entradas
    }
  }
}

export default Blog