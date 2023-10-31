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


interface ExperienceProps {
    name: string;
    description: string;
    start_date: string;
    end_date: string;
    current_date?: boolean;
}


export const Experience = (props : ExperienceProps) => {

    const date1 = new Date(props.start_date);
    const date2 = props.current_date? new Date() : new Date(props.end_date)

	return (
        <div className="grid grid-cols-12 gap-2 mb-4">
            <div className="col-start-1 col-end-3">
                {props.start_date} - {props.end_date} 
                <div className="text-default-500">{getFormatedStringFromDays(diffDates(date1, date2))}</div>
            </div>
            <div className="col-start-4 col-end-6">
                {props.name}
            </div>
            <div className="col-start-7 col-end-13">
                {props.description}
                
            </div>
        </div>
	);
};