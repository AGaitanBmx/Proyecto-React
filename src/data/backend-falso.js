const base_de_datos = [
    {
        id:1,
        nombre: "Remera Zimith",
        talle: "XL",
        precio: 10000,
        descripcion:"Remera oversize estampada, disponible en varios colores(negro, azul, blanco y girs)",
        img:"https://etreo.com.ar/wp-content/uploads/2023/10/rave-1-1.png",
    },
    {
        id:2,
        nombre: "Short CaptainFin",
        talle: "L",
        precio: 12000,
        descripcion:"Short de gabardina disponible en varios colores(negro, azul, beige y gris)",
        img:"https://outertribe.net/cdn/shop/products/DSC00068_2048x.jpg?v=1575448638",
    },
    {
        id:3,
        nombre: "Campera Commnty",
        talle: "S",
        precio: 11000,
        descripcion: "Campera de algodon disponible en varios colores (rojo, negro, verde y azul)",
        img:"https://acdn.mitiendanube.com/stores/099/188/products/mmp_52971-bbab5cd7bb763a5f7316835634450310-1024-1024.webp",
    },
    {
        id:4,
        nombre: "Puluiso Zimith",
        talle: "XXL",
        precio: 9000,
        descripcion:"piluso zimith ideal para esos dias de calor",
        img:"https://acdn.mitiendanube.com/stores/001/245/791/products/d9a7a6ac-0fdf-4305-a9e3-f59684f38c28-0542f6f328883b190f17276277554224-1024-1024.webp",
    },
    {
        id:5,
        nombre: "Buzo Tussy",
        talle: "M",
        precio: 15000,
        descripcion:"buzo oversize con muchos estampados para los fanaticos de los diseños, solo en Negro,",
        img:"https://acdn.mitiendanube.com/stores/004/690/284/products/buzo-86a-308f2e455f34b8bc9d17156614938198-480-0.webp",
    }
]

export const getProducts = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(base_de_datos);
            reject("error")
        },2000)
    });
}

export const getProductsByTalle = (talle) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(base_de_datos.filter(e => e.talle === talle));
            reject("error")
        },2000)
    });
}