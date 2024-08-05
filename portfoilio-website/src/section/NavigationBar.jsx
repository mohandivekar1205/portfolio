import React from "react";
import {Navbar, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";

import { useTheme } from 'next-themes';

import { scroller } from 'react-scroll';




export default function App() {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const { theme, setTheme } = useTheme();

  const darkTheme = (()=>{
    if (theme=='light') {
      setTheme('dark')
    }else{
      setTheme('light')
    }
  })


  const scrollToSection = (sectionId) => {
    scroller.scrollTo(sectionId, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  }


  const menuItems  = ['Introduction','Education','Certification','Projects','Skill']

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered isBlurred>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
       
      {menuItems.map((items) =>(
          <NavbarItem>
          <button 
          key={items}
          onClick={() => scrollToSection(items)}
          color="foreground" href="#" className="w-full font-bold">
           {items}
          </button>
        </NavbarItem>
      ))}
       
        <Button isIconOnly onClick={darkTheme} variant="light">
        <i className="bi bi-brightness-high-fill"></i>
      </Button>    
      </NavbarContent>
      <NavbarContent justify="end">
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((items) => (
          <NavbarMenuItem key={`${items}`}>
            <button
             key={items}
             onClick={() => scrollToSection(items)}
              className="w-full font-bold"
              size="lg"
            >
              {items}
            </button>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
