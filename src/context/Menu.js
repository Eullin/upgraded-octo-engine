import React, { useState, createContext } from "react"

export const MenuContext = createContext()

export default ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const OpenMenu = () => setIsOpen(true)
  const CloseMenu = () => setIsOpen(false)

  const defaultContext = {
    isOpen,
    OpenMenu,
    CloseMenu,
  }

  return (
    <MenuContext.Provider value={defaultContext}>
      {children}
    </MenuContext.Provider>
  )
}
