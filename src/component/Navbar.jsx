import { motion} from "framer-motion";
import { useState } from "react"

const Navbar = ({ darkMode, toggleDarkMode}) => {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] =useState(false);

  const navItem = [
    {name: 'Home', link: '#home'},
    {name: 'About', link: '#about'},
    {name: 'Skills', link: '#skills'},
    {name: 'Projects', link: '#projects'},
    {name: 'Contact', link: '#contact'},
  ];
  const lightColors = {
      navBg: 'bg-linear-to-br from-yellow-200 to-white',
      textPrimary: 'text-gray-900',
      textSecondary : 'text-gray-800',
      textHover: 'text-yellow-500',
      textActive: 'text-yellow-600',
      indicator: 'from-yellow-500 to-yellow-500',
      button: 'from-yellow-500 to-yellow-500',
  };
  const darkColors = {
      navBg: 'bg-linear-to-br from-gray-700 to-black',
      textPrimary: 'text-white',
      textSecondary : 'text-gray-300',
      textHover: 'text-yellow-400',
      textActive: 'text-yellow-400',
      indicator: 'from-yellow-400 to-yellow-400',
      button: 'from-yellow-400 to-yellow-400',
  };

  const colors = darkMode ? darkColors : lightColors;

  const handleNavClick = (itemName) => {
    setActiveSection(itemName.toLowerCase());
    setIsMenuOpen(false);
  };

  return (
    <div className = "flex justify-center w-full fixed z-50 mt-4">
      <motion.nav
      initial = {{ y: -100}}
      animate={{ y: 0}}
      transition={{ duration: 0.5}}
      className={`flex items-center justify-center ${colors.navBg}
      backdrop-blur-lg rounded-2xl px-4 lg:px-8 py-2 shadow-lg`}>
        <div className="flex items-center justify-between 
        w-full space-x-6 lg:space-x-8">
          <motion.a 
          href="/"
          whileHover={{ scale: 1.05}}
          className="flex items-center space-x-2">
            <span
            className={`text-xl font-bold ${colors.textPrimary}`}>
              Portfolio<span className="text-yellow-500">.</span>
            </span>
          </motion.a>
          {/* Navigation */}
          <div className="hidden lg:flex item-center space-x-6">
            {navItem.map((item) => (
              <a
              key={item.name}
              href={item.href}
              onClick={() => handleNavClick(item.name)}
              className="relative"
              >
                <motion.span
                className={`font-medium transition-colors duration-300
                ${
                  activeSection === item.name.toLowerCase()
                  ? colors.textActive
                  : `${colors.textSecondary} hover:text-yellow-500`
                }`}
                whileHover={{ scale: 1.05}}
                whileTap={{ scale: 0.95}}>
                  {item.name}
                </motion.span>
              </a>
            ))}
          </div>
        </div>
      </motion.nav>
    </div>
  )
}
export default Navbar
