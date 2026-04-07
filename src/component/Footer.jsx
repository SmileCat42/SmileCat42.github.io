import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaLine } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa'

const Footer = ({ darkMode }) => {
    const currentYear = new Date().getFullYear();

  return (
    
    <footer
    style={{
        background: darkMode
        ? 'linear-gradient(to bottom, #000000, #111827)'
        : 'linear-gradient(to bottom, #fcefa6, #e5e7eb)',
        borderColor: darkMode ? '#374151' : '#d1d5db'
    }}
    className="border-t">
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between
            items-center gap-6">
                <div className="text-center md:text-left">
                    <h3
                    className="text-2xl font-bold mb-2 text-yellow-500
                    dark:text-white">
                        Portfolio
                    </h3>
                    <div
                    className="text-sm"
                    style={{
                        color: darkMode ? '#9ca3af' : '#6b7280'
                    }}>
                        Full Stack Developer & UI/UX Designer
                    </div>
                    <div
                    className="text-sm"
                    style={{
                        color: darkMode ? '#9ca3af' : '#6b7280'
                    }}>
                        Inspired by a YouTuber OualiCode
                    </div>
                </div>
                <div className="flex gap-4">
                    <a 
                    href="https://github.com/SmileCat42"
                    className="w-10 h-10 rounded-full flex items-center
                    justify-center hover:scale-110 transition-all
                    hover:bg-linear-to-r hover:from-yellow-300
                    hover:to-yellow-500 hover:text-white
                    bg-[#374151] dark:bg-[#f3f4f6]
                    text-white dark:text-[#374151]">
                        <FaGithub/>
                    </a>

                    <a 
                    href="https://web.facebook.com/aloha.golfring"
                    className="w-10 h-10 rounded-full flex items-center
                    justify-center hover:scale-110 transition-all
                    hover:bg-linear-to-r hover:from-yellow-300
                    hover:to-yellow-500 hover:text-white
                    bg-[#374151] dark:bg-[#f3f4f6]
                    text-white dark:text-[#374151]">
                        <FaFacebook/>
                    </a>

                    <a 
                    href="https://line.me/ti/p/kwZiWyT8EC"
                    className="w-10 h-10 rounded-full flex items-center
                    justify-center hover:scale-110 transition-all
                    hover:bg-linear-to-r hover:from-yellow-300
                    hover:to-yellow-500 hover:text-white
                    bg-[#374151] dark:bg-[#f3f4f6]
                    text-white dark:text-[#374151]">
                        <FaLine/>
                    </a>
                </div>
                <div className="text-center md:text-right">
                    <p className="text-sm flex items-center justify-end
                    gap-1 text-[#6b7280] dark:text-[#9ca3af]">
                        @ {currentYear} Made with
                        <FaHeart className="text-red-500 hover:scale-110
                        hover:text-red-300"/>
                        by <span
                        className="mt-1 text-yellow-500">
                            Krittaya Tantichaiyakul
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </footer>
  )
}
export  default Footer
