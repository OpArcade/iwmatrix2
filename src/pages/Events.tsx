import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import styled from "styled-components";
import { CheckCheck } from "lucide-react";
import { getDatabase, set,ref, update, get, onValue } from "firebase/database";

import {db,auth} from "../firebase/firebase"
import { useStateContext } from "../globalcontext/ContextProvider";
import axios from "axios";
import { load } from '@cashfreepayments/cashfree-js';
import { format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';
// import { Mailer } from "../Mail/Mailer";
import {toast} from 'react-hot-toast'
import { useNavigation, Link, useNavigate } from 'react-router-dom';
import { TeamName } from "../components/Events/TeamName";
import Home from "./Home";
import * as admin from 'firebase-admin';
// interface Event {
//   name: string;
//   img: string;
//   desc: string;
//   link: string;

// }

interface Event {
  name: string;
  img: string;
  desc: string;
  link: React.ReactNode; // or JSX.Element
}

interface TeamMember {
  name: string;
  phone: string;
  email: string;
}

interface EventDetails {
  participationType: "solo" | "team";
  team: TeamMember[];
}

// ashish code start
interface Props {
  isOpen: boolean;
  onClose: () => void;
  onTeamNameSubmit: (teamName: string) => void;
}


// ashish code end
const events: Event[] = [

  {
    name: "HACKATHON",
    desc: "Hackathon is a 24-hour coding marathon where teams brainstorm, design, and develop innovative software or hardware solutions. Participants work on selected projects and present their completed work to judges for evaluation.",
    link: <a href="https://drive.google.com/file/d/1ry6BWcPui72lFseMTAZSPYR-D3ghwCfC/view?usp=sharing" target="_blank">Read more</a>,
   
    img: "./assets/hacakthom.png",
  },
  {
    name: "Live Project",
    desc: "The Live Project challenge invites you to create a tangible IoT-based solution for a real-world problem. Showcase your creativity, innovate, and gain hands-on experience with a project of your choice to enhance your portfolio. ",
  link: <a href="https://drive.google.com/file/d/1ry6BWcPui72lFseMTAZSPYR-D3ghwCfC/view?usp=sharing" target="_blank">Read more</a>,
    img: "./assets/LIVE PROJECT.png",
  },
  {
    name: "Gaming Parlour",
    desc: "Maintain originality and integrity. Understand software/hardware, its algorithms, and design.Complete tasks within specified time limits. Originality and integrity must be maintained.Follow event behavior guidelines.",
    link: <a href="https://drive.google.com/file/d/1ry6BWcPui72lFseMTAZSPYR-D3ghwCfC/view?usp=sharing" target="_blank">Read more</a>,
    img: "./assets/GAME PAR.png",
  },
  {
    name: "Gaming tournament",
    desc: "Team up with friends and dive into thrilling gaming challenges! Level up your experience, make new gaming buddies, and enjoy the excitement of the walk-in gaming zone to uplift your spirits. ",
   link: <a href="https://drive.google.com/file/d/1ry6BWcPui72lFseMTAZSPYR-D3ghwCfC/view?usp=sharing" target="_blank">Read more</a>,
    img: "./assets/GAME TOUR.png",
  },
  {
    name: "Inside Edge",
    desc: "Become the team manager of your cricket franchise and bid for top players to create your dream team. Climb from qualifying round 1 to final round 2, engaging in friendly competition and strategic planning to win the title of the best cricket team.",
   link: <a href="https://drive.google.com/file/d/1ry6BWcPui72lFseMTAZSPYR-D3ghwCfC/view?usp=sharing" target="_blank">Read more</a>,
    img: "./assets/INSIDE EDGE.png",
  },
  {
    name: "UI/UX Design",
    desc: "This UI/UX design competition is your chance to turn creative ideas into visually appealing, user-centric designs. Connect with design enthusiasts, explore the latest trends, and enhance your skills while contributing to innovative solutions in the tech community.",
   link: <a href="https://drive.google.com/file/d/1ry6BWcPui72lFseMTAZSPYR-D3ghwCfC/view?usp=sharing" target="_blank">Read more</a>,
    img: "./assets/UI-UX DESIGN.png",
  },

  
  {
    name: "News Surge",
    desc: "Join News Flash and dive into the world of journalism and media at MATRIX 2.0! Teams will record and document the Tech Fest in real time, capturing activities and highlights with creativity and journalistic flair. Present the event professionally and entertainingly",
   link: <a href="https://drive.google.com/file/d/1ry6BWcPui72lFseMTAZSPYR-D3ghwCfC/view?usp=sharing" target="_blank">Read more</a>,
    img: "./assets/NEWS SURGE.png",
  },
  
  {
    name: "Data Science",
    desc: "Dive into data with tasks across three dynamic rounds, testing your skills in sorting, cleaning, and visualization. Showcase your expertise, compete with fellow enthusiasts, and uncover valuable insights into the world of data science.",
    img : "./assets/Data analytics1.png",
  link: <a href="https://drive.google.com/file/d/1ry6BWcPui72lFseMTAZSPYR-D3ghwCfC/view?usp=sharing" target="_blank">Read more</a>,
  },
  {
    name: "Pitchers",
    desc: "Unleash your entrepreneurial spirit to solve real-world issues with innovative tech-driven business models. Showcase your groundbreaking ideas, and turn them into impactful prototypes to present your vision to a discerning audience.",
    img: "./assets/PITCHERS.png",
   link: <a href="https://drive.google.com/file/d/1ry6BWcPui72lFseMTAZSPYR-D3ghwCfC/view?usp=sharing" target="_blank">Read more</a>,
  },
 

];

const Events = () => {
  const [selectedEvents, setSelectedEvents] = useState<Event[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [isOpen,setIsOpen] = useState<boolean>(false);
  const [team,setTeam] = useState<string>()
  const [amount,setAmount] = useState<number>(0)

  const [NewsSurge, setNewsSurge] = useState<EventDetails>({
    participationType: "solo",
    team: [{ name: "", phone: "", email: "" }],
  });
  const [liveProjectsDetails, setLiveProjectsDetails] = useState<EventDetails>({
    participationType: "solo",
    team: [{ name: "", phone: "", email: "" }],
  });

  // participationType : solo
  // participationType: team
  // const [liveProjectDetailsCustom, setLiveProjectDetailsCustom] = useState({participationType: "" , team: [{name: "", phone:"", email:""}]})


  // ashish start
  const [teamName, setTeamName] = useState<string>('');

  // devfolio script
//   React.useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://apply.devfolio.co/v2/sdk.js';
//     script.async = true;
//     script.defer = true;
//     document.body.appendChild(script);
//     return () => {
//       document.body.removeChild(script);
//     }
// }, []);

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

// devfolio script end

  // ashish end
  const [gamingTournamentDetails, setGamingTournamentDetails] = useState<EventDetails>({
    participationType: "solo",
    team: [{ name: "", phone: "", email: "" }],
  });


  const [detailWithoutTeamName,setDetailWithoutTeamName] = useState({
    dataScience : {name:"",phone:"",email:""},
    pictures : {name:"",phone:"",email:""},
    uiUx : {name:"",phone:"",email:""},
    insideEdge : {name:"",phone:"",email:""},
  });


  const addDetailsWithoutTeam = (event:string,name:string,email:string,phone:string) =>{
    setDetailWithoutTeamName({
      ...detailWithoutTeamName,
      [event] : {
        name,
        email,
        phone,
      }
    });
  }


  const [detialsWithTeamName,setDetailsWithTeamName] = useState<any>({
    newSurge : {name:"",phone:"",email:"",teamName : ""},
    liveProjects : {name:"",phone:"",email:"",teamName : ""},
    gamingTournament : {name:"",phone:"",email:"",teamName : ""},
  });


  const addDetailsWithTeamName = (event: string,name:string,email:string,teamName:string,phone:string)=>{

    setDetailsWithTeamName({
      ...detialsWithTeamName,
      [event] : {
        name,
        email,
        teamName,
        phone,
      }
    });
  }



  const [formErrors, setFormErrors] = useState<string[]>([]);


  
  const handleSelect = (event: Event) => {
  console.log(selectedEvents)
  console.log("events selected done")

    // New Logic

    if (event.name === "News Surge"){
        setIsOpen(true)
        setSelectedEvents((prev) =>
              prev.includes(event)
                ? prev.filter((e) => e !== event)
                : [...prev, event]
            );
    } 
    if (event.name === "Live Project"){
        setIsOpen(true)
        setSelectedEvents((prev) =>
          prev.includes(event)
            ? prev.filter((e) => e !== event)
            : [...prev, event]
        );
    }
    if (event.name === "Gaming tournament"){
        setIsOpen(true)
        setSelectedEvents((prev) =>
          prev.includes(event)
            ? prev.filter((e) => e !== event)
            : [...prev, event]
        );
    }
    if (event.name === "Inside Edge"){
        setSelectedEvents((prev) =>
          prev.includes(event)
            ? prev.filter((e) => e !== event)
            : [...prev, event]
        );
    }
    /*if (event.name === "UI/UX Design"){
        setSelectedEvents((prev) =>
          prev.includes(event)
            ? prev.filter((e) => e !== event)
            : [...prev, event]
        );
    }
    if (event.name === "Data Science"){
        setSelectedEvents((prev) =>
          prev.includes(event)
            ? prev.filter((e) => e !== event)
            : [...prev, event]
        );
    }*/
    if (event.name === "Pitchers"){
        setSelectedEvents((prev) =>
          prev.includes(event)
            ? prev.filter((e) => e !== event)
            : [...prev, event]
        );
    }

  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    index: number | undefined,
    type: "newsSurge" | "liveProjects" | "gamingTournament"
  ) => {
    const { name, value } = e.target;
    const setDetails = type === "newsSurge" ? setNewsSurge : type === "liveProjects" ? setLiveProjectsDetails : setGamingTournamentDetails;
    //const details = type === "newsSurge" ? NewsSurge : type === "liveProjects" ? liveProjectsDetails : gamingTournamentDetails;

    let details = NewsSurge;
    if(type === 'liveProjects'){
      details = liveProjectsDetails;
    }
    if(type === 'gamingTournament'){
      details = gamingTournamentDetails;
    }
    if (name === "participationType") {
      setDetails((prev) => ({
        ...prev,
        participationType: value as "solo" | "team",
        team: value === "solo" ? [{ name: "", phone: "", email: "" }] : prev.team,
      }));
    } else if (index !== undefined) {
      const newTeam = [...details.team];
      newTeam[index][name as keyof TeamMember] = value;
      setDetails((prev) => ({ ...prev, team: newTeam }));
    }
  };

  const handleAddTeamMember = (type: "newsSurge" | "liveProjects" | "gamingTournament") => {
    const setDetails = type === "newsSurge" ? setNewsSurge : type === "liveProjects" ? setLiveProjectsDetails : setGamingTournamentDetails;
    const details = type === "newsSurge" ? NewsSurge : type === "liveProjects" ? liveProjectsDetails : gamingTournamentDetails;

    setDetails((prev) => ({
      ...prev,
      team: [...prev.team, { name: "", phone: "", email: "" }],
    }));
  };

  const validateForm = (type: "newsSurge" | "liveProjects" | "gamingTournament"): boolean => {
    const errors: string[] = [];
    const details = type === "newsSurge" ? NewsSurge : type === "liveProjects" ? liveProjectsDetails : gamingTournamentDetails;
    details.team.forEach((member, index) => {
      if (!member.name || !member.phone || !member.email) {
        errors.push(`Please fill out all fields for team member ${index + 1}`);
      }
    });
    setFormErrors(errors);
    return errors.length === 0;
  };
  const handleSubmitForm = (type: "newsSurge" | "liveProjects" | "gamingTournament") => {
    if (validateForm(type)) {
      const event = events.find((e) => e.name === (type === "newsSurge" ? "NEWS SURGE" : type === "liveProjects" ? "LIVE PROJECTS" : "GAMING TOURNAMENT"));
      if (event) {
        setSelectedEvents((prev) => [...prev, event]);
        
      }
    }
  };
  
  // const calculateTotalPrice = (): number => {
    
    // let total:number = 0;
    // let gameTotal:number = 0;
    // console.log(selectedEvents)
    
    // selectedEvents.forEach((event) => {
    //   if (event.name === "Gaming tournament") {
    //     gameTotal = 100;
    //   }
    //   if (event.name !== "Live Project" || "Gaming Parlour" ) {
    //     if(selectedEvents.length === 1 ){
    //       total = 50
    //     }
    //     if(selectedEvents.length === 2){
    //       total = 80
    //     }
    //     if(selectedEvents.length === 3){
    //       total = 110
    //     }
    //     if(selectedEvents.length > 3){
    //       total = 150
    //     }
    //   }
    // });
    // return total+gameTotal;


// ashish code start

// let gameTotal: number = 0;
// let eventTotal: number = 0;
// let liveProjectSelected: boolean = false;

// selectedEvents.forEach((event: { name: string }) => {
//   if (event.name === "Gaming tournament") {
//     gameTotal = 100;
//   } else if (event.name === "Live Project") {
//     liveProjectSelected = true;
//     eventTotal += 1;
//   } else if (event.name !== "Gaming Parlour") {
//     eventTotal += 1;
//   }
// });

// if (liveProjectSelected) {
//   if (eventTotal === 1) {
//     eventTotal = 1;
//   } else if (eventTotal === 2) {
//     eventTotal = 51;
//   } else if (eventTotal === 3) {
//     eventTotal = 101;
//   } else if (eventTotal >= 4) {
//     eventTotal = 151;
//   }
// } else {
//   if (eventTotal === 1) {
//     eventTotal = 50;
//   } else if (eventTotal === 2) {
//     eventTotal = 80;
//   } else if (eventTotal === 3) {
//     eventTotal = 110;
//   } else if (eventTotal >= 4) {
//     eventTotal = 150;
//   }
// }
// return gameTotal + eventTotal;


// // ashish code ends
// };
// const url = "https://iitminternware.com/matrix_backend"

// const [cashfree, setCashfree] = useState<any>(null);
//   const [paymentSessionId, setPaymentSessionId] = useState<any>(null);
//   const [orderData, setOrderData] = useState<any>(null);
// useEffect(()=>{
//   const initializeSDK = async () => {
//     try {
//       // const sdk = await load({ mode: 'sandbox' });
//       const sdk = await load({ mode: 'production' });
//       setCashfree(sdk);
//     } catch (error) {
//       console.error('Error initializing Cashfree SDK:', error);
//     }
//   };
//   initializeSDK();
//   const totalPrice = calculateTotalPrice();
//   setTotal(totalPrice);
// },[selectedEvents])

// const handleSubmit = async () => {
//   try {
//     const userRef = ref(db, `users/${currentUser?.uid}/phoneNumber`);
//     const phoneSnapshot = await get(userRef);
//     const phone = phoneSnapshot.val(); // Get the actual phone number value

//     const orderId = `order_${new Date().getTime()}`;
    
//     const orderDetails = {
//       order_amount: total,
//       order_id: orderId,
//       order_currency: 'INR',
//       customer_details: {
//         customer_id: currentUser?.uid,
//         customer_name: currentUser?.displayName || '',
//         customer_email: currentUser?.email || '',
//         customer_phone: phone, // Ensure this is a valid phone number with max 20 chars
//       }
//     };

//     const response = await axios.post(`${url}/create-order`, orderDetails);
//     console.log(response.data); // Log the response data

//     if (response.data && response.data.payment_session_id) {
//       setPaymentSessionId(response.data.payment_session_id); // Store the payment session ID
//       setOrderData({ ...orderDetails, payment_session_id: response.data.payment_session_id });
//       alert('Order confirmed! You can now proceed to payment.');
//     } else {
//       alert('Failed to retrieve payment session ID.');
//     }
//     // Mailer(); //Mailer
//   } catch (error) {
//     console.error('Error creating order:', error);
//   }



      
//     // Additional logic for form submission can be added here
    
//   };


// const handleSubmit = async () => {
//   try {
//     const userRef = ref(db, `users/${currentUser?.uid}/phoneNumber`);
//     const phoneSnapshot = await get(userRef);
//     const phone = phoneSnapshot.val(); // Get the actual phone number value

    
// let gamingTournament, newsSurge,pitchers,insideEdge,uiUx,liveProject;

//     selectedEvents.forEach(event => {
//       switch (event.name) {
//         case 'Gaming tournament':
//           gamingTournament = event;
//           break;
//         case 'News Surge':
//           newsSurge = event;
//           break;
//         case 'Pitchers':
//           pitchers = event;
//           break;
//         case 'Inside Edge':
//           insideEdge = event;
//           break;
//         case 'UI/UX':
//           uiUx = event;
//           break;
//         case 'Live Project':
//           liveProject = event;
//           break;
//         default:
//           break;
//       }
//     });

//     // Log initialized variables
    // console.log({
    //   gamingTournament,
    //   newsSurge,
    //   pitchers,
    //   insideEdge,
    //   uiUx,
    //   liveProject,
    // });
    // console.log('Event values initialized.');

//     const orderId = `order_${new Date().getTime()}`;

//     const orderDetails = {
//       order_amount: total,
//       order_id: orderId,
//       order_currency: 'INR',
//       customer_details: {
//         customer_id: currentUser?.uid,
//         customer_name: currentUser?.displayName || '',
//         customer_email: currentUser?.email || '',
//         customer_phone: phone, // Ensure this is a valid phone number with max 20 chars
//       }
//     };

//     const response = await axios.post(`${url}/create-order`, orderDetails);
//     console.log(response.data); // Log the response data

//     if (response.data && response.data.payment_session_id) {
//       setPaymentSessionId(response.data.payment_session_id); // Store the payment session ID
//       setOrderData({ ...orderDetails, payment_session_id: response.data.payment_session_id });
//       toast('Order confirmed! You can now proceed to payment.', {
//         icon: '🤩',
//       });
//     } else {
//       toast.error('Failed to retrieve payment session ID.');
//     }

//     // Mailer(); //Mailer

//     // Additional logic for form submission can be added here

//   } catch (error) {
//     console.error('Error creating order:', error);
//   }
// };

  // handle pay now start--------------

  // const handlePayNow = (): void => {
  //   if (!paymentSessionId) {
  //     alert('Please confirm your order first.');
  //     return;
  //   }
  
  //   if (cashfree) {
  //     const checkoutOptions = {
  //       paymentSessionId: paymentSessionId, // Use paymentSessionId from response
  //       redirectTarget: '_modal', // Opens the payment modal
  //     };
  
  //     cashfree.checkout(checkoutOptions).then(async (result: any) => {
  //       if (result.error) {
  //         // Handle errors or user actions
  //         console.error('Payment error:', result.error);
  //         alert('Payment failed. Please try again.');
  //       } else if (result.redirect) {
  //         // Handle redirection case
  //         console.log('Redirecting for payment');
  //       } else if (result.paymentDetails) {
  //         // Handle successful payment
  //         console.log('Payment completed:', result.paymentDetails.paymentMessage);
          
  //         // Store payment details in Firebase
  //         const user = auth.currentUser;
  //         if (user) {
  //           const paymentData = {
  //             ...orderData,
  //             payment_status: 'success',
  //             payment_id: result.paymentDetails.paymentId || '',
  //             payment_message: result.paymentDetails.paymentMessage || '',
  //             payment_time: result.paymentDetails.paymentTime || '',
  //             user_id: user.uid
  //           };
  
  //           // Filter out any undefined fields
  //           const filteredPaymentData = Object.fromEntries(
  //             Object.entries(paymentData).filter(([key, value]) => value !== undefined)
  //           );
  
  //           try {
  //             const timeZone = 'Asia/Kolkata';
  //             const currentDateTime = format(toZonedTime(new Date(), timeZone), 'yyyy-MM-dd HH:mm:ssXXX'); // add timeZone
  //             await set(ref(db, 'payments/' + paymentData.order_id), {
  //               ...filteredPaymentData,
  //               processed_at: currentDateTime
  //             });
  //             console.log('Payment data stored in Firebase successfully');

  //             // Mailer(); //Mailer 
  //           } catch (error) {
  //             console.error('Error storing payment data in Firebase:', error);
  //             alert('Payment successful, but failed to store data in Firebase.');
  //           }
  //         } else {
  //           alert('User not logged in');
  //         }
  //       }
  //     }).catch((error: any) => {
  //       console.error('Error during payment:', error);
  //       alert('Error during payment. Please try again.');
  //     });
  //   } else {
  //     alert('Cashfree SDK not initialized.');
  //   }
  // };
  
  
  
  // const navigate = useNavigate()

  // const handlePayNow = (): void => {
  //   if (!paymentSessionId) {
  //     toast('Please confirm the order!', {
  //       icon: '👀',
  //     });
  //     return;
  //   }
  
    // if (cashfree) {
    //   const checkoutOptions = {
    //     paymentSessionId: paymentSessionId, // Use paymentSessionId from response
    //     redirectTarget: '_modal', // Opens the payment modal
    //   };
  
    //   cashfree.checkout(checkoutOptions).then(async (result: any) => {
    //     if (result.error) {
    //       // Handle errors or user actions
    //       console.error('Payment error:', result.error);
    //       toast('Payment failed. Please try again.', {
    //         icon: '🥲',
    //       });
    //     } else if (result.redirect) {
    //       // Handle redirection case
    //       console.log('Redirecting for payment');
    //     } else if (result.paymentDetails) {
    //       // Handle successful payment
    //       console.log('Payment completed:', result.paymentDetails.paymentMessage);
          
          // Store payment details in Firebase
  //         const user = auth.currentUser;
  //         if (user) {
  //           const paymentData = {
  //             ...orderData,
  //             payment_status: 'success',
  //             payment_id: result.paymentDetails.paymentId || '',
  //             payment_message: result.paymentDetails.paymentMessage || '',
  //             payment_time: result.paymentDetails.paymentTime || '',
  //             user_id: user.uid
              
  //           };
  
  //           // Filter out any undefined fields
  //           const filteredPaymentData = Object.fromEntries(
  //             Object.entries(paymentData).filter(([key, value]) => value !== undefined)

  //           );
  
  //           try {
  //             const timeZone = 'Asia/Kolkata';
  //             const currentDateTime = format(toZonedTime(new Date(), timeZone), 'yyyy-MM-dd HH:mm:ssXXX'); // add timeZone
  //             await set(ref(db, 'payments/' + user.uid), {
  //               ...filteredPaymentData,
  //               processed_at: currentDateTime
  //             });
  //             console.log('Payment data stored in Firebase successfully');

  //             let gamingTournament, newsSurge,pitchers,insideEdge,uiUx,liveProject;

  //             selectedEvents.forEach(event => {
  //               switch (event.name) {
  //                 case 'Gaming tournament':
  //                   gamingTournament = event;
  //                 break;
  //                 case 'News Surge':
  //                   newsSurge = event;
  //                 break;
  //                 case 'Pitchers':
  //                   pitchers = event;
  //                 break;
  //                 case 'Inside Edge':
  //                   insideEdge = event;
  //                   break;
  //                 case 'UI/UX':
  //                   uiUx = event;
  //                 break;
  //                 case 'Live Project':
  //                   liveProject = event;
  //                 break;
  //                 default:
  //                   break;
  //               }
  //             });
          
  //             // Log initialized variables

  //             // Store selected events in Firebase under their respective collections
  //             const selectedevents = [gamingTournament, newsSurge, pitchers, insideEdge, uiUx, liveProject];
  //             for (const event of selectedEvents) {
  //               if (event) {
  //                 await set(ref(db, `events/${event.name}/${user.uid}`), {
  //                   user_id: user.uid,
  //                   event_name: event.name,
  //                   teamName:teamName || null,
  //                   email : user.email,
  //                   registered_at: currentDateTime
  //                 });
  //               }
  //             }
  //             console.log('Selected event data and team name stored in Firebase successfully');
  
  //             // Mailer(); //Mailer 
  //           } catch (error) {
  //             console.error('Error storing payment data in Firebase:', error);
  //             toast('Payment successful, but failed to store data in Firebase.', {
  //               icon: '🥳',
  //             });
  //           }
  //         } else {
  //           toast('User not logged in', {
  //             icon: '🤨',
  //           });
  //         }
  //       }
  //     }).catch((error: any) => {
  //       console.error('Error during payment:', error);
  //       toast.error('Error during payment. Please try again.');
  //     });
  //   } else {
  //     toast.error('Cashfree SDK not initialized.');
  //   }

  //   // ashish
  // navigate("/Home")

 

// // Initialize Firebase Admin SDK
// const serviceAccount = require("../config/matrix2-0-firebase-adminsdk-susz5-9c5e73fcdd.json"); // Replace with your service account file path

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });

// const db2 = admin.firestore();

// async function checkUserIdExists(userId: string): Promise<boolean> {
//   try {
//     const paymentRef = db2.collection('userPayments'); // Replace 'userPayments' with your collection name
//     const snapshot = await paymentRef.where('user_id', '==', userId).get();

//     if (!snapshot.empty) {
//       return true;
//     } else {
//       return false;
//     }
//   } catch (error) {
//     console.error('Error checking user_id: ', error);
//     return false;
//   }
// }

// // Example usage:
// const userIdToCheck = 'siEsGtlpTFZUcWHshyPSh7Etivs1'; // Replace with the user_id you want to check
// checkUserIdExists(userIdToCheck).then((exists) => {
//   if (exists) {
//     console.log('User ID exists:', exists);
//   } else {
//     console.log('User ID does not exist:', exists);
//   }
// });

 

  // ashish 

  // };
  // handle pay now end -------------

  
  //fire base data access


  // handle pay now end -------------

  

  // const [paticipantData,setParticipantData] = useState<any>({})
  // const {currentUser} = useStateContext()
  // const dbref = ref(db,`users/${currentUser.uid}`)

  // const getParticipantsData=()=>{
  //   onValue(dbref,(snapshot)=>{
  //     if(snapshot.exists()){
  //       let info = snapshot.val();
  //       setParticipantData(info)
  //     }
  //   })
  // }

  // useEffect(()=>{
  //   getParticipantsData()
  // },[currentUser])


  // console.log(paticipantData) //
  
  return (
    
    <EventContainer className="bg-white z-50 w-full ">
         <div className=''>
          <video autoPlay muted loop id="myVideo" className="brightness-50 blur-[3px] z-10 fixed right-0 bottom-0 w-full h-full object-cover   top-0 ">
            <source src="./assets/3.mov" type="video/mp4" className='w-full h-full object-contain'/>
          </video>
          <div className=' absolute z-20  w-full h-full object-cover  top-0 '> 
    <img src="./assets/7.png" alt=""  className='blur-[350px] bg-no-repeat w-full h-full object-cover'/>
          </div>
    </div>
    <Layout>
    <section className=" h-full w-full flex flex-col justify-center text-center z-[10000] relative overflow-x-hidden">
    <div className="glitch-wrapper mt-[45px] max-sm:mb-5 mb-[40px] ">
	              <div className="glitch max-sm:text-5xl " data-glitch="Events">Events</div>
        </div>

      <div className=" mb-[50px] m-auto  flex flex-col justify-center items-center text-center gap-10 sm:gap-20  ">

        {events.map((event, index) => (
          <div
            key={index}
            className={`text-white w-[80%] text-left flex flex-col sm:flex-row justify-center items-center  sm:items-center  gap-1 sm:gap-5 sm:justify-between rounded-2xl h-full sm:h-[300px] md:h-[350px] shadow-[0px_0px_0px_5px_#4fd1c5] ${
              selectedEvents.includes(event) ? "bg-black" : ""
            }`}
          >
            {/* image */}
            <div className="rounded-2xl w-full md:w-[400px] lg:w-[350px] md:h-[350px] ">
              <img
                className="max-sm:border-b-[4px]   lg:border-r-[3px] max-sm:rounded-2xl border-[#00ffd4] max-md:rounded-b-2xl sm:rounded-l-2xl max-lg:object-fill object-fit  w-full  h-full"
                src={event.img}
                alt="image"
              />
            </div>

            {/* event name and desc */}
            <div className="  w-[90%]  lg:w-[800px] max-sm:w-full flex flex-col justify-center items-center py-5">
              <div className="max-sm:text-[30px] text-[#00ffd4] font-mono 
              md:text-[40px] lg:text-[50px] font-semibold text-center">
                {event.name}
              </div>

              <div className="max-sm:text-[15px] max-sm:mt-9 max-sm:mx-[3px] md:text-[15px] text-center mt-3">
                {event.desc} <div className="text-[#00ffd4] text-lg">{event.link }</div>
              </div>
            </div>

            {/* submit button */}
            {/* <div
              className={index===0 ?"" : " justify-center items-center gap-3 text-black bg-[#00ffd4] w-3/4 py-3 sm:py-[2px] sm:px-2 md:w-1/4 sm:rounded-md lg:rounded-2xl mb-5 sm:mb-0 cursor-pointer m-2"}
              onClick={() => index === 0 ? window.location.href='#': handleSelect(event)}
            >
              <h1 className="text-xl max-sm:text-[25px] sm:text-2xl font-mono font-extrabold text-center flex justify-center m-[4px]">
                {selectedEvents.includes(event) ? (
                 
                  <><h1>Selected</h1></>
                ) : (
                  index === 0 ?  <div 
                  className="apply-button bg-[#ffffff] rounded-sm text-white" 
                  data-hackathon-slug="matrix2" 
                  data-button-theme="dark-inverted"
                  style={{ height: '44px', width: '312px' }}
                >

                </div>  : 'Select'
                )}
              </h1>
            </div> */}

          </div>
        ))}
      </div>
      {isOpen && <TeamName
        teamName={teamName}
        setTeamName={setTeamName}
        setOpen={setIsOpen}
      />}
      {/* <div className="text-white text-center mt-10">
        <div className="flex flex-col justify-center items-center mt-5">
        <h1 className="font-semibold text-2xl font-mono md:text-3xl  text-[#00ffd4]">Your Selected Events</h1>
          <div className="flex flex-col sm:flex-row gap-2 mt-4 sm:mx- text-[#ffffff]">
            {selectedEvents.map((event, index) => (
              <h2 key={index} className="text-xl sm:text-3xl sm:mx-4">
                {event.name}
              </h2>
            ))}
          </div>
          <h2 className="text-[#00ffd4] text-2xl font-mono sm:text-4xl font-extrabold text-center my-10">
            Total Price: ₹ 
          </h2>
          {teamName !== '' && <h2 className="text-[#00ffd4] text-2xl font-mono sm:text-4xl font-extrabold text-center my-10">
            Your Team Name Is : {teamName}
          </h2>}
        </div> */}
        {/* <button
          onClick={() => {
            console.log(selectedEvents);
            console.log(calculateTotalPrice());
          }}

          className="bg-[#00ffd4] text-3xl sm:text-6xl font-extrabold text-center text-black px-8 rounded-xl mb-10 "
        >
          Proceed
        </button> */}
{/* 
{ isOpen === false &&
        <button
         

          className=" items-center text-center glitch-wrapper border-2 border-[#00ffd4] hover:border-none p-2 m-4 rounded-2xl "
        >
          <div className="glitch m-[20px] sm:text-4xl" data-glitch="Confirm Order">Confirm Order</div>
        </button>
}

        <button
      

          className=" items-center text-center glitch-wrapper border-2 border-[#00ffd4] hover:border-none p-2 m-4 rounded-2xl "
        >
          <div className="glitch m-[20px] sm:text-4xl" data-glitch="Pay Now">Pay Now</div>
        </button>

      </div> */}
    </section>
    </Layout>
    </EventContainer>
  );
};


const EventContainer = styled.div`

`
export default Events;