import { AlertCircle, Zap, CheckCircle2 } from 'lucide-react';

export default function PainPromiseProof() {
  return (
    <section className="py-20 md:py-32 bg-[#0A0F24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#0D1330] rounded-2xl p-8 border border-gray-800 hover:border-red-500/30 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="text-red-500" size={32} />
              <h3 className="text-2xl font-bold">The Problem</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Tired of gym routines that burn your motivation faster than calories? Most fitness programs rely on fancy machines and fad diets that don't deliver lasting results.
            </p>
          </div>

          <div className="bg-[#0D1330] rounded-2xl p-8 border border-gray-800 hover:border-[#00BFFF]/30 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="text-[#00BFFF]" size={32} />
              <h3 className="text-2xl font-bold">The Promise</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Zero Machine's 2-Month Program builds real strength, confidence, and physique — anywhere, anytime, using only your body. No gimmicks, just proven results.
            </p>
          </div>

          <div className="bg-[#0D1330] rounded-2xl p-8 border border-gray-800 hover:border-green-500/30 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 className="text-green-500" size={32} />
              <h3 className="text-2xl font-bold">The Proof</h3>
            </div>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                <span className="text-green-500 font-bold">100+</span> successful transformations
              </p>
              <p className="text-lg">
                <span className="text-green-500 font-bold">4.9★</span> satisfaction rating
              </p>
              <p className="text-lg">
                <span className="text-green-500 font-bold">Proven</span> 8-week system
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
