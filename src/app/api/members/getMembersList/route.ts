import {NextRequest, NextResponse} from "next/server";
import {API_RESULT} from "@/utils/Interfaces";
import {getAdminList} from "@/utils/FirebaseUtil";

export async function GET(_: NextRequest) {
    const apiResult: API_RESULT = {
        RESULT_CODE: 200,
        RESULT_MSG: "Members List API",
        RESULT_DATA: undefined
    }

    apiResult.RESULT_DATA = await getAdminList();

    return NextResponse.json(apiResult, { status: 200 })
}