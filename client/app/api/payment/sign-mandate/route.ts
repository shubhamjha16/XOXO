import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        console.log('Proxying mandate signature request:', body);

        const backendResponse = await fetch(
            `${process.env.BACKEND_API_URL || 'http://localhost:8000'}/api/payment/sign-mandate`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            }
        );

        if (!backendResponse.ok) {
            const errorText = await backendResponse.text();
            console.error('Backend signature error:', errorText);
            return NextResponse.json(
                { success: false, message: 'Mandate signature generation failed', detail: errorText },
                { status: backendResponse.status }
            );
        }

        const data = await backendResponse.json();
        return NextResponse.json(data, { status: 200 });
    } catch (error: any) {
        console.error('Error generating mandate signature:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to generate mandate signature', error: error.message },
            { status: 500 }
        );
    }
}
