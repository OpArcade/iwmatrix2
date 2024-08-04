import React, { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'


interface type{
    openMenu : boolean,
    setOpenMenu : Dispatch<SetStateAction<boolean>>,
}


export const StateContext = createContext<type>({} as any);

export const ContextProvider = ({children}:{children:ReactNode}) => {

    const [openMenu , setOpenMenu] = useState<boolean>(false);
  return (
   <StateContext.Provider value={{
    openMenu, setOpenMenu,
   }}>
    {children}
    </StateContext.Provider>
  )
}


export const useStateContext = () => useContext(StateContext);
