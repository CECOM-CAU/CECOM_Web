import {NextRequest, NextResponse} from "next/server";
import {API_RESULT} from "@/utils/Interfaces";
import {corsHeader} from "@/utils/CorsUtil";
import {getNoticeList} from "@/utils/FirebaseUtil";

export const dynamic = "force-dynamic";
export async function GET(_: NextRequest) {
    const apiResult: API_RESULT = {
        RESULT_CODE: 200,
        RESULT_MSG: "Success",
        RESULT_DATA: undefined
    }

    const noticeList = await getNoticeList();
    apiResult.RESULT_DATA = noticeList;

    return NextResponse.json(apiResult, { status: 200, headers: corsHeader });
}