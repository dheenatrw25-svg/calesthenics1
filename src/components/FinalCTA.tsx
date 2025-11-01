export default function FinalCTA() {
  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-[#0D1330] via-[#0A0F24] to-[#000000] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/4753986/pexels-photo-4753986.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          You Don't Need Machines —
          <br />
          <span className="text-[#00BFFF]">You Are The Machine</span>
        </h2>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Your transformation starts today. Join hundreds of others who have
          already discovered the power of progressive bodyweight training.
        </p>

        <button className="bg-[#00BFFF] text-white px-12 py-5 rounded-lg text-2xl font-bold hover:bg-[#0099CC] transition-all hover:scale-110 shadow-2xl shadow-[#00BFFF]/50">
          Start Now
        </button>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#00BFFF] rounded-full"></div>
            <span>No Equipment Needed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#00BFFF] rounded-full"></div>
            <span>Results in 2 Months</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#00BFFF] rounded-full"></div>
            <span>Expert Coaching</span>
          </div>
        </div>
      </div>
    </section>
  );
}
