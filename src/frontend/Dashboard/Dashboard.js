import React from 'react';
import Footer from '../Home/Footer';
import NavBar from '../Home/NavBar';
import DashboardBlock from './DashboardBlock';


function Dashboard(){

    

      //window.addEventListener('load', getShopDetails);
        return(
            <>
            
            <NavBar />
            <DashboardBlock />
            
            <Footer />
            </>
        );
    
    
}

export default Dashboard;