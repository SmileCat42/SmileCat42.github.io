import React from 'react'

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
          </div>
        </figure>
      </div>

    </section>
  )
}

export default About