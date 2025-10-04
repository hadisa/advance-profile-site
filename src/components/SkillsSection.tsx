export default function SkillsSection() {
  const skills = [
    {
      number: '01',
      title: 'Wide Technology Stack',
      description: 'Proficient in modern frameworks and libraries including React, Vue, Angular, Node.js, and more.',
      icon: '💻'
    },
    {
      number: '02',
      title: 'Fast Development',
      description: 'Rapid prototyping and development cycles with agile methodologies and best practices.',
      icon: '⚡'
    },
    {
      number: '03',
      title: 'Exclusive Design',
      description: 'Unique, custom designs tailored to your brand identity and user experience goals.',
      icon: '🎨'
    },
    {
      number: '04',
      title: 'Real-time Updates',
      description: 'Stay informed with continuous progress updates and transparent communication throughout.',
      icon: '📊'
    },
    {
      number: '05',
      title: '24/7 Support',
      description: 'Round-the-clock availability for critical issues and ongoing maintenance support.',
      icon: '🛟'
    },
    {
      number: '06',
      title: 'Seamless Process',
      description: 'Smooth workflow from initial consultation to final deployment and beyond.',
      icon: '✨'
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            WHY WE ARE BEST
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Combining technical expertise with creative innovation to deliver exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-full blur-3xl"></div>

          {skills.map((skill, index) => (
            <div
              key={skill.number}
              className="relative group animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border-2 border-gray-100 hover:border-gray-300 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 h-full">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                      {skill.icon}
                    </div>
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-5xl font-bold text-gray-200 group-hover:text-gray-300 transition-colors">
                        {skill.number}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold">{skill.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
}
