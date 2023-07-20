import React from 'react'
import Header from '../components/Header'
import ashray from '../images/ashray.gif'
import bharat from '../images/bharat.png'
import walawalkar from '../images/walawalkar.jpg'
import estd from '../images/estd.jpg'
import nysasdri from '../images/nysasdri.jpg'
import rasa from '../images/rasa.jpg'
import real from '../images/real.jpg'
import math from '../images/math.jpg'
import mission from '../images/mission.jpg'
import sevalaya from '../images/sevalaya.jpg'
import srk from '../images/srk.png'
import uttar from '../images/uttar.jpg'
import '../styles/Partners.css'
import Footer from '../components/Footer'
function Partners() {
  return (
    <>
        <Header />
        <div className='header-partners'>
            <h1 >Approved HSOC Partners Outside Canada (Non-Qualified Donnes)</h1>
        </div>
        <main className='main-part'>
            <div className='charity-item'>
                <div className='image-container'>
                    <a href="https://ashrayakruti.org/" target="_blank" rel="noopener noreferrer">
                        <img src={ashray} alt="Detailed charity-description" />
                    </a>
                </div>

                <div className='charity-description'>
                    <h2>ASHRAY AKRUTI, HYDERABAD</h2>
                    <p>Ashray Akruti is a registered NGO, working with people who have disabilities with a focus on children with hearing loss. 
                        The organization implements projects across health, education and skill development to improve the lives of people with disabilities. 
                        They firmly believe in the potential of someone with disabilities and how they contribute to society just as much as everyone else.</p>
                    <a href="https://www.ashrayakruti.org/">Visit Our Website...</a>    
                </div>
            </div>

            <div className='charity-item'>
                <div className='image-container'>
                    <a href="https://www.bharatsevashramsangha.org/" target="_blank" rel="noopener noreferrer">
                        <img src={bharat} alt="Detailed charity-description" />
                    </a>
                </div>

                <div className='charity-description'>
                    <h2>BHARAT SEVASHRAM SANGHA</h2>
                    <p>Bharat Sevashram Sangha runs charitable dispensaries focusing on medical services, tribal welfare centers, and education. They also support welfare centers for women and youth as well as emergency relief work.</p>
                    <a href="https://www.bharatsevashramsangha.org/">Visit Our Website...</a> 
                </div>
            </div>

            <div className='charity-item'>
                <div className='image-container'>
                    <a href="https://walawalkarhospital.com/" target="_blank" rel="noopener noreferrer">
                        <img src={walawalkar} alt="Detailed charity-description" />
                    </a>
                </div>

                <div className='charity-description'>
                    <h2>B.K.L. WALAWALKAR HOSPITAL DIAGNOSTIC & RESEARCH CENTRE</h2>
                    <p>TB.K.L. Walawalkar Hospital Diagnostic & Research Centre offers basic & state-of-the-art health services to the poor & needy people at very affordable rates.</p>
                    <p>The hospital is run by the Shri Vithalrao Joshi Charities Trust. The Aim of Shri Vithalrao Joshi charities Trust is to provide human beings basic needs, 
                        such as food, water, clothing, shelter, education, and medical aid for his physical survival discourse for his self-realisation. 
                        The organization has been working for the last 30+ years for the social & spiritual upliftment of the poor. The areas of activity 
                        are the Ratnagiri district, Pune, and Mumbai city of the Maharashtra State, on the western coast of India.</p>
                    <a href="https://walawalkarhospital.com/">Visit Our Website...</a> 
                </div>
                
            </div>

            <div className='charity-item'>
                <div className='image-container'>
                    <a href="https://www.bombayleprosy.org/" target="_blank" rel="noopener noreferrer">
                        <img src={estd} alt="Detailed charity-description" />
                    </a>
                </div>

                <div className='charity-description'>
                    <h2>BOMBAY LEPROSY PROJECT</h2>
                    <p>Bombay Leprosy Project carries out activities to improve the quality of life of leprosy patients. It is involved in research into issues related to leprosy.</p>
                    <a href="https://www.bombayleprosy.org/">Visit Our Website...</a> 
                </div>
            </div>

            <div className='charity-item'>
                <div className='image-container'>
                    <a href="http://www.nysasdri.org/" target="_blank" rel="noopener noreferrer">
                        <img src={nysasdri} alt="Detailed charity-description" />
                    </a>
                </div>

                <div className='charity-description'>
                    <h2>NNATIONAL YOUTH SERVICE ACTION AND SOCIAL DEVELOPMENT RESEARCH INSTITUTE</h2>
                    <p>The National Youth Service Action and Social Development Research Institute (NYSASDRI) is a non-profit, 
                        non-governmental organization based in Odisha, India. It aims at facilitating the establishment of a just 
                        and healthy society in which the poorest of the poor have the power to attain a better quality of life with equal access to, and control over resources.</p>
                    <a href="http://www.nysasdri.org/">Visit Our Website...</a>    
                </div>
            </div>

            <div className='charity-item'>
                <div className='image-container'>
                    <a href="http://www.rasaindia.org/index.html" target="_blank" rel="noopener noreferrer">
                        <img src={rasa} alt="Detailed charity-description" />
                    </a>
                </div>

                <div className='charity-description'>
                    <h2>RASA – RAMANA SUNRITYA AALAYA</h2>
                    <p>RASA is a unique organization that focuses on the holistic development of each individual through experiences of music, 
                        dance, and drama. Several hundred special children have benefited from RASA over the past three decades.
                         They also impart training to these children free of cost. The Hindu Society of Ottawa-Carleton has helped them in the education of children with a learning disability.</p>
                    <a href="http://www.rasaindia.org/index.html">Visit Our Website...</a>        
                </div>
            </div>

            <div className='charity-item'>
                <div className='image-container'>
                    <a href="https://realvpm.org/" target="_blank" rel="noopener noreferrer">
                        <img src={real} alt="Detailed charity-description" />
                    </a>
                </div>

                <div className='charity-description'>
                    <h2>REAL – RURAL EDUCATION AND ACTION FOR LIBERATION</h2>
                    <p>REAL provides services to improve the socio-economic status to promote social justice, equal opportunity, 
                        and equitable sharing of resources for sustainable development. They work at micro and macro levels to influence their decision-making process.</p>
                    <a href="https://realvpm.org/l">Visit Our Website...</a>    
                </div>
            </div>

            <div className='charity-item'>
                <div className='image-container'>
                    <a href="http://mangaloremath.in/" target="_blank" rel="noopener noreferrer">
                        <img src={math} alt="Detailed charity-description" />
                    </a>
                </div>

                <div className='charity-description'>
                    <h2>REAL – RURAL EDUCATION AND ACTION FOR LIBERATION</h2>
                    <p>Operational Support of Orphanage with focus on shelter, education, and health covering the provision of food and clothing, medical services including medicines
                    </p>
                    <a href="http://mangaloremath.in/">Visit Our Website...</a> 
                </div>
            </div>

            <div className='charity-item'>
                <div className='image-container'>
                    <a href="https://belurmath.org/" target="_blank" rel="noopener noreferrer">
                        <img src={mission} alt="Detailed charity-description" />
                    </a>
                </div>

                <div className='charity-description'>
                    <h2>RRAMAKRISHNA MISSION</h2>
                    <p>Ramakrishna Mission is a Hindu religious and spiritual organization that forms the worldwide Vedanta Movement. The RK Math 
                        and the RK Mission are the two key organizations that direct the work of the socio-religious Ramakrishna Movement.</p>
                    <a href="https://belurmath.org/">Visit Our Website...</a>   
               
                </div>
            </div>

            <div className='charity-item'>
                <div className='image-container'>
                    <a href="https://sevalaya.org/" target="_blank" rel="noopener noreferrer">
                        <img src={sevalaya} alt="Detailed charity-description" />
                    </a>
                </div>

                <div className='charity-description'>
                    <h2>SEVALAYA</h2>
                    <p>
                    Sevalaya is based on Swami Vivekanada’s belief that by helping others, we are in fact blessing ourselves.
                     They currently serve 33 villages in and around Kasuva Village, about 50 kilometers from Chennai. They wish to provide 
                     these villages with proper education, rural development, and homes for everyone.
                    </p>
                    <a href="https://sevalaya.org/">Visit Our Website...</a>   
                </div>
            </div>

            <div className='charity-item'>
                <div className='image-container'>
                    <a href="http://www.sriramakrishnavidyalayatrichy.org/trust.php" target="_blank" rel="noopener noreferrer">
                        <img src={srk} alt="Detailed charity-description" />
                    </a>
                </div>

                <div className='charity-description'>
                    <h2>SRK TRUST</h2>
                    <p>They focus on the education needs of the rural poor, offering transportation, education, and nutrition.
                         Special services are provided to disabled children.</p>
                    <a href="http://www.sriramakrishnavidyalayatrichy.org/trust.php">Visit Our Website...</a>
                </div>
            </div>

            <div className='charity-item'>
                <div className='image-container'>
                    <a href="http://www.hindusocietyottawa.com/wp-content/uploads/2020/07/Uttarakhand-Disaster-Relief.jpg" target="" rel="noopener noreferrer">
                        <img src={uttar} alt="Detailed charity-description" />
                    </a>
                </div>

                <div className='charity-description'>
                    <h2>SUTTARAKHAND DISASTER RELIEF</h2>
                    <p>In the last few years, Uttarakhand has faced a lot of flooding that has claimed many lives. Their team of volunteers assisted,
                         not just in providing food, but accommodation and rescue. After the flooding occurs, the disaster relief team rebuilds all 
                         that was lost. Because of Uttarakhand’s rain and bad drainage, water levels can rise as high as 2m in just a matter of hours.</p>
                    <a href="http://www.hindusocietyottawa.com/wp-content/uploads/2020/07/Uttarakhand-Disaster-Relief.jpg">Visit Our Website...</a>   
                </div>
            </div>

        </main>
        <Footer />
    </>
    
  )
}

export default Partners