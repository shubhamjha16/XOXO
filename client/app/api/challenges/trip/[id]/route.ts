import { NextRequest, NextResponse } from 'next/server';

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const tripId = params.id;

        console.log('Fetching challenges for trip:', tripId);

        // Call backend API to get trip challenges
        const backendResponse = await fetch(`${process.env.BACKEND_API_URL}/api/challenges/trip/${tripId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!backendResponse.ok) {
            console.error('Backend API error:', await backendResponse.text());
            return NextResponse.json(
                {
                    success: false,
                    message: 'Failed to fetch challenges'
                },
                { status: 500 }
            );
        }

        const responseData = await backendResponse.json();
        console.log('Challenges fetched:', responseData);

        return NextResponse.json(
            {
                success: true,
                challenges: responseData.challenges || []
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error fetching challenges:', error);
        return NextResponse.json(
            {
                success: false,
                message: 'Failed to fetch challenges'
            },
            { status: 500 }
        );
    }
}
