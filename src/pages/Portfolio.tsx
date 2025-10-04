import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'web', 'mobile', 'design', 'fullstack'];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'fullstack',
      description: 'Full-featured online shopping platform with payment integration, inventory management, and admin dashboard.',
      image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'web',
      description: 'Collaborative task management tool with real-time updates, team workspaces, and analytics.',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Firebase', 'Tailwind'],
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Fitness Tracking App',
      category: 'mobile',
      description: 'Mobile app for tracking workouts, nutrition, and fitness goals with social features.',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React Native', 'Express', 'MongoDB'],
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      category: 'design',
      description: 'Modern, responsive portfolio website with smooth animations and interactive elements.',
      image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Tailwind', 'Framer Motion'],
      link: '#',
      github: '#'
    },
    {
      id: 5,
      title: 'Real Estate Platform',
      category: 'fullstack',
      description: 'Property listing platform with advanced search, virtual tours, and booking system.',
      image: 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Next.js', 'Prisma', 'PostgreSQL'],
      link: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'Social Media Dashboard',
      category: 'web',
      description: 'Analytics dashboard for managing multiple social media accounts with scheduling features.',
      image: 'https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Vue.js', 'Chart.js', 'REST API'],
      link: '#',
      github: '#'
    },
    {
      id: 7,
      title: 'Weather App',
      category: 'mobile',
      description: 'Beautiful weather application with hourly forecasts, maps, and location-based alerts.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React Native', 'OpenWeather API'],
      link: '#',
      github: '#'
    },
    {
      id: 8,
      title: 'Restaurant Landing Page',
      category: 'design',
      description: 'Elegant landing page for a fine dining restaurant with online reservation system.',
      image: 'https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'GSAP', 'Tailwind'],
      link: '#',
      github: '#'
    },
    {
      id: 9,
      title: 'Crypto Tracker',
      category: 'web',
      description: 'Real-time cryptocurrency tracking with portfolio management and price alerts.',
      image: 'https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'CoinGecko API', 'Redux'],
      link: '#',
      github: '#'
    }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-block mb-6">
            <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
              My Work
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            EXPLORE MY
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
              PORTFOLIO
            </span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A collection of my best work showcasing expertise in web development, mobile apps, and design.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fadeInUp">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1 ${
                filter === category
                  ? 'bg-black text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-gray-100 hover:border-gray-300 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <a
                    href={project.link}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-5 h-5 text-gray-900" />
                  </a>
                  <a
                    href={project.github}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5 text-gray-900" />
                  </a>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
