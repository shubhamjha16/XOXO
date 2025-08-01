import {
  MapPin,
  Zap,
  Heart,
  Star,
  Plane,
  Calendar,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="w-full mb-8">
        <div className="relative">
          <Image
            src="/images/xoxo_image.jpg"
            alt="XOXO Experience Partners"
            width={1920}
            height={1080}
            className="w-full h-auto"
            style={{ maxWidth: "100%" }}
            sizes="100vw"
            priority
          />
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold sm:text-6xl">
            <span className="text-accent">XOXO</span>
          </h1>
          <h2 className="text-2xl font-semibold sm:text-3xl mt-4 text-muted-foreground">
            Find Your Perfect Experience Partner & Create Unforgettable Moments
          </h2>

          <p className="mt-6 text-lg leading-8 text-secondary-foreground max-w-3xl mx-auto">
            Connect with like-minded experience seekers through our AI-powered matching system.
            Based on your budget and experience rating, we pair you with compatible partners
            and handle all bookings for you. We collect your budget upfront and optimally allocate
            funds to create personalized adventures with exciting dares and challenges.
            The more you invest, the more magical your experiences become!
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/coexperiencer/profile">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Heart className="w-4 h-4 mr-2" />
                Find My Experience Partner
              </Button>
            </Link>
            <Link href="/plan">
              <Button variant="outline" size="lg">
                <Plane className="w-4 h-4 mr-2" />
                Plan Solo Experience
              </Button>
            </Link>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">How It Works</h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 mx-auto border-2 border-primary/20">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h4 className="text-xl font-semibold mb-4">
                Fill Once, Dream Big
              </h4>
              <p className="text-muted-foreground">
                Tell us about your ideal trip—destination, dates, style, budget,
                and preferences. Our thoughtful form captures everything in
                minutes.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-secondary/20 rounded-full mb-6 mx-auto border-2 border-secondary/40">
                <span className="text-2xl font-bold text-foreground">2</span>
              </div>
              <h4 className="text-xl font-semibold mb-4">
                AI Agents Take Over
              </h4>
              <p className="text-muted-foreground">
                Specialized AI agents work together to identify optimal flights, lodging,
                and activities within your budget—researching options and finding the best deals
                for your preferences.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6 mx-auto border-2 border-accent/20">
                <span className="text-2xl font-bold text-accent">3</span>
              </div>
              <h4 className="text-xl font-semibold mb-4">
                Complete Bookings Handled
              </h4>
              <p className="text-muted-foreground">
                We collect your budget upfront and handle all bookings for you—flights,
                accommodations, activities—optimally allocating funds based on your preferences.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            Why Choose XOXO
          </h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="hover:shadow-lg transition-shadow border-primary/20 hover:border-primary/40">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">
                  Smart Partner Matching
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our AI matches you with compatible experience partners based on budget,
                  experience rating, and experience preferences. The perfect chemistry
                  for unforgettable adventures.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-accent/20 hover:border-accent/40">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-4">
                  <Star className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-lg">Experience Rating System</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Build your reputation through amazing experiences. Higher ratings
                  unlock better matches and exclusive adventures. Your journey
                  shapes your future connections.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-secondary/30 hover:border-secondary/50">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 bg-secondary/20 rounded-lg mb-4">
                  <Zap className="w-6 h-6 text-foreground" />
                </div>
                <CardTitle className="text-lg">Adventure Dares & Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Spice up your experiences with AI-generated dares and challenges.
                  From restaurant surprises to local adventures - create memorable
                  moments that bond you with your experience partner.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-primary/20 hover:border-primary/40">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Budget-Based Experiences</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Higher budget unlocks premium experiences and better matches.
                  Even with lower experience ratings, generous budgets ensure
                  amazing adventures with great partners.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-accent/20 hover:border-accent/40">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-4">
                  <Calendar className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-lg">Complete Booking Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We collect your budget and handle all bookings for you—flights,
                  accommodations, and activities are all paid for and confirmed.
                  No stress, just show up and enjoy.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-secondary/30 hover:border-secondary/50">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 bg-secondary/20 rounded-lg mb-4">
                  <Heart className="w-6 h-6 text-foreground" />
                </div>
                <CardTitle className="text-lg">Crafted with Care</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Every detail is thoughtfully considered to create not just a
                  trip, but an experience that feels truly magical and personal.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-primary/5 rounded-2xl py-16 px-8 border border-primary/10">
          <h3 className="text-3xl font-bold mb-6">
            Ready for a Hassle-Free Experience?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Stop worrying about bookings and payments. Set your budget, share your preferences,
            and let us handle everything from partner matching to all bookings and reservations.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            <Plane className="w-4 h-4 mr-2" />
            Start Planning Now
          </Button>
        </div>
      </main>
    </div>
  );
}
