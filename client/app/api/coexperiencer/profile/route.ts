import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const profileData = await request.json();

        console.log('Creating CoExperiencer profile:', JSON.stringify(profileData, null, 2));

        // Call backend API to create profile
        const backendResponse = await fetch(`${process.env.BACKEND_API_URL}/api/coexperiencer/profile`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(profileData)
        });

        if (!backendResponse.ok) {
            console.error('Backend API error:', await backendResponse.text());
            return NextResponse.json(
                {
                    success: false,
                    message: 'Failed to create profile'
                },
                { status: 500 }
            );
        }

        const responseData = await backendResponse.json();
        console.log('Profile created successfully:', responseData);

        return NextResponse.json(
            {
                success: true,
                message: 'Profile created successfully',
                profile: responseData
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error creating profile:', error);
        return NextResponse.json(
            {
                success: false,
                message: 'Failed to create profile'
            },
            { status: 500 }
        );
    }
}
