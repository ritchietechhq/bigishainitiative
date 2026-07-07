import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import { Card, CardContent } from "@/components/ui/card";

interface LegalPageProps {
  type: "privacy" | "terms" | "donation-policy";
}

export default function LegalPages({ type }: LegalPageProps) {
  const getTitle = () => {
    switch (type) {
      case "privacy":
        return "Privacy Policy";
      case "terms":
        return "Terms of Use";
      case "donation-policy":
        return "Donation & Refund Policy";
      default:
        return "Legal";
    }
  };

  const getContent = () => {
    switch (type) {
      case "privacy":
        return (
          <div className="space-y-6">
            <section>
              <h3 className="text-xl font-bold mb-3">1. Introduction</h3>
              <p>
                BIG ISHA Initiative ("we", "us", "our", or "Organization") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>
            </section>
            <section>
              <h3 className="text-xl font-bold mb-3">2. Information We Collect</h3>
              <p>
                We may collect information about you in a variety of ways. The information we may collect on the site includes:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                <li>Personal identification information (name, email address, phone number)</li>
                <li>Donation information (amount, frequency, payment method)</li>
                <li>Volunteer and application form data</li>
                <li>Usage data and analytics</li>
              </ul>
            </section>
            <section>
              <h3 className="text-xl font-bold mb-3">3. Use of Your Information</h3>
              <p>
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the site to:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                <li>Process your donations and send receipts</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send periodic emails regarding your donation or volunteer status</li>
                <li>Improve our website and services</li>
              </ul>
            </section>
            <section>
              <h3 className="text-xl font-bold mb-3">4. Protection of Your Information</h3>
              <p>
                Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems and are required to keep the information confidential.
              </p>
            </section>
            <section>
              <h3 className="text-xl font-bold mb-3">5. Contact Us</h3>
              <p>
                If you have questions or comments about this Privacy Policy, please contact us at: info@bigisha.org
              </p>
            </section>
          </div>
        );
      case "terms":
        return (
          <div className="space-y-6">
            <section>
              <h3 className="text-xl font-bold mb-3">1. Agreement to Terms</h3>
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>
            <section>
              <h3 className="text-xl font-bold mb-3">2. Use License</h3>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on BIG ISHA Initiative's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                <li>Modifying or copying the materials</li>
                <li>Using the materials for any commercial purpose or for any public display</li>
                <li>Attempting to decompile or reverse engineer any software contained on the website</li>
                <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
              </ul>
            </section>
            <section>
              <h3 className="text-xl font-bold mb-3">3. Disclaimer</h3>
              <p>
                The materials on BIG ISHA Initiative's website are provided on an 'as is' basis. BIG ISHA Initiative makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>
            <section>
              <h3 className="text-xl font-bold mb-3">4. Limitations</h3>
              <p>
                In no event shall BIG ISHA Initiative or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on BIG ISHA Initiative's website.
              </p>
            </section>
          </div>
        );
      case "donation-policy":
        return (
          <div className="space-y-6">
            <section>
              <h3 className="text-xl font-bold mb-3">1. Donation Policy</h3>
              <p>
                BIG ISHA Initiative is grateful for your generous support. This policy outlines how we handle donations and refunds.
              </p>
            </section>
            <section>
              <h3 className="text-xl font-bold mb-3">2. Types of Donations</h3>
              <p>
                We accept the following types of donations:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                <li>One-time donations via Paystack or Flutterwave</li>
                <li>Recurring monthly donations</li>
                <li>Bank transfers to our designated account</li>
                <li>In-kind donations (subject to approval)</li>
              </ul>
            </section>
            <section>
              <h3 className="text-xl font-bold mb-3">3. Donation Receipts</h3>
              <p>
                All donors will receive an email receipt confirming their donation. The receipt includes the donation amount, date, and information about how the funds will be used.
              </p>
            </section>
            <section>
              <h3 className="text-xl font-bold mb-3">4. Refund Policy</h3>
              <p>
                Donations are generally non-refundable. However, if you believe a donation was made in error or if there are extenuating circumstances, please contact us within 30 days of your donation. We will review your request and respond within 5 business days.
              </p>
            </section>
            <section>
              <h3 className="text-xl font-bold mb-3">5. Use of Funds</h3>
              <p>
                All donations are used to support our programs and initiatives as described on our website. We maintain transparency about how funds are allocated and provide annual impact reports to donors upon request.
              </p>
            </section>
            <section>
              <h3 className="text-xl font-bold mb-3">6. Contact Us</h3>
              <p>
                For questions about donations or refunds, please contact: info@bigisha.org
              </p>
            </section>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Layout>
      <HeroSection title={getTitle()} subtitle="Read our policies and terms" />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card>
            <CardContent className="pt-8 prose prose-sm max-w-none">
              <div className="text-foreground leading-relaxed">
                {getContent()}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}

