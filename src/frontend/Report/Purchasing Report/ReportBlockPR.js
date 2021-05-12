import React, { useContext, useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import ReportHeader from '../ReportHeader';

import {GetDataContext} from '../../Context/GetDataContext'

import './reportBlockPR.css'

function  ReportBlockPR() {

    const {purchaceReport} = useContext(GetDataContext);

    const [data, setData] = useState([''])

    function currencyFormat(num) {
        return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    useEffect( ()=>
    {
        setData(purchaceReport);
        console.log(data)
    })

    return(
        <>
        <div className='reportBlock_containerPR' id = 'reportBlock_containerPR'>

            <ReportHeader tital = 'Purchace Report '/>
            <div className='hr' />

            <div className='inputData_container'>

            </div>
            <br/>

            <div className='tableHeader_container'>
                <table>
                    <tr className='tableHeader'> 
                        <td className='column1'> Product Code </td>
                        <td className='column2'> Product Name </td>
                        <td className='column3'> Qty </td>
                        <td className='column4'> Gross Amount </td>
                        <td className='column5'> Discount </td>
                        <td className='column6'> Net Amount </td>
                    </tr><br/>
                </table>
            </div>

            <div className='data_container'>

                <table>
                    <tbody>
                        
                        
                        {(() => {
                                if (data !== '') {
                                return (
                                    data.map((val, i) => 
                                        <>
                                        <tr >
                                            <td className='column1'> {val.ProductCode}</td>
                                            <td className='column2'> {val.ProductName} </td>
                                            <td className='column3'>  {val.Qty} </td>
                                            <td className='column4'> {currencyFormat(val.GrossAmount || 0)} </td>
                                            <td className='column5'> {currencyFormat(val.Discount || 0)} </td>
                                            <td className='column6'> {currencyFormat(val.NetAmount || 0)} </td>
                                        </tr>
                                        </>
                                    ) 
                                )
                                } else 
                                {
                                return (
                                    <div> <span className="ral"> . . . </span> </div>
                                )
                                }
                            })()}

                    </tbody>
                </table>

            </div>

        </div>
        </>
    );
    
}

export default ReportBlockPR;