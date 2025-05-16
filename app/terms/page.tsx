import { Nav } from "@/components/nav"

export default function TermsOfService() {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-3xl px-4 sm:px-6">
            <div className="space-y-6">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Terms of Service</h1>
              <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
                <p>
                  By accessing or using this website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
                </p>

                <h2 className="text-2xl font-semibold">2. Website Content</h2>
                <p>
                  This website is provided by Harang Ju for informational purposes only. All content on this website is the property of Harang Ju and is protected by copyright laws.
                </p>

                <h2 className="text-2xl font-semibold">3. No Data Collection</h2>
                <p>
                  We do not collect any personal information from visitors to our website. Our website is purely informational and does not require any user registration or data collection.
                </p>

                <h2 className="text-2xl font-semibold">4. Intellectual Property</h2>
                <p>
                  The website and its original content, features, and functionality are owned by Harang Ju and are protected by international copyright, trademark, and other intellectual property laws.
                </p>

                <h2 className="text-2xl font-semibold">5. Limitation of Liability</h2>
                <p>
                  Harang Ju shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the website.
                </p>

                <h2 className="text-2xl font-semibold">6. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these terms at any time. We will notify users of any changes by updating the "Last updated" date at the top of these terms.
                </p>

                <h2 className="text-2xl font-semibold">7. Contact Information</h2>
                <p>
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <p className="text-muted-foreground">
                  Email: digital@mit.edu
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 