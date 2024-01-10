'use client'
import { useState, createContext } from 'react'
import { type SectionName } from '@/lib/types'

type Props = {
  children: React.ReactNode
}

type ActiveSectionContextType = {
  activeSection: SectionName
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
  lastClick: number
  setLastClick: React.Dispatch<React.SetStateAction<number>>
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)

export const ActiveSectionContextProvider = ({ children }: Props) => {
  const [activeSection, setActiveSection] = useState<SectionName>('inicio')
  const [lastClick, setLastClick] = useState(0)

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        lastClick,
        setLastClick
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  )
}