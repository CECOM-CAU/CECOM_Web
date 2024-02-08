import {NextRequest, NextResponse} from "next/server";
import {API_RESULT} from "@/utils/Interfaces";

export async function GET(_: NextRequest) {
    const apiResult: API_RESULT = {
        RESULT_CODE: 200,
        RESULT_MSG: "Activities List API",
        RESULT_DATA: undefined
    }

    return NextResponse.json(apiResult, { status: 200 })
}