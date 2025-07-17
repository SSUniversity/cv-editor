"use client";

import * as React from "react";
import {RadioGroup, Radio} from "@heroui/radio";
import {Checkbox} from "@heroui/checkbox";
import {Divider} from "@heroui/divider";
import {Button, ButtonGroup} from "@heroui/button";
import { DeleteIcon } from "./icons";
import {Textarea} from "@heroui/input";
import Link from "next/link";
import {  Modal,   ModalContent,   ModalHeader,   ModalBody,   ModalFooter, useDisclosure} from "@heroui/modal";
import {Spacer} from "@heroui/spacer";


export const ActionFieldButton = () => {
    return (
        <div className="flex gap-4 items-center">
            <Button color="success" variant="bordered">
                Add item
            </Button>    
            <Button color="danger" variant="bordered" className="min-w-0">
                <DeleteIcon/>
            </Button>
        </div>
    )
}



interface ComparisonItemProps {
    name: string;
    cv_editor: any;
	hh_ru: any;
}


export const Comparison = (props: ComparisonItemProps) => {
    

    let cv_editor_item_list;
    if (typeof props.cv_editor == "string") {
        cv_editor_item_list = <div>{props.cv_editor}</div>;
    } else {
        Object.keys(props.cv_editor).map((element, index) => {
            let arrObj = props.cv_editor[element];
            if (typeof arrObj == "object") {
                cv_editor_item_list = props.cv_editor.map((element: any, index:any) => {
                    return (
                        <div key={index}>
                            {Object.keys(element).map((el, index) => {
                                return( 
                                    <div key={index}>
                                        <span className="font-bold opacity-40">{el}: </span>{element[el]}
                                    </div> 
                                );
                            })}
                            <Spacer y={4} />
                        </div>
                    );
                });  
            } else {
                cv_editor_item_list = props.cv_editor.map((element: any, index:any) => {
                    return (
                        <div key={index}>
                            {element}
                            <Spacer y={2} />
                        </div>
                    );
                })
            }
        });
    }


    let hh_ru_item_list;
    if (typeof props.hh_ru == "string") {
        hh_ru_item_list = <div>{props.hh_ru}</div>;
    } else {
        Object.keys(props.hh_ru).map((element, index) => {
            let arrObj = props.hh_ru[element];
            if (typeof arrObj == "object") {
                hh_ru_item_list = props.hh_ru.map((element: any, index:any) => {
                    return (
                        <div key={index}>
                            {Object.keys(element).map((el, index) => {
                                return( 
                                    <div key={index}>
                                        <span className="font-bold opacity-40">{el}: </span>{element[el]}
                                    </div> 
                                );
                            })}
                            <Spacer y={4} />
                        </div>
                    );
                });  
            } else {
                hh_ru_item_list = props.hh_ru.map((element: any, index:any) => {
                    return (
                        <div key={index}>
                            {element}
                            <Spacer y={2} />
                        </div>
                    );
                })
            }
        });
    }



    return  (
        <section className="">        
            <Divider className="my-8" />

            <RadioGroup orientation="horizontal" defaultValue="answer-1" className="flex gap-2 mb-4 text-start ">     
                <div className="w-1/6 items-start font-bold opacity-80">
                    {props.name}
                </div>
                <Radio value="answer-1" className="w-2/6 max-w-full items-start">
                    {cv_editor_item_list}
                </Radio>
                <Radio value="answer-2" className="w-2/6 max-w-full items-start">
                    {hh_ru_item_list}
                </Radio>
                <Radio value="answer-3" className="w-1/6 max-w-full items-start">
                    <ActionFieldButton />
                </Radio>  
            </RadioGroup>
  
        </section>

    )};