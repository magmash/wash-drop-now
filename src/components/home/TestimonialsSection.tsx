
import React from 'react';

const testimonials = [
  {
    id: 1,
    quote: "SwiftWash has been a lifesaver for my Airbnb business. The 24-hour turnaround is perfect for quick guest changeovers.",
    author: "Sarah T.",
    role: "Airbnb Superhost",
  },
  {
    id: 2,
    quote: "As a busy professional, I don't have time for laundry. SwiftWash delivers spotless clothes right to my door.",
    author: "Michael K.",
    role: "Software Engineer",
  },
  {
    id: 3,
    quote: "During our vacation, we used SwiftWash to refresh our clothes. Fast, affordable, and such a convenient service!",
    author: "Emma L.",
    role: "Traveler",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="page-container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust SwiftWash with their laundry needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg p-6 border border-gray-100 card-shadow">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mb-4 text-gray-700 italic">"{testimonial.quote}"</blockquote>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
