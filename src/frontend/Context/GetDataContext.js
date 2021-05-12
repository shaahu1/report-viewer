import React, { createContext } from 'react';
import axios from 'axios';

export const GetDataContext = createContext();
const fs = require('browserify-fs');

class GetDataContextProvider extends React.Component {

    state = {
            locations:'',
            cashiers: '',
            units: '',

            locationInput:'',
            cashierInput: '',
            unitInput: '',
            fromDate: '',
            toDate: '',

            shopName: '',
            shopAddress: '',
        
            salesSummery: '',
            stockBalance : '',
            purchaceReport: '',

            details : '',

            isLogin: ''
    };

    setConn = (serverName) => {  // set server name 
        axios
        .post('https://reportviewer1.herokuapp.com/', {server: serverName} )
    }
    
    getShopDetails = () => {  // get location list, cashier list , unit list and shop details
            fs.writeFile('./shopDetails.json', JSON.stringify({"state":0}))
            axios
            .get('https://reportviewer1.herokuapp.com/cashiers')
            .then((res) => {
                
                if(res.data !== ''){
                    console.log(res)
                    
                    fs.writeFile('./shopDetails.json', JSON.stringify(res.data), err =>  
                    {
                        if (err)
                            console.log(err)
                        else
                            console.log("write")
                    })

                    /*this.setState(
                    {
                        locations: res.data.recordsets[2],
                        cashiers: res.data.recordsets[1] ,
                        units: res.data.recordsets[0] ,
                        shopName: res.data.recordsets[3][0].CompanyName ,
                        shopAddress: (res.data.recordsets[3][0].Address1+', '+ res.data.recordsets[3][0].Address2+', '+ res.data.recordsets[3][0].Address3) 
                    })   */  
                }

            })
           
            
        
    }


    getLastWeekDetails = (d1, d2, d3, d4, d5, d6, d7) => { 
        fs.writeFile('./todaySale.json', JSON.stringify({"state":0}))
        axios.post("https://reportviewer1.herokuapp.com/lastWeekDetails",
            {
                date1 : d1,
                date2 : d2,
                date3 : d3,
                date4 : d4,
                date5 : d5,
                date6 : d6,
                date7 : d7
            })
            .then((res) => {
                
                fs.writeFile('./todaySale.json', JSON.stringify(res.data), err =>
                {
                    if (err)
                        console.log(err)
                    else
                        console.log("write t", res.data)
                })
            })
    }
    
    
     
    getSalesSummeryDetails = (l, c, u, fD, tD) => 
    {
        
        axios.post("https://reportviewer1.herokuapp.com/salesSummery", { 
                    location: l,
                    cashier: c,
                    unit: u,
                    fDate: fD,
                    tDate: tD
                    
                }).then((res) => {

                    this.setState(
                    {
                        salesSummery: res.data, 
                        fromDate: fD, 
                        toDate: tD, 
                        unitInput: u,
                        locationInput: l, 
                        cashierInput: c,
                        
                    })
                    
                    document.getElementById("reportBlock_container").style.display = "block";
                    console.log(this.state.salesSummery)

                })
               
    }

    clearValues = () => {
        this.setState({ 
            salesSummery : '' ,
            stockBalance : ''
         })

    }


    getStockBalance = (loc, repTyp, isImg, isZeero, d, sup) => 
    {
        axios.post("https://reportviewer1.herokuapp.com/stockBalance", 
        {
            location : loc,
            reportType : repTyp,
            isWithImg : isImg,
            isWithZeeros : isZeero,
            date : d,
            supplier : sup
        }) .then((res) => 
            {
                this.setState( 
                    {stockBalance: res.data }
                )
                console.log(res.data)
            })
    }


    getPurchaceReport = (loc, repTyp, fD, tD, sup) => 
    {
        axios.post("https://reportviewer1.herokuapp.com/purchesReport", 
        {
            location : loc,
            reportType : repTyp,
            fDate : fD,
            tDate : tD,
            supplier : sup
        }) .then((res) => 
            {
                this.setState( 
                    {purchaceReport: res.data }
                )
                console.log(res.data)
            })
    }


    render() {
        //window.addEventListener('load', this.getShopDetails);
        return(

            <GetDataContext.Provider 
                value = {
                    { ...this.state, 
                        getShopDetails: this.getShopDetails, 
                        getSalesSummeryDetails: this.getSalesSummeryDetails, 
                        clearValues: this.clearValues, 
                        setConn: this.setConn, 
                        getLastWeekDetails: this.getLastWeekDetails ,
                        getStockBalance: this.getStockBalance,
                        getPurchaceReport: this.getPurchaceReport
                    }} >
                
                {this.props.children}
            </GetDataContext.Provider>
            
        );
    }

}

export default GetDataContextProvider;