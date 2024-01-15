'use client'

type Props = {
  id: string
  name: string
  height: string
  width: string
}

export default function Video({ id, name, width, height }: Props) {
  return (
    <iframe
      src={`https://www.youtube.com/embed/${id}`}
      title={`Video de ${name}`}
      width={width}
      height={height}
      allowFullScreen
    />

  )
}
