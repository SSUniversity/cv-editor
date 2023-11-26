import { NextRequest, NextResponse } from 'next/server';
import type { NextApiRequest, NextApiResponse } from "next";


export async function GET(req: Request) {

	const { searchParams } = new URL(req.url)
    const code = searchParams.get('code');
    const token = searchParams.get('token');


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
            });
                
            const result = await res.json();
            return NextResponse.json(result);
        } 
        catch (error) {
            console.log(error);
        }
    } 


    if (token != null) {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        try {
            const res = await fetch("https://api.hh.ru/resumes/mine", {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow',
            });
                
            const result = await res.json();
            return NextResponse.json(result);
        } 
        catch (error) {
            console.log(error);
        }
    }


    return NextResponse.json("bad request");
}




export async function PUT(req: Request) {
    const { searchParams } = new URL(req.url)
    const resume = searchParams.get('resume');

    if (resume != null) {
        const body = await req.json()
        
        var myHeaders = new Headers();
        myHeaders.append("User-Agent", process.env.HH_APP_DATA!);
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${process.env.HH_USER}`);

        var raw = JSON.stringify( body );

        try {
            const res = await fetch(`https://api.hh.ru/resumes/${resume}`, {
                method: 'PUT',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            })
            return NextResponse.json({ message: "Resume has been updated" });
        } 
        catch (error) {
            console.log(error);
            return NextResponse.json({ message: error });
        }
    }  
}



// export async function POST(req: Request) {
//     const body = await req.json()

//     console.log(body)

//     return NextResponse.json({ body })
// }