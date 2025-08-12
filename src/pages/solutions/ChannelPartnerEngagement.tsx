import { ArrowLeft, Users, TrendingUp, Award, Target, BarChart3, Handshake, Globe, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ChannelPartnerEngagement() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <Link to="/solutions" className="mb-8 inline-flex items-center text-white/90 hover:text-white transition-colors duration-200">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Solutions
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="mb-6 text-5xl md:text-6xl font-bold text-white leading-tight">
              Channel Partner 
              <span className="block text-blue-200">Engagement</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
              Transform your partner relationships with innovative engagement solutions that drive mutual success and sustainable growth.
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-300/20 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Key Benefits Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Partner Engagement Matters</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strong partner relationships are the foundation of business growth. Our solutions help you build lasting partnerships that drive results.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: TrendingUp,
                title: "Accelerate Growth",
                description: "Boost partner performance with targeted incentives and real-time insights that drive revenue growth.",
                color: "bg-green-500"
              },
              {
                icon: Handshake,
                title: "Strengthen Relationships",
                description: "Build trust and loyalty through transparent communication and mutually beneficial programs.",
                color: "bg-blue-500"
              },
              {
                icon: Globe,
                title: "Expand Market Reach",
                description: "Leverage partner networks to access new markets and customer segments more effectively.",
                color: "bg-purple-500"
              }
            ].map((benefit, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${benefit.color} rounded-xl text-white mb-6`}>
                    <benefit.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Partner Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to engage, motivate, and empower your channel partners for maximum performance.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Users,
                title: "Partner Portals",
                description: "Centralized digital platforms for seamless partner collaboration and resource access."
              },
              {
                icon: BarChart3,
                title: "Performance Analytics",
                description: "Real-time tracking and insights to monitor partner performance and identify opportunities."
              },
              {
                icon: Award,
                title: "Incentive Programs",
                description: "Flexible reward systems that motivate partners and drive desired behaviors."
              },
              {
                icon: Target,
                title: "Training & Enablement",
                description: "Comprehensive learning platforms to enhance partner capabilities and expertise."
              },
              {
                icon: Shield,
                title: "Compliance Management",
                description: "Ensure partners meet regulatory requirements and brand standards consistently."
              },
              {
                icon: Zap,
                title: "Automated Workflows",
                description: "Streamlined processes that reduce manual work and improve operational efficiency."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg text-blue-600 mb-4">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics Section */}
        <div className="mb-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Proven Results</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Our partner engagement solutions deliver measurable outcomes that drive business success.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              { metric: "85%", label: "Partner Retention Rate" },
              { metric: "40%", label: "Sales Performance Increase" },
              { metric: "60%", label: "Faster Time to Market" },
              { metric: "50%", label: "Improved Partner Satisfaction" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.metric}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation Process */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Implementation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful partner engagement program deployment.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Strategy & Planning",
                description: "Analyze your partner ecosystem and define engagement objectives."
              },
              {
                step: "02", 
                title: "Platform Design",
                description: "Create customized partner portals and engagement tools."
              },
              {
                step: "03",
                title: "Program Launch",
                description: "Deploy solutions with comprehensive partner onboarding."
              },
              {
                step: "04",
                title: "Optimization",
                description: "Continuously improve based on performance analytics and feedback."
              }
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white text-xl font-bold mb-6">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gray-50 rounded-3xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your Partner Relationships?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our channel partner engagement solutions can drive growth for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Get Started Today
            </Link>
            <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors duration-200">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}