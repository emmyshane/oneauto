import { ArrowLeft, Code2, Rocket, Cloud, Cpu, Shield, Zap, Globe, Users, BarChart3, CheckCircle, Award, Target, Bot, Database, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Tech() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <Link to="/industries" className="mb-8 inline-flex items-center text-white/90 hover:text-white transition-colors duration-200">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Industries
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="mb-6 text-5xl md:text-6xl font-bold text-white leading-tight">
              Technology
              <span className="block text-purple-300">Innovation</span>
            </h1>
            <p className="text-xl text-purple-100 max-w-2xl leading-relaxed">
              Empowering technology companies to accelerate innovation, scale operations, and deliver exceptional digital experiences in the rapidly evolving tech landscape.
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-300/20 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Technology Landscape */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Leading Digital Transformation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In an era of rapid technological advancement, we help tech companies stay ahead of the curve with innovative solutions that drive growth and competitive advantage.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Rocket,
                title: "Innovation Acceleration",
                description: "Fast-track your product development and time-to-market with agile methodologies and cutting-edge tools.",
                color: "bg-red-500"
              },
              {
                icon: Cloud,
                title: "Cloud-Native Solutions",
                description: "Build scalable, resilient applications with modern cloud architectures and microservices.",
                color: "bg-blue-500"
              },
              {
                icon: Shield,
                title: "Security & Compliance",
                description: "Implement robust security measures and ensure compliance in an increasingly complex regulatory environment.",
                color: "bg-green-500"
              }
            ].map((landscape, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${landscape.color} rounded-xl text-white mb-6`}>
                    <landscape.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{landscape.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{landscape.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Solutions */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Technology Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From emerging startups to enterprise tech giants, we provide solutions that address every aspect of technology business operations.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Code2,
                title: "Software Development",
                description: "Custom software solutions, agile methodologies, and modern development practices."
              },
              {
                icon: Cloud,
                title: "Cloud Migration",
                description: "Seamless migration to cloud platforms with optimized performance and cost efficiency."
              },
              {
                icon: Bot,
                title: "AI & Machine Learning",
                description: "Intelligent automation and AI-powered solutions to drive business innovation."
              },
              {
                icon: Shield,
                title: "Cybersecurity",
                description: "Comprehensive security solutions protecting digital assets and customer data."
              },
              {
                icon: Database,
                title: "Data Analytics",
                description: "Advanced analytics platforms for data-driven decision making and insights."
              },
              {
                icon: Smartphone,
                title: "Mobile Solutions",
                description: "Native and cross-platform mobile applications with exceptional user experiences."
              }
            ].map((solution, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg text-purple-600 mb-4">
                  <solution.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Emerging Technologies */}
        <div className="mb-20 bg-gradient-to-r from-purple-900 to-indigo-900 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Emerging Technologies</h2>
            <p className="text-xl text-purple-200 max-w-2xl mx-auto">
              Stay ahead with next-generation technologies that are shaping the future of business and technology.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Bot,
                title: "Artificial Intelligence",
                description: "Machine learning models, neural networks, and AI-powered automation solutions."
              },
              {
                icon: Cpu,
                title: "Edge Computing",
                description: "Distributed computing solutions that bring processing closer to data sources."
              },
              {
                icon: Globe,
                title: "Blockchain",
                description: "Decentralized solutions for transparency, security, and trust in digital transactions."
              },
              {
                icon: Zap,
                title: "IoT Integration",
                description: "Connected device ecosystems and intelligent automation for smart operations."
              }
            ].map((tech, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-600 rounded-lg text-white mb-4">
                  <tech.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{tech.title}</h3>
                <p className="text-purple-200 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Expertise */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Technology Sector Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep expertise across technology verticals with specialized solutions for each sector's unique challenges.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
              <div className="flex items-center mb-6">
                <Code2 className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Software Development</h3>
              </div>
              <p className="text-gray-700 mb-6">
                End-to-end software development services from concept to deployment, utilizing modern frameworks and best practices.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Agile Development",
                  "DevOps Implementation",
                  "API Development",
                  "Quality Assurance",
                  "Code Review & Optimization",
                  "Technical Documentation"
                ].map((service, idx) => (
                  <div key={idx} className="flex items-start text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    {service}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
              <div className="flex items-center mb-6">
                <BarChart3 className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Data Analytics</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Advanced analytics solutions that help technology companies make data-driven decisions and gain competitive advantages.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Business Intelligence",
                  "Predictive Analytics",
                  "Data Visualization",
                  "Real-time Reporting",
                  "Data Warehousing",
                  "Machine Learning Models"
                ].map((service, idx) => (
                  <div key={idx} className="flex items-start text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Technology Innovation Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable outcomes that demonstrate the impact of our technology solutions on business performance.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              { metric: "40%", label: "Faster Deployment Speed" },
              { metric: "60%", label: "Reduction in Development Costs" },
              { metric: "85%", label: "Improvement in System Performance" },
              { metric: "50%", label: "Increase in Team Productivity" }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <div className="text-4xl font-bold text-purple-600 mb-2">{stat.metric}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Story */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Technology Transformation Success</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How we helped a Fortune 500 technology company modernize their infrastructure and accelerate innovation.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-12 border border-purple-200">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-8">
                <Award className="h-12 w-12 text-purple-600 mr-4" />
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">Enterprise Cloud Migration</h3>
                  <p className="text-purple-600 text-lg font-semibold">Fortune 500 Technology Company</p>
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2 mb-8">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Challenge</h4>
                  <p className="text-gray-700 mb-6">
                    A global technology company with over 50,000 employees needed to modernize their legacy infrastructure, improve deployment speed, and reduce operational costs while maintaining security and compliance standards.
                  </p>
                  
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Solution</h4>
                  <p className="text-gray-700">
                    We implemented a comprehensive cloud-native architecture with containerization, microservices, automated CI/CD pipelines, and advanced monitoring and security systems.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Transformation Results</h4>
                  <div className="space-y-4">
                    {[
                      { metric: "75%", description: "faster application deployment" },
                      { metric: "60%", description: "reduction in infrastructure costs" },
                      { metric: "99.9%", description: "system uptime achieved" },
                      { metric: "40%", description: "improvement in developer productivity" },
                      { metric: "90%", description: "reduction in security incidents" }
                    ].map((result, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="text-2xl font-bold text-purple-600 mr-4 min-w-[60px]">{result.metric}</div>
                        <div className="text-gray-700">{result.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-purple-200">
                <p className="text-gray-700 italic text-center text-lg">
                  "This transformation has revolutionized how we develop and deploy software. We're now able to innovate faster while maintaining the highest standards of security and reliability." 
                  <span className="block mt-2 font-semibold text-purple-600">— Chief Technology Officer</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Technology Leaders Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique challenges facing technology companies and provide solutions that drive innovation and growth.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Target,
                title: "Proven Track Record",
                description: "Extensive experience working with technology companies from startups to Fortune 500 enterprises."
              },
              {
                icon: Zap,
                title: "Cutting-Edge Solutions",
                description: "Access to the latest technologies and methodologies that keep you ahead of the competition."
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Dedicated team of technology consultants with deep industry expertise and technical knowledge."
              },
              {
                icon: Rocket,
                title: "Agile Approach",
                description: "Flexible, iterative methodologies that adapt to changing requirements and accelerate delivery."
              },
              {
                icon: Globe,
                title: "Scalable Architecture",
                description: "Solutions designed to grow with your business and handle increasing complexity and scale."
              },
              {
                icon: Award,
                title: "Innovation Focus",
                description: "Strong emphasis on innovation, emerging technologies, and breakthrough solutions."
              }
            ].map((reason, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg text-purple-600 mb-4">
                  <reason.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gray-50 rounded-3xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Accelerate Your Technology Innovation?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology expertise can help you build better software, scale faster, and stay ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Start Your Project
            </Link>
            <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-purple-600 text-purple-600 font-semibold rounded-xl hover:bg-purple-50 transition-colors duration-200">
              View Technology Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}