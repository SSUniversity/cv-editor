"use client";

import { title } from "@/components/primitives";
import { getServerSession } from "next-auth";
import { authConfig } from "@/config/auth";
import { useSession, signOut } from "next-auth/react";
import { useSearchParams } from 'next/navigation'

import {getUserResume} from "@/lib/getUserResume"
import React, { useState } from "react";
import { Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import {Chip} from "@nextui-org/chip";
import {Input} from "@nextui-org/input";
import { Link } from "@nextui-org/link";

import {Image} from "@nextui-org/react";
import createTokenImage from '/assets/create-token.png';



export default function UpdateGithubPage() {
    const [value, setValue] = React.useState("");

    const isInvalid = React.useMemo(() => {
        if (value === "") return false; else return true;
    }, [value]);



    return (
        <section className="flex flex-col items-center justify-center gap-8">
            <h1 className={title()}>Обновление резюме на Github. Получение токена</h1>

            <p>Перейдите по ссылке <Link href='https://github.com/new' target='_blank'>https://github.com/new</Link> и
            создайте публичный репозиторий с вашим никнеймом, как показано на изображении ниже</p>
            <Image
                isZoomed
                isBlurred
                src={'/assets/create-repo.png'}
            />


            <p>Перейдите по ссылке <Link href='https://github.com/settings/tokens/new' target='_blank'>
            github.com/settings/tokens/new</Link> и создайте персональный токен с правами на взаимодействие
            с репозиторием, как показано на изображении ниже</p>
            <Image
                isZoomed
                isBlurred
                src={'/assets/create-token.png'}
            />

            <p>
                Скопируйте полученный токен в поле ниже и нажмите кнопку подтверждения
                (также рекумендуем сохранить его локально, чтобы не перевыпускать, так как возможны проблемы с его сохранением)
            </p>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4 items-start">
                <Input
                    size="sm" type="text"
                    value={value}
                    onValueChange={setValue}
                    isInvalid={isInvalid}
                    label="Введите ваш персональный токен Github"
                />
                <Link href={isInvalid ? `/update-github/view-and-update?gh-token=${value}` : '#'}>
                    <Button size="lg" color="primary" radius="sm">Подтвердить</Button>
                </Link>
            </div>

		</section>
	);
}
