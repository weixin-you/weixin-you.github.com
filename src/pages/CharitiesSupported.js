import React from 'react'
import Header from '../components/Header'
import baf from '../images/BAF.jpg'
import ckcu from '../images/CKCU-Radio.png'
import ccs from '../images/ccs.png'
import diabetes from '../images/diabetes.png'
import liver from '../images/liver.png'
import nature from '../images/nature.png'
import readcross from '../images/redcross.png'
import chinmaya from '../images/chinmaya.png'
import bryuere from '../images/bryuere.jpg'
import habitat from '../images/habitat.jpg'
import jindal from '../images/jindal.png'
import manjari from '../images/manjari.png'
import mukul from '../images/mukul.png'
import foodbank from '../images/foodbank.jpg'
import independent from '../images/independent.jpg'
import queensway from '../images/queensway.png'
import hospital from '../images/hospital.jpg'
import tcf from '../images/tcf.png'
import uottawa from '../images/uottawa.jpg'
import Footer from '../components/Footer'
import '../styles/Partners.css'
function CharitiesSupported() {
  return (
    <>
        <Header />
        <div className='header-charities-supported'>
            <h1 >Canadian Charities Supported(Qualified-Donees)</h1>
        </div>
        
        <main className='main-part'>
            <div className='charity-item'>
                <div className='image-container'>
                    <a href="http://www.baf.uottawa.ca/" target="_blank" rel="noopener noreferrer">
                        <img src={baf} alt="Detailed charity-description" />
                    </a>
                </div>

                <div className='charity-description'>
                    <h2>BHAWANI ANANTARAMAN FOUNDATION</h2>
                    <p>Bhawani Anantaraman Foundation was established by Dr. A. V. Anantaraman after he lost his wife, Bhawani and daughters Aruna and
                         Rupa in the tragic bombing of the Air India flight Kanishka in 1985. As Aruna and Rupa were both talented violinists, the
                          Foundation has established a room in their honour and offers scholarships in their name at the University of Ottawa. The 
                          Foundation also supports the Bhawani Matriculation school, established by Dr. Anantaraman in Yercaud, Tamil Nadu, India, 
                          which offers free education to the area’s underprivileged children. Students from Kindergarten to Gr. 10 are educated using
                          modern tools and a forward-looking teaching style in a caring environment. All donations are used to fund the activities of
                           the Foundation and the Board of Directors volunteer their time and effort.</p>
                    <a href="http://www.baf.uottawa.ca/">Visit Our Website...</a>    
                </div>
            </div>

            <div className='charity-item'>
                <div className='image-container'>
                    <a href="https://www.ckcufm.com/" target="_blank" rel="noopener noreferrer">
                        <img src={ckcu} alt="Detailed charity-description" />
                    </a>
                </div>

                <div className='charity-description'>
                    <h2>CKCU RADIO, OTTAWA</h2>
                    <p>CKCU-FM is a Canadian community-based campus radio station, which is an integral part of the Carleton University community. CKCU is 
                        a Registered Charity and serve many other groups within their broadcast range. They continue to be a pioneer in community 
                        broadcasting, carrying out their mandate of providing an alternative to commercial radio as a voice for the many Ottawa 
                        communities not served by the mainstream media.</p>
                    <a href="https://www.ckcufm.com/">Visit Our Website...</a> 
                </div>
            </div>

            <div className='charity-item'>
                <div className='image-container'>
                    <a href="https://www.cancer.ca/" target="_blank" rel="noopener noreferrer">
                        <img src={ccs} alt="Detailed charity-description" />
                    </a>
                </div>

                <div className='charity-description'>
                    <h2>CANADIAN CANCER SOCIETY, OTTAWA</h2>
                    <p>The Canadian Cancer Society is a community-based charitable organization whose mission is to eliminate cancer and enhance the 
                        quality of life of those who have the disease. They fund the most promising cancer research, advocate for health-protecting policies,
                         and provide trusted information, resources, and support for every Canadian affected by cancer.</p>
                    <a href="https://www.cancer.ca/">Visit Our Website...</a> 
                </div>
                
            </div>

            <div className='charity-item'>
                <div className='image-container'>
                    <a href="https://www.diabetes.ca/" target="_blank" rel="noopener noreferrer">
                        <img src={diabetes} alt="Detailed charity-description" />
                    </a>
                </div>

                <div className='charity-description'>
                    <h2>CANADIAN DIABETES ASSOCIATION, TORONTO</h2>
                    <p>The Canadian Diabetes Association is a charity whose mission is serving Canadians affected by diabetes or prediabetes. 
                        Through programs, education, and services, they support people living with diabetes in their daily fight to live. 
                        Some of the many programs which they hold include collecting gently used clothing and items for those who need it most, 
                        events in the community to educate the public, and free webinars hosted by health-care professionals.</p>
                    <a href="https://www.diabetes.ca/">Visit Our Website...</a> 
                </div>
            </div>

            <div className='charity-item'>
                <div className='image-container'>
                    <a href="https://www.liver.ca/" target="_blank" rel="noopener noreferrer">
                        <img src={liver} alt="Detailed charity-description" />
                    </a>
                </div>

                <div className='charity-description'>
                    <h2>CANADIAN LIVER FOUNDATION, OTTAWA</h2>
                    <p>The Canadian Liver Foundation is a charitable organization that is dedicated to reducing the incidence and impact of all liver 
                        diseases. They actively support education and research into liver disease. Their projects include investing in liver research, 
                        delivering support programs, and advocating for liver health for all Canadians.</p>
                    <a href="https://www.liver.ca/">Visit Our Website...</a>    
                </div>
            </div>

            <div className='charity-item'>
                <div className='image-container'>
                    <a href="https://nature.ca/en/home" target="_blank" rel="noopener noreferrer">
                        <img src={nature} alt="Detailed charity-description" />
                    </a>
                </div>

                <div className='charity-description'>
                    <h2>CANADIAN MUSEUM OF NATURE, OTTAWA</h2>
                    <p>The Canadian Museum of Nature is committed to sharing the wonders of our natural heritage through exhibitions, educational programs,
                         and scientific research. They are Canada’s national natural history and natural sciences museum. They also conduct relevant research
                          in zoology, palaeobiology, mineral sciences and botany.</p>
                    <a href="https://nature.ca/en/home">Visit Our Website...</a>        
                </div>
            </div>

            <div className='charity-item'>
                <div className='image-container'>
                    <a href="https://www.redcross.ca/" target="_blank" rel="noopener noreferrer">
                        <img src={readcross} alt="Detailed charity-description" />
                    </a>
                </div>

                <div className='charity-description'>
                    <h2>CANADIAN RED CROSS</h2>
                    <p>The Red Cross Society trains volunteers in response to emergency situations and provides injury prevention services. The society 
                        also helps Canada’s most vulnerable populations as well as communities destroyed by disasters. From the many programs they have, 
                        some are home care services, refugee services, and community support.</p>
                    <a href="https://www.redcross.ca/">Visit Our Website...</a>    
                </div>
            </div>

            <div className='charity-item'>
                <div className='image-container'>
                    <a href="http://www.chinmayamission.com/chinmaya-mission-ottawa/" target="_blank" rel="noopener noreferrer">
                        <img src={chinmaya} alt="Detailed charity-description" />
                    </a>
                </div>

                <div className='charity-description'>
                    <h2>CHINMAYA MISSION, OTTAWA</h2>
                    <p>
                        The Chinmaya Mission Ottawa is an organization founded by devotees of Swami Chinmayananda in 1953, with the objective of spreading the knowledge of Vedanta to anyone of any walk of life to aid them in becoming positive contributors to society. Their projects include an informative teleserial as well as a yearlong series of Birth Centenary Celebrations.
                    </p>
                    <a href="http://www.chinmayamission.com/chinmaya-mission-ottawa/">Visit Our Website...</a> 
                </div>
            </div>

            <div className='charity-item'>
                <div className='image-container'>
                    <a href="https://www.bruyere.org/en/bruyere-foundation" target="_blank" rel="noopener noreferrer">
                        <img src={bryuere} alt="Detailed charity-description" />
                    </a>
                </div>

                <div className='charity-description'>
                    <h2>ELIZABETH BRUYÈRE FOUNDATION, OTTAWA</h2>
                    <p>They deliver a wide variety of services including rehabilitation, medically complex, palliative, residential, and primary care. Also, they pursue research which leads to
                         constant innovation with a focus on providing care that promotes independence.</p>
                    <a href="https://www.bruyere.org/en/bruyere-foundation">Visit Our Website...</a>   
               
                </div>
            </div>

            <div className='charity-item'>
                <div className='image-container'>
                    <a href="https://habitatgo.com/" target="_blank" rel="noopener noreferrer">
                        <img src={habitat} alt="Detailed charity-description" />
                    </a>
                </div>

                <div className='charity-description'>
                    <h2>HABITAT FOR HUMANITY</h2>
                    <p>
                    Habitat for Humanity is an organization that brings communities together to help families build strength, stability, and 
                    self-reliance through affordable homeownership. Their main vision is that everyone should have a decent and affordable
                     place to live. They have impacted countless families in the Greater Ottawa region by building safe and stable households.
                    </p>
                    <a href="https://habitatgo.com/">Visit Our Website...</a>   
                </div>
            </div>

            <div className='charity-item'>
                <div className='image-container'>
                    <a href="https://www.charitydata.ca/charity/jindal-foundation/890939887RR0001/" target="_blank" rel="noopener noreferrer">
                        <img src={jindal} alt="Detailed charity-description" />
                    </a>
                </div>

                <div className='charity-description'>
                    <h2>JINDAL FOUNDATION, OTTAWA</h2>
                    <p>A charitable organization with the humanitarian objective of serving the poor and downtrodden in various fields. True to the
                         ideals and values of its chief architect and founder, Dr. Sitaram Jindal, the foundation provides basic needs across various 
                         sections of society including education, healthcare, and rural development.</p>
                    <a href="https://www.charitydata.ca/charity/jindal-foundation/890939887RR0001/">Visit Our Website...</a>
                </div>
            </div>

            <div className='charity-item'>
                <div className='image-container'>
                    <a href="https://msmf.ca/" target="" rel="noopener noreferrer">
                        <img src={manjari} alt="Detailed charity-description" />
                    </a>
                </div>

                <div className='charity-description'>
                    <h2>MANJARI SANKURATHRI MEMORIAL FOUNDATION</h2>
                    <p>A registered Canadian charity which promotes rural community development in India, through education and vocational training.
                         Dr. Chandra Sankuathri established this foundation in 1989 in loving memory of his wife.</p>
                    <a href="https://msmf.ca/">Visit Our Website...</a>   
                </div>
            </div>

            <div className='charity-item'>
                <div className='image-container'>
                    <a href="http://www.mukulhindischool.org/" target="" rel="noopener noreferrer">
                        <img src={mukul} alt="Detailed charity-description" />
                    </a>
                </div>

                <div className='charity-description'>
                    <h2>MUKUL HINDI SCHOOL, OTTAWA</h2>
                    <p>Mukul Hindi school’s goal is to promote the Hindi language and Indian culture. Classes are offered free of charge by local school 
                        boards through the International Language Programme. The school board provides instruction, curriculum, the school site, 
                        and supervision of staff and students.</p>
                    <a href="http://www.mukulhindischool.org/">Visit Our Website...</a>   
                </div>
            </div>

            <div className='charity-item'>
                <div className='image-container'>
                    <a href="https://www.ottawafoodbank.ca/" target="" rel="noopener noreferrer">
                        <img src={foodbank} alt="Detailed charity-description" />
                    </a>
                </div>

                <div className='charity-description'>
                    <h2>OTTAWA FOOD BANK</h2>
                    <p>The Ottawa Food Bank provides fresh and non-perishable food, as well as supplies such as diapers, toiletries, and cleaning supplies to
                         its network of over 100 emergency food programs across the city.</p>
                    <a href="https://www.ottawafoodbank.ca/">Visit Our Website...</a>   
                </div>
            </div>

            <div className='charity-item'>
                <div className='image-container'>
                    <a href="https://oilrc.com/" target="" rel="noopener noreferrer">
                        <img src={independent} alt="Detailed charity-description" />
                    </a>
                </div>

                <div className='charity-description'>
                    <h2>OTTAWA INDEPENDENT LIVING RESOURCE CENTRE</h2>
                    <p>The mission of the Ottawa Independent Living Resource Centre is to assist in the individual empowerment of all persons with any 
                        disability in the Ottawa area and to provide tools they need to direct their lives and participate fully in the community.
                        They have been supporting people with disabilities for more than 15 years.</p>
                    <a href="https://oilrc.com/">Visit Our Website...</a>   
                </div>
            </div>

            <div className='charity-item'>
                <div className='image-container'>
                    <a href="https://qchfoundation.ca/" target="" rel="noopener noreferrer">
                        <img src={queensway} alt="Detailed charity-description" />
                    </a>
                </div>

                <div className='charity-description'>
                    <h2>QUEENSWAY CARLETON HOSPITAL FOUNDATION</h2>
                    <p>The Queensway Carleton Hospital Foundation’s goal is to inspire action from our communities to invest in the Queensway Carleton
                         Hospital, so they can provide exceptional care.</p>
                    <a href="https://qchfoundation.ca/">Visit Our Website...</a>   
                </div>
            </div>

            <div className='charity-item'>
                <div className='image-container'>
                    <a href="https://ohfoundation.ca/" target="" rel="noopener noreferrer">
                        <img src={hospital} alt="Detailed charity-description" />
                    </a>
                </div>

                <div className='charity-description'>
                    <h2>QTHE OTTAWA HOSPITAL FOUNDATION</h2>
                    <p>The Ottawa Hospital Foundation helps provide primary care and funds research that brings hope to patients. They also provide the 
                        latest technology so the patients receive the very best care.</p>
                    <a href="https://ohfoundation.ca/">Visit Our Website...</a>   
                </div>
            </div>


            <div className='charity-item'>
                <div className='image-container'>
                    <a href="http://www.toronto-calcutta.org/" target="" rel="noopener noreferrer">
                        <img src={tcf} alt="Detailed charity-description" />
                    </a>
                </div>

                <div className='charity-description'>
                    <h2>TORONTO-CALCUTTA FOUNDATION, TORONTO</h2>
                    <p>TCF helps to alleviate poverty and need in Calcutta. They focus on health care, education, and vocational training with girls.</p>
                    <a href="http://www.toronto-calcutta.org/">Visit Our Website...</a>   
                </div>
            </div>

            <div className='charity-item'>
                <div className='image-container'>
                    <a href="https://www.uottawa.ca/en" target="" rel="noopener noreferrer">
                        <img src={uottawa} alt="Detailed charity-description" />
                    </a>
                </div>

                <div className='charity-description'>
                    <h2>UNIVERSITY OF OTTAWA SCHOLARSHIP FUND</h2>
                    <p>This fund provides scholarships to academically strong students and bursaries to the students in financial need.</p>
                    <a href="https://www.uottawa.ca/en">Visit Our Website...</a>   
                </div>
            </div>

        </main>
        <Footer />
    </>
    
  )
}

export default CharitiesSupported