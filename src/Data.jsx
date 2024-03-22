import { FaHome,FaUser,FaFolderOpen, FaEnvelopeOpen } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";

import Work1 from '../src/assets/DeepBelow_Login.png';
import Work2 from '../src/assets/SeniorCare.png';
import Work3 from '../src/assets/Cafe_Management_System.png';


export const personalInfo = [
    {
        id: 1,
        title: 'First Name : ',
        description: 'Honeyvhen', 
    },

    {
        id: 2,
        title: 'Last Name : ',
        description: 'Villaluz', 
    },

    {
        id: 3,
        title: 'Age : ',
        description: '21 years', 
    },

    {
        id: 4,
        title: 'Nationality : ',
        description: 'Filipino', 
    },

    {
        id: 5,
        title: 'Address : ',
        description: 'Tondo, Manila', 
    },

    {
        id: 6,
        title: 'Civil Status : ',
        description: 'Single', 
    },

    {
        id: 7,
        title: 'Contact No. : ',
        description: '09394303968', 
    },

    {
        id: 8,
        title: 'Email : ',
        description: 'vhoneyvhen@gmail.com', 
    },
    {
        id: 9,
        title: 'Skype : ',
        description: 'honeyvhen', 
    },

    {
        id: 10,
        title: 'Language : ',
        description: 'English, Tagalog', 
    } 
]

export const skills = [
    {
        id: 1,
        title: 'Programming : ',
        description: 'Python, Java, HTML/CSS, JavaScript, SQL', 
    },

    {
        id: 2,
        title: 'Frameworks : ',
        description: 'Python, Java, HTML/CSS, JavaScript, SQL', 
    },

    {
        id: 3,
        title: 'Other Tools : ',
        description: 'Git, Visual Studio, Microsoft, Figma, Canva', 
    }
]


export const educations = [
    {
        id: 1,
        icon: <IoSchool className="EIcon"/>, 
        year: '2020 - Present',
        school:'Polytechnic University of the Philippines',
        description: 'Bachelor of Science in Information Technology', 
    },

    {
        id: 2,
        icon: <IoSchool className="EIcon"/>,
        year: '2018 - 2020',
        school:'Arellano University',
        description: 'Science, Technology, Engineering, and Mathematics', 
    },

    {
        id: 3,
        icon: <IoSchool className="EIcon"/>,
        year: '2014 - 2018',
        school:'Manuel L.Quezon High School',
        description: 'Completed With High Honor', 
    },

]


export const portfolio = [
    {
        id: 1,
        title: 'SeniorCare',
        description: 'A responsive website for the Monthly Monetary Allowance Distribution Information System with face recognition and SMS features in the barangays of Manila. This is built using Django, Python, MySQL, HTML, and CSS.', 
    },

    {
        id: 2,
        title: 'Cafe Management System',
        description: 'A responsive website for the Monthly Monetary Allowance Distribution Information System with face recognition and SMS features in the barangays of Manila. This is built using Django, Python, MySQL, HTML, and CSS.', 
    },

    {
        id: 3,
        title: 'DeepBelow',
        description: 'A responsive website for the Monthly Monetary Allowance Distribution Information System with face recognition and SMS features in the barangays of Manila. This is built using Django, Python, MySQL, HTML, and CSS.', 
    },
] 

export const navlinks = [
    {
        id: 1,
        name: 'Home',
        icon:<FaHome className='icon' />,
        path: '/',
    }, {
        id: 2,
        name: 'About',
        icon: <FaUser className='icon' />,
        path: '/about',
    },
    {
        id: 3,
        name: 'Porfolio',
        icon:<FaFolderOpen className='icon' />,
        path: '/portfolio',
    },
    {
        id: 4,
        name: 'Contact',
        icon:<FaEnvelopeOpen className='icon' />,
        path: '/contact',
    },

]


export const portfolioList = [
    {
        id: 1,
        name: 'SeniorCare',
        icon: Work2,
        desc: 'A responsive website for Monthly Monetary Allowance Distribution System with face recognition and SMS.',
        language: 'Django, Python, MySQL, HTML, CSS',
        path: 'https://github.com/vlemonade/seniorcare'
    },
    {
        id: 2,
        name: 'DeepBelow',
        icon:Work1,
        desc: 'A responsive website featuring a fully functional login and signup system integrated with database.',
        language: 'React, MySQL',
        path: 'https://github.com/vlemonade/DeepBelow'
    },
    {
        id: 3,
        name: 'Cafe Management',
        icon:Work3,
        desc: 'A comprehensive Python GUI application designed to streamline order processing',
        language: 'Python',
        path: 'https://github.com/vlemonade/Cafe-Management-System'
    },
]

