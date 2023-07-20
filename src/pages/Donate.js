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
                    <p className="lorem_text">Hover link below</p>
                  
                    <input className="ppdonatebtn" type="button" value="DONATE NOW"/> 
                    
                    <div class="hide"><font Size="+2">E-transfer the donation to treasurer@hindusocietyottawa.com </font></div>
                    
                  </div>
                  
                </div>
                


              <div className="col-lg-4">
                <div className="box_main active">
                  <div className="icon_1">
                    <img src={card} style={{ width: '180px', height: '160px' }} alt="Card" />
                  </div>
                  <h4 className="volunteer_text">DONATE USING PAYPAL/CARD</h4>
                  <p className="lorem_text">Click link below</p>
                  <input className="ppdonatebtn" type="button" value="DONATE NOW" />
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
                    Filled PDF forms shall be sent to hindusocietyottawa@gmail.com
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
