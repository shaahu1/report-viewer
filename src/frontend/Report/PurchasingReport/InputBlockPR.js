import React, { useContext, useEffect, useState } from 'react';
import ErrorBox from '../ErrorBox';

import { GetDataContext } from '../../Context/GetDataContext';

import './InputBlockPR.css'
const fs = require('browserify-fs');


function InputBlockPR() {

    const {getPurchaceReport, purchaceReport} = useContext(GetDataContext);

    const state = {
        locationValue: '',
        reportType: '',
        fDate: '',
        tDate: '',
        supplier:''
    }

    const [locations, setLocation] = useState([])
    const [suppliers, setSupplier] =useState([])
    const [data, setData] = useState([])

    useEffect( () => {

        setTimeout(function()
        {
            fs.readFile('./shopDetails.json', 'utf-8', (err, data) => {
                if (data)
                {
                    const dataa = JSON.parse(data);
                    setLocation(dataa && dataa.recordsets && dataa.recordsets[2] || '')
                    setSupplier(dataa && dataa.recordsets && dataa.recordsets[4] || '')
                    console.log(dataa && dataa.recordsets && dataa.recordsets[4][0])
                }
                
            })
                
                 console.log('refresh')
        })
       
    },[data]) 

    const lCount = locations && locations.length;

    function clearBtnClick()
    {
        document.getElementById('errorBox_container').style.display = "none";

        document.getElementById('locationAll').checked = false;
        document.getElementById('reportType1').checked = false;
        document.getElementById('reportType2').checked = false;
        document.getElementById('reportType3').checked = false;
        document.getElementById('supListSelest').value = '-1';
        document.getElementById("fDate").value = '';
        document.getElementById("tDate").value = '';

        for (let i = 0; i < lCount; i++) {
            document.getElementById("l"+i).checked = false;
        }

    }

    function viewBtnClick()
    {

        let element;
        //clearValues();

        state.supplier = document.getElementById('supListSelest').value;
        state.fDate = document.getElementById('fDate').value;
        state.tDate = document.getElementById('tDate').value;
        
        if ( document.getElementById('reportType1').checked)
            state.reportType = 1;

        if (document.getElementById('reportType2').checked)
            state.reportType = 2;
        
        if (document.getElementById('reportType3').checked)
            state.reportType = 3;
        

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

        console.log('supplier', state.supplier, state.fDate, state.tDate, state.reportType, state.locationValue)

        if (state.reportType === 1 && state.locationValue !== '' )
        {
            document.getElementById('errorBox_container').style.display = "none";
            getPurchaceReport(state.locationValue, state.reportType, '', '', '');
            document.getElementById('reportBlock_containerPR').style.display = 'block'
            window.scrollTo(0, 550);
        }
        else if (state.reportType ===2 && state.reportType.locationValue !== '' && state.fDate !== '' && state.tDate !== '')
        {
            document.getElementById('errorBox_container').style.display = "none";
            getPurchaceReport(state.locationValue, state.reportType, state.fDate, state.tDate, '');
            document.getElementById('reportBlock_containerPR').style.display = 'block'
            window.scrollTo(0, 550);
        }
        else if (state.reportType === 3 && state.reportType.locationValue !== '' && state.fDate !== '' && state.tDate !== '' && state.supplier != -1)
       {
            document.getElementById('errorBox_container').style.display = "none";
            getPurchaceReport(state.locationValue, state.reportType, state.fDate, state.tDate, state.supplier);
            document.getElementById('reportBlock_containerPR').style.display = 'block'
            window.scrollTo(0, 550);
       }

       else 
       {
            document.getElementById('errorBox_container').style.display = "block";
       }

    }

    return(
        <>
        <div className='inputBlock_containerPR'>
            <span className ='PR_tital'> Stock Balance Report </span>
            <div className='input_containePR'>
                <div className='flex'>

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
                                } 
                                else 
                                {
                                return (
                                    <div> <span className="ral"> . . . </span> </div>
                                )
                                }
                            })()}
                    </div>

                    <div className='reportTypeBlock'>
                    <span className='listHeader'><b> Report Type </b> </span> <br/> <br/>
                    <span className="sbrpt"> <input type='radio' value='1' name='reportType' id='reportType1' /> All Data </span><br/>
                    <span className="sbrpt"> <input type='radio' value='2' name='reportType' id='reportType2' /> Given Date </span><br/>
                    <span className="sbrpt"> <input type='radio' value='3' name='reportType' id='reportType3' /> Supplier Wise  </span>

                    </div>

                    <div className='otherBlockPR'>
                        <span className='suplierList listHeader' > <b>Suplier List  </b>  </span> <br/><br/>
                        <select name="suppliers" id="supListSelest">
                            <option value={-1}> -- Select -- </option>
                        {(() => {
                                    if (suppliers !== '') {
                                        
                                        return (
                                            suppliers.map((val) => 
                
                                                <><option value={val.SupplierCode} key={val.SupplierCode}> {val.SupplierName} </option> <br/></>
                                            ) 
                                        )
                                    } 
                                    else 
                                    {
                                    return (
                                        <div> <option value={-1}> . . . </option> </div>
                                    )
                                    }
                                })()}

                        </select>
                    </div>
                </div>

                <div className='flex'>
                    <div className='bottomDiv'>
                        <span className="datePicker"> <b> From Date : </b> <input type="date" id="fDate" name="date"/> </span>
                    </div>

                    <div className='bottomDiv'>
                        <span className="datePicker"> <b> To Date : </b> <input type="date" id="tDate" name="date"/> </span>
                    </div>
                </div>

                <div className="viewBtn_container">

                    <button className="viewBtn" 
                        onClick = {viewBtnClick} > View 
                    </button>


                    <button className="viewBtn" onClick={clearBtnClick}> Clear </button>



                </div>
                <ErrorBox /> 

            </div>
        </div>
        <br/>
        <br/>
        <br/>
        </>
    );
    
}

export default InputBlockPR;