import { useState,useContext, useEffect } from "react"
import { UserContext } from "../contexts/UserContext";
import { Link,useNavigate } from "react-router-dom"

export default function Login({onLogin})
{


    const loggedData = useContext(UserContext);

    


    const navigate = useNavigate();

    const [userCreds,setUserCreds] = useState({
        username:"",
        password:""
    })

    const [message,setMessage] = useState({
        type:"invisible-msg",
        text:"Dummy Msg"
    })

    

    function handleInput(event)
    {
        setUserCreds((prevState)=>{
            return {...prevState,[event.target.name]:event.target.value};
        })
    }

    function handleSubmit(event)
    {   
        event.preventDefault();
        console.log(userCreds);

        fetch("http://localhost:5173/login",{
            method:"POST",
            body:JSON.stringify(userCreds),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then((response)=>{

            if(response.status===404)
            {
                setMessage({type:"error",text:"Username or Email Doesnt Exist"});
            }
            else if(response.status===403) {
                setMessage({type:"error",text:"Incorrect Password"});
            }
           

            setTimeout(()=>{
                setMessage({type:"invisible-msg",text:"Dummy Msg"})
            },5000)

            return response.json();
            
            
        })
        .then((data)=>{

           

            if(data.token!==undefined)
            {
                localStorage.setItem("health-care",JSON.stringify(data));

                loggedData.setLoggedUser(data);

                navigate("/track");
            }

        })
        .catch((err)=>{
            console.log(err);
        })

const userRole = username === 'patient' ? 'patient' : username === 'doctor' ? 'doctor' : 'government_assistant';
        onLogin(userRole);
    }


    return (
        <section className="container">

            <form className="form" onSubmit={handleSubmit}>

                <h1>Login</h1>
                <label>
                    
                <input className="inp" required type="username" onChange={handleInput}
                placeholder="Enter Username" name="username" value={userCreds.username}/>
</label>
<label>
                <input className="inp" maxLength={8} type="password" onChange={handleInput} 
                placeholder="Enter Password" name="password" value={userCreds.password}/>
      
      </label>
                <button className="btn" type="submit">Login</button>

                <p>Dont Have a Account ? <Link to="/register">Register Now</Link></p>

                <p className={message.type}>{message.text}</p>

            </form>

        </section>
    )
}