import React from 'react';

function Block6(props)
{
    return(
        <>
            <div className="hrIn"/>
                <table className="block3_tbl" >
                    <tr>
                        <td className="block3_titel b"> Non Cash Sale  </td>
                        <td className="block3_qtyValue" >  </td>
                        <td className="block3_value b" > {props.nonCashSale} </td>
                    </tr>
                    <tr>
                        <td colspan="3"><hr/></td>
                    </tr>
                    <tr>
                        <td className="block3_titel"> Gift Voucher  </td>
                        <td> {props.giftVoucherQty} </td>
                        <td className="block3_value" > {props.giftVoucher} </td>
                    </tr>
                    <tr>
                        <td className="block3_titel"> Staff Credit  </td>
                        <td> {props.staffCreditQty} </td>
                        <td className="block3_value" > {props.staffCredit} </td>
                    </tr>
                    <tr>
                        <td className="block3_titel"> Cheque  </td>
                        <td> {props.chequeQty} </td>
                        <td className="block3_value" > {props.cheque} </td>
                    </tr>
                    <br/>

                    <tr>
                        <td className="block3_titel"> Manual Credit  </td>
                        <td> {props.manualCreditQty} </td>
                        <td className="block3_value" > {props.manualCredit} </td>
                    </tr>
                    <tr>
                        <td className="block3_titel"> Credit  </td>
                        <td> {props.creditQty} </td>
                        <td className="block3_value" > {props.credit} </td>
                    </tr>
                    <tr>
                        <td className="block3_titel"> Others  </td>
                        <td> {props.othersQty} </td>
                        <td className="block3_value" > {props.others} </td>
                    </tr>

                    <tr>
                        <td colspan="3"><hr/></td>
                    </tr>

                    <tr>
                        <td className="block3_titel b"> Total Non Cash  </td>
                        <td>  </td>
                        <td className="block3_value b" > {} </td>
                    </tr>

                    <tr>
                        <td colspan="3"><hr/></td>
                    </tr>
                    
                </table>
        </>
    );
}

export default Block6;