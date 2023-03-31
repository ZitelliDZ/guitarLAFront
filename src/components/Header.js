import Link from "next/link";
import style from '../styles/Header.module.css';
import Image from 'next/image';
import { useRouter } from "next/router";



const Header = ({guitarra}) => {

    const router = useRouter();

    return (
        <header className={style.header}>
            <div className="contenedor">
                <div className={style.barra}>
                    <Link href='/' legacyBehavior>
                        <a>
                            <Image
                                width={400}
                                height={100}
                                alt='Imagen Logo'
                                src='/img/logo.svg' />
                        </a>
                    </Link>
                    <nav className={style.navegacion}>
                        <Link href='/'>Inicio</Link>
                        <Link href='/nosotros'>Nosotros</Link>
                        <Link href='/blog'>Blog</Link>
                        <Link href='/tienda'>Tienda</Link>
                        <Link legacyBehavior href='/carrito' >
                            <a>
                                <Image layout="fixed" width={30} height={25} src="/img/carrito.png" alt="Imagen carrito" />
                            </a>
                        </Link>
                    </nav>
                </div>

                {guitarra && (
                    <div className={style.modelo}>
                        <h2>Modelo {guitarra.nombre}</h2>
                        <p>{guitarra.descripcion}</p>
                        <p className={style.precio}>${guitarra.precio}</p>
                        <Link legacyBehavior href={`/guitarras/${guitarra.nombre}`} >
                            <a className={style.enlace}> Ver Producto</a>
                        </Link>
                    </div>
                )}
            </div>
            {router.pathname === '/' && (
                <img className={style.guitarra} src="/img/header_guitarra.png" alt="Guitarra Promoción" />
            )}
        </header>
    )
}



export default Header