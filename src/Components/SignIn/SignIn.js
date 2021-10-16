// import React from 'react'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import '../SignIn/SignIn.css'
import axios from 'axios'


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
function SignIn() {
    const history = useHistory();
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [checkEmailUsername, setCheckEmailUsername] = useState(false)


    const handleSubmit = e => {
        e.preventDefault();
    }

    async function Login() {
        let item = { Email, Password }
        setCheckEmailUsername(false)
        let resulf = await fetch("http://localhost:1000/user/login",
            {
                method: "POST",
                body: JSON.stringify(item),
                headers: {
                    "Content-Type": "application/json",
                },
            })
        resulf = await resulf.json()
        // console.log(resulf.data.result)

        if (resulf.data.result === "Please check your Email and password") {
            setCheckEmailUsername(!checkEmailUsername)
            // alert('đăng nhập thất bại')


        } else {
            localStorage.setItem("token", JSON.stringify(resulf.data.result));
            history.push('/Home')
            // alert('đăng nhập thành công')
        }
    }

    useEffect(() => {
        document.title = 'SignIn';
    });

    return (
        <div className="wrapper-SIGNIN">
            <div className='SignIn'>
                <div className='SignIn-container'>
                    <div className='off-from-relative'>
                        <div className='off-from'>
                            <Link style={{ textDecoration: 'none' }} to='/'> <p>x</p></Link>
                        </div>
                    </div>
                    <h1>Sign In</h1>
                    <div className='input-SignIn-container-wrapper'>
                        <form onSubmit={handleSubmit}>
                            <div className='input-SignIn-container'>
                                <div className='form-inputs'>
                                    <input onChange={(e) => setEmail(e.target.value)}
                                        value={Email}
                                        className='input-SignIn'
                                        type='email' name='username' placeholder='Email'

                                    />
                                    {!/\S+@\S+\.\S+/.test(Email) ? <p>Email address is not valid</p> : null}
                                </div>
                                <div className='form-inputs'>
                                    <input onChange={(e) => setPassword(e.target.value)}
                                        value={Password} className='input-SignIn'
                                        type='password' name='password' placeholder='Password'
                                    />
                                    {!Password ? <p>Please enter password</p> : null ||
                                        Password.length < 5 ? <p>Password must be at least 5 characters</p> : null}
                                    {checkEmailUsername ? <p>Wrong username or password</p> : null}
                                </div>

                                <button type='button' onClick={Login}>Sign In</button>

                            </div>
                        </form>
                        <p>No accout? <Link style={{ textDecoration: 'none' }} className='link' to='/SignUp'> Creat Now</Link></p>
                        <div className='text-bottom-SignIn'>
                            <i >Click “Sign In” to agree to Medium’s Terms of Service and acknowledge that Medium’s Privacy Policy applies to you.</i>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn
