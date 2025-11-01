import { MapPin, Mail, Phone } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    goal: 'general',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! We'll contact you soon.`);
    setFormData({ name: '', email: '', goal: 'general' });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-[#0A0F24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-[#00BFFF]">Transform?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Take the first step today. Book your free trial session and meet our coaches.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="text-[#00BFFF] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-400">info@zeromachine.fit</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-[#00BFFF] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-400">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="text-[#00BFFF] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-gray-400">Chennai, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Hours</h3>
              <div className="space-y-2 text-gray-300">
                <p>Monday - Friday: 6:00 AM - 10:00 PM</p>
                <p>Saturday: 7:00 AM - 8:00 PM</p>
                <p>Sunday: 8:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          <div className="bg-[#0D1330] border border-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Book Your Free Trial Session</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#0A0F24] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00BFFF] transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#0A0F24] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00BFFF] transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Your Goal</label>
                <select
                  name="goal"
                  value={formData.goal}
                  onChange={handleChange}
                  className="w-full bg-[#0A0F24] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00BFFF] transition-colors"
                >
                  <option value="lose-weight">Lose Weight</option>
                  <option value="gain-muscle">Gain Muscle</option>
                  <option value="general">General Fitness</option>
                  <option value="strength">Increase Strength</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-[#00BFFF] text-white py-3 rounded-lg text-lg font-bold hover:bg-[#0099CC] transition-all hover:scale-105"
              >
                Book My Free Trial Session
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
