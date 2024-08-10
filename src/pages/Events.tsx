import { CheckCheck } from "lucide-react";
import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import styled from "styled-components";

import { getDatabase, set,ref, update, get, onValue } from "firebase/database";
import {db,auth} from "../firebase/firebase"
import { useStateContext } from "../globalcontext/ContextProvider";
import axios from "axios";
import { load } from '@cashfreepayments/cashfree-js';
import { format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';
// import { Mailer } from "../Mail/Mailer";



interface Event {
  name: string;
  img: string;
  desc: string;
  link: string;

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
    link:"https://example.com/hackathon",
   
    img: "./assets/hacakthom.png",
  },
  {
    name: "Inside Edge",
    desc: "Become the team manager of your cricket franchise and bid for top players to create your dream team. Climb from qualifying round 1 to final round 2, engaging in friendly competition and strategic planning to win the title of the best cricket team.",
    link:"https://example.com/hackathon",
    img: "./assets/INSIDE EDGE.png",
  },
  {
    name: "UI/UX Design",
    desc: "This UI/UX design competition is your chance to turn creative ideas into visually appealing, user-centric designs. Connect with design enthusiasts, explore the latest trends, and enhance your skills while contributing to innovative solutions in the tech community.",
    link:"https://example.com/hackathon",
    img: "./assets/UI-UX DESIGN.png",
  },
  {
    name: "Gaming Parlour",
    desc: "Maintain originality and integrity. Understand software/hardware, its algorithms, and design.Complete tasks within specified time limits. Originality and integrity must be maintained.Follow event behavior guidelines.",
    link:"https://example.com/hackathon",
    img: "./assets/GAME PAR.png",
  },
  {
    name: "Gaming tournament",
    desc: "Team up with friends and dive into thrilling gaming challenges! Level up your experience, make new gaming buddies, and enjoy the excitement of the walk-in gaming zone to uplift your spirits. ",
    link:"https://example.com/hackathon",
    img: "./assets/GAME TOUR.png",
  },
  {
    name: "News Surge",
    desc: "Join News Flash and dive into the world of journalism and media at MATRIX 2.0! Teams will record and document the Tech Fest in real time, capturing activities and highlights with creativity and journalistic flair. Present the event professionally and entertainingly",
    link:"https://example.com/hackathon",
    img: "./assets/NEWS SURGE.png",
  },
  {
    name: "Pitchers",
    desc: "Unleash your entrepreneurial spirit to solve real-world issues with innovative tech-driven business models. Showcase your groundbreaking ideas, and turn them into impactful prototypes to present your vision to a discerning audience.",
    img: "./assets/PITCHERS.png",
    link:"https://example.com/hackathon",
  },
  {
    name: "Live Project",
    desc: "The Live Project challenge invites you to create a tangible IoT-based solution for a real-world problem. Showcase your creativity, innovate, and gain hands-on experience with a project of your choice to enhance your portfolio. ",
    link:"https://example.com/hackathon",
    img: "./assets/LIVE PROJECT.png",
  },
  {
    name: "Data Science",
    desc: "Dive into data with tasks across three dynamic rounds, testing your skills in sorting, cleaning, and visualization. Showcase your expertise, compete with fellow enthusiasts, and uncover valuable insights into the world of data science.",
    img : "./assets/Data analytics.png",
    link:"https://example.com/hackathon",
  },

];

const Events = () => {
  const [selectedEvents, setSelectedEvents] = useState<Event[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [ShowNewsSurge, setShowNewsSurge] = useState<boolean>(false);
  const [showLiveProjectsForm, setShowLiveProjectsForm] = useState<boolean>(false);
  const [showGamingTournamentForm, setShowGamingTournamentForm] = useState<boolean>(false);
  const [dataScienceForm, setDataScienceForm] = useState<boolean>(false);
  const [picturesForm, setPicturesForm] = useState<boolean>(false);
  const [uiUxForm, setUiUxForm] = useState<boolean>(false);
  const [insideEdgeForm, setInsideEdgeForm] = useState<boolean>(false);
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
  const [teamName, setTeamName] = useState('');

  

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
    // if (event.name === "News Surge" || event.name === "Live Project" || event.name === "Gaming tournament") {
    //   if (selectedEvents.includes(event)) {
    //     setSelectedEvents((prev) => prev.filter((e) => e.name !== event.name));
    //   } else {
    //     if (event.name === "News Surge") setShowNewsSurge(true);
    //     if (event.name === "Live Project") setShowLiveProjectsForm(true);
    //     if (event.name === "Gaming tournament") setShowGamingTournamentForm(true);
    //   }
    // } else {
    //   setSelectedEvents((prev) =>
    //     prev.includes(event)
    //       ? prev.filter((e) => e !== event)
    //       : [...prev, event]
    //   );
    // }

    // New Logic

    if (event.name === "News Surge"){
        setShowNewsSurge(!ShowNewsSurge)
        setSelectedEvents((prev) =>
              prev.includes(event)
                ? prev.filter((e) => e !== event)
                : [...prev, event]
            );
    } 
    if (event.name === "Live Project"){
        setShowLiveProjectsForm(!showLiveProjectsForm)
        setSelectedEvents((prev) =>
          prev.includes(event)
            ? prev.filter((e) => e !== event)
            : [...prev, event]
        );
    }
    if (event.name === "Gaming tournament"){
        setShowGamingTournamentForm(!showGamingTournamentForm)
        setSelectedEvents((prev) =>
          prev.includes(event)
            ? prev.filter((e) => e !== event)
            : [...prev, event]
        );
    }
    if (event.name === "Inside Edge"){
        setInsideEdgeForm(!insideEdgeForm)
        setSelectedEvents((prev) =>
          prev.includes(event)
            ? prev.filter((e) => e !== event)
            : [...prev, event]
        );
    }
    if (event.name === "UI/UX"){
        setUiUxForm(!uiUxForm)
        setSelectedEvents((prev) =>
          prev.includes(event)
            ? prev.filter((e) => e !== event)
            : [...prev, event]
        );
    }
    if (event.name === "Data Science"){
        setDataScienceForm(!dataScienceForm)
        setSelectedEvents((prev) =>
          prev.includes(event)
            ? prev.filter((e) => e !== event)
            : [...prev, event]
        );
    }
    if (event.name === "Pitchers"){
        setPicturesForm(!picturesForm)
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
        if (type === "newsSurge") setShowNewsSurge(false);
        if (type === "liveProjects") setShowLiveProjectsForm(false);
        if (type === "gamingTournament") setShowGamingTournamentForm(false);
      }
    }
  };
  
  const calculateTotalPrice = (): number => {
    
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

let gameTotal: number = 0;
let eventTotal: number = 0;

selectedEvents.forEach((event: { name: string }) => {
  if (event.name === "Gaming tournament") {
    gameTotal = 100;
  } else if (event.name !== "Live Project" && event.name !== "Gaming Parlour") {
    eventTotal += 1;
  }
});

if (eventTotal === 1) {
  eventTotal = 50;
} else if (eventTotal === 2) {
  eventTotal = 80;
} else if (eventTotal === 3) {
  eventTotal = 110;
} else if (eventTotal >= 4) {
  eventTotal = 150;
}
return gameTotal + eventTotal;
// ashish code ends
};
const url = "https://iitminternware.com/matrix_backend"

const [cashfree, setCashfree] = useState<any>(null);
  const [paymentSessionId, setPaymentSessionId] = useState<any>(null);
  const [orderData, setOrderData] = useState<any>(null);
useEffect(()=>{
  const initializeSDK = async () => {
    try {
      const sdk = await load({ mode: 'sandbox' });
      setCashfree(sdk);
    } catch (error) {
      console.error('Error initializing Cashfree SDK:', error);
    }
  };
  initializeSDK();
  const totalPrice = calculateTotalPrice();
  setTotal(totalPrice);
},[selectedEvents])

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


const handleSubmit = async () => {
  try {
    const userRef = ref(db, `users/${currentUser?.uid}/phoneNumber`);
    const phoneSnapshot = await get(userRef);
    const phone = phoneSnapshot.val(); // Get the actual phone number value

    
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

    const orderId = `order_${new Date().getTime()}`;

    const orderDetails = {
      order_amount: total,
      order_id: orderId,
      order_currency: 'INR',
      customer_details: {
        customer_id: currentUser?.uid,
        customer_name: currentUser?.displayName || '',
        customer_email: currentUser?.email || '',
        customer_phone: phone, // Ensure this is a valid phone number with max 20 chars
      }
    };

    const response = await axios.post(`${url}/create-order`, orderDetails);
    console.log(response.data); // Log the response data

    if (response.data && response.data.payment_session_id) {
      setPaymentSessionId(response.data.payment_session_id); // Store the payment session ID
      setOrderData({ ...orderDetails, payment_session_id: response.data.payment_session_id });
      alert('Order confirmed! You can now proceed to payment.');
    } else {
      alert('Failed to retrieve payment session ID.');
    }

    // Mailer(); //Mailer

    // Additional logic for form submission can be added here

  } catch (error) {
    console.error('Error creating order:', error);
  }
};

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
  
  
  
  
  const handlePayNow = (): void => {
    if (!paymentSessionId) {
      alert('Please confirm your order first.');
      return;
    }
  
    if (cashfree) {
      const checkoutOptions = {
        paymentSessionId: paymentSessionId, // Use paymentSessionId from response
        redirectTarget: '_modal', // Opens the payment modal
      };
  
      cashfree.checkout(checkoutOptions).then(async (result: any) => {
        if (result.error) {
          // Handle errors or user actions
          console.error('Payment error:', result.error);
          alert('Payment failed. Please try again.');
        } else if (result.redirect) {
          // Handle redirection case
          console.log('Redirecting for payment');
        } else if (result.paymentDetails) {
          // Handle successful payment
          console.log('Payment completed:', result.paymentDetails.paymentMessage);
          
          // Store payment details in Firebase
          const user = auth.currentUser;
          if (user) {
            const paymentData = {
              ...orderData,
              payment_status: 'success',
              payment_id: result.paymentDetails.paymentId || '',
              payment_message: result.paymentDetails.paymentMessage || '',
              payment_time: result.paymentDetails.paymentTime || '',
              user_id: user.uid
            };
  
            // Filter out any undefined fields
            const filteredPaymentData = Object.fromEntries(
              Object.entries(paymentData).filter(([key, value]) => value !== undefined)
            );
  
            try {
              const timeZone = 'Asia/Kolkata';
              const currentDateTime = format(toZonedTime(new Date(), timeZone), 'yyyy-MM-dd HH:mm:ssXXX'); // add timeZone
              await set(ref(db, 'payments/' + paymentData.order_id), {
                ...filteredPaymentData,
                processed_at: currentDateTime
              });
              console.log('Payment data stored in Firebase successfully');

              let gamingTournament, newsSurge,pitchers,insideEdge,uiUx,liveProject;

              selectedEvents.forEach(event => {
                switch (event.name) {
                  case 'Gaming tournament':
                    gamingTournament = event;
                    break;
                  case 'News Surge':
                    newsSurge = event;
                    break;
                  case 'Pitchers':
                    pitchers = event;
                    break;
                  case 'Inside Edge':
                    insideEdge = event;
                    break;
                  case 'UI/UX':
                    uiUx = event;
                    break;
                  case 'Live Project':
                    liveProject = event;
                    break;
                  default:
                    break;
                }
              });
          
              // Log initialized variables

              // Store selected events in Firebase under their respective collections
              const selectedevents = [gamingTournament, newsSurge, pitchers, insideEdge, uiUx, liveProject];
              for (const event of selectedEvents) {
                if (event) {
                  await set(ref(db, `events/${event.name}/${user.uid}`), {
                    user_id: user.uid,
                    event_name: event.name,
                    registered_at: currentDateTime
                  });
                }
              }
              console.log('Selected event data stored in Firebase successfully');
  
              // Mailer(); //Mailer 
            } catch (error) {
              console.error('Error storing payment data in Firebase:', error);
              alert('Payment successful, but failed to store data in Firebase.');
            }
          } else {
            alert('User not logged in');
          }
        }
      }).catch((error: any) => {
        console.error('Error during payment:', error);
        alert('Error during payment. Please try again.');
      });
    } else {
      alert('Cashfree SDK not initialized.');
    }
  };
  // handle pay now end -------------

  
  //fire base data access


  // handle pay now end -------------

  

  const [paticipantData,setParticipantData] = useState<any>({})
  const {currentUser} = useStateContext()
  const dbref = ref(db,`users/${currentUser.uid}`)

  const getParticipantsData=()=>{
    onValue(dbref,(snapshot)=>{
      if(snapshot.exists()){
        let info = snapshot.val();
        setParticipantData(info)
      }
    })
  }

  useEffect(()=>{
    getParticipantsData()
  },[currentUser])


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
    <section className="h-full w-full flex flex-col justify-center text-center z-[10000] relative overflow-x-hidden">
    <div className="glitch-wrapper mt-[45px] max-sm:mb-5 mb-[40px] ">
	              <div className="glitch max-sm:text-5xl " data-glitch="Events">Events</div>
        </div>

      <div className="  m-auto  flex flex-col justify-center items-center text-center gap-10 sm:gap-20  ">

        {events.map((event, index) => (
          <div
            key={index}
            className={`text-white w-[80%] text-left flex flex-col sm:flex-row justify-center items-center  sm:items-center  gap-1 sm:gap-5 sm:justify-between rounded-2xl h-full sm:h-[300px] shadow-[0px_0px_0px_5px_#4fd1c5] ${
              selectedEvents.includes(event) ? "bg-black" : ""
            }`}
          >
            {/* image */}
            <div className="rounded-2xl w-full md:w-[380px] ">
              <img
                className="border-r-[3px] border-[#00ffd4] sm:rounded-l-2xl max-lg:object-fill object-cover  w-full  h-full"
                src={event.img}
                alt="image"
              />
            </div>

            {/* event name and desc */}
            <div className="w-[90%]  lg:w-[800px] max-sm:w-full flex flex-col justify-center items-center py-5">
              <div className="max-sm:text-[30px] text-[#00ffd4] font-mono 
              md:text-[40px] lg:text-[50px] font-semibold text-center">
                {event.name}
              </div>
              <div className="max-sm:text-[15px] max-sm:mt-9 max-sm:mx-[3px] md:text-[15px] text-center mt-3">
                {event.desc} {event.link}
              </div>
            </div>

            {/* submit button */}
            <div
              className="flex flex-col justify-center items-center gap-3 text-black bg-[#00ffd4] w-3/4 py-3 sm:py-0 md:w-1/4 sm:rounded-2xl mb-5 sm:mb-0 cursor-pointer m-2"
              onClick={() => index === 0 ? window.location.href='#': handleSelect(event)}
            >
              <h1 className="text-xl max-sm:text-[25px] sm:text-2xl font-mono font-extrabold text-center">
                {selectedEvents.includes(event) ? (
                  <CheckCheck className="w-7 h-7 sm:w-10 sm:h-10" />
                ) : (
                  index === 0 ? 'Register with Davfolio' : 'Select'
                )}
              </h1>
            </div>

          </div>
        ))}
      </div>
      <div className="text-white text-center mt-10">
        <div className="flex flex-col justify-center items-center mt-5">
        <h1 className="text-white text-xl ">Selected Tickets</h1>
          <div className="flex flex-col sm:flex-row gap-2 mt-4 sm:mx- text-[#ffffff]">
            {selectedEvents.map((event, index) => (
              <h2 key={index} className="text-xl sm:text-3xl sm:mx-4">
                {event.name}
              </h2>
            ))}
          </div>
          <h2 className="text-[#00ffd4] text-2xl font-mono sm:text-4xl font-extrabold text-center my-10">
            Total Price: ₹ {calculateTotalPrice()}
          </h2>
        </div>
        {/* <button
          onClick={() => {
            console.log(selectedEvents);
            console.log(calculateTotalPrice());
          }}

          className="bg-[#00ffd4] text-3xl sm:text-6xl font-extrabold text-center text-black px-8 rounded-xl mb-10 "
        >
          Proceed
        </button> */}

        <button
          onClick={handleSubmit}

          className=" items-center text-center glitch-wrapper border-2 border-[#00ffd4] hover:border-none p-2 m-4 rounded-2xl "
        >
          <div className="glitch m-[20px] sm:text-4xl" data-glitch="Confirm Order">Confirm Order</div>
        </button>

        <button
          onClick={handlePayNow}

          className=" items-center text-center glitch-wrapper border-2 border-[#00ffd4] hover:border-none p-2 m-4 rounded-2xl "
        >
          <div className="glitch m-[20px] sm:text-4xl" data-glitch="Pay Now">Pay Now</div>
        </button>

      </div>
    </section>
    </Layout>
    </EventContainer>
  );
};


const EventContainer = styled.div`

`
export default Events;