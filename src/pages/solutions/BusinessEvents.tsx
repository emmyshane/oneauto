import { ArrowLeft, Calendar, Users, Award, MapPin, Clock, Star, Lightbulb, CheckCircle, Camera, Mic, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

export function BusinessEvents() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-red-500">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <Link to="/solutions" className="mb-8 inline-flex items-center text-white/90 hover:text-white transition-colors duration-200">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Solutions
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="mb-6 text-5xl md:text-6xl font-bold text-white leading-tight">
              Exceptional
              <span className="block text-pink-200">Business Events</span>
            </h1>
            <p className="text-xl text-pink-100 max-w-2xl leading-relaxed">
              Create memorable experiences that inspire, connect, and drive business success through expertly crafted events.
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-pink-300/20 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Event Impact Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Events That Make an Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From intimate meetings to large-scale conferences, we create experiences that engage your audience and achieve your business objectives.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Users,
                title: "Meaningful Connections",
                description: "Foster valuable networking and relationship building that extends beyond the event.",
                color: "bg-blue-500"
              },
              {
                icon: Lightbulb,
                title: "Inspire Innovation",
                description: "Create environments that spark creativity and drive breakthrough thinking.",
                color: "bg-purple-500"
              },
              {
                icon: Star,
                title: "Memorable Experiences",
                description: "Deliver unforgettable moments that strengthen brand loyalty and engagement.",
                color: "bg-pink-500"
              }
            ].map((impact, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${impact.color} rounded-xl text-white mb-6`}>
                    <impact.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{impact.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{impact.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Event Services Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Event Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end event management that takes care of every detail, so you can focus on your objectives.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Calendar,
                title: "Strategic Planning",
                description: "Comprehensive event strategy aligned with your business goals and target audience."
              },
              {
                icon: MapPin,
                title: "Venue Selection",
                description: "Perfect venue sourcing and management for any event size or format."
              },
              {
                icon: Settings,
                title: "Technology Solutions",
                description: "Cutting-edge AV, live streaming, and interactive event technology."
              },
              {
                icon: Users,
                title: "Registration Management",
                description: "Seamless attendee registration, communication, and engagement platforms."
              },
              {
                icon: Mic,
                title: "Content Development",
                description: "Engaging speakers, presentations, and interactive session design."
              },
              {
                icon: Camera,
                title: "Production & Design",
                description: "Creative event design, branding, and professional production services."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg text-purple-600 mb-4">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Event Types Section */}
        <div className="mb-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Event Types We Excel At</h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Whatever your event needs, we have the expertise to deliver exceptional results.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Corporate Conferences",
                description: "Large-scale gatherings that educate, inspire, and align your organization.",
                attendees: "500-5000+"
              },
              {
                title: "Executive Meetings",
                description: "Intimate, high-level meetings focused on strategic decision-making.",
                attendees: "10-50"
              },
              {
                title: "Product Launches",
                description: "High-impact events that generate buzz and drive market adoption.",
                attendees: "100-1000"
              },
              {
                title: "Sales Kickoffs",
                description: "Motivational events that energize teams and drive performance.",
                attendees: "50-500"
              },
              {
                title: "Award Ceremonies",
                description: "Prestigious celebrations that recognize achievements and build culture.",
                attendees: "100-1000"
              },
              {
                title: "Trade Shows",
                description: "Industry exhibitions that showcase products and generate leads.",
                attendees: "1000-10000+"
              }
            ].map((eventType, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">{eventType.title}</h3>
                <p className="text-purple-100 mb-4">{eventType.description}</p>
                <div className="text-sm text-pink-200">
                  <Clock className="inline h-4 w-4 mr-1" />
                  Ideal for {eventType.attendees} attendees
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Event Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from events that exceeded expectations and delivered measurable business impact.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Global Tech Conference",
                metric: "95%",
                label: "Attendee Satisfaction",
                description: "Delivered a hybrid conference for 3,000+ attendees across 15 countries with seamless technology integration and engaging content.",
                highlights: ["Zero technical issues", "15% increase in leads", "98% would attend again"]
              },
              {
                title: "Executive Leadership Summit",
                metric: "40%",
                label: "Increased Engagement",
                description: "Created an intimate, high-value experience for C-suite executives that strengthened strategic partnerships and drove key initiatives.",
                highlights: ["100% executive attendance", "12 new partnerships", "Strategic roadmap alignment"]
              }
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="text-4xl font-bold text-purple-600 mr-4">{story.metric}</div>
                  <div>
                    <div className="text-lg font-semibold text-gray-900">{story.label}</div>
                    <div className="text-gray-600">{story.title}</div>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{story.description}</p>
                <div className="space-y-2">
                  {story.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Event Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures every event exceeds expectations and delivers results.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discovery & Strategy",
                description: "Understanding your objectives, audience, and success metrics."
              },
              {
                step: "02",
                title: "Design & Planning",
                description: "Creating the event experience and detailed execution plan."
              },
              {
                step: "03",
                title: "Execution & Management",
                description: "Flawless event delivery with real-time monitoring and support."
              },
              {
                step: "04",
                title: "Analysis & Optimization",
                description: "Post-event analysis and insights for continuous improvement."
              }
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white text-xl font-bold mb-6">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-purple-300 to-pink-300 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gray-50 rounded-3xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Create Your Next Exceptional Event?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life and create an unforgettable experience for your audience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Start Planning Today
            </Link>
            <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-purple-600 text-purple-600 font-semibold rounded-xl hover:bg-purple-50 transition-colors duration-200">
              View Event Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}