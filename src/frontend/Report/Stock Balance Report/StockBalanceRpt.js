import React from 'react';
import Footer from '../../Home/Footer';
import NavBar from '../../Home/NavBar';
import InputBlockSBR from './InputBlockSBR';
import ReportBlockSBR from './ReportBlockSBR';

function StockBalanceRpt()
{
    return(
        <>
        <NavBar />
        <InputBlockSBR />
        <ReportBlockSBR />
        <Footer />
        </>
    );
}

export default StockBalanceRpt;