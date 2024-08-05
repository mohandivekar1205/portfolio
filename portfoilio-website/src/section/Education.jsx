import React from 'react'

import { Card, CardHeader, CardBody, CardFooter, Link, Image } from "@nextui-org/react";
import Uimage from '../Icons/Savitribai_Phule_Pune_University_Logo.png'

export default function Education() {

  return (
    <div id='Education' className='container mx-auto p-4 flex flex-col items-center gap-4'>
      <h1 className="introduction-title text-4xl font-bold mb-8">
      What is highest level of education i have?
      </h1>
      <Card className="max-w-[400px] p-2" shadow='lg'>
        <CardHeader className="flex gap-3">
          <Image
            alt="nextui logo"
            height={50}
            radius="md"
            src={Uimage}
            width={50}
          />
          <div className="flex flex-col">
            <p className="text-lg">M.sc in Computer Science</p>
            <p className="text-small text-default-500">2021 Oct - 2023 May</p>
            <p className="text-small text-default-500">Grade : 6.9 CGPA</p>
          </div>
        </CardHeader>
        <CardBody className='justify-content'>
          <h3 className='text-md'>I am currently pursuing a Master's degree in computer science at pune university. I have completed 4 semesters and have a CGPA of 6.9. Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others.</h3>
        </CardBody>
      </Card>

    </div>
  )
}
