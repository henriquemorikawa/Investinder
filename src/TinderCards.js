// import { People } from '@material-ui/icons'
import React, { useState } from 'react'
import './TinderCards.css'
import TinderCard from "react-tinder-card"

function TinderCards() {
    const [companies, setCompanies] = useState([
        {
            name: "Apple",
            url: "https://logosmarcas.net/wp-content/uploads/2020/04/Apple-Logo.png"
        },
        {
            name: "Tesla",
            url: "https://logosmarcas.net/wp-content/uploads/2020/11/Tesla-Logo.png"
        }
    ])

    const swiped = ( direction, nameToDelete) =>{
        console.log("removing: " + nameToDelete)
    }

    const outOfFrame = ( name ) =>{
        console.log(name + "left the screen")
    }

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {companies.map((company) => (
                    <TinderCard
                        className="swipe"
                        key={company.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, company.name)}
                        onCardLeftScreen={() => outOfFrame(company.name)}
                    >

                        <div
                            style={{ backgroundImage: `url(${company.url})`}}
                            className="card"
                        >
                            <h3>{company.name}</h3>
                        </div>

                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards
