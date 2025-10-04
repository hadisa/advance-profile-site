import { ArrowRight } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'Discuss your project requirements and goals. We analyze your needs and create a tailored strategy.',
      emoji: '💬',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      number: '02',
      title: 'Development',
      description: 'Transform ideas into reality with clean, scalable code using modern technologies and best practices.',
      emoji: '⚡',
      color: 'from-orange-400 to-red-500'
    },
    {
      number: '03',
      title: 'Deployment',
      description: 'Launch your project with confidence. Continuous integration and deployment for seamless delivery.',
      emoji: '🚀',
      color: 'from-purple-400 to-pink-500'
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8 lg:sticky lg:top-32">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight animate-fadeInUp">
              GET YOUR PROJECT
              <br />
              <span className="text-gray-400">DONE IN LESS THAN A MONTH</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              From initial consultation to final deployment, I ensure a smooth and efficient development process that brings your vision to life.
            </p>
            <button className="group bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Explore Process
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border-2 border-gray-100 hover:border-gray-300 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 animate-fadeInRight"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-6">
                  <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform duration-500 flex-shrink-0`}>
                    {step.emoji}
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-5xl font-bold text-gray-200 group-hover:text-gray-300 transition-colors">
                        {step.number}
                      </span>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-br from-gray-900 to-black rounded-t-[3rem] sm:rounded-t-[5rem]"></div>
    </section>
  );
}
