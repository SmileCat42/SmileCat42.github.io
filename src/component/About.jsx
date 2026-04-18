import React from 'react'
import golfDark from "../assets/golf06.png"
import golfLight from "../assets/golf02.jpg"

const About = ({darkMode}) => {
  return (
    <section id="about" className={`min-h-screen overflow-hidden flex
    items-center justify-center px-4 sm:px-6
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
          <p className = {`text-sm sm:text-base lg:text-lg
            xl:text-xl mb-6 sm:mb-8 leading-relaxed
            p-4 sm:p-6 rounded-xl sm:rounded-2xl
            backdrop-blur-sm
            ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
            data-aos='fade-up'
            data-aos-delay='500'
            style={{
                      background: darkMode
                      ? 'linear-gradient(to bottom right, #374151, #1f2937)'
                      : 'linear-gradient(to bottom right, #f8dc80, #fdfbf5)',
                              }}>
              Krittaya Tantichaiyakul (Golf⛳)<br/>
              Age : 30 years old<br/>
              Gender : LGBTQ (male at birth)<br/>
              Educated : Bachelor’s Degree in Chinese,<br/>
                 Faculty of Humanities and Social Sciences, Burapha University<br/>
              Second Bachelor’s Degree (In Progress), Computer Science, Ramkhamhaeng University (Year 2)<br/>
          </p>
          <div
          className='flex flex-wrap justify-center
          lg:justify-start gap-4 sm:gap-6 lg:gap-8 mb-6
          sm:mb-8'>
              <div
              className='text-center'
              data-aos='zoom-in'
              data-aos-delay='600'>
                  <div className='text-2xl sm:text-3xl
                  lg:text-4xl font-bold text-yellow-500'>2+</div>
                  <div className={`text-xs sm:text-sm lg:text-base
                    ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Education
                    </div>
              </div>

              <div
              className='text-center'
              data-aos='zoom-in'
              data-aos-delay='600'>
                  <div className='text-2xl sm:text-3xl
                  lg:text-4xl font-bold text-yellow-500'>8+</div>
                  <div className={`text-xs sm:text-sm lg:text-base
                    ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      All Works Experience
                    </div>

              </div>

              <div
              className='text-center'
              data-aos='zoom-in'
              data-aos-delay='600'>
                  <div className='text-2xl sm:text-3xl
                  lg:text-4xl font-bold text-yellow-500'>6+</div>
                  <div className={`text-xs sm:text-sm lg:text-base
                    ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Projects
                    </div>
              </div>
          </div>
          <a href='https://github.com/SmileCat42/SmileCat42.github.io/blob/main/src/assets/กฤตยา_ตันติชัยยกุล_CV.pdf'
          target="_blank">
          <button className={`w-full sm:w-auto
                    inline-flex items-center border-2 border-yellow-500
                    justify-center border-0
                    py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
                    rounded-full text-base sm:text-lg font-semibold transition-all
                    duration-300 tranform
                    ${darkMode
                      ? 'text-white bg-yellow-500/10'
                      : 'text-gray-800 bg-white/90'
                    }`}>
                      Learn More
                    </button>
                    </a>
        </article>
      </div>
    </section>
  )
}

export default About