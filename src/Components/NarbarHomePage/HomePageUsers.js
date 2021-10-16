import { useState, useEffect } from 'react'

function HomePageUsers(props) {
    let Userhomepage = [props.Userhomepage];
    let titlePage = (props.Userhomepage.name + " " + "- Medium")
    // console.log(Userhomepage)

    useEffect(() => {
        document.title = titlePage;
    });

    return (
        <div>
            <div>
                <h1>
                    hello Page user
                </h1>
            </div>
            { Userhomepage ? Userhomepage.map((item) =>
                <div>
                    <span>{item.name}</span>
                    <img src={item.Img} />
                    <img src={item.avatar} />
                    <span>{item.username}</span>
                </div>

            ) :
                <span>loading...</span>
            }
        </div>
    )
}

export default HomePageUsers
