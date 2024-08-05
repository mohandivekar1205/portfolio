import React from 'react'

import { Image } from "@nextui-org/react";

import img1 from "../Icons/Microsoft.png"
import img2 from "../Icons/oracle.jpg"


export default function Certification() {
  return (
    <div id='Certification' className="container mx-auto p-5">
       <h1 className="introduction-title text-center text-4xl font-bold m-8">
      What certification i did?
      </h1>
      <div className="flex flex-col lg:flex-row items-center lg:items-center gap-6 m-10">
        <div className="lg:w-1/2 flex flex-col items-center lg:items-center text-center lg:text-left">
          <h1 className="text-4xl font-bold mb-2 lg:text-4xl">
            Oracle Certified Java Programmer
          </h1>
          <h3 className="text-md lg:text-md">
          Achieved the Oracle Certified Java Programmer (OCJP) certification, demonstrating a solid understanding of core Java concepts and best practices. This certification validates my expertise in object-oriented programming, design patterns, and Java APIs, enabling me to develop robust and efficient Java applications.</h3>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-center">
          <Image
           width={300}
           height={200}
            src={img2}
            alt="NextUI hero Image with delay"
            // className="w-full h-auto max-w-xs lg:max-w-full rounded-lg"
          />
        </div>
      </div>



      <div className="flex flex-col lg:flex-row items-center lg:items-center gap-6 m-10">
        <div className="lg:w-1/2 flex justify-center lg:justify-center">
          <Image
           width={300}
           height={200}
            src={img1}
            alt="NextUI hero Image with delay"
            // className="w-full h-auto max-w-xs lg:max-w-full rounded-lg"
          />
        </div>
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left ">
          <h1 className="text-4xl font-bold mb-2 lg:text-4xl">
            Azure Certified Associate 
          </h1>
          <h3 className="text-md lg:text-md">
          Certified Azure Associate with expertise in cloud services, infrastructure management, and solution implementation. Proficient in deploying, monitoring, and scaling applications on Microsoft Azure for optimal performance.</h3>
        </div>
      </div>
    </div>
  )
}
