"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Users,
    MapPin,
    Calendar,
    DollarSign,
    Star,
    Heart,
    MessageCircle,
    Plane,
    Clock,
    Sparkles,
} from "lucide-react";
import { toast } from "sonner";

interface MatchRequest {
    user_id: string;
    destination: string;
    experience_dates: {
        start: string;
        end: string;
    };
    budget_range: {
        min: number;
        max: number;
        currency: string;
    };
    group_size_preference: number;
    interests: string[];
}

interface CoTravellerMatch {
    user_id: string;
    name: string;
    age: number;
    location: string;
    bio: string;
    travel_style: string;
    experience_rating: number;
    total_trips: number;
    shared_interests: string[];
    budget_compatibility: number;
    match_score: number;
    match_explanation: string;
    profile_image?: string;
}

const interests = [
    "Adventure Sports",
    "Photography",
    "Local Cuisine",
    "Museums & Art",
    "Nightlife",
    "Nature & Wildlife",
    "Shopping",
    "Architecture",
    "Music & Festivals",
    "Beach & Relaxation",
];

export default function FindCoTravellerPage() {
    const [matches, setMatches] = useState<CoTravellerMatch[]>([]);
    const [isSearching, setIsSearching] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);
    const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<MatchRequest>({
        defaultValues: {
            user_id: "user_123", // In real app, get from auth
            destination: "",
            experience_dates: {
                start: "",
                end: "",
            },
            budget_range: {
                min: 1000,
                max: 3000,
                currency: "USD",
            },
            group_size_preference: 2,
            interests: [],
        },
    });

    const toggleInterest = (interest: string) => {
        const updated = selectedInterests.includes(interest)
            ? selectedInterests.filter(i => i !== interest)
            : [...selectedInterests, interest];
        setSelectedInterests(updated);
        setValue("interests", updated);
    };

    const onSubmit = async (data: MatchRequest) => {
        setIsSearching(true);
        try {
            const response = await fetch("/api/cotraveller/find-match", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const result = await response.json();
                setMatches(result.matches || []);
                setHasSearched(true);
                toast.success(`Found ${result.matches?.length || 0} potential matches!`);
            } else {
                toast.error("Failed to find matches. Please try again.");
            }
        } catch (error) {
            console.error("Error finding matches:", error);
            toast.error("An error occurred. Please try again.");
        } finally {
            setIsSearching(false);
        }
    };

    const handleConnect = async (matchUserId: string) => {
        try {
            // In real app, this would send a connection request
            toast.success("Connection request sent!");
        } catch (error) {
            toast.error("Failed to send connection request.");
        }
    };

    const getMatchScoreColor = (score: number) => {
        if (score >= 80) return "text-green-600";
        if (score >= 60) return "text-yellow-600";
        return "text-gray-600";
    };

    return (
        <div className="container mx-auto p-4 md:p-8 space-y-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-foreground">
                        Find Your Perfect Experience Partner
                    </h1>
                    <p className="text-muted-foreground mt-2">
                        Our AI matches you based on budget compatibility and experience ratings.
                        Higher budgets can unlock amazing partners even if you're just starting your journey!
                    </p>
                    <div className="mt-4 flex justify-center gap-4 text-sm">
                        <div className="flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full">
                            <Star className="w-4 h-4" />
                            Experience Rating: 4.2/5
                        </div>
                        <div className="flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                            <DollarSign className="w-4 h-4" />
                            Budget Range: $500-2000
                        </div>
                    </div>
                </div>

                {/* Search Form */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Sparkles className="w-5 h-5" />
                            Experience Details
                        </CardTitle>
                        <CardDescription>
                            Provide your experience details to find the best matches
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <Label htmlFor="destination">Destination</Label>
                                    <Input
                                        id="destination"
                                        {...register("destination", { required: true })}
                                        placeholder="e.g., Tokyo, Japan"
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="group_size_preference">Preferred Group Size</Label>
                                    <Select onValueChange={(value) => setValue("group_size_preference", parseInt(value))}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select group size" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="2">Just me + 1 person</SelectItem>
                                            <SelectItem value="3">Small group (2-3 people)</SelectItem>
                                            <SelectItem value="4">Medium group (3-4 people)</SelectItem>
                                            <SelectItem value="6">Larger group (5-6 people)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <Label htmlFor="start_date">Start Date</Label>
                                    <Input
                                        id="start_date"
                                        type="date"
                                        {...register("experience_dates.start", { required: true })}
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="end_date">End Date</Label>
                                    <Input
                                        id="end_date"
                                        type="date"
                                        {...register("experience_dates.end", { required: true })}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <Label htmlFor="budget_min">Min Budget</Label>
                                    <Input
                                        id="budget_min"
                                        type="number"
                                        {...register("budget_range.min", { required: true })}
                                        placeholder="1000"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="budget_max">Max Budget</Label>
                                    <Input
                                        id="budget_max"
                                        type="number"
                                        {...register("budget_range.max", { required: true })}
                                        placeholder="3000"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="currency">Currency</Label>
                                    <Select onValueChange={(value) => setValue("budget_range.currency", value)}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Currency" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="USD">USD ($)</SelectItem>
                                            <SelectItem value="EUR">EUR (€)</SelectItem>
                                            <SelectItem value="GBP">GBP (£)</SelectItem>
                                            <SelectItem value="INR">INR (₹)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div>
                                <Label>Interests (optional)</Label>
                                <p className="text-sm text-muted-foreground mb-3">
                                    Select interests to find more compatible matches
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {interests.map((interest) => (
                                        <Badge
                                            key={interest}
                                            variant={selectedInterests.includes(interest) ? "default" : "outline"}
                                            className="cursor-pointer"
                                            onClick={() => toggleInterest(interest)}
                                        >
                                            {interest}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            <Button
                                type="submit"
                                size="lg"
                                disabled={isSearching}
                                className="w-full"
                            >
                                {isSearching ? "Searching for Matches..." : "Find Co-Travelers"}
                            </Button>
                        </form>
                    </CardContent>
                </Card>

                {/* Results */}
                {hasSearched && (
                    <div>
                        <h2 className="text-2xl font-bold mb-6">
                            {matches.length > 0 ? `Found ${matches.length} Potential Matches` : "No Matches Found"}
                        </h2>

                        {matches.length === 0 ? (
                            <Card>
                                <CardContent className="text-center py-12">
                                    <Users className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                                    <h3 className="text-lg font-semibold mb-2">No matches found</h3>
                                    <p className="text-muted-foreground">
                                        Try adjusting your criteria or create a profile to get better matches.
                                    </p>
                                </CardContent>
                            </Card>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {matches.map((match) => (
                                    <Card key={match.user_id} className="hover:shadow-lg transition-shadow">
                                        <CardHeader>
                                            <div className="flex items-start justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                                        <Users className="w-6 h-6" />
                                                    </div>
                                                    <div>
                                                        <CardTitle className="text-lg">{match.name}</CardTitle>
                                                        <p className="text-sm text-muted-foreground">
                                                            {match.age} years • {match.location}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <div className={`text-lg font-bold ${getMatchScoreColor(match.match_score)}`}>
                                                        {match.match_score}%
                                                    </div>
                                                    <p className="text-xs text-muted-foreground">Match</p>
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <p className="text-sm">{match.bio}</p>

                                            <div className="flex items-center gap-4">
                                                <div className="flex items-center gap-1">
                                                    <Star className="w-4 h-4 text-yellow-500" />
                                                    <span className="text-sm font-medium">{match.experience_rating}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Plane className="w-4 h-4 text-blue-500" />
                                                    <span className="text-sm">{match.total_trips} trips</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <DollarSign className="w-4 h-4 text-green-500" />
                                                    <span className="text-sm">{match.budget_compatibility}% budget match</span>
                                                </div>
                                            </div>

                                            {match.shared_interests.length > 0 && (
                                                <div>
                                                    <p className="text-sm font-medium mb-2">Shared Interests:</p>
                                                    <div className="flex flex-wrap gap-1">
                                                        {match.shared_interests.map((interest) => (
                                                            <Badge key={interest} variant="secondary" className="text-xs">
                                                                {interest}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            <div className="bg-muted/50 p-3 rounded-lg">
                                                <p className="text-sm">{match.match_explanation}</p>
                                            </div>

                                            <div className="flex gap-2 pt-2">
                                                <Button
                                                    onClick={() => handleConnect(match.user_id)}
                                                    className="flex-1"
                                                >
                                                    <Heart className="w-4 h-4 mr-2" />
                                                    Connect
                                                </Button>
                                                <Button variant="outline" size="icon">
                                                    <MessageCircle className="w-4 h-4" />
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
