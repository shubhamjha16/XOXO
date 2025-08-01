import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const completionData = await request.json();

        console.log('Completing challenge:', JSON.stringify(completionData, null, 2));

        // Call backend API to complete challenge
        const backendResponse = await fetch(`${process.env.BACKEND_API_URL}/api/challenges/complete`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(completionData)
        });

        if (!backendResponse.ok) {
            console.error('Backend API error:', await backendResponse.text());
            return NextResponse.json(
                {
                    success: false,
                    message: 'Failed to complete challenge'
                },
                { status: 500 }
            );
        }

        const responseData = await backendResponse.json();
        console.log('Challenge completed:', responseData);

        return NextResponse.json(
            {
                success: true,
                message: 'Challenge completed successfully',
                result: responseData
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error completing challenge:', error);
        return NextResponse.json(
            {
                success: false,
                message: 'Failed to complete challenge'
            },
            { status: 500 }
        );
    }
}
