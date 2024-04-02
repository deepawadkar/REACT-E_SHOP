import React, { useState, createContext, useMemo, useEffect} from 'react'

export const AuthContext = createContext()

function AuthProvider(props) {
    const [token,setToken] = useState(() =>{
      return localStorage.getItem('token') || false
    })

    let contextData = useMemo(() => ({
        token
    }), [token])

    const readToken = () => {
     setToken(localStorage.getItem('token') || false)
    }

    useEffect(() => {
      readToken()
    }, [token])
  return (
    <AuthContext.Provider value={{contextData,setToken}}>
        {
            props.children
        }
    </AuthContext.Provider>
  )
}

export default AuthProvider