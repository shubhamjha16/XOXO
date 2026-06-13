import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const lat = searchParams.get('lat');
        const lng = searchParams.get('lng');
        const city = searchParams.get('city') || 'Tokyo';

        if (!lat || !lng) {
            return NextResponse.json(
                { success: false, message: 'Latitude and Longitude are required' },
                { status: 400 }
            );
        }

        console.log(`Fetching nearby dares for lat: ${lat}, lng: ${lng}, city: ${city}`);

        // Call backend API
        const backendResponse = await fetch(
            `${process.env.BACKEND_API_URL}/api/gamification/dares/nearby?lat=${lat}&lng=${lng}&city=${encodeURIComponent(city)}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        if (!backendResponse.ok) {
            console.error('Backend API error:', await backendResponse.text());
            return NextResponse.json(
                { success: false, message: 'Failed to fetch nearby dares' },
                { status: 500 }
            );
        }

        const responseData = await backendResponse.json();
        console.log('Nearby dares response:', responseData);

        return NextResponse.json(responseData, { status: 200 });
    } catch (error) {
        console.error('Error fetching nearby dares:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to fetch nearby dares' },
            { status: 500 }
        );
    }
}
