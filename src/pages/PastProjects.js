import React from 'react'
import Header from '../components/Header'
import aimforseva from '../images/Aim-for-Seva.png'
import mission from '../images/mission.jpg'
import aryasamaj from '../images/Arya-Samaj.jpg'
import walawalkar from '../images/walawalkar.jpg'
import canug from '../images/Canug.jpg'
import jagriti from '../images/Jagriti-School-for-Blind-Girls.jpg'
import kagas from '../images/KAGAS-Kumaon.png'
import manav from '../images/MANAV.jpg'
import mobile from '../images/mobile.jpg'
import orissa from '../images/Orissa.jpg'
import sadhana from '../images/Sadhana.jpeg'
import scarf from '../images/SCARF.jpg'
import sewa from '../images/Sewa-Bharati-Bhopal.png'
import sri from '../images/Sri-Satya-Sai.png'
import vidya from '../images/Vidya-Jyoti-School.jpg'
import yogoda from '../images/YOGODA.jpg'
import '../styles/PastProjects.css'
import ProgressBar from '../components/ProgressBar'
function PastProjects() {
  return (
    <>
        <Header />
        <main>
            <div className='item'>
                <div className='image-progressbar'>
                    <a href="https://aimforseva.in/" target="_blank" rel="noopener noreferrer">
                        <img src={aimforseva} alt="Detailed Description" />
                    </a>
                    <p className='progress'><ProgressBar value={100} max={100} /></p>
                </div>

                <div className='description'>
                    <h2>AIM FOR SEVA, MANJAKUDI, TN</h2>
                    <p>Operational Support of Girls Hostel at Swami Dayananda Girls College, Manjakudi, TN operated by AIM for Sewa for provision of food, clothing, education, and medical services, including medicines</p>
                </div>
            </div>

            <div className='item'>
                <div className='image-progressbar'>
                    <a href="https://thearyasamaj.org/home" target="_blank" rel="noopener noreferrer">
                        <img src={aryasamaj} alt="Detailed Description" />
                    </a>
                    <p className='progress'><ProgressBar value={100} max={100} /></p>
                </div>

                <div className='description'>
                <p>Operational Support of poor students with a focus on shelter, education, and health</p>
                </div>
            </div>

            <div className='item'>
                <div className='image-progressbar'>
                    <a href="https://walawalkarhospital.com/" target="_blank" rel="noopener noreferrer">
                        <img src={walawalkar} alt="Detailed Description" />
                    </a>
                    <p className='progress'><ProgressBar value={100} max={100} /></p>
                </div>

                <div className='description'>
                <p>The Hindu Society has been partnering with the B.K.L. Walawalkar Hospital for more than 20 years now, and has been participating in the following projects for several years:</p>
                    <ul>
                       <li>Tribal Health</li>
                       <li>Malnutrition Elimination Project for Children</li>
                       <li>Cataract Project</li>
                       <li>School Dental Health (Children’s Dental Care)</li>
                       <li>Adolescent Girls Initiate (Adolescent girls health)</li>
                    </ul>
                </div>
            </div>

            <div className='item'>
                <div className='image-progressbar'>
                    <a href="http://canugan.org/" target="_blank" rel="noopener noreferrer">
                        <img src={canug} alt="Detailed Description" />
                    </a>
                    <p className='progress'><ProgressBar value={100} max={100} /></p>
                </div>

                <div className='description'>
                    <h2>BCANUG DISABILITY PROJECT, UGANDA</h2>
                    <p>Enable persons with disabilities to become more independent by providing life management tools and equipment; alleviate poverty of persons with disabilities by facilitating their physical access to workplaces and businesses; advance education of students with disabilities by providing means of transportation to and communication with education al institutions; and help persons with vision, hearing and mobility impairment and other disabilities by providing them with assistive devices.</p>
                </div>
            </div>

            <div className='item'>
                <div className='image-progressbar'>
                    <a href="http://www.hindusocietyottawa.com/wp-content/uploads/2020/08/Jagriti-School-for-Blind-Girls.jpg" target="_blank" rel="noopener noreferrer">
                        <img src={jagriti} alt="Detailed Description" />
                    </a>
                    <p className='progress'><ProgressBar value={100} max={100} /></p>
                </div>

                <div className='description'>
                    <h2>NJAGRITI SCHOOL FOR BLIND GIRLS, PUNE, MS</h2>
                    <p>Operational Support for the school covering food, nutritional supplements, clothes and bedding, education, medical, books, Braille Publishing Center, seminars, and workshops.</p>
                </div>
            </div>

            <div className='item'>
                <div className='image-progressbar'>
                    <a href="http://kagas.org/" target="_blank" rel="noopener noreferrer">
                        <img src={kagas} alt="Detailed Description" />
                    </a>
                    <p className='progress'><ProgressBar value={100} max={100} /></p>
                </div>

                <div className='description'>
                    <h2>KAGAS (KUMAON AGRICULTURE AND GREEN ADVANCEMENT SOCIETY), PITHORAGARH, UTTARAKHAND</h2>
                    <p>Rural health care Hygiene Resource and Awareness Program for tribal girls</p>
                </div>
            </div>

            <div className='item'>
                <div className='image-progressbar'>
                    <a href="http://www.rkmsevapratishthan.org/" target="_blank" rel="noopener noreferrer">
                        <img src={manav} alt="Detailed Description" />
                    </a>
                    <p className='progress'><ProgressBar value={100} max={100} /></p>
                </div>

                <div className='description'>
                    <h2>MANAV SEVA PRATISTAN, KOLKATA, WB</h2>
                    <p>Welfare of Students covering: Provision of food and clothing, education, skills development and training and medical services including medicines</p>
                </div>
            </div>

            <div className='item'>
                <div className='image-progressbar'>
                    <a href="http://www.hindusocietyottawa.com/wp-content/uploads/2020/08/mobile-hospital-covering-300x200.jpg" target="_blank" rel="noopener noreferrer">
                        <img src={mobile} alt="Detailed Description" />
                    </a>
                    <p className='progress'><ProgressBar value={100} max={100} /></p>
                </div>

                <div className='description'>
                    <h2>RMOBILE HOSPITAL COVERING</h2>
                    <p>
                        Provision of operation of the mobile infrastructure, health/hygiene related education programs, and medical services including medicine
                    </p>
                </div>
            </div>

            <div className='item'>
                <div className='image-progressbar'>
                    <a href="http://owvsorissa.org/index.html" target="_blank" rel="noopener noreferrer">
                        <img src={orissa} alt="Detailed Description" />
                    </a>
                    <p className='progress'><ProgressBar value={100} max={100} /></p>
                </div>

                <div className='description'>
                    <h2>ORISSA WOMEN’S VOLUNTARY SERVICES, CUTTACK</h2>
                    <p>Orissa Women’s Voluntary Services promote activities for the socio-economic emancipation of women. It provides financial and legal assistance to the destitute.</p>
               
                </div>
            </div>

            <div className='item'>
                <div className='image-progressbar'>
                    <a href="https://belurmath.org/" target="_blank" rel="noopener noreferrer">
                        <img src={mission} alt="Detailed Description" />
                    </a>
                    <p className='progress'><ProgressBar value={100} max={100} /></p>
                </div>

                <div className='description'>
                    <h2>RAMAKRISHNA MISSION</h2> 
                    <p>(Kathri, Rajasthan)</p>
                    <ul>
                        <li>Distribution of sewing machines at tailoring training centers to poor girls and Welfare work by way of the distribution of blankets, winter garments</li>
                    </ul>
                    <p>(Narainpur, Chattisgarh)</p>
                    <ul>
                        <li>Support student hostel at the tribal service centers at Kutul, Irakbhatti, Kundla, Kachchapal, and Akabeda operated by the Ashram covering the provision of operation of the hostels, food, infrastructure maintenance and medical services for eye camps</li>
                    </ul>
                </div>
            </div>

            <div className='item'>
                <div className='image-progressbar'>
                    <a href="https://sadhana-village.org/" target="_blank" rel="noopener noreferrer">
                        <img src={sadhana} alt="Detailed Description" />
                    </a>
                    <p className='progress'><ProgressBar value={100} max={100} /></p>
                </div>

                <div className='description'>
                    <h2>SADHANA VILLAGE DEVELOPMENT, PUNE MH</h2>
                    <p>Tribal Education</p>
                </div>
            </div>

            <div className='item'>
                <div className='image-progressbar'>
                    <a href="https://www.scarfindia.org/" target="" rel="noopener noreferrer">
                        <img src={scarf} alt="Detailed Description" />
                    </a>
                    <p className='progress'><ProgressBar value={100} max={100} /></p>
                </div>

                <div className='description'>
                    <h2>SCARF (SCHIZOPHRENIA RESEARCH FOUNDATION), CHENNAI, TN</h2>
                    <p>Welfare of the Mentally Challenged: Covering provision of supporting the poor, socially backward, and mentally handicapped, including children and providing Medicare to outpatients.</p>
                </div>
            </div>

            <div className='item'>
                <div className='image-progressbar'>
                    <a href="http://www.sewabhartimadhyabharat.org/about.php" target="" rel="noopener noreferrer">
                        <img src={sewa} alt="Detailed Description" />
                    </a>
                    <p className='progress'><ProgressBar value={100} max={100} /></p>
                </div>

                <div className='description'>
                    <h2>SEWA BHARATI, BHOPAL, UP</h2>
                    <p>WTo provide shelter to destitute and orphan children aged 0‐6 years, special care for mentally retarded/physically challenged children of orphan categories, and to rehabilitate the aforesaid children in a family through legal adoption.</p>
                </div>
            </div>

            <div className='item'>
                <div className='image-progressbar'>
                    <a href="https://www.srisathyasai.org/pages/" target="" rel="noopener noreferrer">
                        <img src={sri} alt="Detailed Description" />
                    </a>
                    <p className='progress'><ProgressBar value={100} max={100} /></p>
                </div>

                <div className='description'>
                    <h2>SRI SATYA SAI BABA EDUCATIONAL TRUST, NAIROBI, KENYA</h2>
                    <p>The operation of Hostel for Sathya Sai School ‐ Kisaju covering food, clothes, medicine, and other educational activities.</p>
                </div>
            </div>

            <div className='item'>
                <div className='image-progressbar'>
                    <a href="https://www.facebook.com/VIDYA-JYOTI-Special-School-for-slow-learners-1427534874211521/" target="" rel="noopener noreferrer">
                        <img src={vidya} alt="Detailed Description" />
                    </a>
                    <p className='progress'><ProgressBar value={100} max={100} /></p>
                </div>

                <div className='description'>
                    <h2>VIDYA JYOTI SCHOOL, PUNE, MH</h2>
                    <p>Education for poor children with learning disability</p>
                </div>
            </div>

            <div className='item'>
                <div className='image-progressbar'>
                    <a href="https://yssofindia.org/" target="" rel="noopener noreferrer">
                        <img src={yogoda} alt="Detailed Description" />
                    </a>
                    <p className='progress'><ProgressBar value={100} max={100} /></p>
                </div>

                <div className='description'>
                    <h2>YOGODA</h2>
                    <ul>
                        <li>Providing preventative health care, render medical services to the needy poor people, render medical relief services including cataract operations.</li>
                        <li>Supporting the operation of the mobile infrastructure, provision for leprosy related programs, medical services including medicines, supplies such as X‐ray films, diagnostic material, and eye camps</li>
                    </ul>
                </div>
            </div>

        </main>
    </>
    
  )
}

export default PastProjects