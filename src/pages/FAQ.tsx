
import { useState } from "react";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const faqCategories = [
  {
    category: "Getting Started",
    questions: [
      {
        question: "How do I create an account?",
        answer: "To create an account, click the 'Sign Up' button in the top-right corner of the page. Fill in your email, create a password, and verify your email address to complete registration."
      },
      {
        question: "Is it free to submit sketch ideas?",
        answer: "Yes! Submitting sketch ideas to SNL Ideas is completely free. You only need to create an account and follow our formatting guidelines."
      },
      {
        question: "Do I need to be a professional writer to submit ideas?",
        answer: "Not at all! We welcome sketch ideas from writers of all experience levels. However, to qualify for royalties, you will need to follow our professional formatting guidelines."
      }
    ]
  },
  {
    category: "Submission Process",
    questions: [
      {
        question: "What is the required format for sketch submissions?",
        answer: "Sketches must include: specific named characters with descriptions (not generic), proper scene headings (INT./EXT., location, time of day), detailed action descriptions, and word-for-word dialogue. Visit our Copyright Standards page for complete guidelines."
      },
      {
        question: "Is there a limit to how many sketches I can submit?",
        answer: "Currently, we allow up to 10 sketch submissions per month for standard accounts. Premium members have unlimited submissions."
      },
      {
        question: "How long should my sketch be?",
        answer: "We recommend keeping sketches between 3-7 pages (approximately 3-8 minutes of performance time). This is the standard length for most comedy sketch shows."
      }
    ]
  },
  {
    category: "Royalties & Payments",
    questions: [
      {
        question: "How do I get paid if my sketch is used?",
        answer: "If your sketch is licensed or produced, you'll receive royalties according to our standard agreement: 5% of gross revenues, $200 per performance usage, and $500 for AI model licensing. Payments are processed monthly through your selected payment method."
      },
      {
        question: "How do you track when my sketch is used?",
        answer: "We use a combination of digital fingerprinting technology, content recognition systems, and industry partnership reporting to track usage of your content across various platforms."
      },
      {
        question: "What happens if someone uses my sketch without permission?",
        answer: "If we detect unauthorized usage, our legal team will take appropriate action to enforce your rights and secure compensation. You'll be notified through your dashboard of any detected infringement."
      }
    ]
  },
  {
    category: "Account Management",
    questions: [
      {
        question: "How do I update my profile information?",
        answer: "You can update your profile information by clicking on your profile icon in the top right corner, selecting 'Profile Settings,' and making the desired changes."
      },
      {
        question: "Can I delete a sketch after submitting it?",
        answer: "Yes, you can delete any sketch that hasn't been licensed yet. Go to your dashboard, find the sketch, and use the delete option. If a sketch has already been licensed, it cannot be removed from the platform."
      },
      {
        question: "How do I change my password?",
        answer: "To change your password, go to your account settings, select the 'Security' tab, and follow the instructions to update your password."
      }
    ]
  }
];

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFAQs, setFilteredFAQs] = useState(faqCategories);
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    
    if (!query) {
      setFilteredFAQs(faqCategories);
      return;
    }
    
    const filtered = faqCategories.map(category => {
      const matchingQuestions = category.questions.filter(
        q => q.question.toLowerCase().includes(query) || q.answer.toLowerCase().includes(query)
      );
      
      if (matchingQuestions.length > 0) {
        return {
          ...category,
          questions: matchingQuestions
        };
      }
      return null;
    }).filter(Boolean) as typeof faqCategories;
    
    setFilteredFAQs(filtered);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-1">
        <Header 
          title="Frequently Asked Questions"
          description="Find answers to common questions about submitting sketches, royalties, and using SNL Ideas."
          showCTA={false}
        />
        
        <div className="container mx-auto px-4 mb-16">
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for questions..."
                className="pl-10"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
          </div>
          
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-xl">No results found for "{searchQuery}"</p>
              <p className="text-muted-foreground mt-2">Try a different search term or browse all questions below</p>
            </div>
          ) : (
            filteredFAQs.map((category, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-2xl font-bold mb-4">{category.category}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, itemIndex) => (
                    <AccordionItem key={itemIndex} value={`${index}-${itemIndex}`}>
                      <AccordionTrigger className="text-left">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground">{item.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))
          )}
          
          <div className="max-w-2xl mx-auto mt-12 p-6 bg-muted rounded-lg">
            <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
            <p className="mb-4">If you couldn't find the answer you're looking for, our support team is here to help.</p>
            <p className="flex items-center gap-2">
              Contact us at <span className="font-medium">support@snlideas.com</span>
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;
