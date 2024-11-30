export const products = [
    {
        id: 1,
        name: 'Sugar Cookies Bee',
        category: 'galletas de azucar',
        price:'2000',
        description: 'Suaves galletas de azucar con estampados de abejas',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsTEpPQqJEDCjiM0UvEFQB59rK7yLVd3iZHw&s',
        stock: 5,

    },
    {
        id: 2,
        name: 'Galletas de azucar y cacao',
        category: 'galletas de azucar',
        price: '1000',
        description: 'La clasica galleta de azucar ahora en version cacao',
        img: 'https://www.potterscookshop.co.uk/cdn/shop/files/01245-Nordic-Ware-Set-Of-3-Aluminium-Cookie-Stamps-Geo-Lifestyle-2_800x.jpg?v=1715674757',
        stock: 3,
    },
    {
        id: 3,
        name: 'Galletas de chocolate',
        price: '1000',
        category: 'galletas de chocolate',
        description: 'La clasica galleta de azucar ahora en version cacao',
        img: 'https://i.pinimg.com/736x/5a/d0/cf/5ad0cfea874a1d3c41b9d1f8e8db688e.jpg',
        stock: 3,
    },
    {
        id: 4,
        name: 'Galletas clasicas',
        price: '1000',
        category: 'galletas clasicas',
        description: 'La clasica galleta de azucar ahora en version cacao',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZlcoyh5jyQ7-3uW6gyUFZuPUGRhmHIU0xkQ&s',
        stock: 3,
    },
    {
        id: 5,
        name: 'Galletas clasicas',
        category: 'galletas clasicas',
        price: '1000',
        description: 'La clasica galleta de azucar ahora en version cacao',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZlcoyh5jyQ7-3uW6gyUFZuPUGRhmHIU0xkQ&s',
        stock: 3,


    }

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