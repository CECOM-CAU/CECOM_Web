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
    const submissionData: RecruitSubmissionDetail = {
        department: submissionBody.department,
        id: submissionBody.id,
        name: submissionBody.name,
        timestamp: 0
    }

    const submissionResult = await postRecruitingSubmission(submissionData);
    if(submissionResult == 0){
        apiResult.RESULT_CODE = 100;
        apiResult.RESULT_MSG = "An Error Occurred";
        apiResult.RESULT_DATA = undefined;
    }

    return NextResponse.json(apiResult, { status: 200, headers: corsHeader });
}