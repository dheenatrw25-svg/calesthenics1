export default function Footer() {
  return (
    <footer className="bg-[#000000] py-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              ZERO <span className="text-[#00BFFF]">MACHINE</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Transform your body through progressive bodyweight training.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#about" className="hover:text-[#00BFFF] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#program" className="hover:text-[#00BFFF] transition-colors">
                  Program
                </a>
              </li>
              <li>
                <a href="#coaches" className="hover:text-[#00BFFF] transition-colors">
                  Coaches
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#00BFFF] transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Email: info@zeromachine.fit</li>
              <li>Phone: +91 98765 43210</li>
              <li>Location: Mumbai, India</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Hours</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Monday - Friday: 6am - 10pm</li>
              <li>Saturday: 7am - 8pm</li>
              <li>Sunday: 8am - 6pm</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Zero Machine. All rights reserved.</p>
          <p className="mt-2">You don't need machines — you are the machine.</p>
        </div>
      </div>
    </footer>
  );
}
