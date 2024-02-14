import {NextRequest, NextResponse} from "next/server";
import {API_RESULT} from "@/utils/Interfaces";
import {getThingList} from "@/utils/FirebaseUtil";
import {corsHeader} from "@/utils/CorsUtil";

export async function GET(_: NextRequest) {
    const apiResult: API_RESULT = {
        RESULT_CODE: 200,
        RESULT_MSG: "Success",
        RESULT_DATA: undefined
    }

    const thingList = await getThingList();
    if(thingList === undefined){
        apiResult.RESULT_CODE = 100;
        apiResult.RESULT_MSG = "An Error Occurred";
        apiResult.RESULT_DATA = undefined;
        return NextResponse.json(apiResult, { status: 200, headers: corsHeader });
    }

    apiResult.RESULT_DATA = thingList;
    return NextResponse.json(apiResult, { status: 200, headers: corsHeader })
}