import React from 'react';
// ES2015 module syntax
import { Popup } from "@progress/kendo-react-popup";
import Header from '../components/Header'
import '../styles/Footer.css'
import '../styles/Donate.css'
import Footer from '../components/Footer'
import paypal from '../images/interac.png'
import hindupicture3 from '../images/hold_kids.jpg'
import hindupicture4 from '../images/Hindupicture3.jpg'
import playchess from '../images/playchess.jpg'
import pdf from '../images/pdf.png'
import card from '../images/Paypal.png' 
import pdf1 from '../HSOCDonationForm.pdf';
import donatebtn from '../images/donate button.jpg'



class App extends React.Component {
  
  
  render() {
   
    

    return (
      
      
      <>
      <Header />
      <div>
        <div className="fundraise_section">
          <div className="fundraise_section_main">
            <div className="row">
              <div className="col-lg-4">
                <div className="box_main">
                  <div className="icon_1">
                    <img src={paypal} style={{ width: '180px', height: '160px' }} alt="Paypal" />
                    </div>
                    <h4 className="volunteer_text">DONATE WITH E-TRANSFER</h4>
                    <button className="ppdonatebtn" type="button">DONATE NOW</button>
                    <h4 className="volunteer_text">TO<br></br>Treasurer@hindusocietyottawa.com</h4>
                    
    
                    
                  </div>
              
                </div>
                


              <div className="col-lg-4">
                <div className="box_main active">
                  <div className="icon_1">
                    <img src={card} style={{ width: '180px', height: '160px' }} alt="Card" />
                  </div>
                  <h4 className="volunteer_text">DONATE USING PAYPAL/CARD</h4>
                  <p className="lorem_text">Click link below</p>
                    <form action="https://www.paypal.com/donate" method="post" target="_blank">
<input type="hidden" name="hosted_button_id" value="B8QM8NGATV6GU" />
<input type="image" src={donatebtn} border="0"  name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
<img alt="" border="0" src="https://www.paypal.com/en_CA/i/scr/pixel.gif" width="1" height="1" />
</form>

                </div>
              </div>
              <div className="col-lg-4">
                <div className="box_main">
                  <div className="icon_1">
                    <img src={pdf} style={{ width: '180px', height: '100px' }} alt="PDF" />
                  </div>
                  <h4 className="volunteer_text">DONATE USING FORM</h4>
                  <p className="lorem_text">
                    If the donation is to a charity of your choice, then please note the charity name on the PDF form and on the cheque memo field.
                    Please mail filled PDF form and cheque to Hindu Society of Ottawa Carleton, P.O. Box 65122, Merivale, Ottawa. K2G 5Y3
                    </p>
                    <a
                      href={pdf1}
                      download="HSOCDonationForm.pdf"
                      target="_blank"
                      rel="noreferrer"
      >
                      <input className="ppdonatebtn" type="button" value="DONATE NOW" />
      </a>
            
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        <center>
          <h1>WHY DONATE</h1>
        </center>

        <div className="section-home home-reasons">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="reasons-col animate-onscroll fadeIn">
                  <img src={hindupicture4} className="image1" alt="" />
                  <div className="reasons-titles">
                    <h3 className="reasons-title">We help each other</h3>
                    <h5 className="reason-subtitle">We are humans</h5>
                  </div>
                  <div className="on-hover hidden-xs">
                    <p>
                        While The Majority Of Our Charitable Activities Are Undertaken In India,
                        We Are Also Active <br></br>Locally And In The International
                      Arena. We Focus On Educating Children, Improving Health, <br></br>Empowering Women And Rural Development.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="reasons-col animate-onscroll fadeIn">
                  <img  src={hindupicture3} className="image2"  alt="" />
                  <div className="reasons-titles">
                    <h3 className="reasons-title">WE care about others</h3>
                    <h5 className="reason-subtitle">We are humans</h5>
                  </div>
                  <div className="on-hover hidden-xs">
                    <p>
                        We make a living by what we get, but we make a life by what we give<br></br>
                        No act of kindness, no matter how small, is ever wasted
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      </>
    );
    }
}

export default App;
