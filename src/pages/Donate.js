import React from 'react';
import Header from '../components/Header'
import '../styles/Footer.css'
import '../styles/Donate.css'
import Footer from '../components/Footer'
import paypal from '../images/Paypal.png'
import hindupicture3 from '../images/Hindupicture3.jpg'
import playchess from '../images/playchess.jpg'
import pdf from '../images/pdf.png'
import card from '../images/card_img.png'

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
                  <h4 className="volunteer_text">DONATE USING PAYPAL</h4>
                  <p className="lorem_text">Click link below</p>
                  <input className="ppdonatebtn" type="button" value="DONATE NOW" />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="box_main active">
                  <div className="icon_1">
                    <img src={card} style={{ width: '180px', height: '160px' }} alt="Card" />
                  </div>
                  <h4 className="volunteer_text">DONATE USING DEBIT/CREDIT CARD</h4>
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
                  <input className="ppdonatebtn" type="button" value="DONATE NOW" />
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
                  <img src={hindupicture3} className="image1" alt="" />
                  <div className="reasons-titles">
                    <h3 className="reasons-title">We help each other</h3>
                    <h5 className="reason-subtitle">We are humans</h5>
                  </div>
                  <div className="on-hover hidden-xs">
                    <p>
                      While The Majority Of Our Charitable Activities Are Undertaken In India, We Are Also Active Locally And In The International
                      Arena. We Focus On Educating Children, Improving Health, Empowering Women And Rural Development.
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
                      While The Majority Of Our Charitable Activities Are Undertaken In India, We Are Also Active Locally And In The International
                      Arena. We Focus On Educating Children, Improving Health, Empowering Women And Rural Development.
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
