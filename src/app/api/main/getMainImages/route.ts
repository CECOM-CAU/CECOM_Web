import {NextRequest, NextResponse} from "next/server";
import {API_RESULT, MainImage} from "@/utils/Interfaces";
import {corsHeader} from "@/utils/CorsUtil";
import {getMainImage} from "@/utils/FileUtil";

export async function GET(_: NextRequest) {
    const apiResult: API_RESULT = {
        RESULT_CODE: 200,
        RESULT_MSG: "Success",
        RESULT_DATA: undefined
    }

    const mainImageData: MainImage = {
        event: await getMainImage("event"),
        mentoring: await getMainImage("mentoring"),
        project: await getMainImage("project"),
        study: await getMainImage("study")
    }

    if(mainImageData.event === undefined
        || mainImageData.mentoring === undefined
        || mainImageData.project === undefined
        || mainImageData.study === undefined){
        apiResult.RESULT_CODE = 100;
        apiResult.RESULT_MSG = "An Error Occurred";
        apiResult.RESULT_DATA = undefined;
        return NextResponse.json(apiResult, { status: 200, headers: corsHeader });
    }

    apiResult.RESULT_DATA = mainImageData;
    return NextResponse.json(apiResult, { status: 200, headers: corsHeader });
}