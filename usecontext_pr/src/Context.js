import React, {useState} from 'react'
import createcontext from './CreateContext'

const Context = ({children}) => {

    const [mode, setMode] = useState('light')

    const differentMode = ()=> {

        if(mode === "light"){
            setMode('dark')
        }
        else{
            setMode('light')
        }

    }

  return (
    <createcontext.Provider value={{mode, differentMode}}>
            {children}
    </createcontext.Provider>
  )
}

export default Context
