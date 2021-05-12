import React from 'react';
import Footer from '../../Home/Footer';
import NavBar from '../../Home/NavBar';
import InputBlockPR from './InputBlockPR';
import ReportBlockPR from './ReportBlockPR';

function PurchasingRpt() {

    return(
        <>
        <NavBar />
        <InputBlockPR />
        <ReportBlockPR />
        <Footer />
        </>
    );
    
}

export default PurchasingRpt;