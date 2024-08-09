import { useEffect, useRef, useState } from "react";
import { getDatabase, ref, update, get } from "firebase/database";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Form() {
    const [phone, setPhone] = useState<string>('');
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
                phoneNumber: phone,
                year: year,
                college: selectedCollege,
            });

            console.log('Data saved to Firebase');
            navigate('/events');
        } else {
            console.log('No user is logged in');
        }
    };

    return (
        <div className="flex items-center justify-center h-[100vh] w-[100vw] text-white">
            <div className="border-2 border-white px-20 py-10 flex flex-col gap-5 rounded-xl">
                <h1 className="text-center text-3xl font-semibold">Details</h1>
                <div>
                    <h1>Phone No.</h1>
                    <input
                        type="tel"
                        className="bg-transparent outline-none border rounded-full px-3 py-1"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div>
                    <h1>Year</h1>
                    <input
                        type="number"
                        className="bg-transparent outline-none border rounded-full px-3 py-1"
                        value={year || ''}
                        onChange={(e) => setYear(Number(e.target.value))}
                        min="1"
                        max="4"
                    />
                </div>
                <div className="flex flex-col items-center justify-start gap-5">
                    <div>
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
    );
}
