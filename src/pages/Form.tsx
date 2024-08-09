import { useEffect, useRef, useState } from "react";
import { getDatabase, ref, update, get } from "firebase/database";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";





export default function Form() {
    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [course, setCourse] = useState<string>('');
    const [teamname, setteamname] = useState<string>('');
    const college = useRef<HTMLSelectElement>(null);
    const [year, setYear] = useState<number | undefined>();
    const [otherCollege, setOtherCollege] = useState<string>('');
    const [otherCollegeEnabled, setOtherCollegeEnabled] = useState(false);
    const navigate = useNavigate();

    const handleCollegeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value === "Others") {
            setOtherCollegeEnabled(true);
        } else {
            setOtherCollegeEnabled(false);
            setOtherCollege('');
        }
    };
    const auth = getAuth();
            const user = auth.currentUser;
            const db = getDatabase();
    useEffect(() => {
        if(user!== undefined){
            const checkPhoneNumber = async () => {
            

                if (user) {
                    const userRef = ref(db, `users/${user.uid}/phoneNumber`);
                    const phoneSnapshot = await get(userRef);
    
                    if (phoneSnapshot.exists()) {
                        navigate('/');
                    }
                }
            };
    
            checkPhoneNumber();
        }
    }, [user]);
    
    const submit = async () => {
        const auth = getAuth();
        const user = auth.currentUser;
        const db = getDatabase();

        if (user) {
            const userRef = ref(db, `users/${user.uid}`);
            const selectedCollege = otherCollegeEnabled ? otherCollege : college.current?.value;

            await update(userRef, {
                name:name,
                phoneNumber: phone,
                year: year,
                course: course,
                teamname: teamname,
                college: selectedCollege,
            });

            console.log('Data saved to Firebase');
            navigate('/Home');
        } else {
            console.log('No user is logged in');
        }
    };

    return (
        <FormContainer>


        <div className=''>
          <video autoPlay muted loop id="myVideo" className="brightness-50 z-10 fixed right-0 bottom-0 w-full h-full object-cover   top-0 ">
            <source src="./assets/3.mov" type="video/mp4" className='w-full h-full object-contain'/>
          </video>
          <div className=' absolute z-20  w-full h-full object-cover  top-0 '> 
    <img src="./assets/7.png" alt=""  className='blur-[350px] bg-no-repeat w-full h-full object-cover'/>
          </div>
    </div>


        <div className="z-[10000] fixed flex items-center justify-center h-[100vh] w-[100vw] text-white backdrop-blur-md">
            <div className="border-2 border-white px-20 py-10 flex flex-col justify-center text-left gap-5 rounded-xl">
                <h1 className="text-center max:sm-text-xl text-3xl font-semibold">Details</h1>
                <div className="flex flex-col md:flex-row justify-around items-center ">
                    <h1>Name</h1>
                    <input
                        type="text"
                        className="bg-transparent outline-none border rounded-full px-4 py-2"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="flex flex-col md:flex-row justify-around items-center ">
                    <h1>Phone No.</h1>
                    <input
                        type="text"
                        className="bg-transparent outline-none border rounded-full px-4 py-2"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className="flex flex-col md:flex-row gap-4 justify-start items-center">
                    <h1>Course</h1>
                    <input
                        type="text"
                        className="bg-transparent outline-none border rounded-full px-3 py-1"
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-[45px] md:flex-row justify-start items-center">
                    <h1>Year</h1>
                    <input
                        type="number"
                        className="bg-transparent outline-none border rounded-full px-3 py-1"
                        value={year || ''}
                        onChange={(e) => setYear(Number(e.target.value))}
                        min="1900"
                        max={new Date().getFullYear()}
                    />
                </div>
                <div className="flex  gap-5">
                    <div className="flex flex-row justify-around text-center gap-[50px]">
                        <h1>College</h1>
                        <select
                            className="bg-transparent outline-none border"
                            ref={college}
                            onChange={handleCollegeChange}
                        >
                            <option value="IITM" className="bg-black">IITM</option>
                            <option value="IINTM" className="bg-black">IINTM</option>
                            <option value="IIPTM" className="bg-black">IIPTM</option>
                            <option value="Others" className="bg-black">Others</option>
                        </select>
                    </div>
                    <input
                        type="text"
                        className={`bg-transparent outline-none border rounded-full px-3 py-1 ml-4 ${otherCollegeEnabled ? '' : 'hidden'}`}
                        placeholder="Enter your college"
                        value={otherCollege}
                        onChange={(e) => setOtherCollege(e.target.value)}
                        disabled={!otherCollegeEnabled}
                    />
                </div>
                
                
                <button onClick={submit} className="bg-white text-black px-5 py-3 rounded-full font-semibold">Submit</button>
            </div>
        </div>
        </FormContainer>
    );
}
const FormContainer = styled.div`
    
`