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
    params.set(name, value)
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
    const currentFilter = ['0', '0']
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

  const getActiveQuery = () => {
    for (const [key, value] of searchParams.entries()) {
      if (key === 'query') {
        return value
      }
    }
    return false
  }

  return {
    setFilter,
    deleteFilter,
    setPage,
    getCurrentPage,
    isFilterActive,
    getActiveQuery
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
