import React, { useState  } from 'react';
import Footer from '../Home/Footer';
import NavBar from '../Home/NavBar';

import InputBlock from './InputBlock';
import ReportBlock from './ReportBlock';

function ReportView()
{

    const [data, setData] = useState([])
    let inputValue = {
        location: '',
        cashier : '',
        unit : '',
        fDate : '',
        tDate : ''
    }

   

    return(
        <>
        <NavBar />
        <InputBlock />
        <ReportBlock summeryReportData = {data} FromDate = {inputValue.fDate} ToDate = {inputValue.tDate}/>

            <br/><br/>
        <Footer />
        </>
    );
}

export default ReportView;