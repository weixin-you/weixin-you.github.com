import React from 'react'
import Header from '../components/Header'
import ImageSlider from '../components/ImageSlider'
import droplets from '../images/droplets.png'
import feeding from '../images/feeding.jpg'
import celebrate from '../images/celebrate.jpg'
import caring from '../images/caring.jpg'
import holdkids from '../images/hold_kids.jpg'
import '../styles/Home.css'
import Footer from '../components/Footer'
import {IoNotifications} from 'react-icons/io5'
function Home(){
  return (
    <>
      <Header />
      <ImageSlider/>
      <main>
        <div className='changes_you_can_make'>
          <div className='card1'>
            <p><IoNotifications className='icon'/></p>
            <h3>Get Informed</h3>
            <p>We focus on educating children, empowering women, and rural development. While the majority of our charitable activities are undertaken in India, we are also active locally and in the international arena.</p>
          </div>
          <div className='card2'>
            <img src={feeding} alt="text"></img>
            <h3>Our Activities</h3>
            <p>You can help us by supporting our activities.</p>
          </div>
          <div className='card3'>
            <img src={celebrate} alt="text"></img>
            <h3>Become a Part of Our Society</h3>
            <p>Our mission is to help economically deprived individuals of society.</p>
          </div>
          <div className='card4'>
            <img src={caring} alt="text"></img>
            <h3>Save Lives</h3>
            <p>Our support creates empowered communities in the world.</p>
          </div>
        </div>
        <div className='mission'>
          <div>
            <p className='mission_p1'>While The Majority Of Our Charitable Activities Are Undertaken In India, We Are Also Active Locally And In The International Arena.</p>
            <p className='mission_desc'>We Focus On Educating Children, Improving Health, Empowering Women And Rural Development.</p>
          </div>
          <img src={holdkids}></img>

          
        </div>
        <div className='helpus'>
          <h2>How to Help Us?</h2>
          <div className='items'>
            <div className="item1">
              <h3>Donate</h3>
              <p>Donate Towards one of our causes</p>
            </div>
            <div className="item2">
              <h3>Sharing</h3>
              <p>Educate and spread the word about some of the problems we are fighting</p>
            </div>
            <div className="item3">
              <h3>Volunteer</h3>
              <p>Contact us to join and help become a part of the solution...</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  )
}

export default Home