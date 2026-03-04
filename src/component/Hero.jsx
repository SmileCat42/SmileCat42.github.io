import instagram from '../assets/instagram.png'
import tiktok from '../assets/tiktok.png'
import github from '../assets/github.png'
import youtube from '../assets/youtube.png'

const Hero = ( darkMode) => {
    const socialIcons = [
        { icon: instagram, alt: 'Instagram'},
        { icon: tiktok, alt: 'tiktok'},
        { icon: github, alt: 'github'},
        { icon: youtube, alt: 'youtube'}
    ];

    const darkTheme ={
        textPrimary: 'text-white',
        textSecondary: 'text-gray-300',
        buttonSecondary: `text-white border-2 boder-yellow-400
        hover:bg-yellow-500`,
        decorativeCircle: 'bg-yellow-400 opacity-10',
    };

    const lightTheme ={
        textPrimary: 'text-gray-900',
        textSecondary: 'text-gray-700',
        buttonSecondary: `text-gray-800 border-2 boder-yellow-400
        hover:bg-yellow-500 hover:text-white`,
        decorativeCircle: 'bg-yellow-400 opacity-20',
    };

    const theme = darkMode ? darkTheme : lightTheme;

  return (
    <div className='relative overflow-hidden min-h-screen flex flex-col'>
        <section
        id='home'
        data-aos='fade-up'
        data-aos-delat='250'
        className='body-font z-10'>
            <div className='container mx-auto flex px-4 sm:px-8 lg:px-14
            py-12 lg:py-32 flex-col lg:flex-row items-center justify-between
            lg:mt-0 mt-14'>
                <div className='lg:w-1/2 w-full flex flex-col items-center
                lg:items-start text-center lg:text-left mb-12 lg:mb-0'>
                    <div className='flex justify-center lg:justify-start
                    gap-4 sm:gap-6 mb-6 sm:mb-7 w-full'>
                        {socialIcons.map((social, index) => (
                            <a
                            key={index}
                            href='#'
                            target='_blank'
                            data-aos-delay={`${400 + index * 100}`}
                            className='transform hover:scale-110
                            transituin-transform duration-300'>
                                <img
                                src={social.icon}
                                alt={social.alt}
                                className={`w-8 h-8 sm:w-10 sm:h-10
                                object-contain ${darkMode
                                    ? ''
                                    : 'filter brightness-75'}`}/>
                            </a>
                        ))}
                    </div>
                    <h1 className={`title-font text-3xl sm:text-4xl
                        lg:text-5xl mb-4 font-bold ${theme.textPrimary}`}
                        data-aos='fade-up'
                        data-aos-delay='500'>
                            Hi, I'm Krittaya
                    </h1>
                    <p className={`mb-6 sm:mb-8 leading-relaxed max-w-md
                        sm:max-w-lg ${theme.textSecondary}`}
                        data-aos='fade-up'
                        data-aos-dela='600'>
                        Studying second-year Computer Science 
                        in the Faculty of Science. I am 30 years old.
                         Although I do not have work experience in the tech 
                         field yet, but I have many years of real work experience.
                          I understand how the workplace works, and I can handle
                           pressure well.
                    </p>
                </div>
            </div>
        </section>

    </div>
  )
}

export default Hero