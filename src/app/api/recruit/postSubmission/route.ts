import {NextRequest, NextResponse} from "next/server";
import {API_RESULT, RecruitSubmissionDetail} from "@/utils/Interfaces";
import {corsHeader} from "@/utils/CorsUtil";
import {postRecruitingSubmission} from "@/utils/FirebaseUtil";

export async function POST(req: NextRequest) {
    const apiResult: API_RESULT = {
        RESULT_CODE: 200,
        RESULT_MSG: "Success",
        RESULT_DATA: undefined
    }

    const submissionBody: RecruitSubmissionDetail = JSON.parse(await req.text());
    const submissionResult = await postRecruitingSubmission(submissionBody);
    if(submissionResult == 0){
        apiResult.RESULT_CODE = 100;
        apiResult.RESULT_MSG = "An Error Occurred";
        apiResult.RESULT_DATA = undefined;
    }

    submissionBody.timestamp = submissionResult;
    apiResult.RESULT_DATA = submissionBody;

    return NextResponse.json(apiResult, { status: 200, headers: corsHeader });
}