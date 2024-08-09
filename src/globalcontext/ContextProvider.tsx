import React, { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react'
import { auth } from '../firebase/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';

interface type{
    openMenu : boolean,
    setOpenMenu : Dispatch<SetStateAction<boolean>>,
    currentUser : User,
}

export const StateContext = createContext<type>({} as any);

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
    openMenu, setOpenMenu, currentUser,
    
   }}>
    {
      children
    }
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);
