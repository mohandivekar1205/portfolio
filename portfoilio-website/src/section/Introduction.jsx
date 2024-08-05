import React from 'react'

import {Image} from "@nextui-org/react";

import {Button} from "@nextui-org/react";



export default function Introduction() {
  return (
    <div id='Introduction' className="container mx-auto p-2 lg:m-5">
        <div className="introduction-card flex flex-col lg:flex-row items-center lg:items-start gap-4">
          <div className="text-container lg:w-1/2">
            <h1 className="introduction-title text-5xl font-bold mb-2">HEY I AM</h1>
              <h1 className="introduction-title text-5xl font-bold mb-2" > MOHAN DIVEKAR</h1>
            <h3 className="introduction-subtext text-lg mb-4">
              Hello and welcome to my personal website! My name is Mohan Divekar, and I'm a passionate software developer with a love for creating innovative solutions and stunning designs.
            </h3>
            <Button className="contact-btn border border-gray-400 rounded-full py-2 px-4">
              Connect me
            </Button>
          </div>
          <div className="image-container lg:w-1/2 flex justify-center lg:justify-center">
            <Image 
              isBlurred
              className="w-full h-auto max-w-xs lg:max-w-1/2 rounded-lg"
              alt="NextUI hero Image with delay"
              src="https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
            />
          </div>
        </div>
      </div> 
  )
}