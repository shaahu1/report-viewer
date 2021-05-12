import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import './navbar.css';
import { GetDataContext } from '../Context/GetDataContext';


const fs = require('browserify-fs')

function NavBar(props)
{
    const { setConn } = useContext(GetDataContext)

    const history = useHistory();
    const [name, setName] = useState();
    //const [data, setData] = useState();

    const [stop, setStop] = useState(0);
    useEffect( () => 
    {
        setTimeout(() => {
            fs.readFile('../Context/shopDetails.json', 'utf-8', (err, data) =>
            {
                console.log(data)
                const dataa = JSON.parse(data);
                if(dataa.state != 0 && stop < 6)
                {
                    setName('Log Out');
                    console.log("set")
                }
                else if(dataa.state == 0 && stop < 6)
                {
                    console.log('unSet')
                    setName('Log In');
                }
                if (stop <= 6)
                {
                    setStop(stop+1)
                    console.log(stop)
                }
                
            })
        }, 1000);
    },[stop])

    


    function goTo()
    {
        if (name == 'Log Out')
        {
            setConn('not');
            fs.writeFile('./shopDetails.json', JSON.stringify({"state":0}))
            fs.writeFile('./todaySale.json', JSON.stringify({"state":0}))
            history.push('/')
        }
        else if (name == 'Log In')
        {
            history.push('/')
        }

    }

    return (
        <>
            <div className = 'navbar_container' >
                <div className = 'companyName'>
                    <a href="/"> <span>  MY MAX Holdings  </span></a>
                </div>
               
                <div className  = 'linkItem_container'>
                    <ul className = 'itemList'>
                        <li> Products </li>
                        <li> Documentation </li>
                        <li> <a href='/dashboard'> Dashboard </a></li>
                        <li>  <button className='btnContact' onClick={goTo}> {name} </button> </li>
                        
                    </ul>
                </div>
            </div>

            <br/><br/><br/><br/>
        </>
    );
}

export default NavBar