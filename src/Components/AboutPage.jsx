import React from 'react';

import {connect} from 'react-redux'

//Parents: ProjectContainer

const Project = (props) => {

    return (
        <>
        <div className="about-page">
            <img
                className="profile-pic"
                src="./images/KatyBioPhoto.png"
                alt="artist pic"
            />
            <div className="text">
                <p>
                Hi! My name is Yuan Yuan, but most people know me as Katy. 
                I have a multi-national background and have been based in New York City for the past decade.
                </p>
                <p>
                My curiosity of the natural world was first sparked when I began 
                traveling extensively after college. Many of my journeys were spent 
                exploring the cloud forests in South America. It was there that I 
                began to notice the sheer diversity of life that exists on this planet.
                </p>
                <p>
                Back in the concrete jungle of New York City, the New York Botanical 
                Garden became a frequent refuge for me from the chaos of everyday city 
                life. It was here that I enrolled in the Botanical Art Certificate program. 
                In 2018, I was selected for my first Juried Botanical Art show, the 21st 
                Annual at Wave Hill.
                </p>
                <p>
                It is ironic that it was in the city where my interest in nature really 
                blossomed. I began to notice on my daily walks through my local beloved park, 
                Inwood Hill, that the natural world is constantly evolving, and thus there is 
                always something new to see and be in awe of.

                </p>
                <p>
                My interest in the natural world has extended beyond the plant Kingdom. 
                Last year, I joined the New York Mycological Society. This accelerated my 
                recent foray into the world of Fungi. My current work in progress has a 
                focus in this fascinating kingdom.
                </p>
            </div>
        </div>
        </>
    )
};

export default connect()(Project);