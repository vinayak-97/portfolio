import React from 'react';
//import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {

  faGithub,

} from '@fortawesome/free-brands-svg-icons'

const Projects = () => { 
    //const navigate = useNavigate();

    // const handleProjectClick = (projectId) => {
    //   navigate(`/projects/${projectId}`);
    // };

    return (
        <section className='bg-black text-white px-5 py-20 ' id='project'>
            <div className="container mx-auto pb-6">
                <div className='project-info md:text-left'>
                    <h2 className='text-4xl font-bold mb-5 border-b-[4px] w-[180px] border-teal-500 pb-2'>
                        Projects
                    </h2>
                </div>
            </div>
            <div className="cards container mx-auto grid grid-cols-3 gap-x-4 gap-y-14  pt-6">

                    <div className='bg-white w-96 h-60 rounded-2xl relative transition-transform duration-1000 ease-in-out hover:translate-x-4 hover:-translate-y-4  '>  {/*onClick={() => handleProjectClick(1)}*/}
                        <header>
                            <div className="project-name text-black px-5 pt-8 text-lg font-bold">
                            ChatGPT Clone
                            </div>
                            <a href='https://github.com/vinayak-97'  style={{fontSize:"30px"}}>
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    color="#4d4d4e"
                                    className="anchor-icon"
                                />
                            </a>
                            <div className="high-idea text-black px-5 ">
                            • Developed a ChatGPT clone web application that enables users to have natural language conversations and obtain accurate responses. 
                           
                            </div>
                        </header>
                        <footer className=''>
                            <div className='text-black text-xs opacity-60 flex px-5 pt-9'>
                                <ul className='flex space-x-4'>
                                    <li>HTML, CSS, JavaScript, React, Python, Django, Docker, AWS EC2, PostgreSQL</li>
            
                                </ul>
                            </div>
                        </footer>
                    </div>
                    <div className='bg-white w-96 h-60 rounded-2xl relative transition-transform duration-1000 ease-in-out hover:translate-x-4 hover:-translate-y-4  '>  {/*onClick={() => handleProjectClick(1)}*/}
                        <header>
                            <div className="project-name text-black px-5 pt-8 text-lg font-bold">
                            English Language Query Interface for DataBases
                            </div>
                            <a href="https://github.com/vinayak-97" style={{fontSize:"30px"}}>
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    color="#4d4d4e"
                                    className="anchor-icon"
                                />
                            </a>
                            <div className="high-idea text-black px-5 ">Programmed an Generative AI-based website that allows users to retrieve information from their database using natural English language
                            instead of SQL</div>
                        </header>
                        <footer className=''>
                            <div className='text-black text-xs opacity-60 flex px-5 pt-9'>
                                <ul className='flex space-x-4'>
                                    <li>Java, Spring Boot, Docker, MySQL, HTML, CSS, JavaScript, React, Python</li>
                                </ul>
                            </div>
                        </footer>
                    </div>

                    <div className='bg-white w-96 h-60 rounded-2xl relative transition-transform duration-1000 ease-in-out hover:translate-x-4 hover:-translate-y-4  '>  {/*onClick={() => handleProjectClick(1)}*/}
                        <header>
                            <div className="project-name text-black px-5 pt-8 text-lg font-bold">
                            YouTube Videos Summarizer
                            </div>
                            <a href="https://github.com/vinayak-97" style={{fontSize:"30px"}}>
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    color="#4d4d4e"
                                    className="anchor-icon"
                                />
                            </a>
                            <div className="high-idea text-black px-5 ">Designed a website application that leverages natural language processing and machine learning techniques to automatically summarize
                                YouTube videos.</div>
                        </header>
                        <footer className=''>
                            <div className='text-black text-xs opacity-60 flex px-5 pt-9'>
                                <ul className='flex space-x-4'>
                                    <li>MongoDB, Python, JavaScript, Express.js, React.js, Docker, AWS S3, HTML, CSS, Node.js (MERN)</li>
                                </ul>
                            </div>
                        </footer>
                    </div>
                    
            </div>

            <div className=' more flex justify-center items-center py-28'> {/*nedd to modify padding when more projects are added*/}
                <a href="https://github.com/vinayak-97" target="_blank" className='border-2 border-teal-500 px-4 py-2'>See More</a>
            </div>
        </section>
    
    )
}

export default Projects
