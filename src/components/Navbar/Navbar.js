import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
            <h1>Tecnosuelo</h1>
            <div style={{ display: 'flex', justifyContent: 'space-around', width: '75%'}}>
                <button>Productos y servicios</button>
                <button>Sobre nosotros</button>
                <button>Contacto</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar