import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const url =
      "https://AlgorithmXComp.pythonanywhere.com/api/yearly-study-count/";
    // const response = await axios.get(url);
    // console.log(response);

    const response = await fetch(url, {
      next: { revalidate: 900 },
    });

    const yearlyData = await response.json();
    
    return NextResponse.json(yearlyData);
  } catch (error) {
    console.log("Error fetching data", error);
    return new Response("Error fetching studying view list", { status: 500 });
  }
}
