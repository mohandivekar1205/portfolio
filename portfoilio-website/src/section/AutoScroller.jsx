import React from 'react'

import { scroller } from 'react-scroll';

export default function AutoScroller() {
  
  let currentIndex = 0;

  const scrollToSection = (sectionId) => {
    scroller.scrollTo(sectionId, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };
}
