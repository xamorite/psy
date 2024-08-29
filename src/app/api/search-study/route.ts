import axios from "axios";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
    try {

        const searchParams = req.nextUrl.searchParams;


        const title = searchParams.get("title");
        // const year = searchParams.get("year");

        const url = `https://algorithmxcomp.pythonanywhere.com/api/studies/?title=${title}&year=`

        const response = await axios.get(url);
        // console.log(response);

        return NextResponse.json(response.data);

    } catch (error) {
        console.log("Error fetching search results");
        return new Response("Error fetching search results", { status: 500 });
    }
}