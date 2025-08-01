import { getSession } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const session = await getSession();

    if (!session) {
        return NextResponse.json(null, { status: 401 });
    }

    return NextResponse.json(session);
}
