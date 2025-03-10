import { useState, useEffect } from "react";
import testimonialsData from "../../shared/mock-testimonials.json";
import * as strings from "../../shared/mock-content.strings.json";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  testimonial: string;
  avatar: string;
}

const TestimonialsSlider = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    setTestimonials(testimonialsData);
  }, []);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const visibleTestimonials = testimonials.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto p-6 text-white mb-20">

      <h2 className="text-center font-bold text-4xl sm:text-6xl text-neutral-300 mb-8">
        {strings.testimonialsHelloBig}
      </h2>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full min-h-[60vh]">
        {visibleTestimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-neutral-800 p-6 sm:p-10 rounded-xl shadow-lg flex flex-col items-center justify-between text-center min-h-[300px] h-auto"
          >
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-primary-100 mb-4"
            />
            <p className="italic text-gray-300 text-lg sm:text-xl">
              "{testimonial.testimonial}"
            </p>
            <h3 className="font-bold text-xl sm:text-2xl mt-4">{testimonial.name}</h3>
            <p className="text-primary-300 text-md sm:text-lg">{testimonial.role}</p>
          </div>
        ))}
      </div>


      <div className="flex justify-center mt-8 space-x-3">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full transition-colors duration-300 ${index === currentPage ? "bg-neutral-300" : "bg-neutral-700"
              }`}
            onClick={() => setCurrentPage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSlider;
