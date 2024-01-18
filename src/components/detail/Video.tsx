'use client'

type Props = {
  id: string
  name: string
}

export default function Video({ id, name }: Props) {
  return (
    <iframe
      className="xl:w-8/12 md:w-11/12 px-6 pt-5 h-full object-cover"
      src={`https://www.youtube.com/embed/${id}`}
      title={`Video de ${name}`}
      allowFullScreen
    />
  )
}
