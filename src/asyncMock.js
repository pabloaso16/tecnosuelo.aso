const products = [
    { id: '1', name: 'Barreno 1 metro', price: 800, category: 'muestreador', img: '', stock: 16, description: 'Descripcion Barreno 1m' },
    { id: '2', name: 'Barreno 2 metros', price: 1000, category: 'muestreador', img: '', stock: 16, description: 'Descripcion Barreno 2m' },
    { id: '3', name: 'Barreno 3 metros', price: 1200, category: 'muestreador', img: '', stock: 16, description: 'Descripcion Barreno 3m' }
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1500)
    })
}





