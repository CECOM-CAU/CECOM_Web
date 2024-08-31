import {NextRequest, NextResponse} from "next/server";
import {API_RESULT} from "@/utils/Interfaces";
import {corsHeader} from "@/utils/CorsUtil";
import {getNoticeDetail} from "@/utils/FirebaseUtil";

export const dynamic = "force-dynamic";
export async function GET(_: NextRequest, {params}: {params: {id: string}}) {
    const apiResult: API_RESULT = {
        RESULT_CODE: 200,
        RESULT_MSG: "Success",
        RESULT_DATA: undefined
    }

    const noticeDetail = await getNoticeDetail(params.id);
    if(noticeDetail === undefined){
        apiResult.RESULT_CODE = 100;
        apiResult.RESULT_MSG = "An Error Occurred";
        apiResult.RESULT_DATA = undefined;
        return NextResponse.json(apiResult, {status: 200, headers: corsHeader});
    }

    apiResult.RESULT_DATA = noticeDetail;

    return NextResponse.json(apiResult, { status: 200, headers: corsHeader });
}