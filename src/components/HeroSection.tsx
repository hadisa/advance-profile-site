import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <section id="home" className="relative pt-20 pb-32 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNHYyaDJ2LTJoLTJ6bS0yLTJ2Mmgydi0yaC0yem0wLTJ2Mmgydi0yaC0yem0tMiAydjJoMnYtMmgtMnptMi0ydjJoMnYtMmgtMnptMCAydjJoMnYtMmgtMnptMiAydjJoMnYtMmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fadeInUp">
            <div className="inline-block">
              <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
                Full Stack Developer
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              BUILD YOUR
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                DREAM PROJECT
              </span>
            </h1>

            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                CREATE STUNNING WEB EXPERIENCES
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                Discover cutting-edge development solutions and build your
                next big project with our expertise and innovative approach.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => navigate('/portfolio')}
                className="group bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Explore Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="bg-white text-black px-8 py-4 rounded-full font-medium border-2 border-black hover:bg-black hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Contact Me
              </button>
            </div>
          </div>

          <div className="relative animate-fadeInRight">
            <div className="absolute top-10 right-10 bg-black text-white p-6 rounded-2xl shadow-2xl animate-float">
              <div className="text-4xl font-bold">15K+</div>
              <div className="text-sm text-gray-300">Lines of Code</div>
            </div>

            <div className="relative bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 rounded-[3rem] overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="aspect-[4/5] bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
                <div className="relative z-10 text-center p-8">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-orange-400 to-pink-500 rounded-full mb-6 flex items-center justify-center text-6xl shadow-2xl animate-pulse">
                    👨‍💻
                  </div>
                  <div className="text-white text-2xl font-bold">Developer</div>
                  <div className="text-gray-300 text-sm mt-2">React • TypeScript • Node.js</div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-10 left-10 bg-white p-4 rounded-2xl shadow-2xl animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-2xl">
                  ✓
                </div>
                <div>
                  <div className="font-bold text-sm">Projects Done</div>
                  <div className="text-2xl font-bold">50+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-white rounded-t-[3rem] sm:rounded-t-[5rem]"></div>
    </section>
  );
}
