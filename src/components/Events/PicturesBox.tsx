import React,{useState} from 'react'

interface PicturesBoxProps{
    data : any;
    setData : any;
    setOpen : any;
}




const PicturesBox = ({data,setData,setOpen}:PicturesBoxProps) => {


  const [name,setName] = useState<string>("");
  const [phone,setPhone] = useState<string>("");
  const [email,setEmail] = useState<string>("");

  const submitFormData = (e:any)=>{
    e.preventDefault();
    setData({
      ...data,
      dataScience : {
        name,
        email,
        phone,
      }
    });
    setOpen(false);

  }

    return (
      <form onSubmit={(e:any)=>submitFormData(e)}>
        <div className="text-white text-center mt-10">
          <h2 className="text-[#00ffd4] text-4xl sm:text-6xl font-extrabold text-center">
            Pictures Registration
          </h2>
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="flex flex-col gap-5 mt-4 w-[80%]">
            <div
                  className="flex flex-col gap-5 p-7 sm:p-10 shadow-[0px_0px_0px_1px_#4fd1c5] rounded-2xl"
                >
                  <input
                    className="bg-black text-white text-2xl p-2 shadow-[0px_0px_0px_1px_#4fd1c5] rounded-xl"
                    required
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={(e)=>setName(e.target.value)}
                  />
                  <input
                    className="bg-black text-white text-2xl p-2 shadow-[0px_0px_0px_1px_#4fd1c5] rounded-xl"
                    required
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    onChange={(e)=>setPhone(e.target.value)}
                  />
                  <input
                    className="bg-black text-white text-2xl p-2 shadow-[0px_0px_0px_1px_#4fd1c5] rounded-xl"
                    required
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                </div>
                <button
                  className="bg-[#00ffd4] text-black font-bold text-3xl"
                  type='submit'
                  
                >
                  Submit
                </button>
            </div>
          </div>
        </div>
      </form>
    
  )
}

export default PicturesBox
