import React, { useContext, useEffect, useState } from 'react';

import './inputBlock.css';
import './reportBlock.css';



import ErrorBox from './ErrorBox';
import { GetDataContext } from '../Context/GetDataContext';



function InputBlock(props) 
{
    

    const fs = require('browserify-fs');

    const {  getSalesSummeryDetails, clearValues  } = useContext(GetDataContext)

    //console.log(locations)


    const state = {
        locationValue: '',
        cashierValue: null,
        unitsValue: '',
        fromDate: '',
        toDate: ''
    }


    //console.log('loc', locations, 'cash', cashiers)

    const [cashiers, setCashier] = useState([])
    const [locations, setLocation] = useState([])
    const [units, setUnit] = useState([])

    const [data, setData] = useState()
    let isload = 0;


    useEffect( () => {

        fs.readFile('./shopDetails.json', 'utf-8', (err, data) => {
            if (data)
            {
                const dataa = JSON.parse(data);
                setLocation(dataa && dataa.recordsets && dataa.recordsets[2] || '')
                setCashier(dataa && dataa.recordsets && dataa.recordsets[1] || '')
                setUnit(dataa && dataa.recordsets && dataa.recordsets[0] || '')
                console.log(dataa)
            }
            
        })
            
            console.log('refresh')
    },[data]) 
    

    const lCount = locations && locations.length;
    const cCount = cashiers && cashiers.length;
    const uCount = units && units.length;


    function changeHandler()
    {

        clearValues();
        let isOk ;
        let element;

        if (document.getElementById('locationAll').checked === true)
        {
            state.locationValue = 0;
        }
        else
        {
            for (let i = 0; i < lCount; i++) {
                element = document.getElementById('l'+i);
                if (element.checked === true)
                {
                    state.locationValue = element.value;
                }
            }
        }

        if (document.getElementById('cashierAll').checked === true)
        {
            state.cashierValue = '';
        }
        else
        {
            for (let i = 0; i < cCount; i++)
            {
                element = document.getElementById('c'+i);
                if(element.checked === true)
                {
                    state.cashierValue = element.value;
                }
            }
        }

        if (document.getElementById('unitAll').checked === true)
        {
            state.unitsValue = 0;
        }
        else
        {
            for (let i = 0; i < uCount; i++)
            {
                element = document.getElementById('u'+i);
                if(element.checked === true)
                {
                    state.unitsValue = element.value;
                }
            }
        }

        state.fromDate = document.getElementById('fDate').value;
        state.toDate = document.getElementById('tDate').value;

        console.log("location ", state.locationValue, 'cashier', state.cashierValue, 'unit', state.unitsValue)

        if ((state.cashierValue !== null) && (state.locationValue !== '') && (state.unitsValue !== '') && (state.fromDate !== '') && (state.toDate !== ''))
        {
            document.getElementById('errorBox_container').style.display = "none";
            document.getElementById("reportBlock_container").style.display = "block";
            getSalesSummeryDetails(state.locationValue, state.cashierValue, state.unitsValue, state.fromDate, state.toDate)
            console.log(state.locationValue, state.cashierValue, state.unitsValue, state.fromDate, state.toDate)
            isOk = true;
            
            window.scrollTo(0, 550);
        }
        else
        {
            document.getElementById('errorBox_container').style.display = "block";
            isOk = false;
            document.getElementById("reportBlock_container").style.display = "none";
        }
        //console.log(state.locationValue , state.cashierValue, state.unitsValue)

        return isOk;
        
    }

    

    function clearBtnClick()
    {
        clearValues();
        document.getElementById('errorBox_container').style.display = "none";

        document.getElementById("reportBlock_container").style.display = "none";

        document.getElementById('cashierAll').checked = false;
        document.getElementById('locationAll').checked = false;
        document.getElementById('unitAll').checked = false;

        for (let i = 0; i < lCount; i++) {
            document.getElementById("l"+i).checked = false;
        }

        for (let i = 0; i < cCount; i++) {
            document.getElementById("c"+i).checked = false;
        }

        for (let i = 0; i < uCount; i++) {
            document.getElementById("u"+i).checked = false;
        }

        document.getElementById("fDate").value = '';
        document.getElementById("tDate").value = '';

        state.locationValue = '';
        state.cashierValue = '';
        state.unitsValue = '';
        state.fromDate = '';
        state.toDate = '';
    }

    return(
        <>
        <div className="inputBlock_container">
            <span className="inputBlock_tital">Sales Summery Report  </span> <br/>

            <div className="locationBlock_container">
                 <div className="locationBlock">
                     
                

                    <span className='listHeader'><b> Location </b> </span> <br/> <br/>

                    <span> <input type="checkbox" id="locationAll" name="locationAll" value="" className="checkbox"/>All </span> <br/>

                    {(() => {
                                if (locations !== '') {
                                return (
                                    locations.map((val, i) => 
                                        <><span className="ral"> <input type="checkbox" id={"l"+i} name="cashier1" value={val.LocationID} className='checkbox' key={val.LocationID} /> {val.LocationName}</span> <br/></>
                                    ) 
                                )
                                } else 
                                {
                                return (
                                    <div> <span className="ral"> . . . </span> </div>
                                )
                                }
                            })()}
                </div>

                
                <div className="cashierBlock">
                    
                    <span className='listHeader'> <b> Cashier </b> </span> <br/> <br/>
                    <span> 
                        <input type="checkbox" id="cashierAll" name="cashierAll" value="" className='checkbox'/>All 
                    </span> <br/>

                    {( () => {
                                if (cashiers !== '') {
                                return (
                                    cashiers.map((val, i) => 
                                        <><span className="ral"> <input type="checkbox" id={"c"+i} name="cashier1" value={val.CashierID} className='checkbox' key={val.CashierID} /> {val.CashierName} </span> <br/></>
                                    )
                                )
                                } else 
                                {
                                return (
                                    <div> <span className="ral"> . . . </span> </div>
                                )
                                }
                            }
                        )()
                    }
                    
                    
                </div>
                
                
                <div className="unitBlock">
                    <span className='listHeader'> <b> Unit </b> </span><br/> <br/>
                    <span>  <input type="checkbox" id="unitAll" name="unitAll" value=""sclassName='checkbox'/> All </span> <br/>

                    {( () => {
                                if (units !== '') {
                                return (
                                    units.map((val, i) => 
                                        <><span className="ral"> <input type="checkbox" id={"u"+i} name="cashier1" value={val.UnitNo} className='checkbox' key={val.UnitNo} /> Unit {val.UnitNo} </span> <br/></>
                                    )
                                )
                                } else 
                                {
                                return (
                                    <div> <span className="ral"> . . . </span> </div>
                                )
                                }
                            }
                        )()
                    }

                    
                </div>

            </div>

            <div className="dateset_container">
                <span className="datePicker"> <b> From Date : </b> <input type="date" id="fDate" name="fDate"></input> </span>
                <span className="datePicker"> <b> To Date : </b> <input type="date" id="tDate" name="tDate"></input> </span>
            </div>

            <div className="viewBtn_container">

                <button className="viewBtn" 
                    onClick = {changeHandler} > View 
                </button>


                <button className="viewBtn" onClick={clearBtnClick}> Clear </button>

                

            </div>
            <ErrorBox /> 
        </div>
         
        </>
    );
}



export default InputBlock;