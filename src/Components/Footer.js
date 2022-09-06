import React, { Component } from 'react';
import { FaHeart, FaCopyright,FaFacebook,FaTwitter,FaInstagram,FaTiktok} from "react-icons/fa";
import './Footer.css'

function Footer() {
    return ( 
        <div className='footerblock'>
            <div className='blockwidthflex container'>
                <div className='footerblockchild'>
                    <table className='footertable'>
                        <tr><td><p className='footerheading'><b>About Me</b> </p></td></tr>
                        <tr><td class="formaltext">Do you want to be even more successful?
                        Learn to love lerning and growth.The more effect you put in improving the skill</td></tr>
                        <tr><td  class="formaltext" >
                            copyright <FaCopyright/> 2021 All rights reserved | The template is made with <FaHeart style={{color: 'red'}}/> by
                            <a class="link" href="#">Umair Ahmed</a>
                        </td></tr>
                    </table>
                </div>
                <div className='footerblockchild'>
                    <table class="footertable">
                        <tr><td><p className='footerheading'><b>Newsletter</b> </p></td></tr>
                        <tr><td class="formaltext">
                            Stay updated with our latest trends</td></tr>
                    </table>

                </div>
                <div class="footerblockchild ">
                    <table class="footertable">
                        <tr><td><p class="footerheading"><b>Folle Me</b></p></td></tr>
                            <tr><td class="formaltext">
                            Let us be social</td></tr>
                            <tr><td class="footersocialicon">
                                <FaFacebook style={{ fontSize: '15px'}}/>
                                <FaInstagram style={{ fontSize: '15px',marginLeft:'10px'}}/>
                                <FaTwitter style={{ fontSize: '15px',marginLeft:'10px'}}/>
                                <FaTiktok style={{ fontSize: '15px',marginLeft:'10px'}}/>
                        </td></tr>
                    </table>
                </div>
            </div>
        </div>
     );
}

export default Footer;