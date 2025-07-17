import { title } from "@/components/primitives";
import { Image } from "@heroui/react";

export default function GuidePage() {
    return (
        <div>
            <h1 className={title()}>Гайд</h1>

            <ol>
                <li>Log In in CV-Editor service</li>
                <li>Authorize in hh.ru</li>
                <li>...</li>
                <li>Profit</li>
            </ol>


            <h2>Tell me why...</h2>

        </div>
    );
}
