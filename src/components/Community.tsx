import { Instagram, Youtube, MessageCircle } from 'lucide-react';

export default function Community() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-[#0A0F24] to-[#0D1330]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join the <span className="text-[#00BFFF]">Community</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Train together, grow together. Connect with fellow athletes, share
            your progress, and stay motivated every step of the way.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#"
              className="group flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
            >
              <Instagram size={24} />
              <span>Follow on Instagram</span>
            </a>
            <a
              href="#"
              className="group flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
            >
              <Youtube size={24} />
              <span>Subscribe on YouTube</span>
            </a>
            <a
              href="#"
              className="group flex items-center gap-3 bg-[#00BFFF] hover:bg-[#0099CC] text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
            >
              <MessageCircle size={24} />
              <span>Join Telegram</span>
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00BFFF] mb-2">500+</div>
              <div className="text-gray-400">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00BFFF] mb-2">100+</div>
              <div className="text-gray-400">Transformations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00BFFF] mb-2">50+</div>
              <div className="text-gray-400">Workout Sessions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00BFFF] mb-2">4.9</div>
              <div className="text-gray-400">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
