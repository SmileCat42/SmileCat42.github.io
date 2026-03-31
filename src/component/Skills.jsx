import React from 'react'

const Skills = ({darkMode}) => {
    const Skills = {
      
    };

  return (
    <section
    id="skills"
    style={{
        backgroundColor: darkMode ? "#111827" : "#f9fafb"
    }}
    className='py-14 relative overflow-hidden'>
      <div className='py-14 relative overflow-hidden'>
        <div className='container px-5 py-14 mx-auto'>
            <div className='text-center mb-20' data-aos='fade-up'>
                <h1
                className='sm:text-4xl text-3xl font-bold title-font
                mb-4'
                style={{
                    color: darkMode ? 'white' : '#1f2937'
                }}>
                  My<span
                  style={{
            background: 'linear-gradient(to right, #f97316, #f59e0b)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
                  }}>
                    Skills
                    </span></h1>

            </div>
        </div>
      </div>
    </section>
  )
}
