import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import { useContext, useEffect } from 'react'
import { ActiveSectionContext } from '@/context/ActiveSectionContext'
import { type SectionName } from './types'
import { useInView } from 'react-intersection-observer'

export const useUrlSearchParams = () => {
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const { replace } = useRouter()
  const path = usePathname()

  const setFilter = ({ name, value }: { name: string; value: string }) => {
    if (name === 'orden') {
      const newValue = value.split(' ')[0] === 'mayor' ? 'desc' : 'asc'
      params.set(name, newValue)
    } else {
      params.set(name, value)
    }
    replace(`${path}?${params.toString()}`)
  }

  const deleteFilter = ({ name }: { name: string }) => {
    if (name !== 'query') {
      params.delete(`min${name}`)
      params.delete(`max${name}`)
    }
    params.delete(name)
    replace(`${path}?${params.toString()}`)
  }

  const isFilterActive = (name: string) => {
    const currentFilter: [string, string] = ['0', '0']
    for (const [key, value] of searchParams.entries()) {
      if (key === `min${name}`) {
        currentFilter[0] = value
      }
      if (key === `max${name}`) {
        currentFilter[1] = value
      }
    }
    if (currentFilter[0] === '0' && currentFilter[1] === '0') return false
    return currentFilter
  }

  const setPage = (value: number | string) => {
    params.set('page', String(value))
    replace(`${path}?${params.toString()}`)
  }

  const getCurrentPage = (totalPages: number) => {
    const initialPage = searchParams.get('page')
    if (!initialPage || Number(initialPage) > totalPages || Number(initialPage) < 1) return 1
    return Number(initialPage)
  }

  const getActiveFilter = (name: string) => {
    for (const [key, value] of searchParams.entries()) {
      if (key === name) {
        if (value === 'asc') return 'menor precio'
        if (value === 'desc') return 'mayor precio'
        return value
      }
    }
    return false
  }

  const deleteProvince = (province: string) => {
    const currentProvinces = params.get('provinces')
    let splitedProvinces = []
    if (currentProvinces?.includes('&')) {
      splitedProvinces = currentProvinces.split('&')
      const filteredProvinces = splitedProvinces.filter((current) => province !== current)
      return setFilter({ name: 'provinces', value: filteredProvinces.join('&') })
    }
    if (currentProvinces?.length) {
      deleteFilter({ name: 'provinces' })
    }
  }

  return {
    setFilter,
    deleteProvince,
    deleteFilter,
    setPage,
    getCurrentPage,
    isFilterActive,
    getActiveFilter
  }
}

export const useActiveSection = () => {
  const context = useContext(ActiveSectionContext)
  if (context === null) throw new Error('useActiveSection must be used within the ActiveSectionContext Provider')
  return context
}

export const useSectionInView = (section: SectionName) => {
  const { ref, inView } = useInView({ threshold: 0.75 })
  const { setActiveSection, lastClick } = useActiveSection()
  useEffect(() => {
    if (inView && Date.now() - lastClick > 1000) {
      setActiveSection(section)
    }
  }, [inView, lastClick, section, setActiveSection])

  return {
    ref
  }
}
