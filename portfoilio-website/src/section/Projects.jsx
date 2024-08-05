import React from 'react'

import { Card, CardBody, Link, Image } from "@nextui-org/react";

import img1 from "../Icons/task.png"

import img2 from "../Icons/Google_News_icon.png"

export default function Projects() {
  return (
    <div id='Projects' className="container mx-auto p-4 flex flex-col lg:flex-row items-center lg:items-start gap-4">
    <div className="text-container lg:w-1/2 mb-4 lg:mb-0">
      <h1 className="introduction-title text-4xl font-bold mb-2">
        Why hire me for your next <br /> Project
      </h1>
      <h3 className="introduction-subtext text-lg mb-4">
      Last year i am spending muck more time backend development and also i have basic understanding of frontend development mention project you can refer.
      </h3>
      <Link
        isExternal
        showAnchorIcon
        href="https://github.com/nextui-org/nextui"
        className="text-blue-500 hover:underline"
      >
        GitHub Profile.
      </Link>
    </div>
    <div className="container lg:w-1/2 flex flex-col lg:flex-row justify-center lg:justify-end gap-4">
      <Card className="m-2 flex-1">
        <CardBody className="flex flex-col items-center">
          <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src={img2}
            width={40}
            className="mb-2"
          />
          <h3 className="text-3xl m-2">New Application</h3>
          <p className="text-center">
            "Discover real-time news with our OpenSource News API project, delivering timely updates and empowering developers with easy integration."
          </p>
        </CardBody>
      </Card>
  
      <Card className="m-2 flex-1">
        <CardBody className="flex flex-col items-center">
          <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src={img1}
            width={40}
            className="mb-2"
          />
          <h3 className="text-3xl m-2">To-Do Application</h3>
          <p className="text-center">
            Developed a basic to-do application using Java, Java Servlets, and JDBC. Implemented CRUD operations, user authentication, and database interaction to manage tasks efficiently.
          </p>
        </CardBody>
      </Card>
    </div>
  </div>
  
  )
}
