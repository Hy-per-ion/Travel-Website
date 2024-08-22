import React, { useEffect } from 'react'
import './main.css'
import paris from '../../Assets/paris.jpeg'
import rome from '../../Assets/rome.jpeg'
import tokyo from '../../Assets/tokyo.jpeg'
import machu_picchu from '../../Assets/machu_picchu.jpeg'
import sydney from '../../Assets/sydney.jpeg'
import bali from '../../Assets/bali.jpeg'
import taj_mahal from '../../Assets/taj_mahal.jpeg'
import pyramids from '../../Assets/pyramids.jpeg'
import maldives from '../../Assets/maldives.jpg'
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Data = [
  {
    id: 1,
    imgSrc: paris,
    destTitle: "Eiffel Tower",
    location: "Paris, France",
    grade: "Historical Landmark",
    fees: "₹1,50,000",
    description: "The Eiffel Tower stands as the symbol of Paris, a city known for its rich history, art, and culture. Built in 1889 as the entrance arch for the World's Fair, this iconic iron lattice tower is one of the most visited monuments in the world. At 330 meters tall, the Eiffel Tower offers breathtaking panoramic views of Paris from its three levels, with the summit providing an unmatched experience. Whether you visit during the day or when the tower is illuminated at night, the Eiffel Tower is a must-see, embodying the romantic essence of the city. Take in the sights, enjoy a meal at one of its restaurants, or simply marvel at this architectural masterpiece. It’s a timeless landmark that continues to captivate visitors from around the globe and a must visit place for anyone interested in the city."
}
,
  {
    id: 2,
    imgSrc: rome,
    destTitle: "Colosseum",
    location: "Rome, Italy",
    grade: "Historical Landmark",
    fees: "₹1,80,000",
    description: "The Colosseum, also known as the Flavian Amphitheatre, is one of the most iconic landmarks of ancient Rome and a testament to the grandeur of the Roman Empire. Built nearly 2,000 years ago, the Colosseum was the largest amphitheater ever constructed and could hold up to 80,000 spectators. It was the epicenter of Roman public life, where gladiatorial contests, mock sea battles, and dramatic performances entertained the masses. Today, the Colosseum stands as a monumental symbol of Rome's architectural ingenuity and cultural heritage. Visitors can explore its ancient corridors, stand in the arena where gladiators once fought, and learn about the complex engineering that allowed the Colosseum to host such large-scale events."
  },
  {
      id: 3,
      imgSrc: tokyo,
      destTitle: "Tokyo",
      location: "Tokyo, Japan",
      grade: "Urban Adventure",
      fees: "₹2,30,000",
      description: "Tokyo, Japan's bustling capital, is a city where ancient traditions meet cutting-edge technology. Known for its towering skyscrapers, neon-lit streets, and vibrant culture, Tokyo offers something for everyone. Visitors can explore historic temples like Senso-ji in Asakusa, experience the tranquility of the Meiji Shrine, or shop in the trendy districts of Shibuya and Harajuku. Tokyo is also a food lover’s paradise, with countless restaurants serving everything from sushi and ramen to international cuisine. The city's extensive public transportation system makes it easy to explore, and its blend of old and new ensures every visit is filled with unique discoveries. Whether you're seeking modernity or tradition, Tokyo has it all. Every corner of the city offers a glimpse into its rich cultural tapestry."
  },
  {
      id: 4,
      imgSrc: machu_picchu,
      destTitle: "Machu Picchu",
      location: "Cusco Region, Peru",
      grade: "Ancient Ruins",
      fees: "₹2,50,000",
      description: "Machu Picchu, often referred to as the \"Lost City of the Incas\", is a UNESCO World Heritage site and one of the most enigmatic places in the world. Nestled high in the Andes Mountains, this ancient city was built in the 15th century by the Inca emperor Pachacuti. Abandoned during the Spanish conquest, Machu Picchu remained hidden from the outside world until its rediscovery in 1911. Today, it stands as a testament to the ingenuity of the Inca civilization, with its sophisticated dry-stone construction and breathtaking location. Visitors can explore the well-preserved ruins, including temples, terraces, and palaces, all while enjoying stunning views of the surrounding mountains. Machu Picchu offers a journey back in time like no other."
  },
  {
      id: 5,
      imgSrc: sydney,
      destTitle: "Sydney Opera House",
      location: "Sydney, Australia",
      grade: "Cultural Icon",
      fees: "₹1,80,000",
      description: "The Sydney Opera House is not only a masterpiece of modern architecture but also a vibrant cultural hub, hosting over 1,500 performances each year. Designed by Danish architect Jørn Utzon and completed in 1973, the Opera House is famous for its unique sail-like design, which has become synonymous with Sydney and Australia. Located on Bennelong Point in Sydney Harbor, the Opera House offers stunning views of the harbor and the Sydney Harbour Bridge. Visitors can take guided tours to learn about its history and design, attend world-class performances ranging from opera and ballet to theater and concerts, or simply enjoy a meal at one of its waterfront restaurants. The Sydney Opera House is a must-visit for everyone."
  },
  {
      id: 6,
      imgSrc: bali,
      destTitle: "Bali",
      location: "Bali, Indonesia",
      grade: "Tropical Paradise",
      fees: "₹1,20,000",
      description: "Bali, often referred to as the \"Island of the Gods\", is a tropical paradise that offers a perfect blend of natural beauty, rich culture, and serene landscapes. Known for its stunning beaches, lush rice terraces, and vibrant arts scene, Bali is a destination that caters to every type of traveler. Visitors can relax on the island's famous beaches like Kuta, Seminyak, and Nusa Dua, or explore the spiritual heart of Bali in Ubud, where traditional dance performances, yoga retreats, and art galleries abound. Bali is also home to numerous ancient temples, such as Tanah Lot and Uluwatu, perched dramatically on cliffs overlooking the ocean. For adventure seekers, Bali offers opportunities for surfing, diving, and trekking through its volcanic mountains."
  },  
  {
      id: 7,
      imgSrc: taj_mahal,
      destTitle: "Taj Mahal",
      location: "Agra, India",
      grade: "Architectural Marvel",
      fees: "₹10,000",
      description: "The Taj Mahal, a UNESCO World Heritage site and one of the New Seven Wonders of the World, is a symbol of love and architectural brilliance. Built by the Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, the Taj Mahal is an exquisite white marble mausoleum that took over 20 years to complete. The monument is renowned for its symmetrical design, intricate carvings, and inlaid gemstones that reflect the finest craftsmanship of the Mughal era. The central dome, surrounded by four minarets, is the focal point, with the reflecting pool enhancing its beauty. A visit to the Taj Mahal is a journey into the heart of India’s rich history and culture. Its timeless beauty draws millions of visitors each year."
  },
  {
      id: 8,
      imgSrc: pyramids,
      destTitle: "Pyramids of Giza",
      location: "Giza, Egypt",
      grade: "Ancient Wonder",
      fees: "₹1,40,000",
      description: "The Pyramids of Giza, located just outside Cairo, are among the most famous and oldest monuments in the world. Built over 4,500 years ago during the Fourth Dynasty of Egypt’s Old Kingdom, these pyramids served as tombs for pharaohs and are a testament to the engineering prowess of ancient Egyptians. The Great Pyramid of Giza, the largest and most iconic of the three, was originally built for Pharaoh Khufu and is the only surviving structure of the Seven Wonders of the Ancient World. Visitors can explore the pyramids and the nearby Sphinx, which has become the symbol of Egypt. The Solar Boat Museum, which houses a reconstructed ancient Egyptian ship, adds to the mystique of this incredible site."
  },
  {
      id: 9,
      imgSrc: maldives,
      destTitle: "Maldives",
      location: "Maldives",
      grade: "Tropical Paradise",
      fees: "₹1,50,000",
      description: "The Maldives, a tropical paradise in the Indian Ocean, is known for its stunning overwater bungalows, vibrant coral reefs, and crystal-clear turquoise waters. Comprising over 1,000 islands, the Maldives is a top destination for honeymooners, divers, and anyone seeking a luxurious escape. Visitors can relax on pristine white-sand beaches, explore the underwater world through snorkeling or diving, or indulge in spa treatments and fine dining at world-class resorts. The Maldives is also home to unique marine life, making it a haven for underwater enthusiasts. The island nation's serene beauty and warm hospitality make it a perfect destination for those looking to disconnect and unwind in a picture-perfect setting."
  },
  ]
  const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])
  return (
    <section className='main container section'>
        <div className="secTitle">
          <h3 data-aos="fade-right" className="title">
            Most Visited Destinations
          </h3>
        </div>
        <div className="secContent grid">
            {
              Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
                return (
                  <div key={id} data-aos="fade-up" className="singleDestination">
                    <div className="imageDiv">
                      <img src={imgSrc} alt={destTitle}/>
                    </div>
                    <div className="cardInfo">
                      <h4 className="destTitle">{destTitle}</h4>
                      <span className="continent flex">
                        <HiOutlineLocationMarker className='icon'/>
                        <span className='name'>{location}</span>
                      </span>
                      <div className="fees flex">
                        <div className="grade">
                          <span>{grade}<small>+1</small></span>
                        </div>
                        <div className="price">
                          <h5>{fees}</h5>
                        </div>
                      </div>
                      <div className="desc">
                        <p>{description}</p>
                      </div>
                      <button className='btn flex'>
                        DETAILS
                        <HiOutlineClipboardCheck className='icon'/>
                      </button>
                    </div>
                  </div>
                )
              })
            }
        </div>
    </section>
  )
}

export default Main