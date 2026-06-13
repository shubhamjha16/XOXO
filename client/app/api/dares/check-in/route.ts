import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const checkInData = await request.json();

        console.log('Submitting dare check-in:', JSON.stringify(checkInData, null, 2));

        // Call backend API
        const backendResponse = await fetch(
            `${process.env.BACKEND_API_URL}/api/gamification/dares/check-in`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(checkInData)
            }
        );

        if (!backendResponse.ok) {
            const errText = await backendResponse.text();
            console.error('Backend API error:', errText);
            
            // Extract error detail if possible
            let message = 'Failed to check in';
            try {
                const errObj = JSON.parse(errText);
                message = errObj.detail || message;
            } catch (e) {}

            return NextResponse.json(
                { success: false, message },
                { status: 400 }
            );
        }

        const responseData = await backendResponse.json();
        console.log('Check-in response:', responseData);

        return NextResponse.json(responseData, { status: 200 });
    } catch (error) {
        console.error('Error in dare check-in:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to perform dare check-in' },
            { status: 500 }
        );
    }
}
