"use client";

import { title } from "@/components/primitives";
import { Avatar, Checkbox, CheckboxGroup, Divider, Image } from "@nextui-org/react";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import {Chip} from "@nextui-org/chip";


function getDate(date: string) {
    const temp_date = new Date(date).toUTCString().slice(5, 16);
    return temp_date;
};


export default function ReleasesPage() {
    const current_date = new Date().toUTCString().slice(5, 16);
    const release_list = require("@/data-template/release-data.json").sort((a:any, b:any) => {
        if (a.version > b.version) {
            return -1;
        }
    });;


    return (
        <div>
            <h1 className={title()}>Releases</h1>
            <div className="gap-4 grid grid-cols-1 sm:grid-cols-4 mt-4 w-full">
                {release_list.map((item:any, index:any) => (
                    <Card key={index}>
                        <CardHeader className="container">
                            {item.type == "WIP"?
                                <Chip color="primary" variant="bordered">WIP</Chip>
                                :
                                <Chip color="primary" variant="solid">v{item.version}</Chip>
                            }
                            {item.type == "WIP"?
                                <p className="text-gray-500 pl-3">{current_date}</p>
                                :
                                <p className="text-gray-500 pl-3">{getDate(item.date)}</p>
                            }
                        </CardHeader>
                        <Divider/>
                        <CardBody>
                            <div className={item.type == "WIP"? "text-gray-500" : ""}>
                                {item.type == "WIP"?
                                    <h4>In Progress</h4>
                                    :
                                    <h4>Release Note</h4>
                                }
                                <ul className="list-disc">
                                    {item.task_list.map((item:any, index:any) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </CardBody>
                        <Divider/>
                        <CardFooter>
                            <Image
                                isZoomed isBlurred radius="full"
                                width={40} height={40}
                                className="aspect-square"
                                src={item.author.thumbnail}
                            />
                            <div className="container pl-3 text-start">
                                <p>{item.author.name}</p>
                                <p className="text-sm text-gray-500">{item.author.team}</p>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
