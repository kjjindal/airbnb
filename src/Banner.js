import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Banner.css';
import Search from './Search';

const Banner = () => {
    const history=useHistory();
    const [showsearch,setshowsearch]=useState(false);

    return (
        <>
        <div className="banner">
        <div className="banner__search"> 
        {showsearch && <Search />}
        
        <Button onClick={()=>setshowsearch(!showsearch)}   variant="outlined" className="banner__searchbutton" >{showsearch ?"Hide":"Search Dates" } </Button>
          </div>
<div className="banner__info">
<h1> Get out and stretch your imagination  </h1>
<h5>  Can you tell me what the name of tool taht use for presenting explaining  </h5>
<Button varient="outlined" onClick={()=>history.push('/search')}  >  Explore Nearby </Button>
</div>

        </div>


        </>
    )
}

export default Banner
