import {NextRequest, NextResponse} from "next/server";
import {API_RESULT} from "@/utils/Interfaces";
import {corsHeader} from "@/utils/CorsUtil";
import {getActivityData} from "@/utils/FirebaseUtil";

export async function GET(_: NextRequest, {params}: {params: {id: string}}) {
    const apiResult: API_RESULT = {
        RESULT_CODE: 200,
        RESULT_MSG: "Success",
        RESULT_DATA: undefined
    }

    const activityData = await getActivityData(params.id);
    if(activityData === undefined){
        apiResult.RESULT_CODE = 100;
        apiResult.RESULT_MSG = "An Error Occurred";
        apiResult.RESULT_DATA = undefined;
        return NextResponse.json(apiResult, {status: 200, headers: corsHeader});
    }

    return NextResponse.json(apiResult, { status: 200, headers: corsHeader });
}