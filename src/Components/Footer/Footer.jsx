import React, { useEffect } from 'react'
import './footer.css'
import video2 from '../../Assets/vid2.mp4'
import { FiChevronRight, FiSend } from 'react-icons/fi'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai'
import { RiTwitterXLine } from 'react-icons/ri'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Footer = () => {useEffect(() => {
  Aos.init({ duration: 2000 });
}, [])
  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>
          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Enter Email Address'/>
            <button data-aos="fade-up" className='btn flex' type='submit'>
              SEND <FiSend className='icon'/>
            </button>
          </div>
        </div>
        <div data-aos="fade-up" className="footerCard flex">
          <div className="footerIntro flex">
          <div data-aos="fade-right"className="logoDiv">
            <a href="#" className='logo flex'>
              <MdOutlineTravelExplore className='icon'/>
              Voyage.
            </a>
          </div>
          <div data-aos="fade-up" className="footerParagraph">
          Voyage is your ultimate travel companion, designed to inspire and guide you through the most breathtaking destinations around the globe. Whether you're seeking ancient wonders, romantic getaways, or tropical paradises, Voyage offers curated travel experiences tailored to your dreams. Explore detailed itineraries, discover must-see attractions, and start planning your next unforgettable adventure with us. Let Voyage turn your travel dreams into reality!
          </div>
          <div data-aos="fade-up" className="footerSocials flex">
            <AiOutlineInstagram className='icon'/>
            <AiOutlineFacebook className='icon'/>
            <RiTwitterXLine className='icon'/>
            <AiOutlineYoutube className='icon'/>
          </div>
        </div>
        <div className="footerLinks grid">
          <div data-aos="fade-up" data-aos-duration="3100" className="linkGroup">
            <span className="groupTitle">
              OUR AGENCY
            </span>
            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Services
            </li>
            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Insurance
            </li>
            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Agency
            </li>
            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Torism
            </li>
            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Payment
            </li>
          </div>

          <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
            <span className="groupTitle">
              PARTNERS
            </span>
            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Bookings
            </li>
            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              RentCars
            </li>
            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              HostelWorld
            </li>
            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Trivago
            </li>
            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              TripAdvisor
            </li>
          </div>

          <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
            <span className="groupTitle">
              LAST MINUTE
            </span>
            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              London
            </li>
            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Califonia
            </li>
            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Indonesia
            </li>
            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Europe
            </li>
            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Oceania
            </li>
          </div>

        </div>
        <div className="footerDiv flex">
          <small>Designed By - Kaushik C</small>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Footer