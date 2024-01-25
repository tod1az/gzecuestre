import { NextResponse } from 'next/server'
import prisma from '@/db/db'

// export async function POST() {
//   for (const a of disciplinasEcuestres) {
//     await prisma.disciplina.create({
//       data: {
//         nombre: a
//       }
//     })
//   }
//   return NextResponse.json('done')
// }

const razasDeCaballos = [
  { id: 1, nombre: 'Pura Sangre' },
  { id: 2, nombre: 'Árabe' },
  { id: 3, nombre: 'Appaloosa' },
  { id: 4, nombre: 'Trotón Francés' },
  { id: 5, nombre: 'Clydesdale' },
  { id: 6, nombre: 'Shire' }
]

const Provinces = [
  {
    id: 'd1347f3a-0c1a-4cf7-b88f-53f0f15f6db1',
    name: 'Buenos Aires'
  },
  {
    id: 'c7e6a3c1-d40d-485e-8a09-92e2a1976cc2',
    name: 'Catamarca'
  },
  {
    id: '64f1b2d1-96b3-4e17-8cf1-ced0ab9065ae',
    name: 'Chaco'
  },
  {
    id: '0ef7f8d1-4188-4edc-bb0c-cb9e703d5aae',
    name: 'Chubut'
  },
  {
    id: '9cda0a45-02c5-4292-92d7-e4e46b7b9d1c',
    name: 'Córdoba'
  },
  {
    id: '01b7a005-0f79-40f2-8721-234ac2985761',
    name: 'Corrientes'
  },
  {
    id: '51045384-62c4-4d8d-b7ac-0aa1b1391dfb',
    name: 'Entre Ríos'
  },
  {
    id: 'e897d8e5-9908-4b11-991d-0df4cc0d02c3',
    name: 'Formosa'
  },
  {
    id: '5b6b3fbf-7a1d-4be5-9b77-640dc5715b72',
    name: 'Jujuy'
  },
  {
    id: 'c1c453c0-e5b8-4da0-8e52-9abdb8f03be5',
    name: 'La Pampa'
  },
  {
    id: 'b2fe4e35-8f8c-427b-99ab-764ed700db95',
    name: 'La Rioja'
  },
  {
    id: '0f90b14e-dc60-4c9a-b12b-cdc2c3704c79',
    name: 'Mendoza'
  },
  {
    id: 'e6ef22ea-6ff9-4a3c-8d0d-1b6e5e1e8a9e',
    name: 'Misiones'
  },
  {
    id: 'f399cf3a-0c88-4ad0-99c0-72bd620729e8',
    name: 'Neuquén'
  },
  {
    id: 'ff428f88-55ab-4d3c-bb09-243abbb4741b',
    name: 'Río Negro'
  },
  {
    id: 'cf2ef0fe-0b59-4b63-8097-500b78c8b8a7',
    name: 'Salta'
  },
  {
    id: 'a7726c48-e2a1-4e21-b8a5-1c5d0d5832b0',
    name: 'San Juan'
  },
  {
    id: '1a2d8789-2b06-41d1-93f4-cc65aa773345',
    name: 'San Luis'
  },
  {
    id: 'a515ec35-3634-4e6b-b6cd-d11e27a12d9b',
    name: 'Santa Cruz'
  },
  {
    id: '34d0e2a7-bb3f-4ff7-9bc1-b6a321b9c843',
    name: 'Santa Fe'
  },
  {
    id: 'f01d33d5-b6ef-4e9a-94c0-6c95c98b6f4a',
    name: 'Santiago del Estero'
  },
  {
    id: 'be16e8e8-3ea3-4e44-8ed3-848c53e75899',
    name: 'Tierra del Fuego'
  },
  {
    id: '7c8f66b9-8231-4d1e-80da-964bf2c56b61',
    name: 'Tucumán'
  },
  {
    id: '7e038685-4c8b-4f76-a1d2-0e9f66f76c91',
    name: 'C.A.B.A'
  }
]

const disciplinasEcuestres = ['Salto Ecuestre', 'Doma Clásica', 'C.C.E', 'Polo', 'Enduro Ecuestre']
// for (let i = 0; i < horsesPart1.length; i++) {
//   const caballo = horsesPart1[i]
//   await prisma.caballo.create({
//     data: {
//       nombre: caballo.name,
//       nombre_contacto: nombres[i],
//       fecha_de_nacimiento: caballo.birthdate,
//       sex: caballo.sex,
//       descripcion: caballo.description,
//       email: caballo.email,
//       numero: caballo.number,
//       alzada: caballo.alzada,
//       salto: caballo.salto,
//       precio: caballo.price
//     }
//   })
// }
const horsesPart1 = [
  {
    id: 'rp5',
    name: 'Relámpago',
    breed: 'Pura Sangre',
    birthdate: new Date(2017, 3, 15),
    sex: 'Macho',
    description: 'A majestic Pura Sangre horse named Relámpago, 5 years old and male.',
    email: 'relampago@example.com',
    number: '+1234567890',
    price: 5000,
    videos: ['1Kb7q8aFsGY', 'PXPD8fPQR3Y', 'fGmqygnf9EQ'],
    provincia: 'Buenos Aires',
    alzada: 175,
    salto: 130
  },
  {
    id: 'ea7',
    name: 'Esmeralda',
    breed: 'Árabe',
    birthdate: new Date(2015, 8, 7),
    sex: 'Hembra',
    description: 'An elegant Árabe horse named Esmeralda, 7 years old and female.',
    email: 'esmeralda@example.com',
    number: '+1987654321',
    price: 7000,
    videos: ['1Kb7q8aFsGY', 'PXPD8fPQR3Y', 'fGmqygnf9EQ'],
    provincia: 'Córdoba',
    alzada: 160,
    salto: 110
  },
  {
    id: 'ca4',
    name: 'Centella',
    breed: 'Appaloosa',
    birthdate: new Date(2018, 2, 22),
    sex: 'Macho',
    description: 'A vibrant Appaloosa horse named Centella, 4 years old and male.',
    email: 'centella@example.com',
    number: '+1122334455',
    price: 4000,
    videos: ['1Kb7q8aFsGY', 'PXPD8fPQR3Y', 'fGmqygnf9EQ'],
    provincia: 'Catamarca',
    alzada: 185,
    salto: 140
  },
  {
    id: 'rt6',
    name: 'Rayo',
    breed: 'Trotón Francés',
    birthdate: new Date(2016, 9, 10),
    sex: 'Macho',
    description: 'A swift Trotón Francés horse named Rayo, 6 years old and male.',
    email: 'rayo@example.com',
    number: '+1654321890',
    price: 6000,
    videos: ['1Kb7q8aFsGY', 'PXPD8fPQR3Y', 'fGmqygnf9EQ'],
    provincia: 'Chaco',
    alzada: 170,
    salto: 120
  },
  {
    id: 'ab8',
    name: 'Azabache',
    breed: 'Andaluz',
    birthdate: new Date(2014, 11, 3),
    sex: 'Macho',
    description: 'A majestic Andaluz horse named Azabache, 8 years old and male.',
    email: 'azabache@example.com',
    number: '+1345678901',
    price: 8000,
    videos: ['1Kb7q8aFsGY', 'PXPD8fPQR3Y', 'fGmqygnf9EQ'],
    provincia: 'Chubut',
    alzada: 195,
    salto: 150
  },
  {
    id: 'ma3',
    name: 'Mariposa',
    breed: 'Mustang',
    birthdate: new Date(2019, 5, 18),
    sex: 'Hembra',
    description: 'A free-spirited Mustang horse named Mariposa, 3 years old and female.',
    email: 'mariposa@example.com',
    number: '+1122334455',
    price: 3000,
    videos: ['1Kb7q8aFsGY', 'PXPD8fPQR3Y', 'fGmqygnf9EQ'],
    provincia: 'Córdoba',
    alzada: 155,
    salto: 100
  },
  {
    id: 'na5',
    name: 'Nube',
    breed: 'Frisón',
    birthdate: new Date(2017, 7, 22),
    sex: 'Hembra',
    description: 'A graceful Frisón horse named Nube, 5 years old and female.',
    email: 'nube@example.com',
    number: '+1987654321',
    price: 5000,
    videos: ['1Kb7q8aFsGY', 'PXPD8fPQR3Y', 'fGmqygnf9EQ'],
    provincia: 'Corrientes',
    alzada: 160,
    salto: 110
  },
  {
    id: 'sa4',
    name: 'Sable',
    breed: 'Shire',
    birthdate: new Date(2018, 1, 5),
    sex: 'Macho',
    description: 'A powerful Shire horse named Sable, 4 years old and male.',
    email: 'sable@example.com',
    number: '+1234567890',
    price: 4000,
    videos: ['1Kb7q8aFsGY', 'PXPD8fPQR3Y', 'fGmqygnf9EQ'],
    provincia: 'Entre Ríos',
    alzada: 180,
    salto: 135
  },
  {
    id: 'li6',
    name: 'Lluvia',
    breed: 'Lipizzan',
    birthdate: new Date(2016, 4, 30),
    sex: 'Hembra',
    description: 'An elegant Lipizzan horse named Lluvia, 6 years old and female.',
    email: 'lluvia@example.com',
    number: '+1654321890',
    price: 6000,
    videos: ['1Kb7q8aFsGY', 'PXPD8fPQR3Y', 'fGmqygnf9EQ'],
    provincia: 'Formosa',
    alzada: 165,
    salto: 125
  },
  {
    id: 'do2',
    name: 'Dorado',
    breed: 'Dales',
    birthdate: new Date(2022, 0, 12),
    sex: 'Macho',
    description: 'A lively Dales horse named Dorado, 2 years old and male.',
    email: 'dorado@example.com',
    number: '+1345678901',
    price: 2000,
    videos: ['1Kb7q8aFsGY', 'PXPD8fPQR3Y', 'fGmqygnf9EQ'],
    provincia: 'Jujuy',
    alzada: 155,
    salto: 100
  },
  {
    id: 'th7',
    name: 'Thunder',
    breed: 'Thoroughbred',
    birthdate: new Date(2015, 2, 8),
    sex: 'Macho',
    description: 'A powerful Thoroughbred horse named Thunder, 7 years old and male.',
    email: 'thunder@example.com',
    number: '+1122334455',
    price: 7000,
    videos: ['1Kb7q8aFsGY', 'PXPD8fPQR3Y', 'fGmqygnf9EQ'],
    provincia: 'La Pampa',
    alzada: 175,
    salto: 130
  },
  {
    id: 'wi4',
    name: 'Wind',
    breed: 'Clydesdale',
    birthdate: new Date(2017, 5, 20),
    sex: 'Hembra',
    description: 'A majestic Clydesdale horse named Wind, 4 years old and female.',
    email: 'wind@example.com',
    number: '+1987654321',
    price: 4000,
    videos: ['1Kb7q8aFsGY', 'PXPD8fPQR3Y', 'fGmqygnf9EQ'],
    provincia: 'La Rioja',
    alzada: 180,
    salto: 135
  },
  {
    id: 'st5',
    name: 'Storm',
    breed: 'Standardbred',
    birthdate: new Date(2016, 10, 3),
    sex: 'Macho',
    description: 'A swift Standardbred horse named Storm, 5 years old and male.',
    email: 'storm@example.com',
    number: '+1654321890',
    price: 5000,
    videos: ['1Kb7q8aFsGY', 'PXPD8fPQR3Y', 'fGmqygnf9EQ'],
    provincia: 'Mendoza',
    alzada: 165,
    salto: 125
  },
  {
    id: 'qu3',
    name: 'Quasar',
    breed: 'Quarter Horse',
    birthdate: new Date(2018, 7, 15),
    sex: 'Hembra',
    description: 'A lively Quarter Horse named Quasar, 3 years old and female.',
    email: 'quasar@example.com',
    number: '+1345678901',
    price: 3000,
    videos: ['1Kb7q8aFsGY', 'PXPD8fPQR3Y', 'fGmqygnf9EQ'],
    provincia: 'Misiones',
    alzada: 160,
    salto: 110
  },
  {
    id: 'sp6',
    name: 'Spark',
    breed: 'Spanish Mustang',
    birthdate: new Date(2015, 1, 18),
    sex: 'Macho',
    description: 'A fiery Spanish Mustang horse named Spark, 6 years old and male.',
    email: 'spark@example.com',
    number: '+1234567890',
    price: 6000,
    videos: ['1Kb7q8aFsGY', 'PXPD8fPQR3Y', 'fGmqygnf9EQ'],
    provincia: 'Neuquén',
    alzada: 170,
    salto: 120
  },
  {
    id: 'su4',
    name: 'Sunrise',
    breed: 'Suffolk Punch',
    birthdate: new Date(2017, 4, 22),
    sex: 'Hembra',
    description: 'A vibrant Suffolk Punch horse named Sunrise, 4 years old and female.',
    email: 'sunrise@example.com',
    number: '+1987654321',
    price: 4000,
    videos: ['1Kb7q8aFsGY', 'PXPD8fPQR3Y', 'fGmqygnf9EQ'],
    provincia: 'Río Negro',
    alzada: 185,
    salto: 140
  },
  {
    id: 'ch5',
    name: 'Champion',
    breed: 'Cleveland Bay',
    birthdate: new Date(2016, 7, 30),
    sex: 'Macho',
    description: 'A strong Cleveland Bay horse named Champion, 5 years old and male.',
    email: 'champion@example.com',
    number: '+1122334455',
    price: 5000,
    videos: ['1Kb7q8aFsGY', 'PXPD8fPQR3Y', 'fGmqygnf9EQ'],
    provincia: 'Salta',
    alzada: 160,
    salto: 110
  },
  {
    id: 'br7',
    name: 'Breeze',
    breed: 'Brabant',
    birthdate: new Date(2014, 12, 12),
    sex: 'Hembra',
    description: 'A gentle Brabant horse named Breeze, 7 years old and female.',
    email: 'breeze@example.com',
    number: '+1345678901',
    price: 7000,
    videos: ['1Kb7q8aFsGY', 'PXPD8fPQR3Y', 'fGmqygnf9EQ'],
    provincia: 'San Juan',
    alzada: 155,
    salto: 100
  },
  {
    id: 'gl4',
    name: 'Glacier',
    breed: 'Gypsy Vanner',
    birthdate: new Date(2016, 5, 15),
    sex: 'Macho',
    description: 'A majestic Gypsy Vanner horse named Glacier, 4 years old and male.',
    email: 'glacier@example.com',
    number: '+1234567890',
    price: 4000,
    videos: ['1Kb7q8aFsGY', 'PXPD8fPQR3Y', 'fGmqygnf9EQ'],
    provincia: 'San Luis',
    alzada: 175,
    salto: 130
  },
  {
    id: 'wi8',
    name: 'Winter',
    breed: 'Welsh Pony',
    birthdate: new Date(2014, 3, 18),
    sex: 'Hembra',
    description: 'A playful Welsh Pony horse named Winter, 8 years old and female.',
    email: 'winter@example.com',
    number: '+1987654321',
    price: 8000,
    videos: ['1Kb7q8aFsGY', 'PXPD8fPQR3Y', 'fGmqygnf9EQ'],
    provincia: 'Santa Cruz',
    alzada: 150,
    salto: 95
  }
]
const nombres = [
  'Santiago Rodríguez',
  'Valentina López',
  'Matías González',
  'Sofía Fernández',
  'Facundo Martínez',
  'Camila Pérez',
  'Franco López',
  'Lucía García',
  'Martín Sánchez',
  'Antonella Díaz',
  'Agustín Castro',
  'Victoria Acosta',
  'Joaquín Morales',
  'Florencia Ramírez',
  'Nicolás Gómez',
  'Belén Herrera',
  'Leonardo Silva',
  'Carolina Ruiz',
  'Facundo Castro',
  'Sol Pérez'
]
// Puedes usar la variable horsesPart2 según tus necesidades.

// Puedes usar la variable horsesPart1 según tus necesidades.
