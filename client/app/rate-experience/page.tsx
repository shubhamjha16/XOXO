"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
    Star,
    Heart,
    ThumbsUp,
    Users,
    MapPin,
    Calendar,
    Trophy,
} from "lucide-react";
import { toast } from "sonner";

export default function RateExperiencePage() {
    const router = useRouter();
    const [partnerRating, setPartnerRating] = useState(0);
    const [experienceRating, setExperienceRating] = useState(0);
    const [feedback, setFeedback] = useState("");
    const [wouldTravelAgain, setWouldTravelAgain] = useState<boolean | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleStarClick = (rating: number, type: 'partner' | 'experience') => {
        if (type === 'partner') {
            setPartnerRating(rating);
        } else {
            setExperienceRating(rating);
        }
    };

    const handleSubmit = async () => {
        if (partnerRating === 0 || experienceRating === 0) {
            toast.error("Please provide both ratings");
            return;
        }

        setIsSubmitting(true);
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));

            toast.success("Experience rated successfully! Your rating has been updated.");
            router.push("/cotraveller/find");
        } catch (error) {
            toast.error("Failed to submit rating");
        } finally {
            setIsSubmitting(false);
        }
    };

    const StarRating = ({ rating, onRatingChange, label }: {
        rating: number;
        onRatingChange: (rating: number) => void;
        label: string;
    }) => (
        <div className="space-y-2">
            <Label className="text-sm font-medium">{label}</Label>
            <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                    <button
                        key={star}
                        type="button"
                        onClick={() => onRatingChange(star)}
                        className="focus:outline-none"
                    >
                        <Star
                            className={`w-8 h-8 transition-colors ${star <= rating
                                    ? "text-yellow-500 fill-yellow-500"
                                    : "text-gray-300 hover:text-yellow-400"
                                }`}
                        />
                    </button>
                ))}
            </div>
            <p className="text-xs text-muted-foreground">
                {rating === 0 ? "Click to rate" : `${rating} star${rating !== 1 ? 's' : ''}`}
            </p>
        </div>
    );

    return (
        <div className="container mx-auto p-4 md:p-8 space-y-8">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-foreground">
                        Rate Your XOXO Experience
                    </h1>
                    <p className="text-muted-foreground mt-2">
                        Your ratings help improve future matches and build your experience score
                    </p>
                </div>

                {/* Trip Summary */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <MapPin className="w-5 h-5" />
                            Trip Summary
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-muted-foreground" />
                                <span>Tokyo, Japan</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-muted-foreground" />
                                <span>Dec 15-22, 2024</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="w-4 h-4 text-muted-foreground" />
                                <span>With Sarah M.</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Rating Form */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Trophy className="w-5 h-5" />
                            Experience Rating
                        </CardTitle>
                        <CardDescription>
                            Help us improve XOXO by rating your experience
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-8">
                        {/* Partner Rating */}
                        <div className="space-y-4">
                            <StarRating
                                rating={partnerRating}
                                onRatingChange={(rating) => handleStarClick(rating, 'partner')}
                                label="How was your experience partner?"
                            />
                            <p className="text-sm text-muted-foreground">
                                Rate your partner's compatibility, communication, and overall experience
                            </p>
                        </div>

                        {/* Overall Experience Rating */}
                        <div className="space-y-4">
                            <StarRating
                                rating={experienceRating}
                                onRatingChange={(rating) => handleStarClick(rating, 'experience')}
                                label="How was your overall experience?"
                            />
                            <p className="text-sm text-muted-foreground">
                                Rate the trip planning, activities, accommodations, and adventure dares
                            </p>
                        </div>

                        {/* Would Travel Again */}
                        <div className="space-y-4">
                            <Label className="text-sm font-medium">Would you experience with this partner again?</Label>
                            <div className="flex gap-4">
                                <Button
                                    type="button"
                                    variant={wouldTravelAgain === true ? "default" : "outline"}
                                    onClick={() => setWouldTravelAgain(true)}
                                    className="flex items-center gap-2"
                                >
                                    <ThumbsUp className="w-4 h-4" />
                                    Yes, definitely!
                                </Button>
                                <Button
                                    type="button"
                                    variant={wouldTravelAgain === false ? "default" : "outline"}
                                    onClick={() => setWouldTravelAgain(false)}
                                    className="flex items-center gap-2"
                                >
                                    <Heart className="w-4 h-4" />
                                    Maybe in the future
                                </Button>
                            </div>
                        </div>

                        {/* Feedback */}
                        <div className="space-y-2">
                            <Label htmlFor="feedback" className="text-sm font-medium">
                                Additional feedback (optional)
                            </Label>
                            <Textarea
                                id="feedback"
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                                placeholder="Share what made this experience special or how we could improve..."
                                rows={4}
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-between items-center pt-4">
                            <Button
                                variant="outline"
                                onClick={() => router.back()}
                            >
                                Cancel
                            </Button>
                            <Button
                                onClick={handleSubmit}
                                disabled={isSubmitting || partnerRating === 0 || experienceRating === 0}
                                className="flex items-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                                        Submitting...
                                    </>
                                ) : (
                                    <>
                                        <Star className="w-4 h-4" />
                                        Submit Rating
                                    </>
                                )}
                            </Button>
                        </div>

                        {/* Impact Info */}
                        <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                            <h4 className="font-medium text-primary mb-2">How your rating impacts XOXO:</h4>
                            <ul className="text-sm text-primary space-y-1">
                                <li>• Higher ratings improve your future match quality</li>
                                <li>• Great experiences unlock access to premium experience partners</li>
                                <li>• Your rating helps others find amazing experience companions</li>
                                <li>• Consistent high ratings can earn you XOXO VIP status</li>
                            </ul>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
