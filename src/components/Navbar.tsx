import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  scrolled: boolean;
}

export default function Navbar({ scrolled }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0A0F24] shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold tracking-wider">
              ZERO <span className="text-[#00BFFF]">MACHINE</span>
            </h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('programs')}
                className="hover:text-[#00BFFF] transition-colors font-medium"
              >
                Programs
              </button>
              <button
                onClick={() => scrollToSection('mentorship')}
                className="hover:text-[#00BFFF] transition-colors font-medium"
              >
                Mentorship
              </button>
              <button
                onClick={() => scrollToSection('transformations')}
                className="hover:text-[#00BFFF] transition-colors font-medium"
              >
                Transformations
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="hover:text-[#00BFFF] transition-colors font-medium"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-[#00BFFF] text-white px-6 py-2 rounded-lg hover:bg-[#0099CC] transition-colors font-medium"
              >
                Start My Transformation
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0F24] border-t border-gray-800">
          <div className="px-4 pt-4 pb-6 space-y-4">
            <button
              onClick={() => scrollToSection('programs')}
              className="block w-full text-left py-2 hover:text-[#00BFFF] transition-colors font-medium"
            >
              Programs
            </button>
            <button
              onClick={() => scrollToSection('mentorship')}
              className="block w-full text-left py-2 hover:text-[#00BFFF] transition-colors font-medium"
            >
              Mentorship
            </button>
            <button
              onClick={() => scrollToSection('transformations')}
              className="block w-full text-left py-2 hover:text-[#00BFFF] transition-colors font-medium"
            >
              Transformations
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left py-2 hover:text-[#00BFFF] transition-colors font-medium"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full bg-[#00BFFF] text-white px-6 py-3 rounded-lg hover:bg-[#0099CC] transition-colors font-medium mt-4"
            >
              Start My Transformation
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
