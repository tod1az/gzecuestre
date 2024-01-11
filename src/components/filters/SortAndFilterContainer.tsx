import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import FilterList from "./FilterList"
import SearchBar from "../SearchBar"
import ActiveQuery from "./ActiveQuery"
import SortsList from "./SortsList"

export default function SortAndFilterContainer() {
  return (
    <Tabs
      className="p-6"
      defaultValue="filters">
      <TabsList className="bg-blanco/50 grid w-full grid-cols-2 mb-4">
        <TabsTrigger className="" value="filters">Filtros</TabsTrigger>
        <TabsTrigger className="" value="sorts">Orden</TabsTrigger>
      </TabsList>
      <TabsContent value="filters">
        <section className="pl-2 grid gap-6 w-[312px]">
          <SearchBar />
          <ActiveQuery />
          <FilterList />
        </section>
      </TabsContent>
      <TabsContent value="sorts">
        <section className="pl-2 grid gap-3 w-[312px]">
          <SortsList />
        </section>
      </TabsContent>
    </Tabs>
  )
}
