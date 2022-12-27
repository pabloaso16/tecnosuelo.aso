import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='Navbar' style={{ display: 'flex'}}>
            <h1 className=''>Tecnosuelo</h1>
            <div style={{ display: 'flex'}}>
                <button>Productos y Servicios</button>
                <button>Sobre nosotros</button>
                <button>Contacto</button>
            </div>
        </nav>
    )
}

export default Navbar