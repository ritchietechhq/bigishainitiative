import { useState } from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Heart, CreditCard, Landmark } from "lucide-react";

export default function DonatePage() {
  const [donationType, setDonationType] = useState<"one-time" | "recurring">("one-time");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(5000);
  const [customAmount, setCustomAmount] = useState("");
  const [selectedCause, setSelectedCause] = useState("general");
  const [paymentMethod, setPaymentMethod] = useState<"paystack" | "flutterwave" | "bank">("paystack");

  const presetAmounts = [1000, 2500, 5000, 10000, 25000, 50000];

  const causes = [
    { id: "general", name: "General Fund", description: "Support all our programs" },
    { id: "education", name: "Education", description: "Fund scholarships and learning centers" },
    { id: "health", name: "Health", description: "Support healthcare initiatives" },
    { id: "women", name: "Women Empowerment", description: "Empower women in our communities" },
    { id: "emergency", name: "Emergency Relief", description: "Help in times of crisis" },
  ];

  const finalAmount = customAmount ? parseInt(customAmount) : selectedAmount || 0;

  const handleDonate = () => {
    if (finalAmount <= 0) {
      alert("Please select or enter a valid amount");
      return;
    }

    // Placeholder for payment gateway integration
    console.log("Processing donation:", {
      amount: finalAmount,
      type: donationType,
      cause: selectedCause,
      method: paymentMethod,
    });

    // TODO: Integrate with Paystack or Flutterwave
    // For Paystack: Use their inline payment form or redirect
    // For Flutterwave: Use their payment form
    // For Bank: Show bank details

    if (paymentMethod === "bank") {
      alert("Bank transfer details:\nAccount Name: BIG ISHA Initiative\nBank: Zenith Bank\nAccount Number: 1012345678");
    } else {
      alert(`Redirecting to ${paymentMethod === "paystack" ? "Paystack" : "Flutterwave"} for payment...`);
    }
  };

  return (
    <Layout>
      <HeroSection
        title="Make a Difference"
        subtitle="Your donation directly supports our programs and helps transform lives in Owerri, Imo State and beyond."
        backgroundImage="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {causes.map((cause) => (
              <Card
                key={cause.id}
                className={`cursor-pointer transition-all ${
                  selectedCause === cause.id ? "ring-2 ring-accent" : ""
                }`}
                onClick={() => setSelectedCause(cause.id)}
              >
                <CardContent className="pt-6">
                  <p className="font-semibold text-sm">{cause.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{cause.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Donation Type */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Donation Type</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs value={donationType} onValueChange={(v) => setDonationType(v as any)}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="one-time">One-Time</TabsTrigger>
                  <TabsTrigger value="recurring">Monthly Recurring</TabsTrigger>
                </TabsList>
              </Tabs>
              {donationType === "recurring" && (
                <p className="text-sm text-muted-foreground mt-4">
                  Your donation will be charged monthly. You can cancel anytime.
                </p>
              )}
            </CardContent>
          </Card>

          {/* Amount Selection */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Select Amount (₦)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {presetAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount("");
                    }}
                    className={`p-3 rounded-lg font-semibold transition-all ${
                      selectedAmount === amount && !customAmount
                        ? "bg-accent text-accent-foreground"
                        : "bg-muted text-foreground hover:bg-muted/80"
                    }`}
                  >
                    ₦{amount.toLocaleString()}
                  </button>
                ))}
              </div>
              <div>
                <Label htmlFor="custom-amount" className="text-sm font-medium">
                  Or enter a custom amount
                </Label>
                <Input
                  id="custom-amount"
                  type="number"
                  placeholder="Enter amount in Naira"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                  className="mt-2"
                />
              </div>
            </CardContent>
          </Card>

          {/* Payment Method */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Payment Method</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <RadioGroup value={paymentMethod} onValueChange={(v) => setPaymentMethod(v as any)}>
                <div className="flex items-center space-x-2 p-3 rounded-lg border border-border hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value="paystack" id="paystack" />
                  <Label htmlFor="paystack" className="flex-1 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-5 h-5" />
                      <div>
                        <p className="font-medium">Paystack</p>
                        <p className="text-xs text-muted-foreground">Card payment via Paystack</p>
                      </div>
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-3 rounded-lg border border-border hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value="flutterwave" id="flutterwave" />
                  <Label htmlFor="flutterwave" className="flex-1 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-5 h-5" />
                      <div>
                        <p className="font-medium">Flutterwave</p>
                        <p className="text-xs text-muted-foreground">Card & mobile money via Flutterwave</p>
                      </div>
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-3 rounded-lg border border-border hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value="bank" id="bank" />
                  <Label htmlFor="bank" className="flex-1 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <Landmark className="w-5 h-5" />
                      <div>
                        <p className="font-medium">Bank Transfer</p>
                        <p className="text-xs text-muted-foreground">Direct bank transfer</p>
                      </div>
                    </div>
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Summary & CTA */}
          <Card className="bg-accent/5 border-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-accent" />
                Donation Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Cause:</span>
                  <span className="font-medium">{causes.find((c) => c.id === selectedCause)?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Type:</span>
                  <span className="font-medium">{donationType === "one-time" ? "One-Time" : "Monthly"}</span>
                </div>
                <div className="flex justify-between text-lg font-bold border-t border-border pt-2 mt-2">
                  <span>Amount:</span>
                  <span className="text-accent">₦{finalAmount.toLocaleString()}</span>
                </div>
              </div>
              <Button
                onClick={handleDonate}
                disabled={finalAmount <= 0}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground gap-2 py-6 text-lg"
              >
                <Heart className="w-5 h-5" />
                Proceed to Payment
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                You will receive an email receipt confirming your donation.
              </p>
            </CardContent>
          </Card>

          {/* Transparency Section */}
          <Card className="mt-8 bg-muted/30">
            <CardHeader>
              <CardTitle className="text-lg">Where Your Money Goes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span>Programs & Services</span>
                <span className="font-semibold">70%</span>
              </div>
              <div className="flex justify-between">
                <span>Operations & Administration</span>
                <span className="font-semibold">20%</span>
              </div>
              <div className="flex justify-between">
                <span>Fundraising & Outreach</span>
                <span className="font-semibold">10%</span>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                We are committed to transparency. For detailed financial reports, please contact us at info@bigisha.org
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
