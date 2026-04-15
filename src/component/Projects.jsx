import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import project1 from '../assets/Project1.png'
import project2 from '../assets/07.png'
import project3 from '../assets/09.png'
import { Link } from 'react-router-dom';

const Projects = ({ darkMode }) => {
    const projects = [
        {
            id: 1,
            title: 'Course Online — JSP (JavaServer Pages)',
            desc: 'Learn Web Development from Zero to Hero: Practice connect with database MySQL: Developed an MVC system for course details and seat booking. Managed limited seats using transactions with 4 connected tables. (Client-side)',
            image: project1,
            tags: ['Java', 'HTML', 'CSS', 'MVC', 'FrameWork', 'MySQL'],
            link: 'https://github.com/SmileCat42/WebProgramming/blob/master/Project1_JSP/web/FrontPageF_G.jsp'

        },
        {
            id: 2,
            title: 'Admin Mode — JSF (JakartaServer Face)',
            desc: 'Extended from the JSP project to create an Admin Mode. It focuses on back-end management, allowing Admins to Add, Edit, and Delete (CRUD) focus on backend (Admin side)',
            image: project2,
            tags: ['Jakarta', 'AJAX', 'Transaction', 'Primeface', 'CRUD'],
            link: 'https://github.com/SmileCat42/WebProgramming/blob/master/Project2_JSF/src/main/webapp/index.xhtml'

        },
        {
            id: 3,
            title: 'GIFT ME — Nest.js',
            desc: 'E-commerce simulation for an online doll store using Nest.js and EJS. Features include realistic shopping, QR-Code system, and user-filtering for Admin CRUD management.',
            image: project3,
            tags: ['EJS', 'Tailwind', 'JWT', 'SEO', 'CMS'],
            link: 'https://github.com/SmileCat42/WebProgramming/blob/master/Project3_Nestjs/views/index.ejs'

        },
    ]
    return (
        <section
            id='projects'
            style={{
                backgroundColor: darkMode ? '#111827' : '#f9fafb'
            }}
            className='relative py-24'>
            <div className='container mx-auto px-4'>
                <div className='text-center mb-10' data-aos='fade-up'>
                    <h2
                        className='text-3xl sm:text-4xl font-bold mb-3'
                        style={{
                            color: darkMode ? 'white' : '#1f2937'
                        }}>
                        My <span
                            style={{
                                background: 'linear-gradient(to right, #ee9d07, #f5bb3e)',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                color: 'transparent'
                            }}>
                            Projects
                        </span>
                    </h2>
                    <p
                        className='max-w-xl mx-auto'
                        style={{
                            color: darkMode ? '#d1d5db' : '#6b7280'
                        }}>
                        A showcase of my recent study Project
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2
            lg:grid-cols-3 gap-5 mb-12'>
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            style={{
                                background: darkMode
                                    ? 'linear-gradient(to right, #333a42, #111827)'
                                    : 'linear-gradient(to right, #ffffff, #f9fafb)',
                                borderColor: darkMode ? '#374151' : '#e5e7eb'
                            }}
                            className='group rounded-xl border shadow-md duration-300
                  hover:border-yellow-500/50 transition-all hover:shadow-xl'
                            data-aos='fade-up'
                            data-aos-delay={index * 100}>
                            <div className='h-56 overflow-hidden rounded-t-xl'>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className={`w-full h-full object-cover group-hover:scale-110 transition-all duration-500 
                ${darkMode ? 'brightness-85' : 'saturate-75 brightness-95'}`}/>
                            </div>
                            <div className='p-4'>
                                <h3
                                    className='text-lg font-bold mb-2'
                                    style={{
                                        color: darkMode ? 'white' : '#1f2937'
                                    }}>
                                    {project.title}
                                </h3>
                                <p
                                    className='text-sm mb-3'
                                    style={{
                                        color: darkMode ? '#d1d5db' : '#6b7280'
                                    }}>
                                    {project.desc}
                                </p>
                                <div className='flex flex-wrap gap-1.5 mb-4'>
                                    {project.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            style={{
                                                backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                                                color: darkMode ? '#d1d5db' : '#4b5563'
                                            }}
                                            className='px-2 py-1 text-xs rounded-full'>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className='flex gap-2'>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            backgroundColor: darkMode ? '#374151' : '#d5dae4',
                                            color: darkMode ? 'white' : '#374151'
                                        }}
                                        className='flex-1 flex items-center
                            justify-center gap-1.5 px-3 py-2
                            text-sm rounded-lg hover:opacity-90
                            transition-colors hover:scale-105 transition-all duration-300'
                                        data-aos='zoom-in'
                                        data-aos-delay='300'>
                                        <FaGithub className='text-sm' />
                                        <span>Code</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='text-center mt-10'>
                    <a
                        href="https://github.com/SmileCat42/WebProgramming/tree/master"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            background: 'linear-gradient(to right, #f1bc0e, #e4ad50)'
                        }}
                        className='inline-flex items-center font-semibold
                            justify-center gap-2 px-7 py-4 text-white
                            text-sm rounded-full hover:shadow-lg hover:scale-110
                            hover:shadow-yellow-400/25 transition-all duration-300
                            hover:text-orange-900'
                        data-aos='zoom-in'
                        data-aos-delay='400'>
                        <span >View All Projects<br />
                            ดูโปรเจคทั้งหมด</span>
                    </a>
                    <a
                        href="https://smilecat42.github.io/My-Growth/"  // ต้องใส่ #/ นำหน้าด้วยเพราะคุณใช้ HashRouter
                        target="_blank"
                        rel="noopener noreferrer" // เพิ่มความปลอดภัยเมื่อเปิดแท็บใหม่
                        style={{
                            backgroundColor: darkMode ? '#374151' : '#b7bdc9',
                            color: darkMode ? 'white' : '#374151'
                        }}
                        className='inline-flex items-center gap-2 px-7 py-4 text-sm rounded-full ml-4 font-semibold
             justify-center hover:scale-110 duration-300 shadow-md hover:shadow-gray-300/50 '
                        data-aos='zoom-in'
                        data-aos-delay='400'
                    >
                        <span className="text-center">
                            Growth Journey<br />
                            <span className="text-sm opacity-80 font-normal">พัฒนาการของฉัน</span>
                        </span>
                    </a>

                </div>
            </div>
        </section>
    )
}

export default Projects