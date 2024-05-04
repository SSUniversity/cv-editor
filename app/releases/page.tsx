"use client";

import { title } from "@/components/primitives";
import { Avatar, Checkbox, CheckboxGroup, Divider, Image } from "@nextui-org/react";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import {Chip} from "@nextui-org/chip";

export default function ReleasesPage() {
    const date = new Date().toUTCString().slice(5, 16);

    return (
        <div>
            <h1 className={title()}>Releases</h1>
            <div className="gap-4 grid grid-cols-2 sm:grid-cols-4 mt-4 w-full">

                {/* Card Item */}
                <Card>
                    <CardHeader className="container">
                        <Chip color="primary" variant="bordered">Current work</Chip>
                        <p className="text-gray-500 pl-4">{date}</p>
                    </CardHeader>
                    <Divider/>
                    <CardBody>
                        <div className="text-gray-500">
                            <h4>To Do</h4>
                            <ul className="list-disc">
                                <li>MongoDB Implimentation</li>
                                <li>Save auth users</li>
                                <li>Save hh user token in db</li>
                                <li>Save user cv in DB</li>
                                <li>Personal cv page</li>
                                <li>Personal update cv page</li>
                                {/* <li></li> */}
                            </ul>
                        </div>
                    </CardBody>
                    <Divider/>
                    <CardFooter>
                        <Image
                            isZoomed
                            isBlurred
                            width={40}
                            height={40}
                            radius="full"
                            className="aspect-square"
                            src="https://kulakov.design/src/images/home/photo.png"
                        />
                        <div className="container pl-4 text-start">
                            <p>Max Kulakov</p>
                            <p className="text-sm text-gray-500">CV Editor Team</p>
                        </div>
                    </CardFooter>
                </Card>



                {/* Card Item */}
                <Card>
                    <CardHeader className="container">
                        <Chip color="primary" variant="bordered">Current work</Chip>
                        <p className="text-gray-500 pl-4">{date}</p>
                    </CardHeader>
                    <Divider/>
                    <CardBody>
                        <div className="text-gray-500">
                            <h4>To Do</h4>
                            <ul className="list-disc">
                                <li>Create CV Editor Logo</li>
                                <li>Create CV Editor Identity</li>
                                {/* <li></li> */}
                            </ul>
                        </div>
                    </CardBody>
                    <Divider/>
                    <CardFooter>
                        <Image
                            isZoomed
                            isBlurred
                            width={40}
                            height={40}
                            radius="full"
                            className="aspect-square"
                            src="https://zevakina.design/src/images/home/square.jpg"
                        />
                        <div className="container pl-4 text-start">
                            <p>Valeria Zevakina</p>
                            <p className="text-sm text-gray-500">CV Editor Team</p>
                        </div>
                    </CardFooter>
                </Card>



                {/* Card Item */}
                <Card >
                    <CardHeader className="container">
                        <Chip color="primary">v0.1</Chip>
                        <p className="text-gray-500 pl-4">10 may 2024</p>
                    </CardHeader>
                    <Divider/>

                    <CardBody>
                        <div className="mb-4">
                            <h4>Release Note</h4>
                            <ul className="list-disc">
                                <li>Add Guide Page</li>
                                <li>Add Releases Page</li>
                            </ul>
                        </div>

                    </CardBody>
                    <Divider/>

                    <CardFooter>
                        <Image
                            isZoomed
                            isBlurred
                            width={40}
                            height={40}
                            radius="full"
                            className="aspect-square"
                            src="https://kulakov.design/src/images/home/photo.png"
                        />
                        <div className="container pl-4 text-start">
                            <p>Max Kulakov</p>
                            <p className="text-sm text-gray-500">CV Editor Team</p>
                        </div>
                    </CardFooter>
                </Card>


            </div>
        </div>
    );
}
