import React from 'react';
import Banner from './Banner';
import Card from './Card';
import './Home.css';


function Home(){
    return (
        <>
        <div className="home">
            <Banner />
            <div className="home__section">
            <Card src="" title="Entire Home" description="this is card component using card component" price="55" />
            <Card src="" title="Entire Home" description="this is card component using card component" price="55" />
            <Card src="" title="Entire Home" description="this is card component using card component" price="55" />
           
            </div>
            <div className="home__section">
            <Card />
            <Card />
            <Card />
            </div>

        </div>



        </>
    )
}


export default Home