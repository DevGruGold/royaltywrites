
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-1">
        <Header 
          title="Terms of Use"
          description="Please read these terms carefully before using our platform."
          showCTA={false}
        />
        
        <div className="container mx-auto px-4 mb-16">
          <div className="bg-card rounded-lg border p-6 shadow-sm">
            <div className="prose prose-sm md:prose-base max-w-none">
              <h2 className="text-2xl font-bold">SNL Ideas Terms of Use Agreement</h2>
              <p>Last updated: April 10, 2025</p>
              
              <h3 className="text-xl font-bold mt-6">1. Acceptance of Terms</h3>
              <p>
                By accessing and using the SNL Ideas platform ("Service"), you agree to be bound by these Terms of Use 
                ("Terms"). If you do not agree to these Terms, you may not use the Service.
              </p>
              
              <h3 className="text-xl font-bold mt-6">2. Description of Service</h3>
              <p>
                SNL Ideas is a platform for comedy writers to share sketch ideas, receive feedback, 
                and potentially have their work recognized and monetized. The Service includes all content, 
                features, and functionality offered through our website and related applications.
              </p>
              
              <h3 className="text-xl font-bold mt-6">3. User Accounts</h3>
              <p>
                To use certain features of the Service, you must create an account. You are responsible 
                for maintaining the confidentiality of your account information and for all activities 
                that occur under your account. You agree to:
              </p>
              <ul className="list-disc pl-5 my-4">
                <li>Provide accurate and complete information when creating your account</li>
                <li>Update your information to keep it accurate and current</li>
                <li>Secure your account credentials and not share them with others</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
              </ul>
              
              <h3 className="text-xl font-bold mt-6">4. User Content</h3>
              <p>
                The Service allows you to submit, post, and share content, including but not limited 
                to sketch ideas, scripts, comments, and feedback ("User Content"). By submitting 
                User Content, you grant us certain rights as detailed in our Contributor Agreement & 
                Royalty Contract.
              </p>
              <p>
                You represent and warrant that:
              </p>
              <ul className="list-disc pl-5 my-4">
                <li>You own or have the necessary rights to the User Content you submit</li>
                <li>Your User Content does not infringe upon the intellectual property rights of any third party</li>
                <li>Your User Content does not violate any laws or regulations</li>
                <li>Your User Content complies with these Terms and any applicable community guidelines</li>
              </ul>
              
              <h3 className="text-xl font-bold mt-6">5. Prohibited Content</h3>
              <p>
                You may not submit, post, or share User Content that:
              </p>
              <ul className="list-disc pl-5 my-4">
                <li>Is illegal, harmful, threatening, abusive, harassing, defamatory, or otherwise objectionable</li>
                <li>Infringes upon any patent, trademark, trade secret, copyright, or other proprietary rights</li>
                <li>Contains software viruses or any other code designed to interrupt, destroy, or limit the functionality of any computer software or hardware</li>
                <li>Impersonates any person or entity or falsely states or misrepresents your affiliation with a person or entity</li>
              </ul>
              
              <h3 className="text-xl font-bold mt-6">6. Intellectual Property</h3>
              <p>
                The Service and its original content, features, and functionality are owned by SNL Ideas 
                and are protected by international copyright, trademark, patent, trade secret, and other 
                intellectual property laws. Our intellectual property may not be used in connection with 
                any product or service without our prior written consent.
              </p>
              <p>
                User Content intellectual property rights are governed by our Contributor Agreement & 
                Royalty Contract.
              </p>
              
              <h3 className="text-xl font-bold mt-6">7. Termination</h3>
              <p>
                We may terminate or suspend your account and bar access to the Service immediately, 
                without prior notice or liability, for any reason whatsoever, including without 
                limitation if you breach the Terms.
              </p>
              
              <h3 className="text-xl font-bold mt-6">8. Limitation of Liability</h3>
              <p>
                In no event shall SNL Ideas, nor its directors, employees, partners, agents, suppliers, 
                or affiliates, be liable for any indirect, incidental, special, consequential, or punitive 
                damages, including without limitation, loss of profits, data, use, goodwill, or other 
                intangible losses, resulting from:
              </p>
              <ul className="list-disc pl-5 my-4">
                <li>Your access to or use of or inability to access or use the Service</li>
                <li>Any conduct or content of any third party on the Service</li>
                <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
                <li>Any interruption or cessation of transmission to or from the Service</li>
              </ul>
              
              <h3 className="text-xl font-bold mt-6">9. Changes to Terms</h3>
              <p>
                We reserve the right to modify or replace these Terms at any time. It is your 
                responsibility to review these Terms periodically for changes. Your continued 
                use of the Service following the posting of any changes constitutes acceptance 
                of those changes.
              </p>
              
              <h3 className="text-xl font-bold mt-6">10. Governing Law</h3>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of 
                the United States and the State of New York, without regard to its conflict of 
                law provisions.
              </p>
              
              <h3 className="text-xl font-bold mt-6">11. Contact Us</h3>
              <p>
                If you have any questions about these Terms, please contact us at legal@snlideas.com.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
