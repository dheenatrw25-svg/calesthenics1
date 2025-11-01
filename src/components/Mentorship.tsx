import { ArrowRight } from 'lucide-react';

export default function Mentorship() {
  const benefits = [
    { text: '100+ Clients Transformed', highlight: '100+' },
    { text: 'Avg. 6kg Fat Loss / 2 Months', highlight: '6kg' },
    { text: '95% Retention Rate', highlight: '95%' },
  ];

  return (
    <section id="mentorship" className="py-20 md:py-32 bg-[#0D1330]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 md:order-1">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/4753985/pexels-photo-4753985.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="1-to-1 mentorship training"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F24]/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-md rounded-lg p-4">
                    <p className="text-white text-sm">
                      <span className="text-[#00BFFF] font-bold">{benefit.highlight}</span> {benefit.text.replace(benefit.highlight, '')}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 space-y-8">
            <div>
              <p className="text-[#00BFFF] font-semibold text-lg mb-2">Premium Option</p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Work Directly with Your <span className="text-[#00BFFF]">Coach</span>
              </h2>
              <p className="text-xl text-gray-300">
                Personal mentorship for faster results, full accountability, and real transformation.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Stop Guessing. Start Growing.</h3>
                <p className="text-gray-300">
                  Our mentors create your weekly plan and check progress daily, keeping you on track and accountable.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">Imagine Walking Into Every Workout Knowing Exactly What to Do</h3>
                <p className="text-gray-300">
                  No confusion, no wasted effort. Every rep is purposeful, every session moves you closer to your goal.
                </p>
              </div>

              <div className="pt-4">
                <button className="flex items-center gap-3 bg-[#00BFFF] text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-[#0099CC] transition-all hover:scale-105 shadow-lg shadow-[#00BFFF]/30 group">
                  Book 1-to-1 Mentorship Call
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
