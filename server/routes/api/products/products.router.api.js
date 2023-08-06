import { Router } from 'express'
const routerProducts = Router()
let productsData = {
  page: 1,
  per_page: 10,
  total: 10,
  total_pages: 1,
  results: [
    {
      _id: '63740f5fe2c75d8744f80a32',
      name: 'Camisa Túnica de Popelín de Manga Larga Athletic',
      description:
        'Una prenda básica en el armario, esta camisa clásica de manga larga proporciona un aspecto fácil perfecto para cualquier ocasión ',
      price: 19.95,
      category: 'mujer',
      image: 'http://peticiones.online/images/products/image07.png',
      active: true,
    },
    {
      _id: '63740f5fe2c75d8744f80a2f',
      name: 'Chaqueta Cortavientos Plegable Mujer',
      description:
        'Esta chaqueta impermeable es totalmente plegable y cuenta con un bolsillo frontal tipo canguro, encuadernación en el dobladillo y las mangas, y un cordón elástico ajustable en el dobladillo inferior para mantener fuera los elementos.',
      price: 27.73,
      category: 'mujer',
      image: 'http://peticiones.online/images/products/image04.png',
      active: true,
    },
    {
      _id: '63740f5fe2c75d8744f80a34',
      name: 'Camisetas Henley de Manga Corta',
      description:
        'Esta elegante y cómoda camiseta mantendrá el ritmo de las actividades cotidianas y toda la diversión.',
      price: 18.99,
      category: 'niño',
      image: 'http://peticiones.online/images/products/image09.png',
      active: false,
    },
    {
      _id: '63740f5fe2c75d8744f80a36',
      name: 'Pantalón chino',
      description:
        'Un poco de elástico añade comodidad y flexibilidad a estos clásicos pantalones sueltos caqui.',
      price: 22.98,
      category: 'hombre',
      image: 'http://peticiones.online/images/products/image11.png',
      active: true,
    },
    {
      _id: '63740f5fe2c75d8744f80a3a',
      name: 'Polo de Rendimiento Activo',
      description:
        'Tejido elástico, transpirable, que absorbe la humedad y liviano para actividades deportivas ',
      price: 33.98,
      category: 'niño',
      image: 'http://peticiones.online/images/products/image15.png',
      active: true,
    },
    {
      _id: '63740f5fe2c75d8744f80a30',
      name: 'Sudadera Hombre',
      description:
        'Esta sudadera con grapas de armario cuenta con una cremallera frontal con bolsillo dividido y puños y dobladillo acanalados con sellado cálido.',
      price: 27.5,
      category: 'hombre',
      image: 'http://peticiones.online/images/products/image05.png',
      active: true,
    },
    {
      _id: '63740f5fe2c75d8744f80a33',
      name: 'Hombre Camisa de franela a cuadros de manga larga',
      description:
        'Mismo corte, nuevo nombre: Hemos cambiado el nombre de este estilo de camisa a «Regular Fit» pero las medidas son las mismas',
      price: 19.4,
      category: 'hombre',
      image: 'http://peticiones.online/images/products/image08.png',
      active: true,
    },
    {
      _id: '63740f5fe2c75d8744f80a35',
      name: 'Camisetas de Manga Corta Niños, Pack de 5',
      description: 'Tejido de punto ligero, cómodo y suave.',
      price: 13.9,
      category: 'niño',
      image: 'http://peticiones.online/images/products/image10.png',
      active: true,
    },
    {
      _id: '63740f5fe2c75d8744f80a39',
      name: 'Pantalón de Pierna Ancha con cordón de Mezcla de Lino',
      description:
        'Este pantalón moderno cuenta con un tejido favorecedor de la figura para un uso diario versátil',
      price: 16.6,
      category: 'mujer',
      image: 'http://peticiones.online/images/products/image14.png',
      active: true,
    },
    {
      _id: '63740f5fe2c75d8744f80a3b',
      name: 'Camiseta sin Mangas',
      description: 'Tejido de punto ligero, cómodo y suave.',
      price: 22.1,
      category: 'niño',
      image: 'http://peticiones.online/images/products/image16.png',
      active: true,
    },
  ],
}

const getProducts = (req, res) => {
  try {
    return res.status(200).json(productsData)
  } catch (error) {
    console.error('Error in getProducts:', error)
    return res.status(500).json({
      success: false,
      message: 'An error occurred on the server.',
    })
  }
}

routerProducts.get('/', getProducts)

export default routerProducts
