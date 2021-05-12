import React from 'react';
import './errorBox.css';

function ErrorBox()
{
    return (
        <>
        <div id = 'errorBox_container'>
            <center> <span className='errorMsg'> Please Fill all the Input Fields to view the Report </span> </center>
        </div>
        </>
    );
}

export default ErrorBox;