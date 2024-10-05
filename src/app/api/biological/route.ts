import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const url =
      "https://algorithmxcomp.pythonanywhere.com/api/biological-modality-study-count/";
    // const response = await axios.get(url);
    // console.log(response);

    const response = await fetch(url, {
      next: { revalidate: 900 },
    });

    const biologicalData = await response.json();

    return NextResponse.json(biologicalData);
  } catch (error) {
    console.log("Error fetching data");
    return new Response("Error fetching studying view list", { status: 500 });
  }
}
