import {NextRequest, NextResponse} from "next/server";
import {API_RESULT} from "@/utils/Interfaces";
import {corsHeader} from "@/utils/CorsUtil";

export async function POST(_: NextRequest) {
    const apiResult: API_RESULT = {
        RESULT_CODE: 200,
        RESULT_MSG: "Success",
        RESULT_DATA: undefined
    }

    return NextResponse.json(apiResult, { status: 200, headers: corsHeader });
}