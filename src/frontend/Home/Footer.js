import React from 'react';

import logo from '../../imgs/logo.png'
import mail from '../../imgs/mail.png'
import phone from '../../imgs/phone.png'
import address from '../../imgs/address.png'
import facebook from '../../imgs/facebook.png'
import './footer.css'

function Footer()
{
    return (
        <>

        <div className='footer_container'>
            <div className='flex'>
                <div className='companyDetails_container'>
                    <img src={logo} alt='' width='60px'/>
                    <span>MY MAX Holdings</span>
                    <p className='companyText'> Maxsoft is the one of the Leading POS software Company in Sri Lanka. We are providing POS software with inventory management system for Retail & Hole sale management syatem for Super market, Textile, Fancy shop and Hardware stores. </p>
                </div>

                <div className='content_container'>
                    <div>
                        <span>Pages</span>
                        <ul>
                            <a href='/'> <li>  Home </li></a>
                            <a href='/dashboard'><li>Dashboard </li> </a>
                            <a href=''> <li>Products</li> </a>
                            <a href=''> <li>Documentation</li> </a>
                        </ul>
                    </div>
                    <div>
                        <span>Reports</span>
                        <ul>
                            <a href='/salesSummery'> <li>Sales Summery </li> </a>
                            <a href='/stockBalance'> <li> Stock Balance </li> </a>
                            <a href=''> <li>Sales Summery </li> </a>
                            <a href=''> <li>Sales Summery </li> </a>
                        </ul>
                    </div>
                    
                    
                </div>

                <div className='contact_container'>
                    <span> Contact Us</span>
                    <ul>
                        <li> <img src={mail} alt='' width='16px'/> <span> mymaxholdings@gmail.com </span> </li>
                        <li> <img src={phone} alt='' width='16px'/> 071 433 3933 </li>
                        <li> <img src={address} alt='' width='16px'/> No. 244/2, Dabahena Road, Maharagama. </li>
                    </ul>
                </div>
            </div>
            <br/>
            <div className='hr'/>
            
        </div>
        

        </>
    );
}

export default Footer;