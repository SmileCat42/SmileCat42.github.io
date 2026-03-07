import instagram from '../assets/instagram.png'
import tiktok from '../assets/tiktok.png'
import github from '../assets/github.png'
import youtube from '../assets/youtube.png'
import { ExternalLink } from "lucide-react";
import { Mail } from "lucide-react";
import hi from '../assets/hi.png'
import golf from "../assets/golf01.jpg"

const Hero = ({ darkMode }) => {
    const socialIcons = [
        { icon: instagram, alt: 'Instagram' },
        { icon: tiktok, alt: 'tiktok' },
        { icon: github, alt: 'github' },
        { icon: youtube, alt: 'youtube' }
    ];

    const darkTheme = {
        textPrimary: 'text-white',
        textSecondary: 'text-gray-300',
        buttonSecondary: `text-white border-2 boder-yellow-400
        hover:bg-yellow-500`,
        decorativeCircle: 'bg-yellow-400 opacity-10',
    };

    const lightTheme = {
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
                data-aos-delay='250'
                className='body-font z-10'>
                <div className='container mx-auto flex px-4 sm:px-8 lg:px-25
            py-12 lg:py-35 flex-col lg:flex-row items-center justify-between
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
                            transition-transform duration-300'>
                                    <img
                                        src={social.icon}
                                        alt={social.alt}
                                        className={`w-8 h-8 sm:w-10 sm:h-10
                                object-contain ${darkMode
                                                ? ''
                                                : 'filter brightness-75'}`} />
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
                            data-aos-delay='600'>
                            Studying second-year Computer Science
                            in the Faculty of Science. I am 30 years old.
                            Although I do not have work experience in the tech
                            field yet, but I have many years of real work experience.
                            I understand how the workplace works, and I can handle
                            pressure well.
                        </p>
                        {/* Buttons */}
                        <div className='w-full pt-4 sm:pt-6'>
                            <div className='flex flex-col sm:flex-row justify-center
                    lg:justify-start gap-3 sm:gap-4'
                                data-aos='fade-up'
                                data-aos-delay='700'
                            >
                                <a
                                    href='google.co.th' className='w-full sm:w-auto'>
                                    <button className='w-full sm:w-auto
                    inline-flex items-center justify-center text-white
                    bg-linear-to-r from-yellow-400 to-orange-500 border-0
                    py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
                    rounded-full text-base sm:text-lg font-semibold transition-all
                    duration-300 transform'>
                                        ดูเวอร์ชั่นภาษาไทยที่นี่
                                        <ExternalLink className='w-4 h-4 sm:h-5 sm:w-5 ml-2' />
                                    </button>
                                </a>
                                <a href="#contact" className='w-full sm:w-auto'>
                                    <button className={`w-full sm:w-auto
                    inline-flex items-center ${theme.buttonSecondary}
                    justify-center border-0
                    py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
                    rounded-full text-base sm:text-lg font-semibold transition-all
                    duration-300 tranform`}>
                                        <Mail className='w-4 h-4 sm:w-5 sm:h-5 mr-2' />
                                        Contact Me
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Image */}
                    <div
                    className='lg:w-1/2 w-full max-w-md lg:max-w-lg mt-8
                    lg:mt-0 flex justify-center'
                    data-aos='fade-left'
                    data-aos-delay='400'
                    >
                        <div className='relative w-4/5 sm:w-3/4 lg:w-full'>
                             <div className='relative overflow-hidden'>
                                <img
                                src={golf}
                                alt="golf image"
                                className='w-full h-auto object-cover transform
                                hover:scale-105 transition-transform duration-500' />
                            </div>  
                            <img
                            src={hi}
                            alt="Hi icon"
                            className='absolute -top-2 sm:top-3 left-28
                            sm:left-35 w-14 h-14 sm:w-20 sm:h-20 object-contain
                            animate-bounce opacity-90 z-10' />         
                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default Hero