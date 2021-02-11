import React, { useState } from 'react';
import './Search.css';
import {DateRangePicker} from 'react-date-range';
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import {People}  from '@material-ui/icons';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';




function Search(){
    const [startdate,setstartdate]=useState(new Date());
    const [enddate,setenddate]=useState(new Date());
    const history=useHistory();

     const selectionrange={
         startDate:startdate,
         endDate:enddate,
         key:"selection",
     };

     function handleselect(ranges){
         setstartdate(ranges.selection.startDate);
         setenddate(ranges.selection.enddate);

     }
   

    return (
        <>
        <div className="search">

        <DateRangePicker  ranges={[selectionrange]} onChange={handleselect} />
        <h2>
            Number of guests 
            <People />
        </h2>
        <input min={0} defaultValue={2} type="number"  />
        <Button onClick={()=>history.push('/search')}>  Search Airbnb </Button>
        </div>



        </>
    )
}


export default Search;