export const products = [
    {
        id: 1,
        name: 'Sugar Cookies Bee',
        category: 'galletas de azucar',
        price:'2000',
        description: 'Suaves galletas de azucar con estampados de abejas',
        img: '/bee.jpg',
        stock: 5,

    },
    {
        id: 2,
        name: 'Galletas de azucar y cacao',
        category: 'galletas de azucar',
        price: '1000',
        description: 'La clasica galleta de azucar ahora en version cacao',
        img: '/stampschocolate.jpg',
        stock: 3,
    },
    {
        id: 3,
        name: 'Galletas de chocolate',
        price: '1000',
        category: 'galletas de chocolate',
        description: 'La clasica galleta de azucar ahora en version cacao',
        img: '/doble-chocolate.jpg',
        stock: 3,
    },
    {
        id: 4,
        name: 'Galletas clasicas',
        price: '1000',
        category: 'galletas clasicas',
        description: 'La clasica galleta de azucar ahora en version cacao',
        img: '/galletaclasica4.jpg',
        stock: 3,
    },


];

export const getProducts = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(products);
        }, 2000);
    });
};
export const getProductById = (id) => {
    return new Promise((res) => {
        const productoFiltrado = products.find((product) => product.id === parseInt(id));
        setTimeout(() => {
            res(productoFiltrado);
        }, 2000);
    });
};

export const getProductByCategory = (category) => {
    return new Promise((res) => {
        const productosFiltrados = products.filter((product) => product.category === category);
        setTimeout(() => {
            res(productosFiltrados);
        }, 2000);
    });
};