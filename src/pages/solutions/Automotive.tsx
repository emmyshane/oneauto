import { ArrowLeft, Car, TrendingUp, Users, Award, Wrench, Shield, Zap, BarChart3, Globe, CheckCircle, Gauge } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Automotive() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <Link to="/solutions" className="mb-8 inline-flex items-center text-white/90 hover:text-white transition-colors duration-200">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Solutions
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="mb-6 text-5xl md:text-6xl font-bold text-white leading-tight">
              Automotive
              <span className="block text-blue-300">Excellence</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
              Driving success across the automotive ecosystem with innovative solutions for manufacturers, dealers, and suppliers.
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-300/20 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Industry Challenges Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Navigating Automotive Evolution</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The automotive industry is transforming rapidly. We help organizations adapt, compete, and thrive in this dynamic landscape.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Zap,
                title: "Electric Future",
                description: "Navigate the transition to electric vehicles with strategic planning and implementation support.",
                color: "bg-green-500"
              },
              {
                icon: Globe,
                title: "Digital Transformation",
                description: "Modernize operations with digital tools that enhance efficiency and customer experience.",
                color: "bg-blue-500"
              },
              {
                icon: Users,
                title: "Customer Evolution",
                description: "Adapt to changing customer expectations and new buying behaviors in the digital age.",
                color: "bg-purple-500"
              }
            ].map((challenge, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-gray-800 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${challenge.color} rounded-xl text-white mb-6`}>
                    <challenge.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{challenge.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{challenge.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Solutions Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Automotive Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From manufacturing to retail, we provide end-to-end solutions that drive performance across the automotive value chain.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Car,
                title: "Dealer Performance",
                description: "Boost dealer sales and customer satisfaction through targeted incentive programs."
              },
              {
                icon: Users,
                title: "Customer Loyalty",
                description: "Build lasting relationships with personalized experiences and rewards."
              },
              {
                icon: BarChart3,
                title: "Sales Analytics",
                description: "Data-driven insights to optimize sales performance and market strategies."
              },
              {
                icon: Wrench,
                title: "Service Excellence",
                description: "Enhance service operations and technician capabilities across your network."
              },
              {
                icon: Award,
                title: "Training Programs",
                description: "Comprehensive training solutions for sales teams and service technicians."
              },
              {
                icon: Shield,
                title: "Compliance Management",
                description: "Ensure regulatory compliance and brand standards across all touchpoints."
              }
            ].map((solution, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg text-blue-600 mb-4">
                  <solution.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Impact Section */}
        <div className="mb-20 bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Driving Industry Results</h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Our automotive solutions deliver measurable outcomes that accelerate growth and enhance competitiveness.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              { metric: "35%", label: "Increase in Dealer Sales" },
              { metric: "50%", label: "Improvement in Customer Retention" },
              { metric: "25%", label: "Reduction in Training Costs" },
              { metric: "60%", label: "Faster Market Response" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.metric}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Automotive Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from partnerships that transformed automotive businesses and drove sustainable growth.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Global Manufacturer Transformation",
                company: "Leading Auto Manufacturer",
                challenge: "Declining dealer performance and market share",
                solution: "Comprehensive dealer incentive and training program",
                results: [
                  "40% increase in dealer sales performance",
                  "25% improvement in customer satisfaction",
                  "15% growth in market share within 18 months"
                ]
              },
              {
                title: "Dealer Network Optimization",
                company: "Premium Auto Brand",
                challenge: "Inconsistent customer experience across dealerships",
                solution: "Standardized training and customer experience program",
                results: [
                  "95% compliance with brand standards",
                  "30% increase in customer loyalty scores",
                  "20% growth in service revenue"
                ]
              }
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{story.title}</h3>
                  <p className="text-blue-600 font-semibold">{story.company}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                  <p className="text-gray-600 mb-4">{story.challenge}</p>
                  
                  <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                  <p className="text-gray-600 mb-4">{story.solution}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Results:</h4>
                  <div className="space-y-2">
                    {story.results.map((result, idx) => (
                      <div key={idx} className="flex items-start text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {result}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Integration */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Future-Ready Technology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage cutting-edge technology to stay ahead in the rapidly evolving automotive landscape.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Zap,
                title: "IoT Integration",
                description: "Connected vehicle solutions and smart manufacturing systems."
              },
              {
                icon: BarChart3,
                title: "Predictive Analytics",
                description: "AI-powered insights for maintenance, inventory, and customer behavior."
              },
              {
                icon: Gauge,
                title: "Digital Dashboards",
                description: "Real-time performance monitoring and business intelligence."
              },
              {
                icon: Shield,
                title: "Cybersecurity",
                description: "Advanced security measures for connected automotive systems."
              }
            ].map((tech, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-xl p-6 border border-blue-100">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg text-white mb-4">
                  <tech.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{tech.title}</h3>
                <p className="text-gray-600 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gray-50 rounded-3xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Accelerate Your Automotive Success</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to transform your automotive business? Let's discuss how our solutions can drive your success in the evolving automotive landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Get Started Today
            </Link>
            <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors duration-200">
              Download Case Studies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}