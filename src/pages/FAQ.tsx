
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: "How does SwiftWash work?",
    answer: "SwiftWash is a laundry service that picks up your dirty laundry, cleans it according to your preferences, and delivers it back to you within 24 hours. Simply schedule a pickup through our website or app, and we'll handle the rest."
  },
  {
    question: "What areas do you service?",
    answer: "We currently serve major metropolitan areas including New York, Los Angeles, Chicago, San Francisco, and Miami. We're constantly expanding, so check back if your area isn't listed yet!"
  },
  {
    question: "How much does it cost?",
    answer: "Our regular wash & fold service starts at €1.99 per kg with a minimum of 5 kg. Express service is available at €2.99 per kg. Special packages are available for Airbnb hosts and business travelers. View our full pricing page for details."
  },
  {
    question: "How is my laundry weighed?",
    answer: "Your laundry is weighed when dry before washing. We use certified scales to ensure accurate measurement, and you'll receive a detailed receipt showing the weight and cost breakdown."
  },
  {
    question: "Can I specify preferences for my laundry?",
    answer: "Absolutely! During booking, you can specify preferences like hang drying delicate items, using fragrance-free detergent, water temperature, and any special instructions for specific garments."
  },
  {
    question: "What if I have delicate items or special care instructions?",
    answer: "We handle delicate items with extra care. You can specify special care instructions during booking, and we'll follow them accordingly. For very special items, we recommend our dry cleaning service."
  },
  {
    question: "How quickly will I get my laundry back?",
    answer: "Our standard turnaround time is 24 hours. If you need it faster, our express service can often provide same-day service when booked before noon, depending on availability in your area."
  },
  {
    question: "Do I need to be home for pickup and delivery?",
    answer: "No, you don't need to be home. You can leave your laundry in a secure location and let us know where to find it and where to leave it. We also offer doorman handoff for apartment buildings."
  },
  {
    question: "Is there a minimum order?",
    answer: "Yes, our minimum order is 5 kg for regular service and 4 kg for express service. Most household laundry easily meets these minimums."
  },
  {
    question: "How do I pay for the service?",
    answer: "We accept all major credit cards, Apple Pay, and Google Pay. Payment is processed securely after your order is completed. First-time users can check out as guests, or create an account for easier repeat orders."
  },
  {
    question: "What happens if something is damaged or lost?",
    answer: "We treat your items with the utmost care, but if something is damaged or lost, we have a clear claims process. Contact our customer service within 48 hours of delivery, and we'll work with you to make it right."
  },
  {
    question: "Can I cancel or reschedule my pickup?",
    answer: "Yes, you can reschedule or cancel your pickup up to 2 hours before the scheduled time without any charge. Changes made with less notice may incur a small fee."
  }
];

const FAQ = () => {
  return (
    <PageLayout>
      <div className="bg-primary bg-opacity-5 py-12">
        <div className="page-container text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Find answers to the most common questions about our laundry service.
          </p>
        </div>
      </div>
      
      <div className="page-container py-12">
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Please contact our friendly support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button>Contact Support</Button>
              </Link>
              <Link to="/booking">
                <Button variant="outline">Book a Pickup</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default FAQ;
