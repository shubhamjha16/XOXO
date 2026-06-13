import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const ratingData = await request.json();

        console.log('Submitting CoTraveller rating:', JSON.stringify(ratingData, null, 2));

        // Call backend API to submit rating
        const backendResponse = await fetch(`${process.env.BACKEND_API_URL}/api/cotraveler/rate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(ratingData)
        });

        if (!backendResponse.ok) {
            console.error('Backend API error:', await backendResponse.text());
            return NextResponse.json(
                {
                    success: false,
                    message: 'Failed to submit rating'
                },
                { status: 500 }
            );
        }

        const responseData = await backendResponse.json();
        console.log('Rating submitted successfully:', responseData);

        return NextResponse.json(
            {
                success: true,
                message: 'Rating submitted successfully',
                rating: responseData
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error submitting rating:', error);
        return NextResponse.json(
            {
                success: false,
                message: 'Failed to submit rating'
            },
            { status: 500 }
        );
    }
}
