import axios from 'axios';
import { useState } from 'react'

const SignUp = () =>{
    const initialState = {
        name: "",
        lastname: "",
        phone: "",
        password: ""
    }

    const [signUp, setSignUp] = useState(initialState);

    const handleChange = event => {
        const { id, value } = event.target;
        setSignUp({
            ...signUp,
            [id]: value
        });
    }

    const postRequest = async() =>{
        if(signUp.name !== '' && signUp.lastname !== '' && signUp.phone !== '' && signUp.password !== ''){
            await axios.post("http://localhost:5000/employee/signUp", signUp)
            .then(function(response){
                if(response.data !== ''){
                    alert('Registered employee!');
                }else{
                    alert('Seems to be an error. Please try again. ')
                }
            })
        }else{
            alert('Incomplete fields. Try again');
        }
    }

    return(
        <div>
            <h1>Sign Up</h1>
            <input type="text" placeholder="Name" id="name" onChange={handleChange}/><br/>
            <input type="text" placeholder="Lastname" id="lastname" onChange={handleChange}/><br/>
            <input type="text" placeholder="Phone number" id="phone" onChange={handleChange}/><br/>
            <input type="password" placeholder="Password" id="password" onChange={handleChange}/><br/>
            <button onClick={postRequest}>
                Submit
            </button>
        </div>
    )
}

export default SignUp