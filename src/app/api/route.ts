import { NextResponse } from 'next/server'
import prisma from '@/db/db'
import { Provinces, breeds, horses } from '@/lib/data'

export async function POST() {
  const disciplinas = ['Salto Ecuestre', 'Doma Clásica', 'CCE', 'Polo', 'Enduro Ecuestre']
  const dueños = [
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

  for (let i = 0; i < horses.length; i++) {
    const horse = horses[i]
    await prisma.caballo.create({
      data: {
        alzada: horse.alzada,
        nombre_contacto: dueños[i],
        nombre: horse.name,
        fecha_de_nacimiento: horse.birthdate,
        sex: horse.sex,
        descripcion: horse.description,
        email: horse.email,
        numero: horse.number,
        precio: horse.price,
        salto: horse.salto
      }
    })
  }

  // for (const { name } of Provinces) {
  //   await prisma.provincia.create({
  //     data: {
  //       nombre: name
  //     }
  //   })
  // }

  // for (const { name } of breeds) {
  //   await prisma.raza.create({
  //     data: {
  //       nombre: name
  //     }
  //   })
  // }

  // for (const disciplina of disciplinas) {
  //   await prisma.disciplina.create({
  //     data: {
  //       nombre: disciplina
  //     }
  //   })
  // }

  return NextResponse.json({ message: 'done' })
}
