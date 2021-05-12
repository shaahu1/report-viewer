import React from 'react';
import { useState } from 'react';
import LogIn from './LogIn';
import NavBar from './NavBar';

import './home.css'

const fs = require('browserify-fs');

function Home(){

    setTimeout( function()
    {
        fs.readFile('./shopDetails.json', 'utf-8', (err, data) =>
        {
            const dataa = 0;//JSON.parse(data);
            console.log("set", dataa.state)
            if(dataa != 0)
            {
                //const dataa = JSON.parse(data);
                console.log("set", dataa.recordsets[3][0].CompanyName)
                //console.log("set", sName)
            }
            else
            {
                console.log('unSet')
                document.getElementById('login_container').style.display = 'block';
            }
            
        })
    },1500)
  
    
    window.addEventListener("load", function(){    });

    
    return(

            <>
            
            <NavBar />
            <div className='homeBg'>
                
                <LogIn /> 
                
            </div>
            
            </>
        );
    
}

export default Home;