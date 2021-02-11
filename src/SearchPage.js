import { Button } from '@material-ui/core';
import React from 'react';
import './SearchPage.css';
import SearchResult from './SearchResult';

function SearchPage(){
    return (
        <>
        <div className="searchpage">
            <div className="searchpage__info">
            <p> 32 days . 26 august to 30 august . 2 guest </p>
            <h1> Stays Nearby </h1>
            <Button variant="outlined" >  Cancellation Felxibility </Button>
            <Button variant="outlined" >  Type Of a Place </Button>
            <Button variant="outlined" >  Price </Button>
            <Button variant="outlined" >  Rooms and beds </Button>
            <Button variant="outlined" >  More Filter </Button>
            <Button variant="outlined" >  Cancellation Felxibility </Button>
            <Button variant="outlined" >  Cancellation Felxibility </Button>
            <Button variant="outlined" >  Cancellation Felxibility </Button>

            </div>
            <SearchResult 
img=""
location="Delhi"
price="5000 /night"
total="10000 total"
star={4.1}
description="1 BHK Flat for Rent "
title="royal room in delhi"


            />
        </div>


        </>
    )
}


export default  SearchPage;