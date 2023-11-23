import { NextRequest, NextResponse } from 'next/server';
import type { NextApiRequest, NextApiResponse } from "next";


export async function GET(req: Request) {

	const { searchParams } = new URL(req.url)
    const code = searchParams.get('code');

    if (code != null) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("grant_type", "authorization_code");
        urlencoded.append("client_id", process.env.HH_ID!);
        urlencoded.append("client_secret", process.env.HH_SECRET!);
        urlencoded.append("code", code!);

        try {
            const res = await fetch("https://hh.ru/oauth/token", {
                method: 'POST',
                headers: myHeaders,
                body: urlencoded,
                redirect: 'follow',
                // credentials: "include",
                // mode: 'no-cors'
            });
                
            const result = await res.json();
            // console.log(userToken);
            
            console.log(result);
            // return NextResponse.json(result);
            return NextResponse.json(result);

            // return(result);
        } 
        catch (error) {
            console.log(error);
        }

    } else {
        return NextResponse.json("bad request");
    }
}


// export async function POST(req: Request) {
//     const body = await req.json()

//     console.log(body)

//     return NextResponse.json({ body })
// }