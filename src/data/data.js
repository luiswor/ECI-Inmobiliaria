export const general = {
  sitename: 'Ebusa Consultora Inmobiliaria',
  separator: ' | ',
  domain: 'ebusa.es',
  description: ''
}
export const menu = [
  {
    title: 'Home',
    slug: 'home',
    link: '/',
    alt: ''
  },
  {
    title: 'Inmuebles',
    slug: 'inmuebles',
    link: '#',
    alt: '',
    submenu: [
      {
        title: 'Comprar Inmueble',
        slug: 'inmuebles',
        link: '/inmuebles',
        alt: ''
      },
      {
        title: 'Vender Inmueble',
        slug: 'vender',
        link: '/vender',
        alt: ''
      }
    ]
  },
  {
    title: 'Empresa',
    slug: 'nosotros',
    link: '/nosotros',
    alt: '',
    submenu: [
      {
        title: 'Nosotros',
        slug: 'nosotros',
        link: '#nosotros',
        alt: ''
      },
      {
        title: 'Únete al equipo',
        slug: 'unete',
        link: '#unete',
        alt: ''
      }
    ]
  },
  {
    title: 'Oficinas',
    slug: 'inmuebles',
    link: '/oficina',
    alt: ''
  },

  {
    title: 'Blog',
    slug: 'blog',
    link: '/blog',
    alt: ''
  },
  {
    title: 'Contacto',
    slug: 'contacto',
    link: '/contacto',
    alt: ''
  }
]

export const oferta = [
  {
    title: 'Asesoramiento Personalizado',
    text: 'Expertos dedicados a comprender tus necesidades inmobiliarias.'
  },
  {
    title: 'Publicidad Estratégica',
    text: 'Maximizamos la visibilidad de tu inmueble en el mercado.'
  },
  {
    title: 'Gestión Íntegra',
    text: 'Desde la valoración hasta la firma, te acompañamos en cada paso.'
  },
  {
    title: 'Financiamiento',
    text: 'Conectamos a compradores con las mejores opciones bancarias.'
  },
  {
    title: 'Legalidad Garantizada',
    text: 'Asesoría legal para una compra-venta segura y sin sorpresas.'
  },
  {
    title: 'Diseño y Home Staging',
    text: 'Potenciamos el atractivo de tu propiedad para su rápida venta.'
  }
]
