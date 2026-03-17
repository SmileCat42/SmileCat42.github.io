import React from 'react'
import golfDark from "../assets/golf04.png"
import golfLight from "../assets/golf02.jpg"

const About = (darkMode) => {
  return (
    <section id="about" className={`min-h-screen overflow-hidden flex
    items-center justify-center px-4 sm:px-6 ${
      darkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2
      gap-8 sm:gap-12 items-center">
        <figure
        data-aos='fade-up'
        data-aos-delay='300'
        className="flex flex-wrap justify-center gap-4 relative
        order-2 lg:order-1">
          <div className="relative w-75 h-75 lg:w-96 lg:h-96">
              {/* Image */}
              <div className="absolute -inset-4 lg:-inset-20
              bg-linear-to-l from-[#FFD700] via-[#FFC107] 
              to-[#FFB300] rotate-12 start-shape z-0"
              data-aos='zoom-in'
              data-aos-delay='600'>
              </div>
              <img
              src={golfDark}
              alt="About Image"
              className='absolute inset-0 w-full h-full
              object-cover z-10 transition duration-300'
              data-aos='zoom-in'
              data-aos-delay='400'/>
          </div>
        </figure>
        <article
        data-aos='fade-left'
        data-aos-delay='300'
        className='text-center lg:text-left relative order-1
        lg:order-2'>
          <header>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl
            xl:text-6xl font-bold mb-4 sm:mb-6
            text-transparent bg-linear-to-r from-yellow-400
            to-yellow-600 bg-clip-text'
            data-aos='fade-up'
            data-aos-delay='400'>
                About Me
            </h1>
          </header>
          <p>
              Krittaya Tantichaiyakul (Golf⛳)<br/>
              Age : 30 years old<br/>
              Gender : LGBTQ (male at birth)<br/>
              Educated : Bachelor’s Degree in Chinese,<br/>
                 Faculty of Humanities and Social Sciences, Burapha University<br/>
              Second Bachelor’s Degree (In Progress), Computer Science, Ramkhamhaeng University (Year 2)<br/>
              


          </p>
        </article>
      </div>

    </section>
  )
}

export default About