import React from 'react'
import '../styles/Footer.css'
import {FcCellPhone} from 'react-icons/fc'
import {FcHome} from 'react-icons/fc'
import {AiTwotoneMail} from 'react-icons/ai'
import {AiFillCaretUp} from 'react-icons/ai'
import proxyform from '../ProxyForm.pdf'
import nominationform from '../NominationForm.pdf'
import constitutionform from '../ConstitutionForm.pdf'
import donateform from '../HSOCDonationForm.pdf'
const Footer = () => {
  
const scrollToTop = () => {
    window.scrollTo({
    top: 0,
    behavior: 'smooth',
    });
};
  return (
    <footer>
        <div className='footer-items'>
            <div>
                <h3>HOW TO REACH US</h3>
                <ul>
                    <li><FcHome /> P.O. Box 65122, Merivale P.O., Ottawa, K2G 5Y3</li>
                    <li><FcCellPhone/> (613) 599-0690</li>
                    <li className='email'><AiTwotoneMail /> <a href={`mailto:hindusocietyottawa@gmail.com`} target="_blank" rel="noopener noreferrer" >hindusocietyottawa@gmail.com</a></li>
                </ul>
            </div>
            <div>
                <h3>IMPORTANT LINKS</h3>
                <ul>
                    <li> <a className='downloadlink' href={proxyform} download='ProxyForm'>Proxy Form</a></li>
                    <li> <a className='downloadlink' href={nominationform} download='NominationForm'>Nomination Form</a></li>
                    <li> <a className='downloadlink' href={constitutionform} download='ConstitutionForm'>Constitution</a></li>
                    <li> <a className='downloadlink' href={donateform} download='HSOCDonationForm'>Donation Form</a></li>
                </ul>
            </div>
        </div>
        <div className='cp'>
            <p className='copyright'>Copyright - 2018 - HinduSocietyOttawa - All rights reserved.</p>
            <button className="go-to-top-button" onClick={scrollToTop}><AiFillCaretUp/></button>
        </div>
    </footer>
     
  )
}
export default Footer
