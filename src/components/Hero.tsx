import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/4753987/pexels-photo-4753987.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F24]/80 via-[#0A0F24]/70 to-[#0A0F24]"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight animate-fade-in leading-tight">
          Transform Your Body in <span className="text-[#00BFFF]">60 Days</span>
          <br />
          No Machines Needed.
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-12 font-medium max-w-2xl mx-auto">
          Join the 2-Month Bodyweight Transformation Program led by expert coaches. Build real strength, confidence, and physique — anywhere, anytime.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-[#00BFFF] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#0099CC] transition-all hover:scale-105 shadow-lg shadow-[#00BFFF]/30">
            Join the Program
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#0A0F24] transition-all hover:scale-105">
            Book Free Trial Call
          </button>
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer hover:text-[#00BFFF] transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown size={40} />
      </button>
    </section>
  );
}
