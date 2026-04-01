import framer_motion from '../assets/framer_motion.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'

const Skills = ({darkMode}) => {
    const skillsData = [
        {name: 'framer motion', icon: framer_motion, level: 62,
            color: 'from-blue-500 to-cyan-500'},
        {name: 'React', icon: react, level: 65,
            color: 'from-cyan-500 to-blue-500'},
        {name: 'Tailwind', icon: tailwind, level: 75,
            color: 'from-teal-500 to-cyan-500'},
        
    ];

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
                  My <span
                  style={{
            background: 'linear-gradient(to right, #f97316, #f59e0b)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
                  }}>
                    Skills
                    </span></h1>
                  <p
                  className='text-lg max-w-2xl mx-auto leading-relaxed'
                  style={{
                      color: darkMode ? '#d1d5db' : '#4b5563'
                  }}>
                      aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                      aaaaaaaaaaaaaaaaaaaaaaaaaaa
                  </p>
            </div>
            <div
            className='flex flex-wrap -m-4'
            data-aos='fade-up'
            data-aos-delay='200'>
              {skillsData.map((skill, index) => (
                <div
                key={index}
                className='p-4 lg:w-1/4 md:w-1/2 w-full'
                data-aos='fade-up'
                data-aos-delay={`${300+index*100}`}>
                    <div
                    style={{
                      background: darkMode
                      ? 'linear-gradient(to bottom right, #1f2937, #111827)'
                      : 'linear-gradient(to bottom right, #ffffff, #f3f4f6)',
                      borderColor: darkMode ? '#374151' : '#e5e7eb'
                    }}
                      className='h-full p-6 rounded-2xl border
                      hover:border-yellow-500/50 transition-all
                      duration-300 hover:-translate-y-2 group
                      hover:shadow-[0_0_30px_rgba(255, 165,0,0,0.15)]'>
                          <div className='flex items-center mb-6'>
                              <div 
                              style={{
                      background: darkMode
                      ? 'linear-gradient(to bottom right, #374151, #1f2937)'
                      : 'linear-gradient(to bottom right, #f3f4f6, #e5e7eb)',
                              }}
                              className='w-16 h-16 rounded-xl p-3 flex
                              items-center justify-center
                              group-hover:scale-110 transition-transform
                              duration-300'>
                                <img
                                src={skill.icon}
                                alt={skill.name}
                                className='w-full h-full object-contain'/>
                              </div>
                              <h3
                              className='text-2xl font-bold ml-4'
                              style={{
                                  color: darkMode ? 'white' : '#1f2937'
                              }}>
                                  {skill.name}
                              </h3>
                          </div>
                      </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  )
}
export default Skills;
