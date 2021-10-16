import React from 'react'
import '../Navbar/Navbar.css'
import Img from '../Img/pexels-photo-5052880.jpeg'
function Navbar() {
    return (
        <div className='NAVBAR'>
            <div className='Relative-Navbar'>
                <div className='Navbar'>
                    <div className='Container-Navbar'>
                        <div className='Container-Navbar-left'>
                            <h1>Medium</h1>
                        </div>
                        <div className='Container-Navbar-right'>
                            <div className='Container-Navbar-right-ul-li'>
                                <ul >
                                    <li>Our story</li>
                                    <li>Membership</li>
                                    <li>Write</li>
                                    <li classNam='Signin'>Sign In</li>

                                </ul>
                            </div>

                            <div className='Use-Container-Navbar-right-ul-li-620'>
                                <ul>
                                    <li classNam='Signin'>Sign In</li>
                                </ul>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <div className="Header">
                <div className='Container-Header'>
                    <div className='Header-left'>
                        <h1>Medium is a place to write, read, and connect</h1>
                        <p>It's easy and free to post your thinking on any topic and connect with millions of readers.</p>
                        <button>Start Writing</button>
                    </div>
                    <div className='Header-left-832'>
                        <h1>Wtite, read, and connect</h1>
                        <p>It's easy and free to post your thinking on any topic and connect with millions of readers.</p>
                        <button>Start Writing</button>
                    </div>
                    <div className='Header-right'>
                        <img src={Img} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
