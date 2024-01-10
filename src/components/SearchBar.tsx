'use client'
import { FiSearch } from "react-icons/fi"
import { useUrlSearchParams } from "@/lib/hooks"
import { useState } from 'react'
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export default function SearchBar() {

  const { setFilter } = useUrlSearchParams()
  const [query, setQuery] = useState<string>('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (query === '') return
    setFilter({ name: 'query', value: query })
    setQuery('')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  return (
    <section className="flex flex-col">
      <form
        className="flex items-center gap-1"
        onSubmit={handleSubmit}
      >
        <Input
          onChange={handleChange}
          type="text"
          placeholder="Buscar"
          className="bg-blanco w-full text-xl max-w-xs px-2 py-1 rounded-lg focus:outline-none"
          value={query}
        />
        <Button
          className="rounded-lg bg-blanco text-xl text-gray-600 hover:bg-blanco/50 px-2 py-1 h-[2.3rem]"
          type="submit"
        >
          <FiSearch />
        </Button>
      </form>
    </section>
  )
}
