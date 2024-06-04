"use client";

import { title } from "@/components/primitives";
import { getServerSession } from "next-auth";
import { authConfig } from "@/config/auth";
import { useSession, signOut } from "next-auth/react";
import { useSearchParams } from 'next/navigation'

import React, { useState } from "react";
import { Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import {Chip} from "@nextui-org/chip";
import {Input} from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import {parseDate, getLocalTimeZone} from "@internationalized/date";

// import { useCallback } from "react";
import {setGithubReadme} from "@/lib/setGithubReadme"

import {getUserExperience} from "@/lib/getUserExperience"
import {getUserResume} from "@/lib/getUserResume"

function isTokenAvailable(hh_token: string, gh_token:string){
    if (hh_token == null || gh_token == null || hh_token == '' || gh_token == '')
        return false;
    return true;
}




export default function ResumePage() {
	const session = useSession();
	const searchParams = useSearchParams()
    const hh_token = searchParams.get('hh-token')
    const gh_token = searchParams.get('gh-token')

    const [companyInputValue, setCompanyInputValue] = React.useState("");
    const [positionInputValue, setPositionInputValue] = React.useState("");
    const [startDateValue, setStartDateValue] = React.useState("");
    const [descriptionInputValue, setDescriptionInputValue] = React.useState("");




    // Get hh resume id and Experience list
    var [hhExperience, setHhExperience] = React.useState<any>([])
        const [hhResumeID, setHhResumeID] = React.useState('')
        const getData = React.useCallback(async () => {
            try {
                const resume_id = await getUserResume(hh_token!)
                const resume_experience = await getUserExperience(hh_token!, resume_id)

                setHhResumeID(resume_id)
                setHhExperience(resume_experience);
          } catch (error){
            console.log(error);
          }
        }, []);

        React.useEffect(() => {
            getData();
        }, [getData]);




    function updateResume() {
        hhExperience.push(
            {
                "start": startDateValue || '2022-04-05',
                "end": null,
                "company": companyInputValue || 'Test Company',
                "company_id": null,
                "industry": null,
                "industries": [],
                "area": null,
                "company_url": null,
                "employer": null,
                "position": positionInputValue || 'Test Position',
                "description": descriptionInputValue || 'Test Description'
            },
        )
        var resultHhExperience: any = {};
        resultHhExperience.experience = hhExperience;


		const postData = async () => {
			const response = await fetch(`/api/hh?resume=${hhResumeID}&hh_token=${hh_token}`, {
				method: "PUT",
				body: JSON.stringify(resultHhExperience),
			});
			return response.json();
		};
		postData().then((data) => {
			console.log(data.message);
		});


		// Update Resume on Gihub
		var options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timezone: 'UTC'
		};
		const gh_new_date = new Date(startDateValue).toLocaleString("ru", options as any)
		setGithubReadme(gh_token!, `### Всем привет! С ${gh_new_date} я работаю на должности ${positionInputValue} в компании ${companyInputValue}`)
	}







	return (
	    <section className="flex flex-col items-center justify-center gap-24">
			<h1 className={title()}>Обновление опыта работы на hh.ru и Github</h1>

			{isTokenAvailable(hh_token!, gh_token!)
			?
			<div className="flex flex-col items-center justify-center gap-4">
                <h3>Укажите новое место работы</h3>
                <Input
                        label="Название компании"
                        value={companyInputValue}
                        onValueChange={setCompanyInputValue}
                />
                <Input
                        label="Должность"
                        value={positionInputValue}
                        onValueChange={setPositionInputValue}
                />
                <Input
                        label="Описание должности"
                        value={descriptionInputValue}
                        onValueChange={setDescriptionInputValue}
                />
                <Input
						type="date"
						label="Дата начала"
						value={startDateValue}
                        onValueChange={setStartDateValue}
						placeholder="dd.mm.yyyy"
				/>
				<Button onClick={updateResume} color="primary">Обновить резюме</Button>
			</div>


			:
			<div className="flex flex-col items-center justify-center gap-4">
			    <p>Для обновления резюме нажмите на кнопку ниже и следуйте инструкции для авторизации на сервисах</p>
			    <Link href={"https://hh.ru/oauth/authorize?response_type=code&client_id="
							+ "IAA3UIFRNM9OF1F9UKMFGJFCSO8KOOA4635I42DALGIRGHK83O28TO7D0C97EKTR"}>
                    <Button color="primary">Авторизоваться</Button>
                </Link>
			</div>
			}
		</section>
	);
}
