"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import {
    ShieldCheck,
    CreditCard,
    DollarSign,
    Users,
    Key,
    Sparkles,
    CheckCircle2,
    XCircle,
    Lock,
    Unlock,
    RefreshCw,
    Info,
    ArrowRight,
} from "lucide-react";
import { toast } from "sonner";

interface SplitResult {
    split_id: string;
    user1_amount: number;
    user2_amount: number;
    currency: string;
    message: string;
}

export default function PaymentEscrowPage() {
    const params = useParams<{ id: string }>();
    const tripId = params.id;

    // Trip Info State
    const [destination, setDestination] = useState("Tokyo, Japan");
    const [totalCost, setTotalCost] = useState(1200.00);
    const [currency, setCurrency] = useState("USD");
    const [loadingTrip, setLoadingTrip] = useState(true);

    // Form inputs
    const [splitMode, setSplitMode] = useState<"traditional_sponsor" | "equal_split" | "custom_split">("equal_split");
    const [hostPrefBudget, setHostPrefBudget] = useState(800.00);
    const [guestPrefBudget, setGuestPrefBudget] = useState(600.00);
    const [hostPercent, setHostPercent] = useState(50); // For custom split

    // Flow states
    const [negotiating, setNegotiating] = useState(false);
    const [splitResult, setSplitResult] = useState<SplitResult | null>(null);

    // Mandates & Signing State
    const [hostPrivateKey, setHostPrivateKey] = useState("host_secret_signing_key_777");
    const [guestPrivateKey, setGuestPrivateKey] = useState("guest_secret_signing_key_888");
    const [hostPublicKey, setHostPublicKey] = useState("host_public_key_777");
    const [guestPublicKey, setGuestPublicKey] = useState("guest_public_key_888");
    const [hostSignature, setHostSignature] = useState<string | null>(null);
    const [guestSignature, setGuestSignature] = useState<string | null>(null);
    const [signing, setSigning] = useState(false);

    // Execution & Escrow State
    const [executing, setExecuting] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [escrowStatus, setEscrowStatus] = useState<"held" | "released" | "refunded" | null>(null);
    const [updatingEscrow, setUpdatingEscrow] = useState(false);

    // Mandate payloads
    const [hostMandatePayload, setHostMandatePayload] = useState<any>(null);
    const [guestMandatePayload, setGuestMandatePayload] = useState<any>(null);

    useEffect(() => {
        if (tripId) {
            fetchTripDetails();
        }
    }, [tripId]);

    const fetchTripDetails = async () => {
        try {
            setLoadingTrip(true);
            const response = await fetch(`/api/plans/${tripId}`);
            if (response.ok) {
                const data = await response.json();
                if (data.success && data.tripPlan) {
                    setDestination(data.tripPlan.destination || "Tokyo, Japan");
                    const budget = data.tripPlan.budget || 1200.00;
                    setTotalCost(budget);
                    setCurrency(data.tripPlan.budgetCurrency || "USD");
                    
                    // Pre-fill some defaults based on budget
                    setHostPrefBudget(Number((budget * 0.6).toFixed(2)));
                    setGuestPrefBudget(Number((budget * 0.5).toFixed(2)));
                }
            }
        } catch (e) {
            console.error("Error fetching trip details:", e);
        } finally {
            setLoadingTrip(false);
        }
    };

    const handleNegotiate = async () => {
        try {
            setNegotiating(true);
            setSplitResult(null);
            setHostSignature(null);
            setGuestSignature(null);
            setPaymentSuccess(false);
            setEscrowStatus(null);

            // Determine split parameters
            let mode = splitMode;
            let targetHostBudget = hostPrefBudget;
            let targetGuestBudget = guestPrefBudget;

            if (splitMode === "custom_split") {
                targetHostBudget = Number((totalCost * (hostPercent / 100)).toFixed(2));
                targetGuestBudget = Number((totalCost * ((100 - hostPercent) / 100)).toFixed(2));
            }

            const response = await fetch("/api/payment/negotiate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    trip_plan_id: tripId,
                    total_amount: totalCost,
                    user1_id: "host_user_1",
                    user2_id: "guest_user_2",
                    user1_pref_budget: targetHostBudget,
                    user2_pref_budget: targetGuestBudget,
                    currency: currency,
                    split_mode: mode,
                }),
            });

            const data = await response.json();
            if (data.success) {
                setSplitResult(data);
                toast.success("A2A Agents negotiated split successfully!");

                // Generate Mandate Payloads
                const hostMandate = {
                    user_id: "host_user_1",
                    trip_plan_id: tripId,
                    limit_amount: data.user1_amount,
                    currency: currency,
                    scope: "trip_booking",
                    public_key: hostPublicKey,
                };

                const guestMandate = {
                    user_id: "guest_user_2",
                    trip_plan_id: tripId,
                    limit_amount: data.user2_amount,
                    currency: currency,
                    scope: "trip_booking",
                    public_key: guestPublicKey,
                };

                setHostMandatePayload(hostMandate);
                setGuestMandatePayload(guestMandate);
            } else {
                toast.error(data.message || "Negotiation failed.");
            }
        } catch (e: any) {
            console.error("Negotiation error:", e);
            toast.error("Failed to run agent negotiation.");
        } finally {
            setNegotiating(false);
        }
    };

    const handleSignMandates = async () => {
        if (!splitResult || !hostMandatePayload || !guestMandatePayload) return;

        try {
            setSigning(true);
            
            // Sign Host Mandate
            const hostSignRes = await fetch("/api/payment/sign-mandate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    mandate: hostMandatePayload,
                    private_key: hostPrivateKey,
                }),
            });

            // Sign Guest Mandate
            const guestSignRes = await fetch("/api/payment/sign-mandate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    mandate: guestMandatePayload,
                    private_key: guestPrivateKey,
                }),
            });

            const hostSignData = await hostSignRes.json();
            const guestSignData = await guestSignRes.json();

            if (hostSignData.success && guestSignData.success) {
                setHostSignature(hostSignData.signature);
                setGuestSignature(guestSignData.signature);
                toast.success("AP2 Cryptographic Mandates signed successfully!");
            } else {
                toast.error("Failed to sign mandates.");
            }
        } catch (e) {
            console.error("Signing error:", e);
            toast.error("Failed to sign mandates.");
        } finally {
            setSigning(false);
        }
    };

    const handleExecutePayment = async () => {
        if (!splitResult || !hostSignature || !guestSignature) return;

        try {
            setExecuting(true);

            const response = await fetch("/api/payment/execute", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    split_id: splitResult.split_id,
                    user1_mandate: hostMandatePayload,
                    user1_signature: hostSignature,
                    user1_verify_key: hostPrivateKey, // verify key matches key used to sign
                    user2_mandate: guestMandatePayload,
                    user2_signature: guestSignature,
                    user2_verify_key: guestPrivateKey,
                }),
            });

            const data = await response.json();
            if (data.success) {
                setPaymentSuccess(true);
                setEscrowStatus("held"); // Initially funds go into safety escrow hold status
                toast.success("Agentic Split Payment executed successfully!");
            } else {
                toast.error(data.message || data.detail || "Payment execution failed.");
            }
        } catch (e) {
            console.error("Execution error:", e);
            toast.error("Failed to execute split payment.");
        } finally {
            setExecuting(false);
        }
    };

    const handleEscrowAction = async (action: "release" | "refund") => {
        if (!splitResult) return;

        try {
            setUpdatingEscrow(true);
            const response = await fetch("/api/payment/escrow", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    split_id: splitResult.split_id,
                    user_id: "host_user_1", // In real app, the user initiating release/refund
                    action: action,
                }),
            });

            const data = await response.json();
            if (data.success) {
                setEscrowStatus(action === "release" ? "released" : "refunded");
                toast.success(`Escrow funds successfully ${action === "release" ? "released to booking merchant" : "refunded to guest"}!`);
            } else {
                toast.error(data.message || "Failed to update escrow status.");
            }
        } catch (e) {
            console.error("Escrow action error:", e);
            toast.error("Failed to update escrow.");
        } finally {
            setUpdatingEscrow(false);
        }
    };

    if (loadingTrip) {
        return (
            <div className="container mx-auto p-4 flex flex-col items-center justify-center min-h-[calc(100vh-10rem)]">
                <Sparkles className="w-12 h-12 animate-spin text-primary mb-4" />
                <h1 className="text-2xl font-semibold mb-2">Loading Payment Summary</h1>
                <p className="text-muted-foreground text-center">
                    Fetching co-experience cost split modules...
                </p>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4 md:p-8 max-w-5xl space-y-8">
            {/* Header */}
            <div className="text-center space-y-2">
                <Badge variant="outline" className="px-3 py-1 border-primary/30 text-primary bg-primary/5">
                    💳 Secure Agentic Payment System (AP2 + MCP)
                </Badge>
                <h1 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    Co-Experience Payment Split & Escrow
                </h1>
                <p className="text-muted-foreground max-w-xl mx-auto">
                    Configure your trip split policy, simulate Autonomous Agent-to-Agent negotiation, sign cryptographic payment mandates, and release escrow funds.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Side: Summary and Split Config */}
                <div className="md:col-span-1 space-y-6">
                    {/* Summary Card */}
                    <Card className="border-border bg-card/50 backdrop-blur-md">
                        <CardHeader className="pb-4">
                            <CardTitle className="text-lg flex items-center gap-2">
                                <DollarSign className="w-5 h-5 text-indigo-500" />
                                Payment Summary
                            </CardTitle>
                            <CardDescription>Trip Details for {destination}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4 text-sm">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Destination:</span>
                                <span className="font-semibold">{destination}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Split Mode:</span>
                                <Badge variant="secondary" className="capitalize">
                                    {splitMode.replace("_", " ")}
                                </Badge>
                            </div>
                            <Separator />
                            <div className="flex justify-between items-baseline pt-2">
                                <span className="text-base font-bold text-foreground">Total Cost:</span>
                                <span className="text-2xl font-black text-indigo-500">
                                    {currency} {totalCost.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                                </span>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Split Policy Configuration */}
                    <Card className="border-border bg-card/50 backdrop-blur-md">
                        <CardHeader className="pb-3">
                            <CardTitle className="text-base flex items-center gap-2">
                                <Users className="w-5 h-5 text-purple-500" />
                                Split Settings
                            </CardTitle>
                            <CardDescription>Select payment split approach</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-3 gap-2">
                                <Button
                                    size="sm"
                                    variant={splitMode === "equal_split" ? "default" : "outline"}
                                    onClick={() => setSplitMode("equal_split")}
                                    className="text-xs"
                                >
                                    Equal Split
                                </Button>
                                <Button
                                    size="sm"
                                    variant={splitMode === "traditional_sponsor" ? "default" : "outline"}
                                    onClick={() => setSplitMode("traditional_sponsor")}
                                    className="text-xs px-1"
                                >
                                    Host Pays
                                </Button>
                                <Button
                                    size="sm"
                                    variant={splitMode === "custom_split" ? "default" : "outline"}
                                    onClick={() => setSplitMode("custom_split")}
                                    className="text-xs"
                                >
                                    Custom Split
                                </Button>
                            </div>

                            {splitMode === "equal_split" && (
                                <div className="text-xs text-muted-foreground bg-muted/30 p-2.5 rounded border">
                                    <Info className="w-4 h-4 inline mr-1 text-indigo-500" />
                                    Cost is split 50/50. Each user pays exactly {(totalCost / 2).toFixed(2)} {currency}.
                                </div>
                            )}

                            {splitMode === "traditional_sponsor" && (
                                <div className="text-xs text-muted-foreground bg-muted/30 p-2.5 rounded border">
                                    <Info className="w-4 h-4 inline mr-1 text-indigo-500" />
                                    Host sponsors 100% of the trip. Guest contribution is set to 0.00 {currency} to honor traditional etiquette.
                                </div>
                            )}

                            {splitMode === "custom_split" && (
                                <div className="space-y-3 pt-2">
                                    <div className="flex justify-between text-xs font-semibold">
                                        <span>Host: {hostPercent}%</span>
                                        <span>Guest: {100 - hostPercent}%</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={hostPercent}
                                        onChange={(e) => setHostPercent(Number(e.target.value))}
                                        className="w-full h-1 bg-muted rounded-lg appearance-none cursor-pointer accent-indigo-500"
                                    />
                                    <div className="grid grid-cols-2 gap-2 text-xs">
                                        <div className="bg-muted/30 p-2 rounded text-center">
                                            Host: {currency} {(totalCost * (hostPercent / 100)).toFixed(2)}
                                        </div>
                                        <div className="bg-muted/30 p-2 rounded text-center">
                                            Guest: {currency} {(totalCost * ((100 - hostPercent) / 100)).toFixed(2)}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {splitMode !== "custom_split" && (
                                <div className="space-y-3 pt-2">
                                    <div>
                                        <label className="text-xs font-semibold block mb-1">Host Max Budget Limit</label>
                                        <div className="relative">
                                            <span className="absolute left-3 top-2.5 text-xs text-muted-foreground">{currency}</span>
                                            <input
                                                type="number"
                                                value={hostPrefBudget}
                                                onChange={(e) => setHostPrefBudget(Number(e.target.value))}
                                                className="w-full bg-background border rounded px-3 py-2 pl-10 text-sm"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-xs font-semibold block mb-1">Guest Max Budget Limit</label>
                                        <div className="relative">
                                            <span className="absolute left-3 top-2.5 text-xs text-muted-foreground">{currency}</span>
                                            <input
                                                type="number"
                                                value={guestPrefBudget}
                                                onChange={(e) => setGuestPrefBudget(Number(e.target.value))}
                                                className="w-full bg-background border rounded px-3 py-2 pl-10 text-sm"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            <Button
                                className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium"
                                onClick={handleNegotiate}
                                disabled={negotiating}
                            >
                                {negotiating ? (
                                    <>
                                        <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                                        Agents Negotiating...
                                    </>
                                ) : (
                                    <>
                                        <Sparkles className="w-4 h-4 mr-2" />
                                        Run A2A Negotiation
                                    </>
                                )}
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Side: Negotiation results, AP2 Mandates, Escrow details */}
                <div className="md:col-span-2 space-y-6">
                    {/* Step 1: Agent negotiation result */}
                    <Card className={`border-border bg-card/50 backdrop-blur-md transition-all duration-300 ${!splitResult ? 'opacity-40' : ''}`}>
                        <CardHeader className="pb-3">
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-lg flex items-center gap-2">
                                    <ShieldCheck className="w-5 h-5 text-emerald-500" />
                                    1. A2A Agentic Negotiation Status
                                </CardTitle>
                                {splitResult && <Badge className="bg-green-600 text-white">Split Agreed</Badge>}
                            </div>
                            <CardDescription>Simulated User1 and User2 Agent-to-Agent bargaining</CardDescription>
                        </CardHeader>
                        <CardContent>
                            {splitResult ? (
                                <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-indigo-950/20 border border-indigo-500/20 p-4 rounded-lg">
                                            <span className="text-xs text-indigo-400 font-bold block mb-1">HOST ASSIGNED SHARE</span>
                                            <span className="text-2xl font-extrabold text-foreground">
                                                {currency} {splitResult.user1_amount.toFixed(2)}
                                            </span>
                                            <span className="text-xs text-muted-foreground block mt-1">
                                                Max authorized: {currency} {hostPrefBudget.toFixed(2)}
                                            </span>
                                        </div>
                                        <div className="bg-purple-950/20 border border-purple-500/20 p-4 rounded-lg">
                                            <span className="text-xs text-purple-400 font-bold block mb-1">GUEST ASSIGNED SHARE</span>
                                            <span className="text-2xl font-extrabold text-foreground">
                                                {currency} {splitResult.user2_amount.toFixed(2)}
                                            </span>
                                            <span className="text-xs text-muted-foreground block mt-1">
                                                Max authorized: {currency} {guestPrefBudget.toFixed(2)}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-xs text-muted-foreground bg-muted/40 p-3 rounded flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <strong>Negotiation Protocol agreed successfully!</strong> split_id: <code className="bg-background px-1 py-0.5 rounded border text-indigo-400">{splitResult.split_id}</code>. Both agents verified split fits within target limits.
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-center py-8 text-muted-foreground text-sm flex flex-col items-center justify-center">
                                    <Lock className="w-8 h-8 mb-2 opacity-50" />
                                    Configure splits and click "Run A2A Negotiation" above to start agent negotiation.
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    {/* Step 2: AP2 Cryptographic mandates */}
                    <Card className={`border-border bg-card/50 backdrop-blur-md transition-all duration-300 ${(!splitResult || hostSignature) ? '' : 'border-indigo-500/40Shadow shadow-indigo-500/5'} ${(!splitResult) ? 'opacity-40' : ''}`}>
                        <CardHeader className="pb-3">
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-lg flex items-center gap-2">
                                    <Key className="w-5 h-5 text-yellow-500" />
                                    2. AP2 Cryptographic Authorization Mandates
                                </CardTitle>
                                {hostSignature && guestSignature && <Badge className="bg-green-600 text-white">Signed</Badge>}
                            </div>
                            <CardDescription>Crypto signatures authorize agent execution bounds</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {splitResult ? (
                                <div className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {/* Host Sign Panel */}
                                        <div className="space-y-3 bg-muted/20 p-4 rounded-lg border">
                                            <div className="flex items-center justify-between">
                                                <h4 className="text-sm font-bold text-foreground">Host (User 1) Mandate</h4>
                                                <Badge variant="outline" className="text-[10px]">AP2-M1</Badge>
                                            </div>
                                            <div className="space-y-2 text-xs">
                                                <div className="flex justify-between">
                                                    <span className="text-muted-foreground">Limit Amount:</span>
                                                    <span>{currency} {splitResult.user1_amount.toFixed(2)}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-muted-foreground">Scope:</span>
                                                    <span className="font-mono">trip_booking</span>
                                                </div>
                                                <div>
                                                    <label className="text-[10px] text-muted-foreground block mb-1 font-semibold">Private Signing Key</label>
                                                    <input
                                                        type="password"
                                                        value={hostPrivateKey}
                                                        onChange={(e) => setHostPrivateKey(e.target.value)}
                                                        className="w-full bg-background border rounded px-2 py-1 text-xs font-mono"
                                                    />
                                                </div>
                                                {hostSignature && (
                                                    <div className="bg-green-950/20 text-green-400 p-2 rounded text-[10px] font-mono break-all border border-green-500/20">
                                                        Signature: {hostSignature.substring(0, 15)}...
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Guest Sign Panel */}
                                        <div className="space-y-3 bg-muted/20 p-4 rounded-lg border">
                                            <div className="flex items-center justify-between">
                                                <h4 className="text-sm font-bold text-foreground">Guest (User 2) Mandate</h4>
                                                <Badge variant="outline" className="text-[10px]">AP2-M2</Badge>
                                            </div>
                                            <div className="space-y-2 text-xs">
                                                <div className="flex justify-between">
                                                    <span className="text-muted-foreground">Limit Amount:</span>
                                                    <span>{currency} {splitResult.user2_amount.toFixed(2)}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-muted-foreground">Scope:</span>
                                                    <span className="font-mono">trip_booking</span>
                                                </div>
                                                <div>
                                                    <label className="text-[10px] text-muted-foreground block mb-1 font-semibold">Private Signing Key</label>
                                                    <input
                                                        type="password"
                                                        value={guestPrivateKey}
                                                        onChange={(e) => setGuestPrivateKey(e.target.value)}
                                                        className="w-full bg-background border rounded px-2 py-1 text-xs font-mono"
                                                    />
                                                </div>
                                                {guestSignature && (
                                                    <div className="bg-green-950/20 text-green-400 p-2 rounded text-[10px] font-mono break-all border border-green-500/20">
                                                        Signature: {guestSignature.substring(0, 15)}...
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {!hostSignature && (
                                        <Button
                                            className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white font-medium"
                                            onClick={handleSignMandates}
                                            disabled={signing}
                                        >
                                            {signing ? (
                                                <>
                                                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                                                    Signing cryptographic mandates...
                                                </>
                                            ) : (
                                                <>
                                                    <Key className="w-4 h-4 mr-2" />
                                                    Generate & Sign AP2 Mandates
                                                </>
                                            )}
                                        </Button>
                                    )}
                                </div>
                            ) : (
                                <div className="text-center py-6 text-muted-foreground text-sm">
                                    Awaiting split negotiation parameters...
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    {/* Step 3: Execute Payment & Escrow Status */}
                    <Card className={`border-border bg-card/50 backdrop-blur-md transition-all duration-300 ${(!hostSignature) ? 'opacity-40' : ''}`}>
                        <CardHeader className="pb-3">
                            <CardTitle className="text-lg flex items-center gap-2">
                                <CreditCard className="w-5 h-5 text-indigo-500" />
                                3. Execution & Escrow Release
                            </CardTitle>
                            <CardDescription>Simulates payment gateway charge and holding funds in escrow</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {hostSignature && guestSignature ? (
                                <div className="space-y-4">
                                    {!paymentSuccess ? (
                                        <div className="text-center py-4 bg-muted/10 border rounded-lg space-y-4">
                                            <p className="text-sm text-muted-foreground">
                                                Cryptographic authorizations ready. Proceeds will be charged from users' cards and placed in a safety escrow hold state.
                                            </p>
                                            <Button
                                                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-3 h-auto"
                                                onClick={handleExecutePayment}
                                                disabled={executing}
                                            >
                                                {executing ? (
                                                    <>
                                                        <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                                                        Charging Cards & Creating Escrow...
                                                    </>
                                                ) : (
                                                    <>
                                                        <ShieldCheck className="w-5 h-5 mr-2" />
                                                        Execute Agentic Payment & Escrow
                                                    </>
                                                )}
                                            </Button>
                                        </div>
                                    ) : (
                                        <div className="space-y-6">
                                            {/* Success and Escrow Display */}
                                            <div className="bg-emerald-950/20 border border-emerald-500/20 rounded-lg p-4 flex items-start gap-3">
                                                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                                                <div className="space-y-1">
                                                    <h4 className="font-bold text-emerald-400">Payment Charged successfully!</h4>
                                                    <p className="text-xs text-muted-foreground">
                                                        Stripe simulated gateway successfully charged cards. Total funds are now held in the escrow safety vault.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Escrow Status Section */}
                                            <div className="border border-border rounded-lg p-6 bg-card space-y-4">
                                                <div className="flex items-center justify-between">
                                                    <div className="space-y-1">
                                                        <span className="text-xs text-muted-foreground font-bold uppercase block">Escrow Vault Status</span>
                                                        <div className="flex items-center gap-2">
                                                            {escrowStatus === "held" && (
                                                                <>
                                                                    <Lock className="w-5 h-5 text-amber-500" />
                                                                    <span className="text-xl font-black text-amber-500">HELD IN SAFETY ESCROW</span>
                                                                </>
                                                            )}
                                                            {escrowStatus === "released" && (
                                                                <>
                                                                    <Unlock className="w-5 h-5 text-green-500" />
                                                                    <span className="text-xl font-black text-green-500">RELEASED TO MERCHANT</span>
                                                                </>
                                                            )}
                                                            {escrowStatus === "refunded" && (
                                                                <>
                                                                    <RefreshCw className="w-5 h-5 text-indigo-400" />
                                                                    <span className="text-xl font-black text-indigo-400">REFUNDED TO USERS</span>
                                                                </>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <Badge variant={escrowStatus === "held" ? "outline" : "default"} className={
                                                        escrowStatus === "held" ? "border-amber-500/30 text-amber-500 bg-amber-500/5" :
                                                        escrowStatus === "released" ? "bg-green-600 text-white" : "bg-indigo-600 text-white"
                                                    }>
                                                        {escrowStatus}
                                                    </Badge>
                                                </div>

                                                <p className="text-xs text-muted-foreground">
                                                    Escrow hold releases automatically upon mutual user confirmation of a safe check-in, or can be refunded in case of safety disputes.
                                                </p>

                                                {escrowStatus === "held" && (
                                                    <div className="grid grid-cols-2 gap-4 pt-2">
                                                        <Button
                                                            className="bg-green-600 hover:bg-green-700 text-white font-medium"
                                                            onClick={() => handleEscrowAction("release")}
                                                            disabled={updatingEscrow}
                                                        >
                                                            {updatingEscrow ? "Processing..." : "Mutual Release Funds"}
                                                        </Button>
                                                        <Button
                                                            variant="outline"
                                                            className="border-red-500/30 hover:bg-red-50/10 text-red-400"
                                                            onClick={() => handleEscrowAction("refund")}
                                                            disabled={updatingEscrow}
                                                        >
                                                            {updatingEscrow ? "Processing..." : "Safety Refund"}
                                                        </Button>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="text-center py-6 text-muted-foreground text-sm">
                                    Sign mandates in Step 2 to enable execution panel.
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
