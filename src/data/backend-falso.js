const base_de_datos = [
    {
        nombre: "Remera Zimith",
        talle: "XL",
        precio: 10000,
        img:"https://etreo.com.ar/wp-content/uploads/2023/10/rave-1-1.png",
    },
    {
        nombre: "Short CaptainFin",
        talle: "L",
        precio: 12000,
        img:"https://outertribe.net/cdn/shop/products/DSC00068_2048x.jpg?v=1575448638",
    },
    {
        nombre: "Campera Commnty",
        talle: "S",
        precio: 11000,
        img:"https://acdn.mitiendanube.com/stores/099/188/products/mmp_52971-bbab5cd7bb763a5f7316835634450310-1024-1024.webp",
    },
    {
        nombre: "Puluiso Zimith",
        talle: "XXL",
        precio: 9000,
        img:"https://acdn.mitiendanube.com/stores/001/245/791/products/d9a7a6ac-0fdf-4305-a9e3-f59684f38c28-0542f6f328883b190f17276277554224-1024-1024.webp",
    }
]

export const getProducts = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(base_de_datos);
            reject("error")
        },3000)
    });
}

export const getProductsByTalle = (talle) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(base_de_datos.filter(e => e.talle === talle));
            reject("error")
        },3000)
    });
}