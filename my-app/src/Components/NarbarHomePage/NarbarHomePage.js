import { useState, useEffect, useRef } from 'react'
import "../NarbarHomePage/NarbarHomePage.css"
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import Img from '../Img/pexels-photo-5052880.jpeg'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
function NarbarHomePage(props) {
    const [onOffSearch, setOnOffSearch] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenSearch, setIsOpenSearch] = useState(false)
    const [inputUser, setInputUser] = useState("")
    const [filteredResults, setFilteredResults] = useState([])
    const [dataSearch, setDataSearch] = useState([])

    const history = useHistory();
    let menuRef = useRef(null);

    const OnoffSearch = () => {
        setOnOffSearch(!onOffSearch)
    }
    const Logout = (e) => {
        e.preventDefault();
        localStorage.clear();
        history.push('/SignIn')
    }
    const ShowOptipn = () => {
        setIsOpen(!isOpen)
    }
    useEffect(() => {
        const pageClickEvent = (event) => {
            if (menuRef.current !== null && !menuRef.current.contains(event.target)) {
                setIsOpen(!isOpen)
            }
        };
        if (isOpen) {
            window.addEventListener('click', pageClickEvent)
        }
        return () => {
            window.removeEventListener('click', pageClickEvent);
        }
    }, [isOpen])

    useEffect(() => {
        const pageClickEvent = (event) => {
            if (menuRef.current !== null && !menuRef.current.contains(event.target)) {
                setIsOpenSearch(!isOpenSearch)
            }
        };
        if (isOpenSearch) {
            window.addEventListener('click', pageClickEvent)
        }

        return () => {
            window.removeEventListener('click', pageClickEvent);
        }
    }, [isOpenSearch])


    useEffect(async () => {
        axios.get('https://5fad2c4a2ec98b0016047e81.mockapi.io/RecommendedContent')
            .then(res => {
                // setDataSearch(res.data)
                localStorage.setItem("propfileUser", JSON.stringify(res.data))
                setDataSearch(res.data)

            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const hanldChange = (e) => {
        e.preventDefault()
        setInputUser(e.target.value)
        if (inputUser !== "") {
            const filteredData = dataSearch.filter((item) => {
                // return (Object.values(item.name).toString().toLowerCase().includes(inputUser.toLowerCase()))
                return item.name.toLowerCase().includes(inputUser.toLowerCase())
            })
            setIsOpenSearch(!isOpenSearch)
            setFilteredResults(filteredData)
        }
        else {
            return
            // setFilteredResults(dataSearch)
        }
    }


    const showProfileUser = (propfileUser) => {
        props.HomePageUsers(propfileUser)
    }
    console.log("datanef", filteredResults)
    return (
        <div className='NAVBAR-HomePage'>
            <div className='Relative-NavbarHomePage'>
                <div className='NavbarHomePage' >
                    <div className='Container-NavbarHomePage'>
                        <div className='Container-NavbarHomePage-left'>
                            <h1>Medium</h1>
                        </div>
                        <div className='Container-NavbarHomePage-right'  >
                            <div className='Container-NavbarHomePage-right-ul-li'>
                                <ul >
                                    <li><i onClick={OnoffSearch} class="fas fa-search"></i></li>

                                    {onOffSearch ? (
                                        <div className='input-searchShow-container'>

                                            <div className='icon-input'>
                                                <input
                                                    ref={menuRef}
                                                    onChange={hanldChange}
                                                    type="text"
                                                    placeholder="Search Medium"
                                                />
                                            </div>

                                            <div className='Search-show-absolute'>
                                                {isOpenSearch ?
                                                    <div className='Search-show-Container'>

                                                        {
                                                            inputUser.length > 0 ? (
                                                                filteredResults.map((item) => {
                                                                    return (
                                                                        <Link className='link-color' to={`/Userhomepage/${item.name}`} >
                                                                            {/* <div key={item.id} onClick={() => showProfileUser(item)} className='Search-show-render'> */}
                                                                            <div key={item.id} className='Search-show-render'>
                                                                                <div>
                                                                                    <img src={item.Img} />
                                                                                </div>
                                                                                <div>
                                                                                    <span>{item.name}</span>
                                                                                </div>
                                                                            </div>
                                                                        </Link>

                                                                    )
                                                                })
                                                            ) : null
                                                        }

                                                    </div>
                                                    : null
                                                }
                                            </div>
                                        </div>
                                    )
                                        : null
                                    }

                                    <li><i class="fas fa-save"></i></li>
                                    <li><i class="fas fa-bell"></i></li>
                                    <li><img ref={menuRef} onClick={ShowOptipn} src={Img} /></li>
                                    {isOpen ?
                                        <div class="dropdown-content">
                                            <span onClick={Logout} ><i class="fas fa-sign-out-alt"></i>Log out</span>
                                            <hr />
                                            <span onClick={Logout} ><i class="fas fa-sign-out-alt"></i>Log out</span>
                                            <span onClick={Logout} ><i class="fas fa-sign-out-alt"></i>Log out</span>
                                            <span onClick={Logout} ><i class="fas fa-sign-out-alt"></i>Log out</span>
                                            <span onClick={Logout} ><i class="fas fa-sign-out-alt"></i>Log out</span>
                                            <hr />
                                            <span onClick={Logout} ><i class="fas fa-sign-out-alt"></i>Log out</span>
                                            <span  ><i class="fas fa-sign-out-alt"></i>Log out</span>
                                        </div>
                                        : null
                                    }
                                </ul>
                            </div>

                            <div className='Use-Container-NavbarHomePage-right-ul-li-620'>
                                <ul>
                                    <li classNam='Signin' onClick={Logout}>Log out</li>
                                </ul>
                            </div>
                        </div >
                    </div >
                </div >
            </div >
        </div >
    )
}

export default NarbarHomePage
