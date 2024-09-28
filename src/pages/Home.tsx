import styled from 'styled-components'
import Layout from '../layout/Layout'
import About from '../components/About'
import Faq from '../components/Faq'
import { Link, useNavigate } from 'react-router-dom'
import Eventshome from '../components/Eventshome'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth , db } from '../firebase/firebase'
import toast from 'react-hot-toast'
import { useStateContext } from '../globalcontext/ContextProvider'
import { useEffect, useState } from 'react'
import { get , onValue, ref } from 'firebase/database'
import Register from '../components/Register'
import Community from '../components/Community'



const Home = () => {

  const { currentUser , openMenu}= useStateContext();
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



  
  const navigate = useNavigate();

  




useEffect(() => {
if(currentUser!== undefined){
  const checkPhoneNumber = async () => {
  

      if (currentUser) {
          const userRef = ref(db, `users/${currentUser.uid}/phoneNumber`);
          const phoneSnapshot = await get(userRef);

          if (phoneSnapshot.exists()) {
              navigate('/');
          }
      }
  };

  checkPhoneNumber();
}
}, [currentUser]);

  const googleSignIn=async(e:any)=>{
    e.preventDefault();
    const googleAuthProvider = new GoogleAuthProvider();

    await signInWithPopup(auth,googleAuthProvider).then((response)=>{
      navigate(`/Form`);
      toast.success(`Welcome!`);
    })
  }
  useEffect(() => {
    const script: HTMLScriptElement = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <HomeContainer>


    <div className=''>
          {/* <video autoPlay muted loop id="myVideo" className=" brightness-50 blur-[4px] z-10 fixed right-0 bottom-0 w-full h-full object-cover min-w-full min-h-full top-0 max-w-0">
            <source src="./assets/3.mov" type="video/mp4" />
          </video> */}
          <video autoPlay muted loop id="myVideo" className="brightness-50 blur-[1px] z-10 fixed right-0 bottom-0 w-full h-full object-cover   top-0 ">
            <source src="./assets/3.mov" type="video/mp4" className='w-full h-full object-contain'/>
          </video>
    </div>
    <div className=' absolute z-20  w-full h-full object-cover  top-0 '> 
    <img src="./assets/7.png" alt=""  className='blur-[350px] bg-no-repeat w-full h-full object-cover'/>
          </div>

    <Layout>
    
    <div className=" relative z-30 top-[15rem] flex p-2 flex-col  justify-center text-center m-auto w-full ">
      
<img src="./assets/LOGO MATRIX 2.0.png" alt="" className='md:w-[40%] w-[80%] m-auto'/>

    

      <h2 className="text-xl 2xl:text-2xl xl:text-2xl font-semibold text-white max-md:mt-[20px] mt-[20px]  "> Tech Fest</h2>
      <h2 className="text-xl 2xl:text-2xl xl:text-2xl font-semibold text-white  "> September 20-21, 2024</h2>
  </div>
  <div 
                  className="apply-button bg-[#ffffff] rounded-sm text-white  " 
                  data-hackathon-slug="matrix2" 
                  data-button-theme="dark-inverted"
                  style={{ height: '44px', width: '312px' }}
                >

                </div>
  {/* button */}
  <div className='relative max-md:top-[22rem] top-[20rem] z-30 flex flex-col md:flex-row justify-center text-center w-2/4 m-auto '>

 

{/* log in */}
      {currentUser === null && <button className='glowing-btn md:mx-[50px] max-md:my-[20px] max-md:mb-[60px] flex justify-center' onClick={(e)=>googleSignIn(e)}>
        <Link to='#' className='text-white mx-[25px] my-[10px] text-xl '><span className='glowing-txt'>L<span className='faulty-letter'>og</span>In</span> </Link></button>}
{/* sign in */}
      {currentUser === null && <button className='glowing-btn flex justify-center' onClick={(e)=>googleSignIn(e)}>
        <Link to='#' className='text-white mx-[25px] my-[10px] text-xl '><span className='glowing-txt'>S<span className='faulty-letter'>ign</span>Up</span> </Link></button>}
 
{/* register now */}
{/* { paymentdetails?.payment_status !== 'success' && 
      currentUser !== null && <button className='glowing-btn mt-[20px] flex justify-center'><Link to='/Events' className='text-white mx-[25px] my-[10px] text-xl'><span className='glowing-txt'>Reg<span className='faulty-letter'>ister</span> Now</span> </Link></button>
} */}
 {/* Alrwady register */}

{/* { paymentdetails?.payment_status === 'success' && currentUser !== null &&
 <button className='glowing-btn mt-[20px] flex justify-center'>
  
  <Link to='/Home'  className='text-white mx-[25px] my-[10px] text-xl'>
  
  <span className='glowing-txt'>Alr<span className='faulty-letter'>eady</span> Registerd
  </span> 
  
  </Link>
  
  </button>
} */}
{ paymentdetails?.payment_status !== 'success' && 
      currentUser !== null &&

<button className='glowing-btn mt-[20px] flex justify-center'>
  
  <Link to='/Home'  className='text-white mx-[25px] my-[10px] text-xl'>
  
  <span className='glowing-txt'>View<span className='faulty-letter'>Results</span> 
  </span> 
  
  </Link>
  
  </button>
 } 


</div>

    </Layout>

    <About />
  
    <Eventshome />
    {/* <Register/> */}
    <Community />
    <Faq />


    </HomeContainer>
  )
}


const HomeContainer = styled.div`
.gradient-border{
  border: 4px solid #00ffd4;
  border-radius: 30%;
  
}

.gradient-boder:hover{
  background-color: #00ffd4;
}


--glow-color: #00ffd4;

.glowing-btn {
  position: relative;
  color: var(--glow-color);
  cursor: pointer;
  padding: 0.35em 1em;
  border: 2px solid var(--glow-color);
  border-radius: 0.45em;
  background: none;
  perspective: 2em;
  font-family: "Raleway", sans-serif;
  font-size: 1em;
  font-weight: 900;
  letter-spacing: 0.5em;
  /* margin:10px; */

  -webkit-box-shadow: inset 0px 0px 0.5em 0px var(--glow-color),
    0px 0px 0.5em 0px var(--glow-color);
  -moz-box-shadow: inset 0px 0px 0.5em 0px var(--glow-color),
    0px 0px 0.5em 0px var(--glow-color);
  box-shadow: inset 0px 0px 0.5em 0px var(--glow-color),
    0px 0px 0.5em 0px var(--glow-color);
  animation: border-flicker 2s linear infinite;
}

.glowing-txt {
  float: left;
  margin-right: -0.8em;
  -webkit-text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3),
    0 0 0.45em var(--glow-color);
  -moz-text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3),
    0 0 0.45em var(--glow-color);
  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em var(--glow-color);
  animation: text-flicker 3s linear infinite;
}

.faulty-letter {
  opacity: 0.5;
  animation: faulty-flicker 2s linear infinite;
}

.glowing-btn::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.7;
  filter: blur(1em);
  transform: translateY(100%) rotateX(95deg) scale(1, 0.30);
  background: var(--glow-color);
  pointer-events: none;
}

.glowing-btn::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  z-index: -1;
  background-color: var(--glow-color);
  box-shadow: 0 0 1em 0.1em var(--glow-color);
  transition: opacity 100ms linear;
}

.glowing-btn:hover {
  color: rgba(0, 0, 0, 0.8);
  text-shadow: none;
  animation: none;
}

.glowing-btn:hover .glowing-txt {
  animation: none;
}

.glowing-btn:hover .faulty-letter {
  animation: none;
  text-shadow: none;
  opacity: 1;
}

.glowing-btn:hover:before {
  filter: blur(1.5em);
  opacity: 1;
}

.glowing-btn:hover:after {
  opacity: 1;
}

@keyframes faulty-flicker {
  0% {
    opacity: 0.1;
  }
  2% {
    opacity: 0.1;
  }
  4% {
    opacity: 0.5;
  }
  19% {
    opacity: 0.5;
  }
  21% {
    opacity: 0.1;
  }
  23% {
    opacity: 1;
  }
  80% {
    opacity: 0.5;
  }
  83% {
    opacity: 0.4;
  }

  87% {
    opacity: 1;
  }
}

@keyframes text-flicker {
  0% {
    opacity: 0.1;
  }

  2% {
    opacity: 1;
  }

  8% {
    opacity: 0.1;
  }

  9% {
    opacity: 1;
  }

  12% {
    opacity: 0.1;
  }
  20% {
    opacity: 1;
  }
  25% {
    opacity: 0.3;
  }
  30% {
    opacity: 1;
  }

  70% {
    opacity: 0.7;
  }
  72% {
    opacity: 0.2;
  }

  77% {
    opacity: 0.9;
  }
  100% {
    opacity: 0.9;
  }
}

@keyframes border-flicker {
  0% {
    opacity: 0.1;
  }
  2% {
    opacity: 1;
  }
  4% {
    opacity: 0.1;
  }

  8% {
    opacity: 1;
  }
  70% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
}

@media only screen and (max-width: 600px) {
  .glowing-btn{
    font-size: 1em;
  }
}



`

export default Home
