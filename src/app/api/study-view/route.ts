import axios from "axios";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
    try {
        const searchParams = req.nextUrl.searchParams;

        const pageNum = searchParams.get("page");

        const url = `https://algorithmxcomp.pythonanywhere.com/api/studies/?page=${pageNum}`

        const response = await axios.get(url);
        
        return NextResponse.json(response.data);
        
    } catch (error) {
        return new Response("Error fetching studying view list", { status: 500 });
    }
}