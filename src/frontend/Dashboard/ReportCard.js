import React from 'react';
import { useHistory } from 'react-router-dom';
import './reportcard.css'

import b from '../../imgs/sales2.webp'

function ReportCard(props) {


    const history = useHistory();

    function link() {
        history.push(`${props.link}`)
    }

    return(
        <>
        <div onClick={link}>
            <div className = 'reportCard_container' >

                <img src={b} height='200px' className='img' alt=''/>
                <br/>
                <br/>

                <center>
                    <span className='tital'>  {props.reportName}  </span>
                </center> 
                
                <br/>
            
            </div>
        </div>
        </>
    );
    
    
}

export default ReportCard;