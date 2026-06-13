import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        console.log('Proxying payment negotiation request:', body);

        const backendResponse = await fetch(
            `${process.env.BACKEND_API_URL || 'http://localhost:8000'}/api/payment/negotiate`,
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
            console.error('Backend negotiation error:', errorText);
            return NextResponse.json(
                { success: false, message: 'Payment negotiation failed', detail: errorText },
                { status: backendResponse.status }
            );
        }

        const data = await backendResponse.json();
        return NextResponse.json(data, { status: 200 });
    } catch (error: any) {
        console.error('Error negotiating payment split:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to negotiate payment split', error: error.message },
            { status: 500 }
        );
    }
}
