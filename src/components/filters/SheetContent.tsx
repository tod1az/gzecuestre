import React from 'react'
import SearchBar from '../SearchBar'
import ActiveQuery from './ActiveQuery'
import FilterList from './FilterList'

export default function SheetContent() {
  return (
    <section className="md:pl-2 flex flex-col gap-4 pt-5  w-full">
      <SearchBar />
      <ActiveQuery />
      <FilterList />
    </section>
  )
}
