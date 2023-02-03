import Head from 'next/head';
import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Batuhan | Resume</title>
        <meta
          name='description'
          content='My focus is on creating front-end web applications that are responsive and work seamlessly with back-end technologies.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Batuhan Satilmis</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/batuhan-satilmis-184609261/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/batuhan-satilmis'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Proven Leadership <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          As a web development professional, I am analytical, imaginative and motivated, with experience in customer service, leading teams and 
          implementing effective organizational practices in fast-paced and challenging environments. I am skilled in creating strategies and 
          streamlining operations. I possess diverse analytical abilities, am a team player and excel in building relationships. I am a 
          consummate professional and motivated leader, with strong interpersonal abilities and problem-solving skills. I have a proven track 
          record of critical thinking, generating new ideas, and optimizing efficiency.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>SQL
            <span className='px-2'>|</span>NoSQL
            <span className='px-2'>|</span>Redux
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> Firebase
            <span className='px-2'>|</span> RESTAPI
          </p>
          <p className='py-2'>
            <span className='font-bold'>Codecademy</span>
            <span className='px-2'>|</span>Full-Stack Developer Student
            
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Information Technology Help Desk 
            </span>
            <span className='px-2'>|</span>Hawaii, United States
          </p>
          <p className='py-1 italic'>Leeward Community College (Apr 2021 - Jun 2022)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Assisting staff and faculty with technology on campus.
            </li>
            <li>
              Troubleshooting and resolving hardware, network, and software issues.
            </li>
            <li>
              Deploying campus computers to users.
            </li>
            <li>
              Managing user accounts, including resetting passwords and configuring accounts.
            </li>
            <li>
              Setting up printers and connecting them to campus computers via internet protocol.
            </li>
            <li>
              Performing regular software and operating system updates on campus computers.
            </li>
            <li>
              Documenting and tracking issues in ITSM application (KBOX).
            </li>
            <li>
              Creating and closing tickets in ITSM application (KBOX).
            </li>
            <li>
              Communicating effectively to address technical issues with staff and faculty.
            </li>
            <li>
              Providing assistance with campus computer management.
            </li>
            <li>
              Ensuring exceptional customer service.
            </li>
            <li>
              Responding to phone calls and email inquiries to the Leeward Community College Helpdesk.
            </li>
          </ul>
        </div>

        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Data Administrator Intern
            </span>
            <span className='px-2'>|</span>Adana, Turkey
          </p>
          <p className='py-1 italic'>MOPAK - Internship (Jun 2018 - Aug 2018)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Designed excel tracking sheets to locate excess paper products.
            </li>
            <li>
              Served multiple customers simultaneously.
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Other Professional Experience
        </h5>
      
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Full-Stack Developer Student</span>
            <span className='px-2'>|</span>Hawaii, United States
          </p>
          <p className='py-1 italic'>Codecademy (Jan 2023 – Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Acquire expertise in front-end and back-end development.
            </li>
            <li>
              Construct and improve the aesthetics of interactive websites.
            </li>
            <li>
              Effectively communicate with other web developers.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
