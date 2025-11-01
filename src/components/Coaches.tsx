export default function Coaches() {
  const coaches = [
    {
      name: 'Alex Rivera',
      specialty: 'Strength & Muscle Gain',
      quote: 'Your potential is limitless when you master your own bodyweight.',
      image: 'https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Maya Chen',
      specialty: 'Weight Loss & Conditioning',
      quote: 'Transformation begins the moment you decide to start.',
      image: 'https://images.pexels.com/photos/3775540/pexels-photo-3775540.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Jordan Banks',
      specialty: 'Flexibility & Advanced Skills',
      quote: 'Every rep brings you closer to the best version of yourself.',
      image: 'https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <section id="coaches" className="py-20 md:py-32 bg-[#0D1330]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Your <span className="text-[#00BFFF]">Coaches</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Train with certified experts who have transformed hundreds of lives
            through progressive calisthenics.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {coaches.map((coach, index) => (
            <div
              key={index}
              className="group bg-[#0A0F24] rounded-xl overflow-hidden border border-gray-800 hover:border-[#00BFFF] transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#00BFFF]/20"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F24] via-[#0A0F24]/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{coach.name}</h3>
                <p className="text-[#00BFFF] font-semibold mb-4">{coach.specialty}</p>
                <p className="text-gray-400 italic">"{coach.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
