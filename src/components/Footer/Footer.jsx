import React from 'react'
import './Footer.css'
import { FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "white", marginRight: "5px" }} />
                        <div>
                        <p>ongole ,praksam</p>
                            <p>India</p>
                        </div>
                    </div>

                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: "white", marginRight: "5px" }} /> 8688593937
                        </h4>
                    </div>

                    <div className="email">
                        <h4><FaMailBulk size={20} style={{ color: "white"}} />  vishnusaitejapatchava@gmail.com
                        </h4>
                    </div>

                </div>
                <div className="right">
                    <h4>Something about me </h4>
                    <p>I enjoy group discussions and  enthusiastic to learn new technologies.</p>
                    <div className="social">
                    
                    <a href="https://instagram.com/mr_vishnu_sai_teja.p?igshid=OGQ5ZDc2ODk2ZA=="> <FaInstagram size={30} style={{ color: "white" }} />  </a>
                    <a href="https://www.linkedin.com/in/vishnu-sai-teja-patchava-aa1bb5264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin size={30} style={{ color: "white"}} /> </a>
                    <a href="https://github.com/patchava0106"><FaGithub size={30} style={{ color: "white"}} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
