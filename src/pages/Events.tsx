import { CheckCheck } from "lucide-react";
import React, { useState } from "react";
import Layout from "../layout/Layout";
import styled from "styled-components";

interface Event {
  name: string;
  img: string;
  desc: string;
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

const events: Event[] = [

  {
    name: "HACKATHON",
    desc: "Hackathon is a 24-hour coding marathon where teams brainstorm, design, and develop innovative software or hardware solutions. Participants work on selected projects and present their completed work to judges for evaluation.",
    img: "./assets/hacakthom.png",
  },
  {
    name: "Inside Edge",
    desc: "Become the team manager of your cricket franchise and bid for top players to create your dream team. Climb from qualifying round 1 to final round 2, engaging in friendly competition and strategic planning to win the title of the best cricket team.",
   
    img: "./assets/INSIDE EDGE.png",
  },
  {
    name: "UI/UX",
    desc: "This UI/UX design competition is your chance to turn creative ideas into visually appealing, user-centric designs. Connect with design enthusiasts, explore the latest trends, and enhance your skills while contributing to innovative solutions in the tech community.",
   
    img: "./assets/UI-UX DESIGN.png",
  },
  {
    name: "Gaming Parlour",
    desc: "Maintain originality and integrity. Understand software/hardware, its algorithms, and design.Complete tasks within specified time limits. Originality and integrity must be maintained.Follow event behavior guidelines.",
    
    img: "./assets/GAME PAR.png",
  },
  {
    name: "Gaming tournament",
    desc: "Team up with friends and dive into thrilling gaming challenges! Level up your experience, make new gaming buddies, and enjoy the excitement of the walk-in gaming zone to uplift your spirits. ",
    
    img: "./assets/GAME TOUR.png",
  },
  {
    name: "News Surge",
    desc: "Join News Flash and dive into the world of journalism and media at MATRIX 2.0! Teams will record and document the Tech Fest in real time, capturing activities and highlights with creativity and journalistic flair. Present the event professionally and entertainingly",
    
    img: "./assets/NEWS SURGE.png",
  },
  {
    name: "Pitchers",
    desc: "Unleash your entrepreneurial spirit to solve real-world issues with innovative tech-driven business models. Showcase your groundbreaking ideas, and turn them into impactful prototypes to present your vision to a discerning audience.",
    img: "./assets/PITCHERS.png",
  },
  {
    name: "Live Project",
    desc: "The Live Project challenge invites you to create a tangible IoT-based solution for a real-world problem. Showcase your creativity, innovate, and gain hands-on experience with a project of your choice to enhance your portfolio. ",
    
    img: "./assets/LIVE PROJECT.png",
  },
  {
    name: "Data Science",
    desc: "Dive into data with tasks across three dynamic rounds, testing your skills in sorting, cleaning, and visualization. Showcase your expertise, compete with fellow enthusiasts, and uncover valuable insights into the world of data science.",
    img : "./assets/Data analytics.png"
  },

];

const Events = () => {
  const [selectedEvents, setSelectedEvents] = useState<Event[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [ShowNewsSurge, setShowNewsSurge] = useState<boolean>(false);
  const [showLiveProjectsForm, setShowLiveProjectsForm] = useState<boolean>(false);
  const [showGamingTournamentForm, setShowGamingTournamentForm] = useState<boolean>(false);
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
  const [gamingTournamentDetails, setGamingTournamentDetails] = useState<EventDetails>({
    participationType: "solo",
    team: [{ name: "", phone: "", email: "" }],
  });
  const [formErrors, setFormErrors] = useState<string[]>([]);

  const handleSelect = (event: Event) => {
    console.log(event.name)
    if (event.name === "News Surge" || event.name === "Live Projects" || event.name === "Gaming Tournament") {
      if (selectedEvents.includes(event)) {
        setSelectedEvents((prev) => prev.filter((e) => e.name !== event.name));
      } else {
        if (event.name === "News Surge") setShowNewsSurge(true);
        if (event.name === "Live Projects") setShowLiveProjectsForm(true);
        if (event.name === "Gaming Tournament") setShowGamingTournamentForm(true);
      }
    } else {
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
    const details = type === "newsSurge" ? NewsSurge : type === "liveProjects" ? liveProjectsDetails : gamingTournamentDetails;

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

  const handleRemoveTeamMember = (index: number, type: "newsSurge" | "liveProjects" | "gamingTournament") => {
    const setDetails = type === "newsSurge" ? setNewsSurge : type === "liveProjects" ? setLiveProjectsDetails : setGamingTournamentDetails;
    const details = type === "newsSurge" ? NewsSurge : type === "liveProjects" ? liveProjectsDetails : gamingTournamentDetails;

    setDetails((prev) => ({
      ...prev,
      team: prev.team.filter((_, i) => i !== index),
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
    let total:number = 0;
    // let group = 0;
    selectedEvents.forEach((event) => {
      if (event.name === "GAMING TOURNAMENT") {
        total += 100 * gamingTournamentDetails.team.length ;
      } 
      else if(event.name === "NEWS SURGE" ) {
        if(selectedEvents.length === 1 ){
          total += 50 * NewsSurge.team.length ;
        }
        else if(selectedEvents.length === 2){
          total += (50 *( NewsSurge.team.length - 1))+40;
        }
        else if(selectedEvents.length > 3){
          total += (50 *( NewsSurge.team.length - 1))+30;
        }
      }
      else if (event.name !== "LIVE PROJECTS") {
        if(selectedEvents.length === 1 ){
          total +=50
        }
        else if(selectedEvents.length === 2){
          total = 80
        }
        else if(selectedEvents.length === 3){
          total = 110
        }
        else if(selectedEvents.length === 4){
          total = 150
        }
        else if(selectedEvents.length > 4){
          total = 150
        }
      }
    });
    return total;
  };

  const handleSubmit = () => {
    const totalPrice = calculateTotalPrice();
    setTotal(totalPrice);
    // Additional logic for form submission can be added here
  };

  console.log(selectedEvents.length)

  return (
    <EventContainer className="bg-white z-50 w-full overflow-x-hidden">
         <div className=''>
          <video autoPlay muted loop id="myVideo" className="brightness-50 blur-[3px] z-10 fixed right-0 bottom-0 w-full h-full object-cover   top-0 ">
            <source src="./assets/3.mov" type="video/mp4" className='w-full h-full object-contain'/>
          </video>
          <div className=' absolute z-20  w-full h-full object-cover  top-0 '> 
    <img src="./assets/7.png" alt=""  className='blur-[350px] bg-no-repeat w-full h-full object-cover'/>
          </div>
    </div>
    <Layout>
    <section className="h-full w-full flex flex-col justify-center text-center z-[10000] relative">
    <div className="glitch-wrapper mt-[40px] max-sm:mb-5">
	              <div className="glitch max-sm:text-5xl " data-glitch="Events">Events</div>
        </div>

      <div className="  m-auto flex flex-col justify-center items-center text-center gap-10 sm:gap-20 p-4 sm:p-10 ">

      {/* <div className=" container  justify-center text-center gap-10 sm:gap-20 p-4 sm:p-10 "> */}
        {events.map((event, index) => (
          <div
            key={index}
            className={`text-white w-[80%] text-left flex flex-col sm:flex-row justify-center items-center  sm:items-center md:items-stretch gap-1 sm:gap-5 sm:justify-between rounded-2xl h-full sm:h-[300px] shadow-[0px_0px_0px_1px_#4fd1c5] ${
              selectedEvents.includes(event) ? "bg-cyan-900" : ""
            }`}
          >
            {/* image */}
            <div className="rounded-2xl w-full md:w-[400px] ">
              <img
                className="rounded-t-2xl sm:rounded-l-2xl object-cover  w-full  h-full"
                src={event.img}
                alt="image"
              />
            </div>

            {/* event name and desc */}
            <div className="w-[90%]  md:w-[800px] max-sm:w-full flex flex-col justify-center items-center py-5">
              <div className="max-sm:text-[30px] text-[#00ffd4] font-mono 
              md:text-[50px] font-semibold text-center">
                {event.name}
              </div>
              <div className="max-sm:text-[15px] max-sm:mt-9 max-sm:mx-[3px] md:text-[20px] text-center mt-3">
                {event.desc}
              </div>
            </div>

            {/* submit button */}
            <div
              className="flex flex-col justify-center items-center gap-3 text-black bg-[#00ffd4] w-3/4 py-3 sm:py-0 md:w-1/4 sm:rounded-r-2xl mb-5 sm:mb-0"
              onClick={() => index === 0 ? window.location.href='': handleSelect(event)}
            >
              <h1 className="text-xl max-sm:text-[25px] sm:text-4xl font-mono font-extrabold text-center">
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
      {ShowNewsSurge && (
        <div className="text-white text-center mt-10">
          <h2 className="text-[#00ffd4] text-4xl sm:text-6xl font-extrabold text-center">
            News Surge Registration
          </h2>
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="flex flex-col gap-5 mt-4 w-[80%]">
              {/* <label className="text-2xl sm:text-4xl">
                Participation Type:
                <select
                  className="bg-black text-white"
                  name="participationType"
                  required
                  value={NewsSurge.participationType}
                  onChange={(e) => handleFormChange(e, undefined, "newsSurge")}
                >
                  <option value="solo">Solo</option>
                  <option value="team">Team</option>
                </select>
              </label> */}
              {NewsSurge.team.map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-5 p-7 sm:p-10 shadow-[0px_0px_0px_1px_#4fd1c5] rounded-2xl"
                >
                  <input
                    className="bg-black text-white text-2xl p-2 shadow-[0px_0px_0px_1px_#4fd1c5] rounded-xl"
                    required
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={member.name}
                    onChange={(e) => handleFormChange(e, index, "newsSurge")}
                  />
                  <input
                    className="bg-black text-white text-2xl p-2 shadow-[0px_0px_0px_1px_#4fd1c5] rounded-xl"
                    required
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={member.phone}
                    onChange={(e) => handleFormChange(e, index, "newsSurge")}
                  />
                  <input
                    className="bg-black text-white text-2xl p-2 shadow-[0px_0px_0px_1px_#4fd1c5] rounded-xl"
                    required
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={member.email}
                    onChange={(e) => handleFormChange(e, index, "newsSurge")}
                  />
                      <input
                      className="bg-black text-white text-2xl p-2 shadow-[0px_0px_0px_1px_#4fd1c5] rounded-xl"
                      required
                      type="text"
                      name="teamName"
                      placeholder="Team Name"
                      value={team}
                      onChange={(e) =>{setTeam(e.target.value)}}
                      />
                  {NewsSurge.participationType === "team" &&
                    index > 0 && (
                      <button
                        className="bg-red-700 text-white font-bold text-2xl"
                        onClick={() => handleRemoveTeamMember(index, "newsSurge")}
                      >
                        Remove
                      </button>
                    )}
                </div>
              ))}
              {NewsSurge.participationType === "team" &&
                NewsSurge.team.length < 3 && (
                  <>
                  <button
                    className="bg-[#00ffd4] text-black font-bold text-3xl"
                    onClick={() => handleAddTeamMember("newsSurge")}
                    >
                    Add Team Member
                  </button>
                </>
                )}
              <button
                className="bg-[#00ffd4] text-black font-bold text-3xl"
                onClick={() => handleSubmitForm("newsSurge")}
              >
                Submit
              </button>
              {formErrors.length > 0 && (
                <div className="text-red-500 mt-4">
                  {formErrors.map((error, index) => (
                    <p key={index} className="text-2xl">
                      {error}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {showLiveProjectsForm && (
        <div className="text-white text-center mt-10">
          <h2 className="text-[#00ffd4] text-4xl sm:text-6xl font-extrabold text-center">
            Live Projects Registration
          </h2>
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="flex flex-col gap-5 mt-4 w-[80%]">
              {/* <label className="text-2xl sm:text-4xl">
                Participation Type:
                <select
                  className="bg-black text-white"
                  name="participationType"
                  required
                  value={liveProjectsDetails.participationType}
                  onChange={(e) => handleFormChange(e, undefined, "liveProjects")}
                >
                  <option value="solo">Solo</option>
                  <option value="team">Team</option>
                </select>
              </label> */}
              {liveProjectsDetails.team.map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-5 p-7 sm:p-10 shadow-[0px_0px_0px_1px_#4fd1c5] rounded-2xl"
                >
                  <input
                    className="bg-black text-white text-2xl p-2 shadow-[0px_0px_0px_1px_#4fd1c5] rounded-xl"
                    required
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={member.name}
                    onChange={(e) => handleFormChange(e, index, "liveProjects")}
                  />
                  <input
                    className="bg-black text-white text-2xl p-2 shadow-[0px_0px_0px_1px_#4fd1c5] rounded-xl"
                    required
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={member.phone}
                    onChange={(e) => handleFormChange(e, index, "liveProjects")}
                  />
                  <input
                    className="bg-black text-white text-2xl p-2 shadow-[0px_0px_0px_1px_#4fd1c5] rounded-xl"
                    required
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={member.email}
                    onChange={(e) => handleFormChange(e, index, "liveProjects")}
                  />
                    <input
                    className="bg-black text-white text-2xl p-2 shadow-[0px_0px_0px_1px_#4fd1c5] rounded-xl"
                    required
                    type="text"
                    name="teamName"
                    placeholder="Team Name"
                    value={team}
                    onChange={(e) =>{setTeam(e.target.value)}}
                    />
                  {liveProjectsDetails.participationType === "team" &&
                    index > 0 && (
                      <button
                        className="bg-red-700 text-white font-bold text-2xl"
                        onClick={() => handleRemoveTeamMember(index, "liveProjects")}
                      >
                        Remove
                      </button>
                    )}
                </div>
              ))}
              {liveProjectsDetails.participationType === "team" &&
                liveProjectsDetails.team.length < 3 && (
                  <>
                  <button
                    className="bg-[#00ffd4] text-black font-bold text-3xl"
                    onClick={() => handleAddTeamMember("gamingTournament")}
                    >
                    Add Team Member
                  </button>
                </>
                )}
              <input type="file" name="" id="" />
              <button
                className="bg-[#00ffd4] text-black font-bold text-3xl"
                onClick={() => handleSubmitForm("liveProjects")}
              >
                Submit
              </button>
              {formErrors.length > 0 && (
                <div className="text-red-500 mt-4">
                  {formErrors.map((error, index) => (
                    <p key={index} className="text-2xl">
                      {error}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {showGamingTournamentForm && (
        <div className="text-white text-center mt-10">
          <h2 className="text-[#00ffd4] text-4xl sm:text-6xl font-extrabold text-center">
            Gaming Tournament Registration
          </h2>
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="flex flex-col gap-5 mt-4 w-[80%]">
              {/* <label className="text-2xl sm:text-4xl">
                Participation Type:
                <select
                  className="bg-black text-white"
                  name="participationType"
                  required
                  value={gamingTournamentDetails.participationType}
                  onChange={(e) => handleFormChange(e, undefined, "gamingTournament")}
                >
                  <option value="solo">Solo</option>
                  <option value="team">Team</option>
                </select>
              </label> */}
              {gamingTournamentDetails.team.map((member, index) => (

                <div
                  key={index}
                  className="flex flex-col gap-5 p-7 sm:p-10 shadow-[0px_0px_0px_1px_#4fd1c5] rounded-2xl"
                >

                  <input
                    className="bg-black text-white text-2xl p-2 shadow-[0px_0px_0px_1px_#4fd1c5] rounded-xl"
                    required
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={member.name}
                    onChange={(e) => handleFormChange(e, index, "gamingTournament")}
                  />
                  <input
                    className="bg-black text-white text-2xl p-2 shadow-[0px_0px_0px_1px_#4fd1c5] rounded-xl"
                    required
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={member.phone}
                    onChange={(e) => handleFormChange(e, index, "gamingTournament")}
                  />
                  <input
                    className="bg-black text-white text-2xl p-2 shadow-[0px_0px_0px_1px_#4fd1c5] rounded-xl"
                    required
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={member.email}
                    onChange={(e) => handleFormChange(e, index, "gamingTournament")}
                  />
                      <input
                      className="bg-black text-white text-2xl p-2 shadow-[0px_0px_0px_1px_#4fd1c5] rounded-xl"
                      required
                      type="text"
                      name="teamName"
                      placeholder="Team Name"
                      value={team}
                      onChange={(e) =>{setTeam(e.target.value)}}
                      />
                  {gamingTournamentDetails.participationType === "team" &&
                    index > 0 && (
                      <button
                        className="bg-red-700 text-white font-bold text-2xl"
                        onClick={() => handleRemoveTeamMember(index, "gamingTournament")}
                      >
                        Remove
                      </button>
                    )}
                </div>
              ))}
              {gamingTournamentDetails.participationType === "team" &&
                gamingTournamentDetails.team.length < 4 && (
                  <>
                    <button
                      className="bg-[#00ffd4] text-black font-bold text-3xl"
                      onClick={() => handleAddTeamMember("gamingTournament")}
                      >
                      Add Team Member
                    </button>
                  </>
                )}
              <button
                className="bg-[#00ffd4] text-black font-bold text-3xl"
                onClick={() => handleSubmitForm("gamingTournament")}
              >
                Submit
              </button>
              {formErrors.length > 0 && (
                <div className="text-red-500 mt-4">
                  {formErrors.map((error, index) => (
                    <p key={index} className="text-2xl">
                      {error}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <div className="text-white text-center mt-10">
        <h2 className="text-[#00ffd4] text-3xl font-mono sm:text-6xl font-extrabold text-center">
          Selected Events:
        </h2>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="flex flex-col gap-2 mt-4  text-[#ffffff]">
            {selectedEvents.map((event, index) => (
              <h2 key={index} className="text-xl sm:text-3xl">
                {event.name}
              </h2>
            ))}
          </div>
          <h2 className="text-[#00ffd4] text-3xl font-mono sm:text-5xl font-extrabold text-center my-10">
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
          onClick={() => {
            console.log(selectedEvents);
            console.log(calculateTotalPrice());
          }}

          className=" items-center text-center glitch-wrapper border-2 border-[#00ffd4] hover:border-none p-2 m-4 rounded-2xl "
        >
          <div className="glitch m-[20px] sm:text-4xl" data-glitch="Proceed">Proceed</div>
        </button>
      </div>
    </section>
    </Layout>
    </EventContainer>
  );
};


const EventContainer = styled.div`
/* .container{
  max-width:100%;
  display:grid;
  grid-template-columns:repeat(auto-fill, minmax(200px , 1fr));
  gap:1rem;
} */
`
export default Events;