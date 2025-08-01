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

interface CoExperiencerMatch {
    user_id: string;
    name: string;
    age: number;
    location: string;
    bio: string;
    experience_style: string;
    experience_rating: number;
    total_experiences: number;
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

export default function FindCoExperiencerPage() {
    const [matches, setMatches] = useState<CoExperiencerMatch[]>([]);
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
                min: 500,
                max: 2000,
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
            const response = await fetch("/api/coexperiencer/find-match", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Failed to find matches");
            }

            const result = await response.json();
            setMatches(result.matches || []);
            setHasSearched(true);

            if (result.matches && result.matches.length > 0) {
                toast.success(`Found ${result.matches.length} potential experience partners!`);
            } else {
                toast.info("No matches found for your criteria. Try adjusting your search.");
            }
        } catch (error) {
            console.error("Error finding matches:", error);
            toast.error("Failed to find matches. Please try again.");
        } finally {
            setIsSearching(false);
        }
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-1">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Plane className="w-5 h-5" />
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
                                                    <SelectValue placeholder="Select size" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="1">Just me</SelectItem>
                                                    <SelectItem value="2">Pair (2 people)</SelectItem>
                                                    <SelectItem value="3">Small group (3-4)</SelectItem>
                                                    <SelectItem value="5">Medium group (5-8)</SelectItem>
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

                                    <div>
                                        <Label className="mb-2 block">Budget Range (USD)</Label>
                                        <div className="grid grid-cols-2 gap-4">
                                            <Input
                                                type="number"
                                                placeholder="Min"
                                                {...register("budget_range.min", { required: true })}
                                            />
                                            <Input
                                                type="number"
                                                placeholder="Max"
                                                {...register("budget_range.max", { required: true })}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <Label className="mb-2 block">Interests</Label>
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
                                        className="w-full"
                                        disabled={isSearching}
                                    >
                                        {isSearching ? "Finding Matches..." : "Find My Experience Partner"}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="md:col-span-2">
                        {!hasSearched ? (
                            <div className="h-full flex items-center justify-center p-10">
                                <div className="text-center space-y-4">
                                    <Users className="w-16 h-16 mx-auto text-muted-foreground opacity-30" />
                                    <h3 className="text-xl font-medium text-foreground">Find Your Perfect Match</h3>
                                    <p className="text-muted-foreground max-w-md">
                                        Fill in your experience details and preferences to discover compatible experience partners.
                                        Our AI will match you with people who share your interests and budget.
                                    </p>
                                </div>
                            </div>
                        ) : matches.length > 0 ? (
                            <div className="space-y-6">
                                <h2 className="text-lg font-medium">
                                    Found {matches.length} Potential Experience Partners
                                </h2>
                                {matches.map((match, index) => (
                                    <Card key={match.user_id || index} className="overflow-hidden">
                                        <div className="flex flex-col md:flex-row">
                                            <div className="relative w-full md:w-1/3 aspect-square md:aspect-auto">
                                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                                                    <Users className="w-16 h-16 text-muted-foreground opacity-40" />
                                                </div>
                                                <div className="absolute top-2 left-2">
                                                    <Badge className="bg-primary/80 hover:bg-primary">
                                                        {match.match_score}% Match
                                                    </Badge>
                                                </div>
                                                <div className="absolute bottom-2 right-2">
                                                    <div className="flex items-center gap-1 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                                                        <Star className="w-3 h-3 fill-yellow-400 stroke-yellow-400" />
                                                        <span>{match.experience_rating}/5</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-5 flex-1">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h3 className="text-lg font-semibold">
                                                            {match.name}, {match.age}
                                                        </h3>
                                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                            <MapPin className="w-3.5 h-3.5" />
                                                            <span>{match.location}</span>
                                                        </div>
                                                    </div>
                                                    <Badge variant="outline" className="border-green-500/30 bg-green-500/10 text-green-600 hover:bg-green-500/20">
                                                        {match.experience_style}
                                                    </Badge>
                                                </div>

                                                <div className="mt-4">
                                                    <p className="text-muted-foreground line-clamp-2 text-sm">
                                                        {match.bio}
                                                    </p>
                                                </div>

                                                <div className="mt-4 flex gap-2 flex-wrap">
                                                    {match.shared_interests.map((interest) => (
                                                        <Badge key={interest} variant="secondary" className="bg-secondary/40">
                                                            {interest}
                                                        </Badge>
                                                    ))}
                                                </div>

                                                <div className="mt-4 text-sm text-muted-foreground">
                                                    <div className="flex justify-between items-center border-t pt-4 mt-4">
                                                        <div className="flex items-center gap-1">
                                                            <DollarSign className="w-4 h-4 text-blue-500" />
                                                            <span className="text-foreground">
                                                                {match.budget_compatibility}% budget compatibility
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <Clock className="w-4 h-4 text-orange-500" />
                                                            <span>{match.total_experiences} past experiences</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mt-4 flex gap-2 justify-end">
                                                    <Button size="sm" variant="outline" className="gap-1">
                                                        <MessageCircle className="w-4 h-4" />
                                                        Message
                                                    </Button>
                                                    <Button size="sm" className="gap-1">
                                                        <Heart className="w-4 h-4" />
                                                        Connect
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        ) : (
                            <div className="h-full flex items-center justify-center p-10">
                                <div className="text-center space-y-4">
                                    <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Sparkles className="w-8 h-8 text-primary/60" />
                                    </div>
                                    <h3 className="text-xl font-medium">No Matches Found</h3>
                                    <p className="text-muted-foreground">
                                        We couldn't find anyone matching your criteria. Try adjusting your preferences,
                                        budget range, or dates to find more potential experience partners.
                                    </p>
                                    <Button onClick={() => setHasSearched(false)} variant="outline">
                                        Modify Search
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
