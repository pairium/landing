import { Nav } from "@/components/nav"

export default function PrivacyPolicy() {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-3xl px-4 sm:px-6">
            <div className="space-y-6">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Privacy Policy</h1>
              <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">1. Introduction</h2>
                <p>
                  This Privacy Policy describes how Harang Ju handles your privacy when you visit this website.
                </p>

                <h2 className="text-2xl font-semibold">2. Information Collection</h2>
                <p>
                  We do not collect any personal information from visitors to our website. Our website is purely informational and does not require any user registration or data collection.
                </p>

                <h2 className="text-2xl font-semibold">3. Cookies and Tracking</h2>
                <p>
                  We do not use cookies or any tracking technologies on our website.
                </p>

                <h2 className="text-2xl font-semibold">4. Third-Party Services</h2>
                <p>
                  We do not use any third-party services that would collect information about our visitors.
                </p>

                <h2 className="text-2xl font-semibold">5. Changes to This Policy</h2>
                <p>
                  We reserve the right to update this privacy policy at any time. Any changes will be posted on this page with an updated revision date.
                </p>

                <h2 className="text-2xl font-semibold">6. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
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