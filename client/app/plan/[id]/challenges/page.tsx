"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import {
    Trophy,
    Clock,
    MapPin,
    Users,
    Camera,
    Heart,
    Mountain,
    Coffee,
    Star,
    CheckCircle,
    Circle,
    Sparkles,
    Timer,
    Target,
    Loader2,
} from "lucide-react";
import { toast } from "sonner";

interface Challenge {
    challenge_id: string;
    title: string;
    description: string;
    category: string;
    difficulty: string;
    estimated_time: number;
    points: number;
    location?: string;
    status: "scheduled" | "delivered" | "completed" | "skipped";
    delivery_time?: string;
    completion_time?: string;
    proof_required: boolean;
    instructions: string[];
    tips?: string[];
}

interface TripProgress {
    trip_id: string;
    total_challenges: number;
    completed_challenges: number;
    total_points: number;
    earned_points: number;
    completion_percentage: number;
    current_streak: number;
    badges_earned: string[];
}

const categoryIcons = {
    romantic: Heart,
    adventurous: Mountain,
    cultural: Star,
    fun: Trophy,
    food: Coffee,
    photo: Camera,
};

const difficultyColors = {
    easy: "bg-green-500",
    moderate: "bg-yellow-500",
    adventurous: "bg-red-500",
};

export default function ChallengesPage() {
    const params = useParams<{ id: string }>();
    const tripId = params.id;

    const [challenges, setChallenges] = useState<Challenge[]>([]);
    const [progress, setProgress] = useState<TripProgress | null>(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState("all");

    // Geofenced Dares State
    const [tripDestination, setTripDestination] = useState("Tokyo");
    const [userCoords, setUserCoords] = useState<{ latitude: number; longitude: number } | null>({ latitude: 35.6586, longitude: 139.7454 });
    const [isSimulated, setIsSimulated] = useState(true);
    const [dares, setDares] = useState<any[]>([]);
    const [daresLoading, setDaresLoading] = useState(false);

    useEffect(() => {
        if (tripId) {
            fetchChallenges();
            fetchProgress();
            fetchTripDetails();
        }
    }, [tripId]);

    const fetchTripDetails = async () => {
        try {
            const response = await fetch(`/api/plans/${tripId}`);
            if (response.ok) {
                const data = await response.json();
                if (data.success && data.tripPlan) {
                    setTripDestination(data.tripPlan.destination || "Tokyo");
                }
            }
        } catch (e) {
            console.error("Error fetching trip details:", e);
        }
    };

    const fetchNearbyDares = async (lat: number, lng: number, city: string) => {
        try {
            setDaresLoading(true);
            const response = await fetch(`/api/dares/nearby?lat=${lat}&lng=${lng}&city=${encodeURIComponent(city)}`);
            if (response.ok) {
                const data = await response.json();
                setDares(data.dares || []);
            }
        } catch (error) {
            console.error("Error fetching nearby dares:", error);
        } finally {
            setDaresLoading(false);
        }
    };

    useEffect(() => {
        if (userCoords && tripDestination) {
            fetchNearbyDares(userCoords.latitude, userCoords.longitude, tripDestination);
        }
    }, [userCoords?.latitude, userCoords?.longitude, tripDestination]);

    const simulateLocation = (locationName: string) => {
        let lat = 35.6586; // Tokyo Tower
        let lng = 139.7454;
        if (locationName === "shibuya") {
            lat = 35.6595; // Shibuya Crossing
            lng = 139.7005;
        } else if (locationName === "hachiko") {
            lat = 35.6591; // Hachiko
            lng = 139.7007;
        } else if (locationName === "far") {
            lat = 35.6895; // Shinjuku (far from landmarks)
            lng = 139.6917;
        }
        setUserCoords({ latitude: lat, longitude: lng });
        setIsSimulated(true);
        toast.info(`Simulated position: standing at ${locationName.toUpperCase()}`);
    };

    const useRealGPS = () => {
        if (!navigator.geolocation) {
            toast.error("Geolocation is not supported by your browser");
            return;
        }
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                setUserCoords({ latitude: lat, longitude: lng });
                setIsSimulated(false);
                toast.success("Using real GPS coordinates");
            },
            (error) => {
                console.error("GPS error:", error);
                toast.error(`Failed to get location: ${error.message}`);
            }
        );
    };

    const handleGeofencedCheckIn = async (dareId: string, dareLat: number, dareLng: number) => {
        try {
            const response = await fetch("/api/dares/check-in", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    user_id: "user_123", // In a real app, retrieve from session
                    companion_id: "user_456",
                    dare_id: dareId,
                    latitude: userCoords?.latitude || dareLat,
                    longitude: userCoords?.longitude || dareLng
                })
            });
            const result = await response.json();
            if (result.success) {
                toast.success(`Dare Completed! +${result.pointsReward} points awarded! 🌟🎉`);
                if (userCoords) {
                    await fetchNearbyDares(userCoords.latitude, userCoords.longitude, tripDestination);
                }
                await fetchProgress();
            } else {
                toast.error(result.message || "Failed to check in");
            }
        } catch (error) {
            console.error("Error checking in:", error);
            toast.error("Failed to check in");
        }
    };

    const fetchChallenges = async () => {
        try {
            const response = await fetch(`/api/challenges/trip/${tripId}`);
            if (response.ok) {
                const data = await response.json();
                setChallenges(data.challenges || []);
            }
        } catch (error) {
            console.error("Error fetching challenges:", error);
            toast.error("Failed to load challenges");
        }
    };

    const fetchProgress = async () => {
        try {
            const response = await fetch(`/api/challenges/progress/${tripId}`);
            if (response.ok) {
                const data = await response.json();
                setProgress(data.progress);
            }
        } catch (error) {
            console.error("Error fetching progress:", error);
        } finally {
            setLoading(false);
        }
    };

    const completeChallenge = async (challengeId: string) => {
        try {
            const response = await fetch(`/api/challenges/complete`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    challenge_id: challengeId,
                    completion_time: new Date().toISOString(),
                    proof_url: "", // In real app, would handle photo upload
                }),
            });

            if (response.ok) {
                toast.success("Challenge completed! 🎉");
                await fetchChallenges();
                await fetchProgress();
            } else {
                toast.error("Failed to complete challenge");
            }
        } catch (error) {
            console.error("Error completing challenge:", error);
            toast.error("Failed to complete challenge");
        }
    };

    const skipChallenge = async (challengeId: string) => {
        try {
            // In real app, would call skip API endpoint
            toast.info("Challenge skipped");
        } catch (error) {
            toast.error("Failed to skip challenge");
        }
    };

    const generateMoreChallenges = async () => {
        try {
            toast.info("Generating new challenges...");
            // In real app, would call generate challenges API
            setTimeout(() => {
                toast.success("New challenges added to your trip!");
                fetchChallenges();
            }, 2000);
        } catch (error) {
            toast.error("Failed to generate new challenges");
        }
    };

    const filterChallenges = (status?: string) => {
        if (!status || status === "all") return challenges;
        return challenges.filter(challenge => challenge.status === status);
    };

    const getCategoryIcon = (category: string) => {
        const Icon = categoryIcons[category as keyof typeof categoryIcons] || Trophy;
        return Icon;
    };

    if (loading) {
        return (
            <div className="container mx-auto p-4 flex flex-col items-center justify-center min-h-[calc(100vh-10rem)]">
                <Sparkles className="w-12 h-12 animate-spin text-primary mb-4" />
                <h1 className="text-2xl font-semibold mb-2">Loading Adventure Challenges</h1>
                <p className="text-muted-foreground text-center">
                    Fetching your personalized challenges...
                </p>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4 md:p-8 space-y-8">
            {/* Header */}
            <div className="text-center mb-8">            <h1 className="text-3xl font-bold text-foreground">
                Adventure Dares & Challenges
            </h1>
                <p className="text-muted-foreground mt-2">
                    Complete fun dares and challenges with your experience partner to create unforgettable
                    memories and build your experience rating for better future matches!
                </p>
            </div>

            {/* Progress Overview */}
            {progress && (
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Trophy className="w-5 h-5" />
                            Trip Progress
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary">
                                    {progress.completion_percentage}%
                                </div>
                                <p className="text-sm text-muted-foreground">Complete</p>
                                <Progress value={progress.completion_percentage} className="mt-2" />
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold">
                                    {progress.completed_challenges}/{progress.total_challenges}
                                </div>
                                <p className="text-sm text-muted-foreground">Challenges</p>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-yellow-600">
                                    {progress.earned_points}
                                </div>
                                <p className="text-sm text-muted-foreground">Points Earned</p>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-orange-600">
                                    {progress.current_streak}
                                </div>
                                <p className="text-sm text-muted-foreground">Day Streak</p>
                            </div>
                        </div>

                        {progress.badges_earned.length > 0 && (
                            <div className="mt-6">
                                <h4 className="font-medium mb-3">Badges Earned</h4>
                                <div className="flex flex-wrap gap-2">
                                    {progress.badges_earned.map((badge, index) => (
                                        <Badge key={index} variant="secondary" className="flex items-center gap-1">
                                            <Star className="w-3 h-3" />
                                            {badge}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        )}
                    </CardContent>
                </Card>
            )}

            {/* Challenge Filters */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
                <TabsList className="grid w-full grid-cols-6">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="delivered">Active</TabsTrigger>
                    <TabsTrigger value="completed">Completed</TabsTrigger>
                    <TabsTrigger value="scheduled">Upcoming</TabsTrigger>
                    <TabsTrigger value="skipped">Skipped</TabsTrigger>
                    <TabsTrigger value="geofenced">📍 Dares</TabsTrigger>
                </TabsList>

                <TabsContent value={activeTab} className="mt-6">
                    {activeTab === "geofenced" ? (
                        <div className="space-y-6">
                            {/* GPS simulation control panel */}
                            <Card className="border-primary/20 bg-primary/5">
                                <CardHeader className="pb-3">
                                    <CardTitle className="text-lg flex items-center gap-2">
                                        <MapPin className="w-5 h-5 text-primary" />
                                        Gamified Geolocation Sandbox
                                    </CardTitle>
                                    <CardDescription>
                                        Simulate standing at different locations in {tripDestination} to trigger geofence proximity unlocking (within 50-100m).
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex flex-wrap gap-2">
                                        <Button size="sm" variant={userCoords?.latitude === 35.6586 ? "default" : "outline"} onClick={() => simulateLocation("tokyo_tower")}>
                                            🗼 Tokyo Tower
                                        </Button>
                                        <Button size="sm" variant={userCoords?.latitude === 35.6595 ? "default" : "outline"} onClick={() => simulateLocation("shibuya")}>
                                            🚶 Shibuya Crossing
                                        </Button>
                                        <Button size="sm" variant={userCoords?.latitude === 35.6591 ? "default" : "outline"} onClick={() => simulateLocation("hachiko")}>
                                            🐕 Hachiko Statue
                                        </Button>
                                        <Button size="sm" variant={userCoords?.latitude === 35.6895 ? "default" : "outline"} onClick={() => simulateLocation("far")}>
                                            🏢 Shinjuku (Out of Range)
                                        </Button>
                                        <Button size="sm" variant={!isSimulated ? "default" : "outline"} onClick={useRealGPS} className="bg-green-600 hover:bg-green-700 text-white border-0">
                                            📡 Use My Real GPS
                                        </Button>
                                    </div>
                                    {userCoords && (
                                        <div className="text-xs text-muted-foreground bg-background p-2 rounded border border-border">
                                            <strong>Current Coordinates:</strong> Latitude: {userCoords.latitude.toFixed(5)}, Longitude: {userCoords.longitude.toFixed(5)} ({isSimulated ? "Simulated" : "Real GPS"})
                                        </div>
                                    )}
                                </CardContent>
                            </Card>

                            {/* Dares list */}
                            {daresLoading ? (
                                <div className="text-center py-12">
                                    <Loader2 size={32} className="animate-spin text-primary mx-auto mb-2" />
                                    <p className="text-muted-foreground">Calculating distances...</p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {dares.map((dare) => (
                                        <Card key={dare.id} className={`hover:shadow-lg transition-all ${dare.isUnlocked ? "border-green-500/50 bg-green-50/10" : "opacity-80"}`}>
                                            <CardHeader className="pb-2">
                                                <div className="flex items-start justify-between">
                                                    <Badge variant={dare.isSponsored ? "default" : "secondary"} className="text-xs">
                                                        {dare.isSponsored ? `Sponsored by ${dare.sponsorName}` : "Location Quest"}
                                                    </Badge>
                                                    <div className="text-right">
                                                        <span className="text-xs text-muted-foreground">Radius: {dare.radiusMeters}m</span>
                                                    </div>
                                                </div>
                                                <CardTitle className="text-lg mt-2">{dare.title}</CardTitle>
                                            </CardHeader>
                                            <CardContent className="space-y-4 pb-6">
                                                <p className="text-sm text-muted-foreground">{dare.description}</p>
                                                
                                                <div className="flex items-center justify-between text-sm border-t pt-4">
                                                    <div className="flex items-center gap-1 font-medium">
                                                        <Star className="w-4 h-4 text-yellow-500" />
                                                        <span>{dare.pointsReward} pts</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <MapPin className="w-4 h-4 text-primary" />
                                                        <span className={dare.isUnlocked ? "text-green-600 font-bold" : "text-muted-foreground"}>
                                                            {dare.distanceMeters > 1000 ? `${(dare.distanceMeters/1000).toFixed(1)} km` : `${dare.distanceMeters}m`} away
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="pt-2">
                                                    {dare.isUnlocked ? (
                                                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white" onClick={() => handleGeofencedCheckIn(dare.id, dare.latitude, dare.longitude)}>
                                                            <CheckCircle className="w-4 h-4 mr-2" />
                                                            Check In & Claim Reward
                                                        </Button>
                                                    ) : (
                                                        <Button className="w-full" variant="secondary" disabled>
                                                            <Circle className="w-4 h-4 mr-2" />
                                                            Locked (Walk Closer)
                                                        </Button>
                                                    )}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-semibold">
                                    {activeTab === "all"
                                        ? "All Challenges"
                                        : `${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Challenges`}
                                </h2>
                                <Button onClick={generateMoreChallenges} variant="outline">
                                    <Sparkles className="w-4 h-4 mr-2" />
                                    Generate More
                                </Button>
                            </div>

                    {/* Challenge Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filterChallenges(activeTab === "all" ? undefined : activeTab).map((challenge) => {
                            const Icon = getCategoryIcon(challenge.category);
                            const isCompleted = challenge.status === "completed";
                            const isActive = challenge.status === "delivered";

                            return (
                                <Card key={challenge.challenge_id} className={`hover:shadow-lg transition-all ${isCompleted ? "border-green-500/50 bg-green-50/50" :
                                    isActive ? "border-primary/50 bg-primary/5" : ""
                                    }`}>
                                    <CardHeader className="pb-3">
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-center gap-2">
                                                <div className={`p-2 rounded-lg ${isCompleted ? "bg-green-100" : "bg-primary/10"
                                                    }`}>
                                                    <Icon className={`w-4 h-4 ${isCompleted ? "text-green-600" : "text-primary"
                                                        }`} />
                                                </div>
                                                <div>
                                                    <Badge
                                                        variant="outline"
                                                        className={`${difficultyColors[challenge.difficulty as keyof typeof difficultyColors]} text-white border-0`}
                                                    >
                                                        {challenge.difficulty}
                                                    </Badge>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                                <Timer className="w-3 h-3" />
                                                {challenge.estimated_time}min
                                            </div>
                                        </div>
                                        <CardTitle className="text-lg">{challenge.title}</CardTitle>
                                        <CardDescription>{challenge.description}</CardDescription>
                                    </CardHeader>

                                    <CardContent className="space-y-4">
                                        {challenge.location && (
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <MapPin className="w-3 h-3" />
                                                {challenge.location}
                                            </div>
                                        )}

                                        <div className="space-y-2">
                                            <h5 className="font-medium text-sm">Instructions:</h5>
                                            <ul className="text-sm space-y-1">
                                                {challenge.instructions.map((instruction, index) => (
                                                    <li key={index} className="flex items-start gap-2">
                                                        <Target className="w-3 h-3 mt-0.5 text-primary flex-shrink-0" />
                                                        {instruction}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {challenge.tips && challenge.tips.length > 0 && (
                                            <div className="bg-muted/50 p-3 rounded-lg">
                                                <h6 className="font-medium text-sm mb-1">💡 Tips:</h6>
                                                <ul className="text-sm space-y-1">
                                                    {challenge.tips.map((tip, index) => (
                                                        <li key={index}>• {tip}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        <div className="flex items-center justify-between pt-2">
                                            <div className="flex items-center gap-1">
                                                <Star className="w-4 h-4 text-yellow-500" />
                                                <span className="text-sm font-medium">{challenge.points} points</span>
                                            </div>

                                            <div className="flex gap-2">
                                                {isCompleted ? (
                                                    <Badge variant="default" className="bg-green-500">
                                                        <CheckCircle className="w-3 h-3 mr-1" />
                                                        Completed
                                                    </Badge>
                                                ) : isActive ? (
                                                    <>
                                                        <Button
                                                            size="sm"
                                                            onClick={() => completeChallenge(challenge.challenge_id)}
                                                        >
                                                            Complete
                                                        </Button>
                                                        <Button
                                                            size="sm"
                                                            variant="outline"
                                                            onClick={() => skipChallenge(challenge.challenge_id)}
                                                        >
                                                            Skip
                                                        </Button>
                                                    </>
                                                ) : (
                                                    <Badge variant="outline">
                                                        <Clock className="w-3 h-3 mr-1" />
                                                        {challenge.status}
                                                    </Badge>
                                                )}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>

                    {filterChallenges(activeTab === "all" ? undefined : activeTab).length === 0 && (
                        <Card>
                            <CardContent className="text-center py-12">
                                <Trophy className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                                <h3 className="text-lg font-semibold mb-2">No challenges found</h3>
                                <p className="text-muted-foreground mb-4">
                                    {activeTab === "all"
                                        ? "Generate some challenges to get started!"
                                        : `No ${activeTab} challenges at the moment.`}
                                </p>
                                <Button onClick={generateMoreChallenges}>
                                    <Sparkles className="w-4 h-4 mr-2" />
                                    Generate Challenges
                                </Button>
                            </CardContent>
                        </Card>
                    )}
                </TabsContent>
            </Tabs>
        </div>
    );
}
