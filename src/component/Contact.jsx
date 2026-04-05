import contactImg from '../assets/contact.png'

export const Contact = ({ darkMode }) => {
  return (
    <section
    id = "contact"
    style={{
        backgroundColor: darkMode ? '#111827' : '#f9fafb'
    }}
    className="py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-10 md:mb-12"
            data-aos='fade-up'>
                <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold
                mb-2 sm:mb-3"
                style={{
                    color: darkMode ? 'white' : '#1f2937'
                }}>
                    Get In <span
                    style={{
            background: 'linear-gradient(to right, #f97316, #f59e0b)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
                    }}>
                        Touch
                    </span>
                </h2>
                <p
                className="text-base sm:text-lg md:text-xl"
                style={{
                    color: darkMode ? '#d1d5db' : '#6b7280'
                }}>
                    Let's discuss your project
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6
            sm:gap-8 md:gap-10 items-center">
                <div className="flex justify-center order-2 lg:order-1"
                data-aos='fade-right'>
                    <img src={contactImg} alt="Contact"
                    className='w-full max-w-xs sm:max-w-sm lg:max-w-md
                    h-auto object-contain'/>
                </div>
                <form
                style={{
                    background: darkMode
                ? 'linear-gradient(to right, #1f2937, #111827)'
                : 'linear-gradient(to right, #ffffff, #f9fafb)',
                    borderColor: darkMode ? '#374151' : '#e5e7eb'
                }}
                className='rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 border
                shadow-lg order-1 lg:order-2'
                data-aos='fade-left'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-3
                    sm:gap-4 mb-3 sm:mb-4'>
                        <input
                        type="text"
                        placeholder='First Name'
                        style={{
                            backgroundColor: darkMode ? '#374151' : '#faede3',
                            borderColor : darkMode ? '#4b5563' : '#d1d5db',
                            color: darkMode ? 'white' : '#1f2937'
                        }}
                        className='w-full px-3 sm:px-4 py-2 sm:py-3
                        rounded-lg text-sm sm:text-base
                        focus:border-yellow-500 focus:ring-2
                        focus:ring-yellow-500/20 transition-all'
                        required/>

                        <input
                        type="text"
                        placeholder='Last Name'
                        style={{
                            backgroundColor: darkMode ? '#374151' : '#faede3',
                            borderColor : darkMode ? '#4b5563' : '#d1d5db',
                            color: darkMode ? 'white' : '#1f2937'
                        }}
                        className='w-full px-3 sm:px-4 py-2 sm:py-3
                        rounded-lg text-sm sm:text-base
                        focus:border-yellow-500 focus:ring-2
                        focus:ring-yellow-500/20 transition-all'
                        required/>

                        <input
                        type="email"
                        placeholder='Email Address'
                        style={{
                            backgroundColor: darkMode ? '#374151' : '#faede3',
                            borderColor : darkMode ? '#4b5563' : '#d1d5db',
                            color: darkMode ? 'white' : '#1f2937'
                        }}
                        className='w-full px-3 sm:px-4 py-2 sm:py-3
                        rounded-lg text-sm sm:text-base
                        focus:border-yellow-500 focus:ring-2
                        focus:ring-yellow-500/20 transition-all'
                        required/>

                        <input
                        type="tel"
                        placeholder='Phone Number'
                        style={{
                            backgroundColor: darkMode ? '#374151' : '#faede3',
                            borderColor : darkMode ? '#4b5563' : '#d1d5db',
                            color: darkMode ? 'white' : '#1f2937'
                        }}
                        className='w-full px-3 sm:px-4 py-2 sm:py-3
                        rounded-lg text-sm sm:text-base
                        focus:border-yellow-500 focus:ring-2
                        focus:ring-yellow-500/20 transition-all'
                        required/>

                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}
export default Contact