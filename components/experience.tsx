"use client";

import * as React from "react";


function diffDates(day_one:any, day_two:any) {
    return (day_one - day_two) / (60 * 60 * 24 * 1000);
};

function getFormatedStringFromDays(numberOfDays:number) {
    numberOfDays = Math.abs(numberOfDays)
    var years = Math.floor(numberOfDays / 365);
    var months = Math.floor(numberOfDays % 365 / 30);

    var yearsDisplay = years > 0 ? years + (years == 1 ? " year " : " years ") : "";
    var monthsDisplay = months > 0 ? months + (months == 1 ? " month " : " months ") : "";
    return yearsDisplay + monthsDisplay; 
}


interface ExperienceItemProps {
    name: string;
    description: string;
    start_date: string;
    end_date: string;
    current_date?: boolean;
}

interface ExperienceProps {
    experience_list: ExperienceItemProps[];
}


export const Experience = (props : ExperienceProps) => {
    const experience_item_list = props.experience_list.map((element, index) => {
        const date1 = new Date(element.start_date);
        const date2 = element.current_date? new Date() : new Date(element.end_date)

        return (
            <div key={index} className="grid grid-cols-12 gap-2 mb-4">
                <div className="col-start-1 col-end-3">
                    {element.start_date} - {element.end_date} 
                    <div className="text-default-500">{getFormatedStringFromDays(diffDates(date1, date2))}</div>
                </div>
                <div className="col-start-4 col-end-6">
                    {element.name}
                </div>
                <div className="col-start-7 col-end-13">
                    {element.description} 
                </div>
            </div>
        )
    })

    return  <>{experience_item_list}</>
};