import { useState, useEffect } from 'react'
import Navbar from './Navbar/Navbar'
import ContentTrending from '../Components/ContentTrending/ContentTrending'
import RecommendedContent from '../Components/RecommendedContent/RecommendedContent'
import OutStory from '../Components/OutStory/OutStory'
import Membership from '../Components/Membership/Membership'
import Write from '../Components/Write/Write'
import SignIn from '../Components/SignIn/SignIn'
import SignUp from '../Components/SignUp/SignUp'
import NarbarHomePage from "../Components/NarbarHomePage/NarbarHomePage"
import HomePage from '../Components/HomePage/HomePage'
import HomePageUsers from './NarbarHomePage/HomePageUsers'
import axios from 'axios'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
function AppChild() {
    const [valuepropfileUser, setValuepropfileUser] = useState([])

    const propfileUser = (dataSearch) => {
        const newArr = [...valuepropfileUser]
        newArr.push(dataSearch)
    }

    useEffect(() => {
        const add = () => {
            // setGetdata(valuepropfileUser)
            const GetItem = (localStorage.getItem("propfileUser"));
            const ItemLocalStorage = GetItem !== null ? JSON.parse(GetItem) : []
            setValuepropfileUser(ItemLocalStorage)
        }
        add()
    }, [])





    return (
        <div>
            <Router>
                <Switch>
                    < Route exact path='/'>
                        <Navbar />
                        <ContentTrending />
                        <RecommendedContent />
                    </Route>

                    <Route path='/Outstory'>
                        <OutStory />
                    </Route>
                    <Route path='/Membership'>
                        <Membership />
                    </Route>
                    <Route path='/Write'>
                        <Write />
                    </Route>
                    <Route path='/SignIn'>
                        <SignIn />
                    </Route>
                    <Route path='/SignUp'>
                        <SignUp />
                    </Route>
                    <Route path='/Home' >
                        {/* <NarbarHomePage HomePageUsers={propfileUser} /> */}
                        <NarbarHomePage />
                        <HomePage />
                    </Route>
                    {valuepropfileUser.map((item) =>
                        <Route key={item.id} path={`/Userhomepage/${item.name}`}  >
                            <NarbarHomePage />
                            {/* <NarbarHomePage HomePageUsers={propfileUser} /> */}
                            <HomePageUsers Userhomepage={item} />
                        </Route>
                    )
                    }




                </Switch>
            </Router>
        </div >


    )





}

export default AppChild
