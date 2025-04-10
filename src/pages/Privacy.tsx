
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-1">
        <Header 
          title="Privacy Policy"
          description="How we collect, use, and protect your information."
          showCTA={false}
        />
        
        <div className="container mx-auto px-4 mb-16">
          <div className="bg-card rounded-lg border p-6 shadow-sm">
            <div className="prose prose-sm md:prose-base max-w-none">
              <h2 className="text-2xl font-bold">Privacy Policy</h2>
              <p>Last updated: April 10, 2025</p>
              
              <h3 className="text-xl font-bold mt-6">1. Introduction</h3>
              <p>
                SNL Ideas ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
                explains how we collect, use, disclose, and safeguard your information when you use our 
                website and services (collectively, the "Service").
              </p>
              <p>
                Please read this Privacy Policy carefully. If you do not agree with the terms of this 
                Privacy Policy, please do not access the Service.
              </p>
              
              <h3 className="text-xl font-bold mt-6">2. Information We Collect</h3>
              
              <h4 className="text-lg font-bold mt-4">2.1 Personal Data</h4>
              <p>
                We may collect personal information that you voluntarily provide when using our Service, 
                including but not limited to:
              </p>
              <ul className="list-disc pl-5 my-4">
                <li>Contact information (name, email address)</li>
                <li>Account credentials</li>
                <li>Profile information (username, biography, profile picture)</li>
                <li>Payment information for royalty disbursements</li>
                <li>Communications you send to us</li>
              </ul>
              
              <h4 className="text-lg font-bold mt-4">2.2 Usage Data</h4>
              <p>
                We may also collect information that your browser sends whenever you visit our Service or 
                access it through a device, such as:
              </p>
              <ul className="list-disc pl-5 my-4">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Pages of our Service that you visit</li>
                <li>Time and date of your visit</li>
                <li>Time spent on those pages</li>
                <li>Device identifiers</li>
              </ul>
              
              <h3 className="text-xl font-bold mt-6">3. How We Use Your Information</h3>
              <p>
                We may use the information we collect for various purposes, including to:
              </p>
              <ul className="list-disc pl-5 my-4">
                <li>Provide, maintain, and improve our Service</li>
                <li>Process transactions</li>
                <li>Send administrative information</li>
                <li>Respond to your comments and questions</li>
                <li>Send you updates about your account, our terms, or this privacy policy</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Protect the security and integrity of our Service</li>
                <li>Track and manage royalty payments for your content</li>
                <li>Comply with legal obligations</li>
              </ul>
              
              <h3 className="text-xl font-bold mt-6">4. Disclosure of Your Information</h3>
              <p>
                We may share your information in the following situations:
              </p>
              <ul className="list-disc pl-5 my-4">
                <li><strong>With Service Providers:</strong> We may share your information with third-party vendors who provide services on our behalf.</li>
                <li><strong>Business Transfers:</strong> We may share your information in connection with a merger, acquisition, or sale of all or a portion of our assets.</li>
                <li><strong>With Your Consent:</strong> We may disclose your information for any other purpose with your consent.</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information where required to comply with the law or legal process.</li>
              </ul>
              
              <h3 className="text-xl font-bold mt-6">5. Data Security</h3>
              <p>
                We implement appropriate technical and organizational measures to protect the security of your 
                personal information. However, please be aware that no method of transmission over the Internet 
                or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
              
              <h3 className="text-xl font-bold mt-6">6. Your Data Rights</h3>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, such as:
              </p>
              <ul className="list-disc pl-5 my-4">
                <li>The right to access the personal information we hold about you</li>
                <li>The right to request correction or deletion of your personal information</li>
                <li>The right to restrict or object to our processing of your personal information</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the information provided in the "Contact Us" section.
              </p>
              
              <h3 className="text-xl font-bold mt-6">7. Children's Privacy</h3>
              <p>
                Our Service is not intended for individuals under the age of 16. We do not knowingly collect 
                personal information from children under 16. If you are a parent or guardian and believe your 
                child has provided us with personal information, please contact us.
              </p>
              
              <h3 className="text-xl font-bold mt-6">8. Changes to This Privacy Policy</h3>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
                the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
              
              <h3 className="text-xl font-bold mt-6">9. Contact Us</h3>
              <p>
                If you have questions about this Privacy Policy, please contact us at privacy@snlideas.com.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
