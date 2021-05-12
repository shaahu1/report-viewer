
import React, { useContext, useEffect, useState } from 'react';

import { GetDataContext } from '../Context/GetDataContext';
import Block2 from './Block2';
import Block3 from './Block3';
import Block4 from './Block4';
import Block5 from './Block5';
import Block6 from './Block6';
import Block7 from './Block7';
import Block8 from './Block8';

import './reportBlock.css';

function ReportBlock(props)
{
    const fs = require('browserify-fs');
    const { salesSummery , locationInput, cashierInput, unitInput, fromDate, toDate } = useContext(GetDataContext);

    function currencyFormat(num) {
        return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    const [cashiers, setCashier] = useState([])
    const [locations, setLocation] = useState([])
    const [units, setUnit] = useState([])
    const [shopName, setShopName] = useState([])
    const [shopAddress, setShopAddress] = useState([])

    useEffect( () => {
        fs.readFile('./shopDetails.json', 'utf-8', (err, data) => {
            if(data)
            {
                const dataa = JSON.parse(data);
                setLocation(dataa && dataa.recordsets && dataa.recordsets[2] || '')
                setCashier(dataa && dataa.recordsets && dataa.recordsets[1] || '')
                setUnit(dataa && dataa.recordsets && dataa.recordsets[0] || '')
                setShopName(dataa && dataa.recordsets && dataa.recordsets[3][0].CompanyName || '')
                setShopAddress(dataa && dataa.recordsets && (dataa.recordsets[3][0].Address1+', '+ dataa.recordsets[3][0].Address2+', '+ dataa.recordsets[3][0].Address3))
        
            }
                
       })
        console.log('refresh', locationInput)
    },[shopName]) 
    


    let inputDetails = {
        locationInput: '',
        cashierInput:'',
        unitInput:''
    }

    const lCount = locations && locations.length;
    const cCount = cashiers && cashiers.length;
    const uCount = units && units.length;


    if (locationInput === 0)
    {
        inputDetails.locationInput = 'All Locations'
        console.log('input data', locationInput, cashierInput, unitInput)
    }
    else
    {
        for (let i = 0; i < lCount; i++) {
            
            if (locations[i].LocationID === locationInput)
            {
                inputDetails.locationInput = locations[i].LocationName;
            }
            else
            {
                inputDetails.locationInput = '';
            }
            
        }
    }

    if (cashierInput == '')
    {
        inputDetails.cashierInput = 'All Cashiers'
    }
    else
    {
        for (let i = 0; i < cCount; i++) {
            
            if (cashiers[i].CashierID == parseInt(cashierInput))
            {
                inputDetails.cashierInput = cashiers[i].CashierName;
            }
            
        }
        
    }

    if (unitInput === 0)
    {
        inputDetails.unitInput = 'All Units'
    }
    else
    {
        for (let i = 0; i < uCount; i++) {
            
            if (units[i].UnitNo == unitInput)
            {
                inputDetails.unitInput = 'Unit' + unitInput;
            }
            
        }
    }



    

    /* ----- block 3 ----- */
    const GrossSale = salesSummery.GrossSale || 0;
    const exchangeQty = salesSummery.exchangeQty || 0;
    const exchange = salesSummery.exchange || 0;
    const NoOfProductDiscount = salesSummery.NoOfProductDiscount || 0;
    const ProductDiscount =  salesSummery.ProductDiscount || 0;
    const NoOfSubDiscount =  salesSummery.NoOfSubDiscount || 0;
    const SubDiscount = salesSummery.SubDiscount || 0;
    const NoOfVoid =  salesSummery.NoOfVoid || 0;
    const Void = salesSummery.Void || 0;
    const NoOfCancel = salesSummery.NoOfCancel || 0;
    const Cancel = salesSummery.Cancel || 0;
    const redeemQty = salesSummery.redeemQty || 0;
    const redeem = salesSummery.redeem || 0;

    /* ----- block 5 ----- */
    const NetSale =  salesSummery.NetSale || 0;
    const CashSale = salesSummery.CashSale || 0;
    const NoOfCashRefund = salesSummery.NoOfCashRefund || 0;
    const CashRefund =  salesSummery.CashRefund || 0;

    /* ----- block 7 ----- */
    const NoOfPaidIn = salesSummery.NoOfPaidIn || 0;
    const PaidIn = salesSummery.PaidIn || 0;
    const NoOfPaidOut = salesSummery.NoOfPaidOut || 0;
    const PaidOut = salesSummery.PaidOut || 0;
    const NoOfBill = salesSummery.NoOfBill || 0;

    /* ----- block 4 ----- */
    const NoOfMasterCard = salesSummery.NoOfMasterCard || 0;
    const MasterCard = salesSummery.MasterCard || 0;
    const NoOfVisaCard = salesSummery.NoOfVisaCard || 0;
    const VisaCard = salesSummery.VisaCard || 0;
    const NoOfAmexCard = salesSummery.NoOfAmexCard || 0;
    const AmexCard = salesSummery.AmexCard || 0;
    const NoOfDebitCard = salesSummery.NoOfDebitCard || 0;
    const DebitCard = salesSummery.DebitCard || 0;
    const CardTotalAmount = (MasterCard + VisaCard + AmexCard + DebitCard) || 0;

    /* ----- block 6 ----- */
    const NoOfCheque = salesSummery.NoOfCheque || 0;;
    const Cheque = salesSummery.Cheque || 0;;
    const NoOfCredit = salesSummery.NoOfCredit || 0;;
    const Credit = salesSummery.Credit || 0;;
   

    return(
        <>
        <div className="reportBlock_container" id="reportBlock_container"> 

            <div className="header_container">
                <span className="header_shopName"> {shopName} </span> <br/>
                <span className="header_shopAddress"> {shopAddress} </span> <br/>
                <span className="header_email"> info@maxsoft.lk </span> <br/>
                <span className="header_title"> Sales Summery Report </span> <br/>
            </div>

            <div className="hr"/>

            <div className="block2">
                <Block2 
                    fromDate = {fromDate}
                    toDate = {toDate}
                    location = {inputDetails.locationInput}
                    cashier = {inputDetails.cashierInput}
                    unit = {inputDetails.unitInput}
                />
            </div>

            <div className="hr"/>

            <div className="bodyBlock_container">

                <div className="leftBlock">
                    <div className="block3">
                        <Block3 
                            grossSale = {currencyFormat(GrossSale)}
                            exchangeQty = {exchangeQty}
                            exchange = {currencyFormat(exchange)}
                            productDiscQty = {NoOfProductDiscount}
                            productDisc = {currencyFormat(ProductDiscount)}
                            subTotleDiscQty = {NoOfSubDiscount}
                            subTotleDisc = {currencyFormat(SubDiscount)}
                            voidQty = {NoOfVoid}
                            void = {currencyFormat(Void)}
                            cancleQty = {NoOfCancel}
                            cancle = {currencyFormat(Cancel)}
                            redeemQty = {redeemQty}
                            redeem = {currencyFormat(redeem)}
                        />

                    </div>
                    <div className="block3">
                        <Block5 
                            netSale = {currencyFormat(NetSale)}
                            cashSale = {currencyFormat(CashSale)}
                            staffCashSaleQty = {props.summeryReportData.a}
                            staffCashSale = {props.summeryReportData.a}
                            cashRefundsQty = {NoOfCashRefund}
                            cashRefunds = {currencyFormat(CashRefund)}
                        />

                    </div>

                    <div className="block3">
                        <Block7 
                            totalCashSale = {currencyFormat(CashSale)}
                            paidInQty = {NoOfPaidIn}
                            paidIn = {currencyFormat(PaidIn)}
                            paidOutQty = {NoOfPaidOut}
                            paidOut = {currencyFormat(PaidOut)}
                            noOfBills = {NoOfBill}
                    />

                    </div>

                </div>
                    
               
                <div className="rightBlock">
                    <div className="block3">
                        <Block4 
                            mastercadeQty = {NoOfMasterCard} 
                            mastercade = {currencyFormat(MasterCard)}
                            visacardQty = {NoOfVisaCard}
                            visacard = {currencyFormat(VisaCard)}
                            amexcardQty = {NoOfAmexCard}
                            amexcard = {currencyFormat(AmexCard)}
                            debitcardQty = {NoOfDebitCard}
                            debitcard = {currencyFormat(DebitCard)}
                            cardTotal = {currencyFormat(CardTotalAmount)}
                        />

                    </div>
                    <div className="block3">
                        <Block6 
                            nonCashSale = {props.summeryReportData.a}
                            giftVoucherQty = {props.summeryReportData.a}
                            giftVoucher = {props.summeryReportData.a}
                            staffCreditQty = {props.summeryReportData.a}
                            staffCredit = {props.summeryReportData.a}
                            chequeQty = {NoOfCheque}
                            cheque = {currencyFormat(Cheque)}
                            manualCreditQty = {props.summeryReportData.a}
                            manualCredit = {props.summeryReportData.a}
                            creditQty = {NoOfCredit}
                            credit = {currencyFormat(Credit)}
                            othersQty = {props.summeryReportData.a}
                            others = {props.summeryReportData.a}
                        />
                    </div>

                    <div className="block3">
                        <Block8 />
                    </div>
                </div>
            </div>
            
            <br/> <br/> <br/> <br/>

        </div>
        </>
    );
}

export default ReportBlock;