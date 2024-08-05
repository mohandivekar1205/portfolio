import React from 'react'

import { Card, CardBody, Link, Image, Chip, Avatar,CircularProgress,CardFooter} from "@nextui-org/react";


export default function () {

    const skillData = [
        { name: 'Spring Boot', value: 70 },
        { name: 'React', value: 85 },
        { name: 'Node.js', value: 65 },
        { name: 'Docker', value: 50 }
    ];

    return (
        <div id='Skill' className="container text-center mx-auto p-4 flex flex-col items-center gap-4">
            <h1 className="introduction-title text-4xl font-bold mb-8">
                What industry level skill do I have?
            </h1>
            <div className="container mx-auto p-4 flex flex-wrap gap-4 justify-center">
      {skillData.map((skill, index) => (
        <Card
          key={index}
          className="w-[240px] h-[240px] border-none bg-opacity-50 shadow-lg backdrop-filter backdrop-blur-lg"
        >
          <CardBody className="flex justify-center items-center pb-0">
            <CircularProgress
              classNames={{
                svg: "w-36 h-36 drop-shadow-md",
                value: "text-3xl font-semibold",
              }}
              value={skill.value}
              strokeWidth={3}
              showValueLabel={true}
            />
          </CardBody>
          <CardFooter className="flex justify-center items-center pt-0">
            <Chip
              classNames={{
                base: "border-1",
                content: "text-small font-semibold",
              }}
              variant="bordered"
            >
              {skill.name}
            </Chip>
          </CardFooter>
        </Card>
      ))}
    </div>        </div>

    )
}
