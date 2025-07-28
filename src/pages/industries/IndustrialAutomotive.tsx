import { ArrowLeft, Car, Cog, TrendingUp, Users, BarChart3, Shield, Zap, Globe, Factory, Wrench, CheckCircle, Award, Target, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

export function IndustrialAutomotive() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-gray-800 to-blue-900">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <Link to="/industries" className="mb-8 inline-flex items-center text-white/90 hover:text-white transition-colors duration-200">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Industries
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="mb-6 text-5xl md:text-6xl font-bold text-white leading-tight">
              Industrial
              <span className="block text-blue-300">Automotive</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
              Powering the future of automotive manufacturing and operations with innovative solutions that drive efficiency, quality, and sustainable growth.
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-300/20 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Industry Overview */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Transforming Automotive Manufacturing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The automotive industry is undergoing rapid transformation. We help manufacturers, suppliers, and dealers adapt to new technologies, changing consumer demands, and evolving market dynamics.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Factory,
                title: "Smart Manufacturing",
                description: "Implement Industry 4.0 technologies to optimize production processes and enhance operational efficiency.",
                color: "bg-blue-600"
              },
              {
                icon: Globe,
                title: "Supply Chain Excellence",
                description: "Streamline global supply networks with real-time visibility and predictive analytics.",
                color: "bg-green-600"
              },
              {
                icon: Users,
                title: "Workforce Innovation",
                description: "Empower your teams with advanced training, tools, and technologies for peak performance.",
                color: "bg-purple-600"
              }
            ].map((overview, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-gray-800 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${overview.color} rounded-xl text-white mb-6`}>
                    <overview.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{overview.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{overview.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Solutions Grid */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Industry Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From production floor to customer delivery, we provide end-to-end solutions that address every aspect of automotive operations.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Manufacturing Solutions */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
              <div className="flex items-center mb-6">
                <Cog className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Manufacturing Excellence</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Optimize production processes and enhance quality control through advanced manufacturing solutions and real-time monitoring systems.
              </p>
              <ul className="space-y-3">
                {[
                  "Lean Manufacturing Implementation",
                  "Quality Management Systems",
                  "Production Planning & Scheduling",
                  "Equipment Performance Optimization",
                  "Waste Reduction Programs"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Supply Chain Solutions */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 border border-green-200">
              <div className="flex items-center mb-6">
                <Globe className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Supply Chain Innovation</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Streamline supply chain operations with real-time tracking, predictive analytics, and intelligent automation systems.
              </p>
              <ul className="space-y-3">
                {[
                  "Supplier Network Management",
                  "Inventory Optimization",
                  "Logistics & Distribution",
                  "Risk Management & Compliance",
                  "Demand Forecasting"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Dealer Network Solutions */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Dealer Network Support</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Enhance dealer operations and customer experience through digital solutions, training programs, and performance management tools.
              </p>
              <ul className="space-y-3">
                {[
                  "Dealer Performance Management",
                  "Customer Experience Enhancement",
                  "Sales & Service Training",
                  "Digital Platform Integration",
                  "Brand Standards Compliance"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technology Integration */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200">
              <div className="flex items-center mb-6">
                <Cpu className="h-8 w-8 text-orange-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Technology Integration</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Leverage cutting-edge technologies including IoT, AI, and machine learning to drive innovation and competitive advantage.
              </p>
              <ul className="space-y-3">
                {[
                  "IoT & Connected Systems",
                  "AI-Powered Analytics",
                  "Digital Twin Technology",
                  "Predictive Maintenance",
                  "Cybersecurity Solutions"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Technology Innovation Section */}
        <div className="mb-20 bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Leading-Edge Technology</h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Stay ahead of the competition with advanced technologies that transform how automotive businesses operate.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Zap,
                title: "IoT Integration",
                description: "Connected vehicles and smart manufacturing systems that provide real-time insights."
              },
              {
                icon: BarChart3,
                title: "Predictive Analytics",
                description: "AI-powered forecasting for maintenance, demand planning, and quality control."
              },
              {
                icon: Shield,
                title: "Cybersecurity",
                description: "Advanced security measures protecting connected automotive ecosystems."
              },
              {
                icon: Target,
                title: "Digital Twin",
                description: "Virtual replicas for testing, optimization, and predictive maintenance."
              }
            ].map((tech, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg text-white mb-4">
                  <tech.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{tech.title}</h3>
                <p className="text-blue-200 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Proven Industry Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our automotive solutions deliver measurable outcomes that drive operational excellence and business growth.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              { metric: "25%", label: "Reduction in Manufacturing Costs" },
              { metric: "40%", label: "Improvement in Quality Metrics" },
              { metric: "30%", label: "Increase in Dealer Performance" },
              { metric: "50%", label: "Faster Time-to-Market" }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.metric}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Industry Case Studies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world examples of how we've helped automotive companies achieve breakthrough results.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <Award className="h-8 w-8 text-blue-600 mr-3" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Global Manufacturer Transformation</h3>
                  <p className="text-blue-600">Fortune 500 Automotive OEM</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                Implemented comprehensive IoT and predictive analytics solutions across 15 manufacturing facilities, resulting in significant cost savings and operational improvements.
              </p>
              <div className="space-y-3">
                {[
                  "25% reduction in unplanned downtime",
                  "15% improvement in production efficiency", 
                  "$50M annual cost savings achieved",
                  "98% improvement in quality metrics"
                ].map((result, idx) => (
                  <div key={idx} className="flex items-start text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    {result}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <TrendingUp className="h-8 w-8 text-green-600 mr-3" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Dealer Network Optimization</h3>
                  <p className="text-green-600">Premium Automotive Brand</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                Digitally transformed a network of 500+ dealerships with unified systems, training programs, and performance management tools.
              </p>
              <div className="space-y-3">
                {[
                  "30% increase in customer satisfaction scores",
                  "20% growth in service revenue per dealer",
                  "95% dealer compliance with brand standards",
                  "40% reduction in training costs"
                ].map((result, idx) => (
                  <div key={idx} className="flex items-start text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    {result}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Implementation Process */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Implementation Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured methodology that ensures successful transformation with minimal disruption to operations.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Assessment & Strategy",
                description: "Comprehensive analysis of current operations and strategic roadmap development."
              },
              {
                step: "02",
                title: "Solution Design",
                description: "Custom solution architecture tailored to your specific industry requirements."
              },
              {
                step: "03",
                title: "Implementation & Integration",
                description: "Phased deployment with minimal operational disruption and seamless integration."
              },
              {
                step: "04",
                title: "Optimization & Support",
                description: "Continuous monitoring, optimization, and ongoing support for sustained success."
              }
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-gray-800 rounded-full text-white text-xl font-bold mb-6">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-gray-400 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gray-50 rounded-3xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Transform Your Automotive Operations</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to drive innovation and efficiency across your automotive business? Let's discuss how our industry expertise can accelerate your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Start Your Transformation
            </Link>
            <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors duration-200">
              Download Industry Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}