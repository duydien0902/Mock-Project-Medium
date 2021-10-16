import { useState, useEffect } from 'react'
import '../SignIn/SignIn.css'
import { useHistory } from 'react-router-dom'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
function SignUp(props) {
    const history = useHistory();
    const [Username, setUsername] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [Comfimpassword, setComfimpassword] = useState('')

    const [checkEmail, setcheckEmail] = useState(false)
    const [checkUsername, setcheckUsername] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    async function Signup() {
        const item = { Username, Email, Password, Comfimpassword }

        setcheckEmail(false)
        setcheckUsername(false)
        let resulf = await fetch('http://localhost:1000/user/create', {
            method: "POST",
            body: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json",
            },
        })
        resulf = await resulf.json()
        console.log(resulf.data.result)

        if (resulf.data.result === "Create new user successfull") {
            history.push('/Signin')
        }
        if (resulf.data.result === "Email already in use") {
            setcheckEmail(!checkEmail)

        } if (resulf.data.result === "Username already in use") {
            setcheckUsername(!checkUsername)
        }
    }
    useEffect(() => {
        document.title = 'SignUp';
    });

    return (
        <div className=' wrapper-SIGNUP'>
            <div className='SignUp'>
                <div className='SignUp-container'>
                    <div className='off-from-relative'>
                        <div className='off-from'>
                            <Link style={{ textDecoration: 'none' }} to='/'> <p>x</p></Link>
                        </div>
                    </div>

                    <h1>Sign Up</h1>
                    <div className='input-SignUp-container-wrapper'>
                        <form onSubmit={handleSubmit}>
                            <div className='input-SignUp-container'>

                                <div className='form-inputs'>
                                    <input onChange={e => setUsername(e.target.value)}
                                        value={Username} className='input-SignUp'
                                        type='text' name='username' placeholder='User Name'
                                    />
                                    {!Username.trim() ? <p>Please enter your account name</p> : null ||
                                        Username.length < 4 ? <p>account name has at least 4 characters</p> : null}
                                    {checkUsername ? <p>Username already used</p> : null}
                                </div>


                                <div className='form-inputs'>
                                    <input onChange={e => setEmail(e.target.value)}
                                        value={Email} className='input-SignUp'
                                        type='email' name='email' placeholder='Email'
                                    />
                                    {!/\S+@\S+\.\S+/.test(Email) ? <p>Email address is not valid</p> : null}
                                    {checkEmail ? <p>Email already used</p> : null}
                                </div>

                                <div className='form-inputs'>
                                    <input onChange={e => setPassword(e.target.value)}
                                        value={Password} className='input-SignUp'
                                        type='password' name='password' placeholder='Password'
                                    />
                                    {!Password ? <p>Please enter password</p> : null ||
                                        Password.length < 5 ? <p>Password must be at least 5 characters</p> : null}
                                </div>

                                <div className='form-inputs'>
                                    <input onChange={e => setComfimpassword(e.target.value)}
                                        value={Comfimpassword} className='input-SignUp'
                                        type='password' name='Comfimpassword' placeholder='Comfim Password'
                                    />
                                    {!Comfimpassword ? <p>Please enter password</p> : null ||
                                        Password !== Comfimpassword ? <p>Password does not match</p> : null}
                                </div>

                                {
                                    (
                                        !Username.trim()
                                        ||
                                        Username.length < 4
                                        ||
                                        !/\S+@\S+\.\S+/.test(Email)
                                        ||
                                        !Password
                                        ||
                                        Password.length < 5
                                        ||
                                        !Comfimpassword
                                        ||
                                        Password !== Comfimpassword
                                    ) ?

                                        <button type="button" >Sign Up</button>
                                        :
                                        <button type="button" onClick={Signup}>Sign Up</button>
                                }
                            </div>
                        </form>

                        <p><Link className='link' to='/SignIn'> Sign In </Link>   Now!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
