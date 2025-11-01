export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-[#0A0F24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              About <span className="text-[#00BFFF]">Zero Machine</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              We redefine fitness through functional calisthenics and bodyweight
              control. No machines, no gimmicks — just pure, progressive
              training that transforms your body from the inside out.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              At Zero Machine, we believe that your body is the ultimate piece
              of equipment. Our expert coaches guide you through a journey of
              strength, flexibility, and complete body mastery.
            </p>
            <div className="pt-4">
              <div className="inline-block bg-[#00BFFF]/10 border border-[#00BFFF] rounded-lg px-6 py-3">
                <p className="text-[#00BFFF] font-semibold">
                  Transform Your Body, No Machines Needed.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/4752861/pexels-photo-4752861.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Outdoor workout"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F24]/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
