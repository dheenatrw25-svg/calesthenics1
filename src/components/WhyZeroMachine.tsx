import { Users, TrendingUp, BarChart3 } from 'lucide-react';

export default function WhyZeroMachine() {
  return (
    <section id="programs" className="py-20 md:py-32 bg-gradient-to-b from-[#0A0F24] to-[#0D1330]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Why <span className="text-[#00BFFF]">Zero Machine</span> Works
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">The Problem with Traditional Fitness</h3>
                <p className="text-gray-300 text-lg">
                  Most fitness programs rely on fancy machines and fad diets. They ignore the fundamentals — your body, your mindset, your consistency.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Our Solution</h3>
                <p className="text-gray-300 text-lg">
                  At Zero Machine, we strip fitness back to the core — bodyweight mastery. Every session trains strength, balance, and control.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-6">What You Get</h3>
                <div className="flex items-start gap-4">
                  <Users className="text-[#00BFFF] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-lg">Expert 1-to-1 Mentorship</p>
                    <p className="text-gray-400">Personalized coaching from certified experts</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <TrendingUp className="text-[#00BFFF] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-lg">Weekly Check-ins</p>
                    <p className="text-gray-400">Consistent accountability and progress tracking</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <BarChart3 className="text-[#00BFFF] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-lg">Personal Progress Dashboard</p>
                    <p className="text-gray-400">Track every metric that matters</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/4753991/pexels-photo-4753991.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Coach training client"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F24]/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white text-lg italic">
                  "The only limitation you face is the one you've accepted."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
