import { Building2, Users, Target, Award, Heart, Globe, TrendingUp, Shield, Lightbulb, CheckCircle, Star, Calendar } from 'lucide-react';

export function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6 text-5xl md:text-6xl font-bold text-white leading-tight">
              About
              <span className="block text-blue-200">One Auto Salvage</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              For over 12 years, we've been transforming organizations by understanding and influencing human behavior to achieve extraordinary results.
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-300/20 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Company Story */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600"
              alt="Team collaboration"
              className="mb-12 h-[500px] w-full rounded-2xl object-cover shadow-2xl"
            />
            
            <div className="grid gap-12 md:grid-cols-2">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To create exceptional experiences that inspire people to reach their full potential, driving extraordinary results for our clients and making a positive impact on the world through innovative solutions and human-centered design.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100">
                <div className="flex items-center mb-6">
                  <Lightbulb className="h-8 w-8 text-purple-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To be the global leader in designing and delivering solutions that transform human behavior, drive sustainable business growth, and create meaningful change across industries and communities worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Company Values */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape how we work with our clients and each other.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Shield,
                title: 'Integrity',
                description: 'We act with honesty, transparency, and ethical principles in everything we do, building trust through consistent actions.',
                color: 'bg-blue-600'
              },
              {
                icon: Users,
                title: 'Collaboration',
                description: 'We believe in the power of teamwork and partnership, working together to achieve exceptional results.',
                color: 'bg-green-600'
              },
              {
                icon: Lightbulb,
                title: 'Innovation',
                description: 'We continuously seek new ways to create value, embracing creativity and cutting-edge solutions.',
                color: 'bg-purple-600'
              },
              {
                icon: Award,
                title: 'Excellence',
                description: 'We strive for the highest standards in all our work, delivering quality that exceeds expectations.',
                color: 'bg-orange-600'
              },
            ].map((value, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center border border-gray-100">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${value.color} rounded-xl text-white mb-6 mx-auto`}>
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Stats */}
        <div className="mb-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Our Impact by the Numbers</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Over a decade of delivering exceptional results and creating meaningful change for our clients.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              { metric: "12+", label: "Years of Excellence", icon: Calendar },
              { metric: "500+", label: "Successful Projects", icon: CheckCircle },
              { metric: "50+", label: "Enterprise Clients", icon: Building2 },
              { metric: "98%", label: "Client Satisfaction", icon: Star }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.metric}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        

        {/* Company Culture */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Culture & Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We foster a culture of innovation, collaboration, and continuous learning that enables us to deliver exceptional results.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Heart,
                title: "People-First Approach",
                description: "We prioritize the well-being and growth of our team members, creating an environment where everyone can thrive and contribute their best work."
              },
              {
                icon: Globe,
                title: "Global Perspective",
                description: "Our diverse team brings international experience and cultural insights that enrich our solutions and broaden our impact."
              },
              {
                icon: TrendingUp,
                title: "Continuous Learning",
                description: "We invest in ongoing education and development, staying current with industry trends and emerging technologies."
              },
              {
                icon: Users,
                title: "Client Partnership",
                description: "We view our clients as partners, working collaboratively to understand their unique challenges and co-create solutions."
              },
              {
                icon: Lightbulb,
                title: "Innovation Mindset",
                description: "We encourage creative thinking and experimentation, always seeking better ways to solve complex business challenges."
              },
              {
                icon: Award,
                title: "Quality Commitment",
                description: "We maintain rigorous quality standards and continuously refine our processes to deliver exceptional outcomes."
              }
            ].map((culture, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg text-blue-600 mb-4">
                  <culture.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{culture.title}</h3>
                <p className="text-gray-600">{culture.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20 bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Organizations Choose One Auto Salvage</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our unique combination of expertise, experience, and approach sets us apart in delivering transformational results.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Proven Methodology",
                description: "Our time-tested approach combines behavioral science, technology, and strategic thinking to create solutions that drive lasting change.",
                benefits: [
                  "Evidence-based strategies",
                  "Measurable outcomes",
                  "Scalable solutions",
                  "Risk mitigation"
                ]
              },
              {
                title: "Industry Expertise",
                description: "Deep knowledge across multiple industries allows us to bring best practices and innovative approaches to every engagement.",
                benefits: [
                  "Cross-industry insights",
                  "Specialized knowledge",
                  "Regulatory awareness",
                  "Market understanding"
                ]
              },
              {
                title: "Technology Innovation",
                description: "We leverage cutting-edge technology and data analytics to create intelligent solutions that adapt and evolve with your business.",
                benefits: [
                  "Advanced analytics",
                  "AI-powered insights",
                  "Modern platforms",
                  "Future-ready solutions"
                ]
              },
              {
                title: "Partnership Approach",
                description: "We work as an extension of your team, providing ongoing support and partnership throughout your transformation journey.",
                benefits: [
                  "Collaborative engagement",
                  "Dedicated support",
                  "Knowledge transfer",
                  "Long-term partnership"
                ]
              }
            ].map((reason, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{reason.title}</h3>
                <p className="text-gray-700 mb-6">{reason.description}</p>
                <div className="grid gap-2 sm:grid-cols-2">
                  {reason.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-3xl p-12 shadow-lg border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your Organization?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise and proven approach can help you achieve extraordinary results and drive sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Start the Conversation
            </a>
            <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors duration-200">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}