import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { usePortfolioStore } from '../store/usePortfolioStore';

export default function Navbar() {
  const { isMenuOpen, toggleMenu } = usePortfolioStore();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-12">
            <Link to="/" className="text-2xl font-bold tracking-tight">DEV PORTFOLIO</Link>
            <div className="hidden md:flex space-x-8">
              <Link
                to="/"
                className={`transition-colors font-medium ${isActive('/') ? 'text-black' : 'text-gray-700 hover:text-black'}`}
              >
                Home
              </Link>
              <Link
                to="/portfolio"
                className={`transition-colors font-medium ${isActive('/portfolio') ? 'text-black' : 'text-gray-700 hover:text-black'}`}
              >
                Portfolio
              </Link>
              <Link
                to="/contact"
                className={`transition-colors font-medium ${isActive('/contact') ? 'text-black' : 'text-gray-700 hover:text-black'}`}
              >
                Contact
              </Link>
            </div>
          </div>
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-fadeIn">
          <div className="px-4 py-6 space-y-4">
            <Link to="/" className="block text-gray-700 hover:text-black transition-colors font-medium py-2" onClick={toggleMenu}>Home</Link>
            <Link to="/portfolio" className="block text-gray-700 hover:text-black transition-colors font-medium py-2" onClick={toggleMenu}>Portfolio</Link>
            <Link to="/contact" className="block text-gray-700 hover:text-black transition-colors font-medium py-2" onClick={toggleMenu}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
