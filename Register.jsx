import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Register({onRegister})
{
        const [userDetails,setUserDetails] = useState({
            username:"",
            password:"",
            Phone_no:""
        })

        const [message,setMessage] = useState({
            type:"invisible-msg",
            text:"Dummy Msg"
        })
        const [role, setRole] = useState('patient');
       


        function handleInput(event)
        {
            
            setUserDetails((prevState)=>{

                return {...prevState,[event.target.name]:event.target.value};

            })
           
        }

        function handleSubmit(event)
        {
            event.preventDefault();
            console.log(userDetails);

            fetch("http://localhost:5173/register",{
                method:"POST",
                body:JSON.stringify(userDetails),
                headers:{
                    "Content-Type":"application/json"
                }
            })
            .then((response)=>response.json())
            .then((data)=>{
               
                setMessage({type:"success",text:data.message});

                setUserDetails({
                    username:"",
                    Phone_no:"",
                    password:"",
                })

                setTimeout(()=>{
                    setMessage({type:"invisible-msg",text:"Dummy sg"});
                },5000)





            })
            .catch((err)=>{
                console.log(err);
            })
            
            onRegister(role);


        }

    return (
        <section className="container">

            <form className="form" onSubmit={handleSubmit}>

                <h1>SignUp</h1>

                <input className="inp" type="username" required onChange={handleInput}
                placeholder="Enter Username" name="username" value={userDetails.username}/>

                

                <input className="inp"   type="tel" onChange={handleInput}
                placeholder="Enter Your Number" name="Phone_no" value={userDetails.Phone_no}/>
                
                <input className="inp" type="password" required maxLength={8} onChange={handleInput} 
                placeholder="Enter Password" name="password" value={userDetails.password}/>


            <label>
                Role:
                <select value={role} onChange={(e) => setRole(e.target.value)} required>
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                    <option value="government_assistant">Government Assistant</option>
                </select>
            </label>
           
       

                <button className="btn" type="submit">Join</button>

               

                <p>Already Registered ?  <Link to="/login">Login</Link> </p>

                <p className={message.type}>{message.text}</p>

            </form>


          

           

        </section>
    )
}