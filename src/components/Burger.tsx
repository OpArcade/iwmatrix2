import { Link } from 'react-router-dom';
import { useStateContext } from '../globalcontext/ContextProvider';
import { useEffect, useState } from 'react';
import { onValue, ref } from 'firebase/database';
import { db } from '../firebase/firebase';



const Burger = () => {
  
  const { setOpenMenu , currentUser,openMenu}= useStateContext();

  const [paymentdetails , setPaymentdetails] = useState<any>({});

  const getPaymentdetails=()=>{
    if (currentUser?.uid){
      const dbref = ref(db,`payments/${currentUser.uid}`)
    
    onValue(dbref,(snapshot)=>{
      if(snapshot?.exists()){
        let info = snapshot?.val();
        setPaymentdetails(info)
      }
    })
  }}

  useEffect(()=>{
    getPaymentdetails()
  },[])



  return (
  //   <BurgerContainer>
  //     <div className="logo absolute z-50 top-6 p-2 pl-6">
  //         <Link to="/Home" className=" text-white 2xl:text-4xl font-serif xl:text-2xl lg:text-3xl md:max-xl:text-3xl text-2xl">Matrix</Link>
  //       </div>

  //     <div>

  //   <div id="sidebar" className="absolute top-0 left-0 w-full h-full bg-gray-800 text-white transform -translate-x-full transition-transform duration-300 ease-in-out z-40">
  //     <aside className="w-64 h-full bg-gray-800">
  //         <div className="px-3 py-4 overflow-y-auto bg-gray-800">
  //             <ul className="space-y-2 mt-20 ml-10">

  //             <li><Link to="/Home" className="text-white  hover:text-[#00ffd4]  text-lg" >Home</Link></li>
  //           <li><Link to="/Events" className="text-white  hover:text-[#00ffd4] text-lg" >Events</Link></li> 
  //           <li><Link to="/Sponsors" className="text-white hover:text-[#00ffd4] text-lg">Sponsors</Link></li>
  //           <li><Link to="/Contact" className="text-white hover:text-[#00ffd4] text-lg">Contact</Link></li>
  //             </ul>
  //         </div>
  //     </aside>
  // </div>
  // </div>
  //   </BurgerContainer>
    <aside className='fixed z-[100000] w-[60%] p-4 bg-black h-full top-0'>
      <div>
        <img src="./assets/LOGO MATRIX 2.0.png" alt="" className=' w-2/4 max-md:w-[200px]'/>
      </div>
      
      <div className='flex flex-col gap-y-5 mt-[40px]'>
      {currentUser && <Link to="/Profile" className=" rounded-full w-[156px]">
            <img src={currentUser?.photoURL ?? 'https://static.vecteezy.com/system/resources/previews/013/042/571/non_2x/default-avatar-profile-icon-social-media-user-photo-in-flat-style-vector.jpg'} alt="" className='w-[50px] h-[50px] rounded-full object-cover'/>
          </Link>}
      <Link to="/Home" className="text-white  hover:text-[#00ffd4]  text-lg" onClick={() => setOpenMenu(!openMenu)}>Home</Link>
      <Link to="/Profile" className="text-white  hover:text-[#00ffd4]  text-lg" onClick={() => setOpenMenu(!openMenu)}>Profile</Link>

      { paymentdetails?.payment_status !== 'success' &&
      <Link to="/Events" className="text-white  hover:text-[#00ffd4] text-lg"  onClick={() => setOpenMenu(!openMenu)}>Events</Link>
}
      <Link to="/Sponsors" className="text-white hover:text-[#00ffd4] text-lg" onClick={() => setOpenMenu(!openMenu)}>Sponsors</Link>
      <Link to="/Contact" className="text-white hover:text-[#00ffd4] text-lg"onClick={() => setOpenMenu(!openMenu)}> Contact</Link>

      
      </div>
    </aside>
  )
}



export default Burger
