import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Calendar, Globe, CheckCircle, ArrowRight } from 'lucide-react';

export function ContactUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6 text-5xl md:text-6xl font-bold text-white leading-tight">
              Get In
              <span className="block text-blue-200">Touch</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Ready to transform your business? Let's start the conversation about how we can help you achieve extraordinary results.
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-300/20 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Contact Methods */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Multiple Ways to Connect</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the communication method that works best for you. We're here to help and respond quickly to all inquiries.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              <div className="relative bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-xl text-white mb-6">
                  <Phone className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Walk In/ Call Us</h3>
                <p className="text-gray-600 font-semibold text-lg mb-2">+1 (307) 218-7242</p>
                <p className="text-gray-600 text-sm mb-1">Monday - Friday</p>
                <p className="text-gray-600 text-sm">9:00 AM - 5:00 PM EST</p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              <div className="relative bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-xl text-white mb-6">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Email Us</h3>
                <p className="text-green-600 font-semibold text-lg mb-2">info@oneauto-salvage.com</p>
                <p className="text-gray-600 text-sm mb-1">Response within 24 hours</p>
                <p className="text-gray-600 text-sm">Detailed inquiries welcome</p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              <div className="relative bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 rounded-xl text-white mb-6">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Visit Us</h3>
                <p className="text-purple-600 font-semibold mb-2">1309 Coffeen Ave, Ste 1200</p>
                <p className="text-gray-600 text-sm mb-1">Sheridan, WY 82801</p>
                <p className="text-gray-600 text-sm">By appointment only</p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              <div className="relative bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-600 rounded-xl text-white mb-6">
                  <Calendar className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Schedule Meeting</h3>
                <p className="text-orange-600 font-semibold text-lg mb-2">Book a Consultation</p>
                <p className="text-gray-600 text-sm mb-1">30-minute discovery call</p>
                <p className="text-gray-600 text-sm">Available time slots</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form and Info */}
        <div className="grid gap-12 lg:grid-cols-2 mb-20">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <Send className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Send us a Message</h2>
            </div>
            <p className="text-gray-600 mb-8">
              Tell us about your project or challenge, and we'll get back to you with insights and next steps.
            </p>
            
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full rounded-xl border border-gray-300 p-4 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-200"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full rounded-xl border border-gray-300 p-4 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-200"
                    required
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-xl border border-gray-300 p-4 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-200"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full rounded-xl border border-gray-300 p-4 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-200"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  className="w-full rounded-xl border border-gray-300 p-4 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-200"
                  required
                >
                  <option value="">Select a topic</option>
                  <option value="general">General Inquiry</option>
                  <option value="solutions">Solutions Discussion</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="support">Support Request</option>
                  <option value="demo">Request a Demo</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full rounded-xl border border-gray-300 p-4 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-200"
                  placeholder="Tell us about your project, challenges, or how we can help..."
                  required
                ></textarea>
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="consent"
                  className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                  required
                />
                <label htmlFor="consent" className="text-sm text-gray-700 leading-relaxed">
                  I consent to the collection and processing of my personal data submitted through this form for the purpose of responding to my inquiry. I understand that my data will be handled in accordance with your privacy policy and I can withdraw my consent at any time by contacting you directly. *
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-4 px-6 rounded-xl hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </button>

              {/* Communication Consent Note */}
              <div className="text-sm text-gray-600 leading-relaxed">
                <span className="font-semibold">Note:</span> By clicking "Send Message", you provide your express written consent for One Auto Salvage to contact you via phone calls, text messages, and emails, using the information you have provided, even if your number is on a state or federal Do Not Call list. You may revoke your consent at any time by replying 'STOP' to any text message or by contacting us directly.
              </div>
            </form>
          </div>

          {/* Additional Info */}
          <div className="space-y-8">
            {/* Office Hours */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <Clock className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Office Hours</h3>
              </div>
              <div className="space-y-3">
                {[
                  { day: "Monday - Friday", hours: "9:00 AM - 5:00 PM EST" },
                  { day: "Saturday", hours: "10:00 AM - 2:00 PM EST" },
                  { day: "Sunday", hours: "Closed" }
                ].map((schedule, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="font-semibold text-gray-900">{schedule.day}</span>
                    <span className="text-gray-600">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What to Expect */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <MessageSquare className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">What to Expect</h3>
              </div>
              <div className="space-y-4">
                {[
                  "Initial response within 24 hours",
                  "Detailed discovery conversation",
                  "Customized solution proposal",
                  "Clear next steps and timeline"
                ].map((step, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-xs font-bold text-purple-600">{idx + 1}</span>
                    </div>
                    <span className="text-gray-700">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h3>
              <div className="space-y-4">
                {[
                  { title: "Schedule a Discovery Call", description: "30-minute consultation to discuss your needs", link: "#" },
                  { title: "Download Our Brochure", description: "Learn more about our solutions and approach", link: "#" },
                  { title: "View Case Studies", description: "See how we've helped similar organizations", link: "#" }
                ].map((action, idx) => (
                  <a
                    key={idx}
                    href={action.link}
                    className="block p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">{action.title}</h4>
                        <p className="text-sm text-gray-600">{action.description}</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Location Map Placeholder */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Location</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located in the heart of Sheridan, Wyoming, we're easily accessible and ready to meet in person when needed.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Our Office</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Address</p>
                      <p className="text-gray-600">1309 Coffeen Ave Ste 1200<br />Sheridan, WY 82801<br />United States</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Globe className="h-6 w-6 text-green-600 mr-3 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Accessibility</p>
                      <p className="text-gray-600">Wheelchair accessible<br />Public transportation nearby<br />Parking available</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Interactive map coming soon</p>
                  <p className="text-sm text-gray-400">1309 Coffeen Ave Ste 1200, Sheridan, WY 82801</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't wait to transform your business. Contact us today and let's begin the conversation about achieving extraordinary results together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors duration-200">
              <Mail className="h-5 w-5 mr-2" />
              Email Us Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}