export default function ServicesSection() {
  const services = [
    {
      title: 'Partner for Growth',
      description: 'Collaborate with a dedicated developer who understands your business goals and technical needs.',
      cta: 'Learn More',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Need a Developer?',
      description: 'Expert full-stack development services for startups and enterprises. Let\'s build something amazing together.',
      cta: 'Read More',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Got a Freelance Project?',
      description: 'Available for freelance opportunities. Fast turnaround, quality code, and dedicated support.',
      cta: 'Read More',
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-black to-gray-900 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fadeInUp"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20`}></div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              </div>

              <div className="p-8 relative">
                <h3 className="text-white text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <button className="text-white font-medium hover:text-gray-300 transition-colors flex items-center gap-2 group-hover:gap-3">
                  {service.cta}
                  <span className="text-xl">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-white rounded-t-[3rem] sm:rounded-t-[5rem]"></div>
    </section>
  );
}
