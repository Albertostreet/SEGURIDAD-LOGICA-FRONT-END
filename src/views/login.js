import axios from 'axios';
import { useState } from 'react'
import { Redirect } from 'react-router';
import '../views/styles.css'
var Recaptcha = require('react-recaptcha');

const Login = () =>{

    const initialState = {
        id: '',
        password: ''
    }

    const [Login, setLogin] = useState(initialState);
    
    const [redirect,setRedirect] = useState('');

    const handleChange = event =>{
        const { id, value } = event.target;
        setLogin({
            ...Login,
            [id] : value
        });
    }

    const postRequest = async () =>{
        if(Login.id !== '' && Login.password !== ''){
            const data = {
                id: Login.id ,
                password: Login.password
            }
            
            await axios.post("http://localhost:5000/employee/signIn", data)
            .then(function(response){
                if(response.data !== ''){
                    setRedirect('/signUp');
                }else{
                    alert('Id and password combination you entered cannot be recognized or does not exist. Please try again. ')
                }
            })
        }else{
            alert('Incomplete fields. Try again');
        }
        
    }

    var callback = function () {
        console.log('Done!!!!');
      };

    if(redirect === '/signUp'){
        return(
          <Redirect push to={{
            pathname: '/signUp',
          }}/>
        )
      }

    return(
        <div className="login">
            <h1>Login</h1>
            <input type="text" placeholder="ID" id="id" onChange={handleChange}/><br/><br/>
            <input type="password" placeholder="Password" id="password" onChange={handleChange}/><br/>
            <button onClick={postRequest}>
                Submit
            </button>
            <Recaptcha
                sitekey="6LdklIIaAAAAAF8cZxqdQ62wv9Z5XLBx8eYpmJZ8"
                render="explicit"
                onloadCallback={callback}
            />
        </div>
    )
}

export default Login;

