import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import './login.css'

import { customerList } from "./shopList";


import { GetDataContext } from '../Context/GetDataContext';

function LogIn() {

    

    var today = new Date().toISOString().slice(0, 10);
    var yesterday = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
    var day3 = new Date(Date.now() - (864e5)*2).toISOString().slice(0, 10);
    var day4 = new Date(Date.now() - (864e5)*3).toISOString().slice(0, 10);
    var day5 = new Date(Date.now() - (864e5)*4).toISOString().slice(0, 10);
    var day6 = new Date(Date.now() - (864e5)*5).toISOString().slice(0, 10);
    var day7 = new Date(Date.now() - (864e5)*6).toISOString().slice(0, 10);

    const { getShopDetails, setConn, getLastWeekDetails } = useContext(GetDataContext)
    const history = useHistory();

    console.log(yesterday)

    function checkLogin()
    {

        const cname = document.getElementById('companyName').value || '';
        const key = parseInt(document.getElementById('key').value) || '';
        let sname = ''; 

        console.log(cname, key)

        if ((cname !== '') && (key !== ''))
        {
            customerList.map((data) => {
                    for (let i = 0; i < 1; i++) {
                        if ( (key+25)/9  === data.key && cname === data.companyName)
                        {
                            sname = data.sName;
                            setConn(sname);
                            getShopDetails();
                            getLastWeekDetails('2021-02-17', '2021-02-16', '2021-02-15', '2021-02-14', '2021-02-13', '2021-02-12', '2021-02-11');
                            history.push('/dashboard');
                        }
                    }
                } 
            ) 
            
           
            if (sname === '')
            {
                window.alert('Invalide Name or Key!')
            }
        }

    }

    return(
        <>

        <div className="login_container" id ='login_container' >

            <center> <span className='loginTital'> Sign In </span>  </center>

            <div className='input_container' >

                <center> <input type='text'     id = 'companyName' className='inputbox' placeholder='Company Name'name = 'companyName' required /> </center> <br/>
                <center> <input type='password' id = 'key' className='inputbox' placeholder='Key' name = 'key' required /> </center>

                <center> <button className='btnSubmit' onClick={checkLogin} > Submit   </button> </center>
                
            </div>

        </div>

        </>
    );

}

export default LogIn;