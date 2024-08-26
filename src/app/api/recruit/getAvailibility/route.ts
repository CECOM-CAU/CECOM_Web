import {NextRequest, NextResponse} from "next/server";
import {API_RESULT} from "@/utils/Interfaces";
import {corsHeader} from "@/utils/CorsUtil";
import {getRecruitAvailibility} from "@/utils/FirebaseUtil";

export async function GET(_: NextRequest) {
    const apiResult: API_RESULT = {
        RESULT_CODE: 200,
        RESULT_MSG: "Success",
        RESULT_DATA: undefined
    }

    const recruitAvail = await getRecruitAvailibility();
    apiResult.RESULT_DATA = recruitAvail;

    return NextResponse.json(apiResult, { status: 200, headers: corsHeader });
}