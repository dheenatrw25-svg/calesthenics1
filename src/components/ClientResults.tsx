import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ClientResults() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const transformations = [
    {
      name: 'Rahul S.',
      result: 'Lost 15kg in 8 weeks',
      testimonial: 'Zero Machine changed my life. The coaches are incredible and the results speak for themselves.',
      before: 'https://images.pexels.com/photos/6456304/pexels-photo-6456304.jpeg?auto=compress&cs=tinysrgb&w=400',
      after: 'https://images.pexels.com/photos/4753988/pexels-photo-4753988.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Priya M.',
      result: 'Gained 8kg lean muscle',
      testimonial: 'I never thought I could get this strong without machines. This program proved me wrong!',
      before: 'https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=400',
      after: 'https://images.pexels.com/photos/3775566/pexels-photo-3775566.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Arjun K.',
      result: 'Achieved first handstand',
      testimonial: 'From zero to handstand in 2 months. The progressive approach works!',
      before: 'https://images.pexels.com/photos/6456315/pexels-photo-6456315.jpeg?auto=compress&cs=tinysrgb&w=400',
      after: 'https://images.pexels.com/photos/6455927/pexels-photo-6455927.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % transformations.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + transformations.length) % transformations.length);
  };

  return (
    <section id="transformations" className="py-20 md:py-32 bg-gradient-to-b from-[#0D1330] to-[#0A0F24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Client <span className="text-[#00BFFF]">Transformations</span>
          </h2>
          <p className="text-2xl text-[#00BFFF] font-semibold italic mb-4">
            "Proof that you don't need machines — you are the machine."
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="bg-[#0A0F24] border border-gray-800 rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="space-y-4">
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <img
                    src={transformations[currentSlide].before}
                    alt="Before"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-lg font-bold">
                    BEFORE
                  </div>
                </div>
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <img
                    src={transformations[currentSlide].after}
                    alt="After"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#00BFFF] text-white px-4 py-2 rounded-lg font-bold">
                    AFTER
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <h3 className="text-3xl font-bold mb-2">{transformations[currentSlide].name}</h3>
                  <p className="text-[#00BFFF] text-xl font-semibold">{transformations[currentSlide].result}</p>
                </div>
                <p className="text-gray-300 text-lg italic">
                  "{transformations[currentSlide].testimonial}"
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="bg-[#00BFFF] hover:bg-[#0099CC] text-white p-3 rounded-full transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="bg-[#00BFFF] hover:bg-[#0099CC] text-white p-3 rounded-full transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {transformations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-[#00BFFF]' : 'bg-gray-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
