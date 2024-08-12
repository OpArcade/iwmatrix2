import React from 'react'

interface teamNamePorp{
  teamName : string;
  setTeamName : any;
  setOpen : any;
}

export const TeamName = ({teamName,setTeamName,setOpen}:teamNamePorp) => {
  return (
    <div className=''>
      <h1 className='text-[#00ffd4] md:text-4xl font-semibold text-2xl mt-6 mb-4 '>Enter Your Team Name</h1>
      <section className='p-2 mt-4 max-sm:w-3/4 max-sm:m-auto gap-4 w-full sm:w-2/4 lg:w-3/4 sm:m-auto flex justify-center text-center flex-col lg:flex-row'>
        {/* For Teamname*/}
        <div className="flex gap-2  flex-col md:flex-wrap lg:w-2/4 justify-center mb-4">
        <input
          type="text"
          required
          className=" px-4 py-2 text-lg text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ffd4] focus:border-transparent"
          placeholder="Team Name"
          defaultValue={teamName}
          onChange={(e)=>{setTeamName(e.target.value)}}
        />
        <button
          className="  max-sm:text-2xl sm:text-xl lg:w-1/4 m-auto bg-[#00ffd4] hover:[#00ffc1] text-black  font-bold py-2 px-4 rounded-md"
          onClick={(e)=>{setOpen(false)}}
          >
            Submit
        </button>
      </div>
      </section>
    </div>
  )
}
