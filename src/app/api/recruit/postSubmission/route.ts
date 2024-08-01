import {NextRequest, NextResponse} from "next/server";
import {API_RESULT, RecruitSubmissionDetail} from "@/utils/Interfaces";
import {corsHeader} from "@/utils/CorsUtil";

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

    return NextResponse.json(apiResult, { status: 200, headers: corsHeader });
}