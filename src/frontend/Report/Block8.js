import React from 'react';

function Block8(props)
{
    return(
        <>
            <table className="block3_tbl" >
                <tr>
                    <td className="block3_titel b" colSpan="3"> Credit Note & Settlement  </td>
                    
                </tr>

            </table>

            <div className="hrIn"/>

            <table className="block3_tbl" >

                <tr>
                    <td className="block3_titel "> Credit Note </td>
                    <td className="block3_qtyValue" >  </td>
                    <td className="block3_value " >  </td>
                </tr>

                <tr>
                    <td className="block3_titel "> Credit Note Settle </td>
                    <td className="block3_qtyValue" >  </td>
                    <td className="block3_value " >  </td>
                </tr>

                <tr>
                    <td colSpan="3" > <hr/> </td>
                </tr>

                <tr>
                    <td className="block3_titel b"> Total Credit Note </td>
                    <td className="block3_qtyValue" >  </td>
                    <td className="block3_value b" >  </td>
                </tr>

                <tr>
                    <td colSpan="3" > <hr/> </td>
                </tr>

                <tr>
                    <td className="block3_titel b"> Total  </td>
                    <td className="block3_qtyValue" >  </td>
                    <td className="block3_value b" >  </td>
                </tr>

            </table>
            <div className="hrIn"/>

        </>
    );
}

export default Block8;