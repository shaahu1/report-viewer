import React from 'react';

function Block4(props)
{
    return(
        <>
                <table className="block3_tbl" >
                    <tr>
                        <td className="block3_titel b" colspan="3"> Credit / Debit Card Sale </td>
                        
                    </tr>
                    <tr>
                        <td className="block3_titel"> Master Cade  </td>
                        <td className="block3_qtyValue"> {props.mastercadeQty} </td>
                        <td className="block3_value" > {props.mastercade} </td>
                    </tr>
                    <tr>
                        <td className="block3_titel"> Visa Card  </td>
                        <td> {props.visacardQty} </td>
                        <td className="block3_value" > {props.visacard} </td>
                    </tr>
                    <tr>
                        <td className="block3_titel"> Amex Card  </td>
                        <td> {props.amexcardQty} </td>
                        <td className="block3_value" > {props.amexcard} </td>
                    </tr>
                    <tr>
                        <td className="block3_titel"> Debit Card  </td>
                        <td> {props.debitcardQty} </td>
                        <td className="block3_value" > {props.debitcard} </td>
                    </tr>

                    <tr>
                        <td colspan="3"><hr/></td>
                    </tr>
                    <tr>
                        <td className="block3_titel b"> Card Total  </td>
                        <td>  </td>
                        <td className="block3_value b" > {props.cardTotal} </td>
                    </tr>
                    <tr>
                        <td colspan="3"><hr/></td>
                    </tr>
                </table>
        </>
    );
}

export default Block4;