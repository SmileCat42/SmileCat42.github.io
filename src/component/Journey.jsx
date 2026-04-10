import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import project1 from '../assets/Project1.png'

const Journey = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    const history = [
        { version: "v1.0", title: "Seedling", desc: "เริ่มเพาะเมล็ดพันธุ์ด้วยโครงสร้าง HTML/CSS", date: "Jan 2024", img: project1 },
        { version: "v1.5", title: "First Leaf", desc: "ใบแรกผลิออกมาพร้อมสีสันส้มสดใส", date: "Feb 2024", img: project1 },
        { version: "v2.0", title: "Strong Branch", desc: "กิ่งก้านแข็งแรงขึ้นด้วย React และ Logic ที่ซับซ้อน", date: "Mar 2024", img: "/assets/journey/v3.png" },
    ];

    return (
        <div className="min-h-screen bg-[#fdfbf7] text-gray-800 pb-20 overflow-hidden">

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

            {/* ส่วนหัว */}
            <div className="max-w-6xl mx-auto p-6">
                <Link to="/" className="text-green-700 hover:text-green-800 font-bold flex items-center gap-2 transition-all">
                    ← Back to Garden
                </Link>
            </div>

            <header className="text-center py-10" data-aos="fade-down">
                <h1 className="text-6xl font-black text-green-900 mb-2">My Growth</h1>
                <div className="w-24 h-1 bg-orange-400 mx-auto rounded-full"></div>
                <p className="mt-4 text-gray-600 italic">"แสดงถึงพัฒนาการในการเขียนเว็ป"</p>
            </header>

            <div className="relative max-w-5xl mx-auto px-4 mt-20">



                <div className="relative z-10">


                    {/* --- 🌿 เส้นเถาวัลย์ (SVG Path) --- */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-full h-full hidden md:block">
                        <svg width="100%" height="100%" viewBox="0 0 100 1000" preserveAspectRatio="none" className="stroke-orange-900 fill-none">
                            {/* เส้นหลักแบบหยักเหมือนกิ่งไม้ */}
                            <path d="M50,0 Q60,100 40,200 T50,400 T60,600 T40,800 T50,1000"
                                strokeWidth="1" strokeDasharray="2,2" />
                        </svg>
                    </div>

                    <div className="space-y-32">
                        {history.map((item, index) => (
                            <div key={index} className={`relative flex items-center justify-between w-full ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>

                                {/* ส่วนรูปภาพ - ทรงอิสระเหมือนใบไม้/ผลไม้ */}
                                <div className="w-[45%]" data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}>
                                    <div className="relative group">
                                        <div className="absolute -inset-2 bg-gradient-to-r from-green-200 to-orange-200 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] blur-xl opacity-50 group-hover:opacity-100 transition duration-500"></div>
                                        <div className="relative w-full aspect-video overflow-hidden rounded-[30%_70%_70%_30%/30%_30%_70%_70%] border-4 border-white shadow-2xl">
                                            <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                        </div>
                                    </div>
                                </div>

                                {/* จุดเชื่อมต่อ - ดีไซน์เป็นดอกไม้หรือใบไม้ */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                                    <div className="w-6 h-6 bg-orange-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                    </div>
                                    {/* ใบไม้เล็กๆ ยื่นออกมา */}
                                    <div className={`absolute top-0 ${index % 2 === 0 ? '-right-8' : '-left-8'} text-green-600 text-2xl`}>🌿</div>
                                </div>

                                {/* ส่วนข้อความ */}
                                <div className="w-[45%]" data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}>
                                    <div className={`p-6 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                                        <span className="text-orange-500 font-mono text-sm tracking-widest uppercase">{item.version}</span>
                                        <h2 className="text-3xl font-black text-green-900 mt-1">{item.title}</h2>
                                        <p className="text-gray-600 mt-3 leading-relaxed">{item.desc}</p>
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
        </div>
    );
};

export default Journey;