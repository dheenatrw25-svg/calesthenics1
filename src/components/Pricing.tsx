import { Check, Star } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '₹4,999',
      period: '/month',
      features: [
        'Access to group workouts',
        'Weekly check-ins',
        'WhatsApp support',
        'Basic nutrition guide',
        'Community access',
      ],
      popular: false,
    },
    {
      name: 'Pro',
      price: '₹7,999',
      period: '/month',
      features: [
        'Everything in Starter',
        '1-on-1 coaching + video calls',
        'Personalized nutrition plan',
        'Progress photos & tracking',
        'Priority support',
        'Monthly body composition analysis',
      ],
      popular: true,
    },
    {
      name: 'Elite',
      price: '₹11,999',
      period: '/month',
      features: [
        'Everything in Pro',
        'Custom transformation roadmap',
        'Private training sessions',
        'Priority support 24/7',
        'Lifetime community access',
        'Advanced skill workshops',
        'Recovery & mobility sessions',
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 bg-[#0A0F24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your <span className="text-[#00BFFF]">Transformation</span> Plan
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Invest in yourself. Every plan includes access to expert coaches and
            our proven 2-month transformation program.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-[#0D1330] rounded-2xl p-8 border-2 transition-all hover:scale-105 ${
                plan.popular
                  ? 'border-[#00BFFF] shadow-2xl shadow-[#00BFFF]/30'
                  : 'border-gray-800 hover:border-[#00BFFF]/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#00BFFF] text-white px-6 py-2 rounded-full font-bold flex items-center gap-2">
                    <Star size={16} fill="currentColor" />
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-[#00BFFF]">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="text-[#00BFFF] flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-lg font-bold text-lg transition-all ${
                  plan.popular
                    ? 'bg-[#00BFFF] text-white hover:bg-[#0099CC] shadow-lg shadow-[#00BFFF]/30'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Select {plan.name}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#00BFFF] text-white px-10 py-4 rounded-lg text-xl font-bold hover:bg-[#0099CC] transition-all hover:scale-105 shadow-lg shadow-[#00BFFF]/30">
            Start My Transformation
          </button>
        </div>
      </div>
    </section>
  );
}
