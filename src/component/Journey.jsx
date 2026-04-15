import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import project1 from '../assets/Project1.png'
import { FaGithub } from 'react-icons/fa';
import lv1 from '../assets/01.png'
import lv2 from '../assets/011.png'
import lv3 from '../assets/02.png'
import lv4 from '../assets/033.png'
import lv5 from '../assets/04.png'

import lv6 from '../assets/05.png'
import lv7 from '../assets/06.png'
import lv7_2 from '../assets/056.png'
import lv8 from '../assets/077.png'
import lv9 from '../assets/09.png'
import lv10 from '../assets/10.png'

const Journey = () => {
    const pathRef = useRef(null);
    const dotRefs = useRef([]);
    const dotsContainerRef = useRef(null);

   useEffect(() => {
        const link = document.querySelector("link[rel~='icon']");

        if (link) {
            link.href = "/plant2.png"; // ไอคอนเฉพาะหน้านี้
        }

        window.scrollTo(0, 0);
    }, []);

    const history = [
        { version: "Level 1", link: "https://github.com/SmileCat42/WebProgramming/tree/master/Project1_JSP/web/Chapter1_Link", title: "Starting", desc: "ออกแบบโฮมเพจเวอร์ชั่น 1 และเริ่มหัดเขียนโปรแกรมด้วยโครงสร้าง HTML เน้นการลิงค์หาหน้าเพจอื่นๆ", date: "Oct 2025", img: lv1 },
        { version: "Level 2", link: "https://github.com/SmileCat42/WebProgramming/tree/master/Project1_JSP/web/Chapter1_Link", title: "HTML V2", desc: "ออกแบบโฮมเพจเวอร์ชั่น 2 เริ่มมีการ import รูปเข้ามาตกแต่งหน้าเพจ เริ่มฝึกใช้ตาราง ร่วมกับหน้าเพจ", date: "Nov 2025", img: lv2 },
        { version: "Level 3", link: "https://github.com/SmileCat42/WebProgramming/tree/master/Project1_JSP/web/Chapter4_CSS", title: "CSS", desc: "ออกแบบโฮมเพจเวอร์ชั่น 3 และเริ่มออกแบบด้วย CSS มีการออกแบบ Layout แบ่งโครงสร้างของหน้าเว็ป", date: "Nov 2025", img: lv3 },
        { version: "Level 4", link: "https://github.com/SmileCat42/WebProgramming/tree/master/Project1_JSP/web/Chapter5_MySQL", title: "CRUD", desc: "เริ่มเข้าสู่โลกของ Backend โดยการให้เว็ปคุยกับฐานข้อมูล MySQL เบื้องต้น ฝึกออกแบบสร้าง CRUD แบบพื้นฐาน ได้แก่ Create, Read, Update และ Delete", date: "Dec 2025", img: lv4 },
        { version: "Level 5", link: "https://github.com/SmileCat42/WebProgramming/tree/master/Project1_JSP/web/Chapter7_Bootstrap", title: "Framwork", desc: "ออกแบบโฮมเพจเวอร์ชั่น 4 มีการใช้ Framwork Bootstrap เข้ามาช่วยออกแบบ", date: "Dec 2025", img: lv5 },
        { version: "Level 6", link: "https://github.com/SmileCat42/WebProgramming/tree/master/Project1_JSP/web/Chapter8_MVC", title: "MVC", desc: "เรียนรู้การออกแบบโครงสร้าง Backend การทำ CRUD ด้วย MVC โดยการแบ่งแยกหน้าที่แต่ละส่วนอย่างชัดเจน ได้แก่ Controller, DAO, Model และ Util ที่เชื่อมกับ MySQL", date: "Dec 2025", img: lv6 },
        { version: "Level 7", link: "https://github.com/SmileCat42/WebProgramming/tree/master/Project1_JSP/web/Chapter7_Bootstrap", title: "Version Final", desc: "ออกแบบโฮมเพจเวอร์ชั่น 5 ซึ่งกับมาใช้งานกับโปรเจคแรก", date: "Dec 2025", img: lv7_2 },
        { version: "Level 7.5", link: "https://github.com/SmileCat42/WebProgramming/blob/master/Project1_JSP/web/FrontPageF_G.jsp", title: "⭐Project JSP", desc: "ลงมือทำมินิโปรเจคด้วยตนเอง จากเดิมเว็ปโรงเรียนแบบ StaticWeb กลายเป็นเว็ปเรียนออนไลน์แบบ DynamicWeb ซึ่งออกแบบสำหรับลูกค้าเข้ามาใช้งาน โดยที่จะได้ตอบโจทย์กับการเล่นระบบ CRUD กับฐานข้อมูลมากขึ้น มีการใช้หลักการ AJAX, Transaction เข้ามาออกแบบระบบหลังบ้าน ทำให้การรับส่งข้อมูลไหลลื่นขึ้น", date: "Jan 2026", img: lv7 },
        { version: "Level 8", link: "https://github.com/SmileCat42/WebProgramming/tree/master/Project2_JSF/src/main/webapp", title: "⭐Project JSF", desc: "เป็นอีก 1 โปรเจคที่ทำด้วย Jakarta Servlet Face จากเดิมโปรเจค JSP จะรองรับให้ผู้เรียนจองที่นั่ง จะเพิ่มหรือลดหรือแก้ไขได้แค่ภายในบัญชีของตนเองเท่านั้น แต่โปรเจคนี้จะออกแบบมาสำหรับ Admin สำหรับจัดการผลิตภัณฑ์โดยตรงซึ่งก็คือวิชาเรียน โดยสามารถทำการเพิ่มลบแก้ไขรายวิชาได้โดยตรง มีการใช้ Programmatic view, Cookie, HTTPS และ LMS เข้ามาเล่นกับโปรเจคนี้", date: "Feb 2026", img: lv8 },
        { version: "Level 9", link: "https://github.com/SmileCat42/WebProgramming/tree/master/Project3_Nestjs", title: "⭐ Nest.js", desc: "โปรเจคนี้ทำด้วย Nest.js และ EJS ในการทำเว็ปร้านขายตุ๊กตาและพวงกุญแจ มีการกำหนด Role บนฐานข้อมูลว่าใครมีสิทธิ์ในการแค่ดูหรือจัดการสินค้าได้บ้าง", date: "Mar 2025", img: lv9 },
        { version: "Level 10", link: "https://github.com/SmileCat42/WebProgramming/tree/master/Project3_Nestjs", title: "JWT,SEO,CMS,HTTPS", desc: "โปรเจคเดิม Nest.js ได้มีการต่อยอดถึงความเป็นมืออาชีพ กอล์ฟได้มีการเพิ่มหลักการ JWT หรือการสร้าง Token ในการปกป้องข้อมูลผู้ใช้และ SEO ได้มีการประเมินจาก Lighthouse ได้ถึง 91 คะแนน ช่วยให้ค้นหาเพจได้เจอง่ายขึ้น อีกทั้งมีการสร้าง CMS ด้วย Wordpress ด้วยหน้าเพจสาขา 2 สุดท้ายสามารถรันแบบ HTTPS ได้สำเร็จบน NGROK", date: "Mar 2025", img: lv10 },
    ];

    return (
        <div className="min-h-screen bg-[#fdfbf7] text-gray-800 overflow-hidden">

            <div
                className="fixed inset-0 w-full h-full opacity-10 pointer-events-none z-0"
                style={{
                    backgroundImage: "url('/bgtree.jpg')", // แก้เป็นอันนี้ รูปมาแน่นอน!
                    backgroundSize: 'cover', // แนะนำ 'cover' เพื่อให้รูปเต็มพื้นที่ หรือ 'contain' ตามความชอบ
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    opacity: 0.4,
                    filter: 'blur(1px)'
                }}
            ></div>

            <header className="text-center py-10" data-aos="fade-down">
                <h1 className="text-6xl font-black text-green-900 mb-2">My Growth</h1>
                <div className="w-24 h-1 bg-orange-400 mx-auto rounded-full"></div>
                <p className="mt-4 text-gray-600 italic">"โชว์ถึงพัฒนาการในการเขียนเว็ปของ Krittaya"</p>
            </header>

            <div className="relative max-w-5xl mx-auto px-4 mt-20">



                <div className="relative z-10">


                    {/* --- 🌿 เส้นเถาวัลย์ (SVG Path) --- */}
                    <div className="absolute inset-0 w-full h-full pointer-events-none">
                        <svg width="100%" height="100%" viewBox="0 0 100 1000" preserveAspectRatio="none" className="stroke-orange-900/30 fill-none">
                            {/* ให้เส้นโปร่งใสขึ้นในมือถือด้วย /50 (opacity 50%) จะได้ไม่แย่งสายตา */}
                            <path d="M50,0 Q60,100 40,200 T50,400 T60,600 T40,800 T50,1000"
                                strokeWidth="2" strokeDasharray="4,4" />
                        </svg>
                    </div>

                    <div className="space-y-32">
                        {history.map((item, index) => (
                            <div
                                key={index}
                                className={`relative flex flex-col md:flex-row items-center justify-between w-full 
                ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >

                                {/* ส่วนรูปภาพ - ทรงอิสระเหมือนใบไม้/ผลไม้ */}
                                <div
                                    className="w-full md:w-[55%] order-2 md:order-none mt-6 md:mt-0 lg:mr-10 lg:ml-10"
                                    data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                                >
                                    <div className="relative group">

                                        {/* glow ด้านหลัง */}
                                        <div className="absolute -inset-2 bg-gradient-to-r from-green-200 to-orange-200 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] blur-xl opacity-40 group-hover:opacity-80 transition duration-500"></div>

                                        {/* container รูป */}
                                        <div className="relative w-full aspect-[4/3] md:aspect-video overflow-hidden rounded-[30%_70%_70%_30%/30%_30%_70%_70%] border-4 border-white shadow-2xl">

                                            {/* รูป */}
                                            <img
                                                src={item.img}
                                                alt={item.title}
                                                className="
                            w-full h-full object-cover
                            transition-all duration-700
                            group-hover:scale-110
                            brightness-95 contrast-90 
                            group-hover:brightness-105 group-hover:contrast-105
                            "
                                            />

                                            {/* overlay สีเขียว */}
                                            <div className="absolute inset-0 bg-green-900/10 pointer-events-none"></div>

                                        </div>
                                    </div>
                                </div>

                                {/* จุดเชื่อมต่อ - ดีไซน์เป็นดอกไม้หรือใบไม้ */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                                    <div
                                        ref={el => dotRefs.current[index] = el}
                                        className="w-6 h-6 bg-orange-300 rounded-full border-4 border-white shadow-lg transition-all duration-500"
                                    >
                                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                    </div>
                                    {/* ใบไม้เล็กๆ ยื่นออกมา */}
                                    <div className={`absolute top-0 ${index % 2 === 0 ? '-right-8' : '-left-8'} text-green-600 text-2xl`}></div>
                                </div>

                                {/* ส่วนข้อความ */}
                                <div className="text-center bg-white/30 rounded-xl w-full md:w-[45%] order-1 md:order-none" data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}>
                                    <div className={`text-center p-6 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                        <span className="text-orange-500 font-mono text-sm font-bold tracking-widest uppercase">{item.version}</span>
                                        <h2 className="text-3xl font-black text-green-900 mt-1">{item.title}</h2>
                                        <p className="text-gray-700 mt-3 leading-relaxed">{item.desc}</p>

                                        <div className={`mt-6 justify-center flex gap-2 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className='flex j gap-1.5 px-4 py-2 bg-gray-500 text-white text-sm rounded-lg hover:bg-gray-400 transition-all hover:scale-105'
                                            >
                                                <FaGithub />
                                                <span>Code</span>
                                            </a>
                                        </div>

                                        <div className="mt-4 inline-block px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full font-bold">
                                            {item.date}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <footer className="w-full mt-32 py-20 relative overflow-hidden">

                {/* 1. แผ่นสีขาวจางๆ (Mask) ที่ทำให้รูปกิ่งไม้หลัง Footer ดูจางลง */}
                {/* เราใช้ bg-white/60 (ใส 60%) เพื่อไม่ให้ขาวเกินไป และใช้ gradientmask เพื่อเบลนขอบบน */}
                <div
                    className="absolute inset-0 bg-white/60 z-0"
                    style={{
                        // เทคนิคการเบลนขอบบน: สร้าง Gradient สีขาวทึบไปหาใส (Transparent)
                        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, white 40%)',
                        maskImage: 'linear-gradient(to bottom, transparent 0%, white 40%)',
                    }}
                ></div>

                {/* 2. เนื้อหา Footer (อยู่ชั้นบน z-10) */}
                <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">

                    {/* สีตัวหนังสือ Coming Soon ให้ชัดเจน */}
                    <h3 className="text-4xl md:text-6xl font-black text-green-900/70 uppercase tracking-widest">
                        Coming Soon
                    </h3>

                    <p className="mt-6 text-gray-700 italic">
                        "การเรียนรู้ไม่มีที่สิ้นสุด... เจอกันเร็วๆ นี้"
                    </p>

                    <div className="flex justify-center gap-4 mt-8">
                        <div className="w-12 h-1 bg-orange-400 rounded-full shadow-md"></div>
                        <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce shadow-md"></div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Journey;