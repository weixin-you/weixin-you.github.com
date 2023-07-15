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
import '../styles/Projects.css'
import ProgressBar from '../components/ProgressBar'
function Projects() {
  return (
    <>
        <Header />
        <main>
            <div className='item'>
                <div className='image-progressbar'>
                    <a href="https://ashrayakruti.org/" target="_blank" rel="noopener noreferrer">
                        <img src={ashray} alt="Detailed Description" />
                    </a>
                    <p className='progress'><ProgressBar value={70} max={100} /></p>
                </div>

                <div className='description'>
                    <h2>ASHRAY AKRUTI, HYDERABAD</h2>
                    <p>Education and Rehabilitation of the hearing impaired, and education of children from weaker sections of the society</p>
                </div>
            </div>

            <div className='item'>
                <div className='image-progressbar'>
                    <a href="https://www.bharatsevashramsangha.org/" target="_blank" rel="noopener noreferrer">
                        <img src={bharat} alt="Detailed Description" />
                    </a>
                    <p className='progress'><ProgressBar value={70} max={100} /></p>
                </div>

                <div className='description'>
                    <h2>BHARAT SEVASHRAM SANGHA, KOLKATA WB</h2>
                    <ul>
                        <li>They fund hospitals (including cancer and leprosy hospitals), mobile medical units, and ambulances.</li>
                        <li>They fund residential education, schools, and technical institutes.</li>
                        <li>They support women empowerment and youth welfare centers.</li>
                        <li>They do relief work during natural calamities.</li>
                    </ul>
                </div>
            </div>

            <div className='item'>
                <div className='image-progressbar'>
                    <a href="https://walawalkarhospital.com/" target="_blank" rel="noopener noreferrer">
                        <img src={walawalkar} alt="Detailed Description" />
                    </a>
                    <p className='progress'><ProgressBar value={70} max={100} /></p>
                </div>

                <div className='description'>
                    <h2>B.K.L. WALAWALKAR HOSPITAL DIAGNOSTIC & RESEARCH CENTRE</h2>
                    <p>The Hindu Society has been partnering with the B.K.L. Walawalkar Hospital for more than 20 years now, and has been participating in the following projects for several years:</p>
                    <ul>
                        <li>Malnutrition Elimination Project for Children
                            <ul>
                                <li>Providing children below the age of six in the vicinity of the Ratnagiri district with: assessments on their nutritional status, detection for infections and diseases, laying a foundation for the proper psychological development of the child, and reducing the morbidity and mortality amongst these target groups.</li>
                            </ul>
                        </li>
                        <li>Cataract Project
                            <ul>
                                <li>
                                    The objectives are to provide screening for refractive error, cataract, glaucoma, and other ocular diseases, eradicating preventable and curable blindness in the rural population, and intervention by cataract surgeries.
                                </li>
                            </ul>
                        </li>
                        <li>School Dental Health (Children’s Dental Care)
                            <ul>
                                <li>Providing school children with oral screening, and follow up visits every six months.</li>
                            </ul>
                        </li>
                        <li>Adolescent Girls Initiate (Adolescent girls health)
                            <ul>
                                <li>Providing health check-ups, services, psychological counseling, career guidance, health education, and support along with other relevant components for adolescent girls’ growth, development, and empowerment.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='item'>
                <div className='image-progressbar'>
                    <a href="https://www.bombayleprosy.org/" target="_blank" rel="noopener noreferrer">
                        <img src={estd} alt="Detailed Description" />
                    </a>
                    <p className='progress'><ProgressBar value={70} max={100} /></p>
                </div>

                <div className='description'>
                    <h2>BOMBAY LEPROSY PROJECT, MUMBAI, MH</h2>
                    <ul>
                        <li>They work directly in the community to diagnose and treat leprosy patients.</li>
                        <li>They provide prevention of disability and rehabilitation services.</li>
                        <li>They carry out operational and technical research which is recognized internationally.</li>
                        <li>BLP news (March 2022)</li>
                    </ul>
                </div>
            </div>

            <div className='item'>
                <div className='image-progressbar'>
                    <a href="http://www.nysasdri.org/" target="_blank" rel="noopener noreferrer">
                        <img src={nysasdri} alt="Detailed Description" />
                    </a>
                    <p className='progress'><ProgressBar value={70} max={100} /></p>
                </div>

                <div className='description'>
                    <h2>NYSASDRI – NATIONAL YOUTH SERVICE ACTION AND SOCIAL DEVELOPMENT RESEARCH INSTITUTE</h2>
                    <p>The National Youth Service Action and Social Development Research Institute (NYSASDRI) works at facilitating 
                        the establishment of a just and healthy society in which the poorest of the poor have the power to attain a better quality of life with equal access to, and control over resources.</p>
                </div>
            </div>

            <div className='item'>
                <div className='image-progressbar'>
                    <a href="http://www.rasaindia.org/index.html" target="_blank" rel="noopener noreferrer">
                        <img src={rasa} alt="Detailed Description" />
                    </a>
                    <p className='progress'><ProgressBar value={70} max={100} /></p>
                </div>

                <div className='description'>
                    <h2>NRASA – RAMANA SUNRITYA AALAYA</h2>
                    <p>Current projects include Life Skills Training, Performance Training, Sensory Training to promote financial empowerment for adults with special needs.</p>
                </div>
            </div>

            <div className='item'>
                <div className='image-progressbar'>
                    <a href="https://realvpm.org/" target="_blank" rel="noopener noreferrer">
                        <img src={real} alt="Detailed Description" />
                    </a>
                    <p className='progress'><ProgressBar value={70} max={100} /></p>
                </div>

                <div className='description'>
                    <h2>REAL – RURAL EDUCATION AND ACTION FOR LIBERATION</h2>
                    <ul>
                        <li>Emergency day-to-day assistance to households without adequate income, including provision of ration and basic essentials kits as described in their May document.</li>
                        <li>Direct day-to-day assistance to women’s Self-Help Groups for urgent efforts to support income generation and respond to family needs amplified by the COVID crisis.</li>
                    </ul>
                </div>
            </div>

            <div className='item'>
                <div className='image-progressbar'>
                    <a href="http://mangaloremath.in/" target="_blank" rel="noopener noreferrer">
                        <img src={math} alt="Detailed Description" />
                    </a>
                    <p className='progress'><ProgressBar value={70} max={100} /></p>
                </div>

                <div className='description'>
                    <h2>REAL – RURAL EDUCATION AND ACTION FOR LIBERATION</h2>
                    <p>
                    Operational Support of Orphanage with focus on shelter, education, and health covering the provision of food and clothing, medical services including medicines
                    </p>
                </div>
            </div>

            <div className='item'>
                <div className='image-progressbar'>
                    <a href="https://belurmath.org/" target="_blank" rel="noopener noreferrer">
                        <img src={mission} alt="Detailed Description" />
                    </a>
                    <p className='progress'><ProgressBar value={70} max={100} /></p>
                </div>

                <div className='description'>
                    <h2>RRAMAKRISHNA MISSION</h2>
                    <ul>
                    <p>(Delhi)</p>
                        <li>Provision of Operational Support of providing medical services to poor people with a focus on prevention, education, consultation, and treatment and providing medical care and medicines to poor people especially belonging to scheduled castes in the outlying areas of Delhi, who do not have sufficient access to medical care.</li>
                        <li>Free milk to school-going children and expectant mothers belonging to poor echelon</li>
                        <li>Support for the T.B. Clinic, which is a philanthropic institution that serves the poorer sections of the community</li>
                    </ul>
                    <ul>
                        <p>(Kanpur)</p>
                        <li>Operational Support of providing medical services to poor people with a focus on prevention, education, consultation, and treatment.</li>
                        <li>Covering the operation of the mobile infrastructure, health-related education programs, medical services including medicines, supplies such as X‐ray films, diagnostic material.</li>
                        <li>Medicines and support for Medical Dispensary</li>
                    </ul>

                    <ul>
                        <p>(Haridwar)</p>
                        <li>Operational Support for providing medical services to poor people with a focus on prevention, education, consultation and treatment covering health-related education programs, medical services including medicines, supplies such as X‐ray films, diagnostic material</li>
                        <li>Support for the T.B. Clinic, which is a philanthropic institution that serves the poorer sections of the community</li>
                    </ul>

                    <ul>
                        <p>(Chennai)</p>
                        <li>Education for adolescent girls</li>
                    </ul>
               
                </div>
            </div>

            <div className='item'>
                <div className='image-progressbar'>
                    <a href="https://sevalaya.org/" target="_blank" rel="noopener noreferrer">
                        <img src={sevalaya} alt="Detailed Description" />
                    </a>
                    <p className='progress'><ProgressBar value={70} max={100} /></p>
                </div>

                <div className='description'>
                    <h2>SEVALAYA</h2>
                    <p>
                    They run a school from pre-primary to higher secondary for over 2000 children. They have a Medical Center, Seniors Home, and Children’s Hostel. They also provide Relief and Rehabilitation intervention to natural calamities.
                    </p>
                </div>
            </div>

            <div className='item'>
                <div className='image-progressbar'>
                    <a href="http://www.sriramakrishnavidyalayatrichy.org/trust.php" target="_blank" rel="noopener noreferrer">
                        <img src={srk} alt="Detailed Description" />
                    </a>
                    <p className='progress'><ProgressBar value={70} max={100} /></p>
                </div>

                <div className='description'>
                    <h2>SRK TRUST, TRICHY, TN</h2>
                    <ul>
                        <li>Run a school from kindergarten to grade ten</li>
                        <li>Provide free education and resources to children.</li>
                        <li>Free lunch for children.</li>
                        <li>Relief work during calamities and disasters.</li>
                    </ul>
                </div>
            </div>

            <div className='item'>
                <div className='image-progressbar'>
                    <a href="http://www.hindusocietyottawa.com/wp-content/uploads/2020/07/Uttarakhand-Disaster-Relief.jpg" target="" rel="noopener noreferrer">
                        <img src={uttar} alt="Detailed Description" />
                    </a>
                    <p className='progress'><ProgressBar value={70} max={100} /></p>
                </div>

                <div className='description'>
                    <h2>SUTTARAKHAND DISASTER RELIEF</h2>
                    <p>In the last few years, Uttarakhand has faced a lot of flooding that has claimed many lives. Their team of volunteers assisted, not just in providing food, but accommodation and rescue. After the flooding occurs, the disaster relief team rebuilds all that was lost. Because of Uttarakhand’s rain and bad drainage, water levels can rise as high as 2m in just a matter of hours.</p>
                </div>
            </div>

        </main>
    </>
    
  )
}

export default Projects