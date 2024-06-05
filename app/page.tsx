import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import {Button, ButtonGroup} from "@nextui-org/button";
import {Kbd} from "@nextui-org/kbd";
import {CheckboxGroup, Checkbox} from "@nextui-org/checkbox";
import {Select, SelectSection, SelectItem} from "@nextui-org/select";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Image} from "@nextui-org/image"
import {Divider} from "@nextui-org/divider"
import {Textarea} from "@nextui-org/input";
import {Progress} from "@nextui-org/progress";




export default function Home() {

	return (
		<section className="flex flex-col items-center justify-center gap-16 py-8 md:py-10 ">
			<div className="flex flex-col items-center justify-center text-center gap-4">
				<h1 className={title()}>Добро пожаловать на CV Editor</h1>
				<h2 className={subtitle()}>Обновите ваше резюме в несколько кликов вместе с CV-Editor!
				</h2>
			</div>

			{/* <div className="flex flex-col items-center justify-center gap-4">
    			<p>Для этого войдите в ваш профиль</p>
    			<Image
                    isZoomed
                    isBlurred
                    src={'/assets/sign-in.png'}
                    width={180}
                />
            </div> */}
            <div className="flex flex-col items-center justify-center gap-4">
    			<p className="text-center">Для этого войдите в ваш профиль и перейдите на страницу обновления резюме и последовательно, следуя инструкции, авторизуйтесь в подключённых сервисах</p>
    			<Image
                    // isZoomed
                    isBlurred
                    src={'/assets/auth-services.png'}
                    width={480}
                />
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
    			<p className="text-center">Заполните необходимую информацию и нажмите кнопку обновления резюме!</p>
    			<Image
                    // isZoomed
                    isBlurred
                    src={'/assets/update-field.png'}
                    width={320}
                />
			</div>

			<Link href="/resume">
			     <Button color="primary" size="lg" variant="shadow">Попробовать сейчас!</Button>
			</Link>

		</section>

	);
}
