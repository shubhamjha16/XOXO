import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const matchRequest = await request.json();

        console.log('Finding CoExperiencer matches:', JSON.stringify(matchRequest, null, 2));

        // Call backend API to find matches
        const backendResponse = await fetch(`${process.env.BACKEND_API_URL}/api/coexperiencer/find-match`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(matchRequest)
        });

        if (!backendResponse.ok) {
            console.error('Backend API error:', await backendResponse.text());
            return NextResponse.json(
                {
                    success: false,
                    message: 'Failed to find matches'
                },
                { status: 500 }
            );
        }

        const responseData = await backendResponse.json();
        console.log('Matches found:', responseData);

        return NextResponse.json(
            {
                success: true,
                message: 'Matches found successfully',
                matches: responseData.matches || []
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error finding matches:', error);
        return NextResponse.json(
            {
                success: false,
                message: 'Failed to find matches'
            },
            { status: 500 }
        );
    }
}
