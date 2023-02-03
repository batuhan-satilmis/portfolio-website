import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            I am experienced in creating mobile-friendly front-end applications that integrate with API’s and other backend technologies. I am 
            constantly eager to learn new technologies and appreciate that there are multiple solutions to a problem. While I am proficient in 
            using HTML, CSS, Javascript, and React for front-end development, I am adaptable and able to learn new tech stacks as required. In my 
            opinion, being a skilled developer is not limited to proficiency in one language, but rather selecting the most appropriate tool for 
            he task at hand.
          </p>
          <p className='py-2 text-gray-600'>
            I have served as an IT Help Desk at Leeward Community College, where I assisted staff, faculty and students with 
            technical issues on campus and remotely. My responsibilities included addressing hardware, network, and software issues, configuring 
            new devices, deploying new devices and peripherals, maintaining software and operating system updates and supervising exams in the 
            college’s Testing Center. Additionally, I also worked as a Data Administrator Intern at Mopak Group, where I oversaw multiple 
            customer accounts and designed excel tracking sheets to locate surplus paper products.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
