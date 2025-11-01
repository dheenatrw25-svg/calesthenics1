import { CheckCircle, Dumbbell, TrendingUp, Trophy } from 'lucide-react';

export default function TransformationProgram() {
  const timeline = [
    {
      icon: CheckCircle,
      step: 'Assessment & Goal Setup',
      description: 'We analyze your starting point and set clear, achievable goals tailored to your vision.',
      number: '01',
    },
    {
      icon: Dumbbell,
      step: 'Custom Training Plan',
      description: 'Receive a personalized workout program designed for progressive strength gains.',
      number: '02',
    },
    {
      icon: TrendingUp,
      step: 'Weekly Progress Tracking',
      description: 'Monitor improvements in strength, body composition, and performance metrics.',
      number: '03',
    },
    {
      icon: Trophy,
      step: 'Visible Transformation',
      description: 'See tangible results in your body, strength, and confidence by week 8.',
      number: '04',
    },
  ];

  return (
    <section id="programs" className="py-20 md:py-32 bg-gradient-to-b from-[#0A0F24] to-[#0D1330]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Your 8-Week Path to a <span className="text-[#00BFFF]">New You</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Lose fat, build lean muscle, and master your body — guided step-by-step through our proven system.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {timeline.map((item, index) => (
            <div key={index} className="relative">
              <div className="bg-[#0D1330] border border-gray-800 rounded-xl p-6 hover:border-[#00BFFF]/50 transition-all h-full hover:shadow-lg hover:shadow-[#00BFFF]/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-[#00BFFF]/20 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#00BFFF] text-2xl font-bold">{item.number}</span>
                  </div>
                  <item.icon className="text-[#00BFFF] flex-shrink-0" size={28} />
                </div>
                <h3 className="text-lg font-bold mb-3">{item.step}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
              {index < timeline.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 border-t-2 border-gray-800 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#00BFFF]/20 to-[#00BFFF]/10 border border-[#00BFFF]/30 rounded-xl py-8 px-8 text-center">
          <p className="text-gray-300 mb-3">Real Results from Real People</p>
          <p className="text-[#00BFFF] text-2xl font-bold">
            100+ Transformations. 4.9★ Satisfaction. Proven 8-Week System.
          </p>
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#00BFFF] text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-[#0099CC] transition-all hover:scale-105 shadow-lg shadow-[#00BFFF]/30">
            Start My 2-Month Program
          </button>
        </div>
      </div>
    </section>
  );
}
