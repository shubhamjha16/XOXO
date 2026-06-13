import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        console.log('Proxying payment execution request:', body);

        const backendResponse = await fetch(
            `${process.env.BACKEND_API_URL || 'http://localhost:8000'}/api/payment/execute`,
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
            console.error('Backend execution error:', errorText);
            return NextResponse.json(
                { success: false, message: 'Payment execution failed', detail: errorText },
                { status: backendResponse.status }
            );
        }

        const data = await backendResponse.json();
        return NextResponse.json(data, { status: 200 });
    } catch (error: any) {
        console.error('Error executing payment split:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to execute payment split', error: error.message },
            { status: 500 }
        );
    }
}
