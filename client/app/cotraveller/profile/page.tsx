"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
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
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import {
    Users,
    Heart,
    MapPin,
    DollarSign,
    Calendar,
    Plane,
    Mountain,
    Camera,
    Coffee,
    Star,
} from "lucide-react";
import { toast } from "sonner";

interface ProfileFormData {
    budget_min: number;
    budget_max: number;
    budget_currency: string;
    experience_style: string;
    pace: string;
    accommodation_preference: string;
    interests: string[];
    destinations_interested: string[];
    experience_dates_flexible: boolean;
    bio: string;
}

const experienceStyles = [
    { id: "budget", label: "Budget Experiencer", icon: DollarSign },
    { id: "comfort", label: "Comfort Seeker", icon: Coffee },
    { id: "luxury", label: "Luxury Explorer", icon: Star },
    { id: "adventure", label: "Adventure Seeker", icon: Mountain },
    { id: "cultural", label: "Culture Enthusiast", icon: Camera },
];

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
    "History",
    "Spiritual & Wellness",
];

const popularDestinations = [
    "Tokyo, Japan",
    "Paris, France",
    "New York, USA",
    "London, UK",
    "Bali, Indonesia",
    "Rome, Italy",
    "Barcelona, Spain",
    "Thailand",
    "Australia",
    "Greece",
];

export default function CoTravellerProfilePage() {
    const router = useRouter();
    const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
    const [selectedDestinations, setSelectedDestinations] = useState<string[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<ProfileFormData>({
        defaultValues: {
            budget_min: 1000,
            budget_max: 3000,
            budget_currency: "USD",
            experience_style: "",
            pace: "moderate",
            accommodation_preference: "",
            experience_dates_flexible: true,
            bio: "",
        },
    });

    const budgetMin = watch("budget_min");
    const budgetMax = watch("budget_max");

    const toggleInterest = (interest: string) => {
        const updated = selectedInterests.includes(interest)
            ? selectedInterests.filter(i => i !== interest)
            : [...selectedInterests, interest];
        setSelectedInterests(updated);
        setValue("interests", updated);
    };

    const toggleDestination = (destination: string) => {
        const updated = selectedDestinations.includes(destination)
            ? selectedDestinations.filter(d => d !== destination)
            : [...selectedDestinations, destination];
        setSelectedDestinations(updated);
        setValue("destinations_interested", updated);
    };

    const onSubmit = async (data: ProfileFormData) => {
        setIsSubmitting(true);
        try {
            const profileData = {
                budget_range: {
                    min: data.budget_min,
                    max: data.budget_max,
                    currency: data.budget_currency,
                },
                travel_preferences: {
                    style: data.experience_style,
                    pace: data.pace,
                    accommodation: data.accommodation_preference,
                },
                destinations_interested: selectedDestinations,
                experience_dates_flexible: data.experience_dates_flexible,
                bio: data.bio,
            };

            const response = await fetch("/api/cotraveller/profile", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(profileData),
            });

            if (response.ok) {
                toast.success("Profile created successfully!");
                router.push("/cotraveller/find");
            } else {
                toast.error("Failed to create profile. Please try again.");
            }
        } catch (error) {
            console.error("Error creating profile:", error);
            toast.error("An error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container mx-auto p-4 md:p-8 space-y-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-foreground">
                        Create Your XOXO Profile
                    </h1>
                    <p className="text-muted-foreground mt-2">
                        Build your experience profile to find compatible partners. Your budget and future
                        experience ratings will determine your match quality and adventure level!
                    </p>
                    <div className="mt-4 p-4 bg-primary/10 rounded-lg border border-primary/20">
                        <p className="text-sm text-primary">
                            💡 <strong>How it works:</strong> Higher budgets unlock better experiences and can
                            compensate for lower experience ratings. Great experiences earn you higher ratings
                            for even better future matches!
                        </p>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    {/* Budget Range */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <DollarSign className="w-5 h-5" />
                                Budget Range
                            </CardTitle>
                            <CardDescription>
                                Set your comfortable travel budget range
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <Label htmlFor="budget_min">Minimum Budget</Label>
                                    <Input
                                        id="budget_min"
                                        type="number"
                                        {...register("budget_min", { required: true, min: 0 })}
                                        placeholder="1000"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="budget_max">Maximum Budget</Label>
                                    <Input
                                        id="budget_max"
                                        type="number"
                                        {...register("budget_max", { required: true, min: budgetMin })}
                                        placeholder="3000"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="budget_currency">Currency</Label>
                                    <Select onValueChange={(value) => setValue("budget_currency", value)}>
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
                        </CardContent>
                    </Card>

                    {/* Experience Style */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Plane className="w-5 h-5" />
                                Experience Style
                            </CardTitle>
                            <CardDescription>
                                What's your preferred experience style?
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {experienceStyles.map((style) => (
                                    <div
                                        key={style.id}
                                        className={`p-4 border rounded-lg cursor-pointer transition-colors ${watch("experience_style") === style.id
                                            ? "border-primary bg-primary/10"
                                            : "border-border hover:border-primary/50"
                                            }`}
                                        onClick={() => setValue("experience_style", style.id)}
                                    >
                                        <div className="flex items-center gap-3">
                                            <style.icon className="w-5 h-5" />
                                            <span className="font-medium">{style.label}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Interests */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Heart className="w-5 h-5" />
                                Travel Interests
                            </CardTitle>
                            <CardDescription>
                                Select activities and experiences you enjoy (select multiple)
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
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
                        </CardContent>
                    </Card>

                    {/* Destination Interests */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <MapPin className="w-5 h-5" />
                                Dream Destinations
                            </CardTitle>
                            <CardDescription>
                                Which destinations are on your bucket list?
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                {popularDestinations.map((destination) => (
                                    <Badge
                                        key={destination}
                                        variant={selectedDestinations.includes(destination) ? "default" : "outline"}
                                        className="cursor-pointer"
                                        onClick={() => toggleDestination(destination)}
                                    >
                                        {destination}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Travel Preferences */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Calendar className="w-5 h-5" />
                                Travel Preferences
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <Label htmlFor="pace">Travel Pace</Label>
                                    <Select onValueChange={(value) => setValue("pace", value)}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select pace" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="slow">Slow & Relaxed</SelectItem>
                                            <SelectItem value="moderate">Moderate</SelectItem>
                                            <SelectItem value="fast">Fast & Action-packed</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <Label htmlFor="accommodation_preference">Accommodation Style</Label>
                                    <Select onValueChange={(value) => setValue("accommodation_preference", value)}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select preference" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="hostel">Hostels</SelectItem>
                                            <SelectItem value="hotel">Hotels</SelectItem>
                                            <SelectItem value="boutique">Boutique Properties</SelectItem>
                                            <SelectItem value="airbnb">Airbnb/Local Stays</SelectItem>
                                            <SelectItem value="luxury">Luxury Resorts</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="experience_dates_flexible"
                                    {...register("experience_dates_flexible")}
                                />
                                <Label htmlFor="experience_dates_flexible">
                                    I have flexible travel dates
                                </Label>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Bio */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Users className="w-5 h-5" />
                                About You
                            </CardTitle>
                            <CardDescription>
                                Write a brief bio to help potential travel companions get to know you
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Textarea
                                {...register("bio", { maxLength: 500 })}
                                placeholder="Tell us about yourself, your travel experiences, and what you're looking for in a travel companion..."
                                rows={4}
                            />
                            <p className="text-sm text-muted-foreground mt-2">
                                Maximum 500 characters
                            </p>
                        </CardContent>
                    </Card>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <Button
                            type="submit"
                            size="lg"
                            disabled={isSubmitting}
                            className="w-full md:w-auto"
                        >
                            {isSubmitting ? "Creating Profile..." : "Create Profile & Find Matches"}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
