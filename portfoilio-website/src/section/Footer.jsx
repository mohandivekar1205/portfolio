import React from 'react'

import {Button} from "@nextui-org/react";
import {Chip} from "@nextui-org/react";

import { scroller } from 'react-scroll';


export default function Footer() {

  const scrollToSection = (sectionId) => {
    scroller.scrollTo(sectionId, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  }


  const menuItems  = ['Introduction','Education','Certification','Projects','Skill']

    const socialMediaLinks = [
        { name: 'bi bi-facebook', href: '#' },
        { name: 'bi bi-google', href: '#' },
        { name: 'bi bi-youtube', href: '#' },
        { name: 'bi bi-linkedin', href: '#' },
      ];
      
      const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#' },
        { name: 'Contact', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Articles', href: '#' }
      ];


  return (
    <div id='Footer' className="py-10">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4 md:text-5xl lg:text-6xl">Thank You</h1>
      <div className="mb-6 mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        Thank you so much for visiting my portfolio website. This site not for any commercial and personal use. It is just build for demonstrating for front end skills.   
      </div>
      <div className="flex justify-center space-x-4 mb-6 flex-wrap">
        {socialMediaLinks.map((media, index) => (
          <Button key={index} variant="flat" isIconOnly>
            <i className={media.name}></i>
          </Button>
        ))}
      </div>
      <div className="flex justify-center space-x-4 flex-wrap">
        {menuItems.map((items, index) => (
          <Chip key={index}
          onClick={() => scrollToSection(items)}
          variant="bordered" size='lg' className="mb-2">
            {items}
          </Chip>
        ))}
      </div>
    </div>
  </div>
  
  )
}
