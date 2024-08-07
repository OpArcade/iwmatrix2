import React, { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react'
import { auth } from '../firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';

interface type{
    openMenu : boolean,
    setOpenMenu : Dispatch<SetStateAction<boolean>>,
}

export const StateContext = createContext<type>({} as any);
export const StateContexts = createContext<any>({});
export const useGlobalStateContext =()=>useContext(StateContexts);

export const ContextProvider = ({children}:{children:ReactNode}) => {

    const [openMenu , setOpenMenu] = useState<boolean>(false);

    const [currentUser,SetCurrentUser] = useState<any>({});
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(user)=>{
            SetCurrentUser(user);
        })
        return()=>unsubscribe();
    },[])

  return (
   <StateContext.Provider value={{
    openMenu, setOpenMenu,
   }}>
    <StateContexts.Provider value={{
      currentUser
    }}>
      {children}
    </StateContexts.Provider>
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);
