import React from 'react'

import { createContext } from 'react'

const AppDataContext = createContext({})

const AppContext = ({ children }) => {
  const [isSplashScreenOpen, setIsSplashScreenOpen] = React.useState(true)

  const values = {
    isSplashScreenOpen,
    setIsSplashScreenOpen,
  }
  return (
    <AppDataContext.Provider value={values}>
      {children}
    </AppDataContext.Provider>
  )
}

export default AppContext
export { AppDataContext }