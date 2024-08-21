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

    if(submissionBody.age.length == 0
        || submissionBody.answer.length == 0
        || submissionBody.college.length == 0
        || submissionBody.department.length == 0
        || submissionBody.grade.length == 0
        || submissionBody.id.length == 0
        || submissionBody.name.length == 0
        || submissionBody.phone.length == 0){
        apiResult.RESULT_CODE = 100;
        apiResult.RESULT_MSG = "An Error Occurred";
        apiResult.RESULT_DATA = undefined;

        return NextResponse.json(apiResult, { status: 200, headers: corsHeader });
    }

    submissionBody.timestamp = await postRecruitingSubmission(submissionBody);
    apiResult.RESULT_DATA = submissionBody;

    return NextResponse.json(apiResult, { status: 200, headers: corsHeader });
}