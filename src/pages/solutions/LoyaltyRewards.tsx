import { ArrowLeft, Heart, Gift, Smartphone, Target, TrendingUp, Users, Star, Zap, BarChart3, CheckCircle, Crown, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

export function LoyaltyRewards() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <Link to="/solutions" className="mb-8 inline-flex items-center text-white/90 hover:text-white transition-colors duration-200">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Solutions
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="mb-6 text-5xl md:text-6xl font-bold text-white leading-tight">
              Loyalty & Rewards
              <span className="block text-pink-200">Programs</span>
            </h1>
            <p className="text-xl text-pink-100 max-w-2xl leading-relaxed">
              Build lasting customer relationships through personalized experiences and meaningful rewards that drive engagement and growth.
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-pink-300/20 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Customer Engagement Benefits */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Loyalty Programs Matter</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In today's competitive landscape, customer loyalty is your greatest asset. Our programs turn one-time buyers into lifelong advocates.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Heart,
                title: "Emotional Connection",
                description: "Create meaningful relationships that go beyond transactions to build genuine customer loyalty.",
                color: "bg-red-500"
              },
              {
                icon: TrendingUp,
                title: "Increased Revenue",
                description: "Drive repeat purchases and higher order values through strategic reward incentives.",
                color: "bg-green-500"
              },
              {
                icon: Users,
                title: "Customer Retention",
                description: "Reduce churn and increase lifetime value with personalized engagement strategies.",
                color: "bg-blue-500"
              }
            ].map((benefit, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
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

        {/* Program Features Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Advanced Program Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage cutting-edge technology and behavioral insights to create loyalty programs that truly resonate with your customers.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 border border-purple-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 rounded-xl text-white mb-6">
                <Gift className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Flexible Points System</h3>
              <p className="text-gray-700 mb-6">
                Multi-channel earning and redemption options that adapt to customer preferences and behaviors.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Earn across all touchpoints</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Flexible redemption options</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Real-time point tracking</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 border border-blue-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-xl text-white mb-6">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Powered Personalization</h3>
              <p className="text-gray-700 mb-6">
                Machine learning algorithms deliver personalized offers and recommendations based on individual customer behavior.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Behavioral targeting</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Dynamic offers</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Predictive recommendations</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl p-8 border border-green-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-xl text-white mb-6">
                <Smartphone className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobile-First Experience</h3>
              <p className="text-gray-700 mb-6">
                Seamless mobile app integration with push notifications, digital wallet integration, and social sharing.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Mobile app integration</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Push notifications</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Social sharing features</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Program Types Section */}
        <div className="mb-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Program Types & Strategies</h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Choose from proven program models or let us create a custom solution tailored to your business objectives.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="flex items-center mb-6">
                <Crown className="h-8 w-8 text-yellow-300 mr-3" />
                <h3 className="text-2xl font-bold text-white">Points Programs</h3>
              </div>
              <ul className="space-y-3 text-purple-100">
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-yellow-300 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Purchase-based points with bonus multipliers</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-yellow-300 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Tiered rewards with exclusive VIP benefits</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-yellow-300 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Special occasion rewards and surprises</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-yellow-300 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Referral bonuses and social rewards</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="flex items-center mb-6">
                <Trophy className="h-8 w-8 text-yellow-300 mr-3" />
                <h3 className="text-2xl font-bold text-white">Engagement Programs</h3>
              </div>
              <ul className="space-y-3 text-purple-100">
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-yellow-300 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Social media interaction rewards</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-yellow-300 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Challenge and achievement systems</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-yellow-300 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Community participation incentives</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-yellow-300 mr-2 mt-0.5 flex-shrink-0" />
                  <span>User-generated content rewards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Analytics & Insights Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Data-Driven Optimization</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Make informed decisions with comprehensive analytics and actionable insights that continuously improve program performance.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: BarChart3,
                title: "Customer Behavior Analysis",
                description: "Deep insights into purchasing patterns, preferences, and engagement trends."
              },
              {
                icon: Target,
                title: "Program Performance Metrics",
                description: "Track redemption rates, engagement levels, and program ROI in real-time."
              },
              {
                icon: TrendingUp,
                title: "ROI Tracking",
                description: "Measure the financial impact of your loyalty program on revenue and profitability."
              },
              {
                icon: Zap,
                title: "Predictive Analytics",
                description: "Forecast customer behavior and identify at-risk customers before they churn."
              },
              {
                icon: Users,
                title: "Segmentation Insights",
                description: "Advanced customer segmentation for targeted campaigns and personalized offers."
              },
              {
                icon: Gift,
                title: "Reward Optimization",
                description: "AI-powered recommendations for optimal reward structures and timing."
              }
            ].map((analytic, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg text-purple-600 mb-4">
                  <analytic.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{analytic.title}</h3>
                <p className="text-gray-600">{analytic.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our loyalty programs have transformed businesses and created lasting customer relationships.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
              <div className="flex items-center mb-6">
                <div className="text-4xl font-bold text-blue-600 mr-4">45%</div>
                <div>
                  <div className="text-lg font-semibold text-gray-900">Customer Retention Increase</div>
                  <div className="text-blue-600">National Retail Chain</div>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                Implemented a personalized loyalty program that increased customer retention by 45% and boosted average order value by 30% through targeted rewards and gamification.
              </p>
              <div className="space-y-2">
                {[
                  "2M+ active members within 12 months",
                  "85% mobile app adoption rate", 
                  "40% increase in customer lifetime value"
                ].map((achievement, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {achievement}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 border border-pink-200">
              <div className="flex items-center mb-6">
                <div className="text-4xl font-bold text-pink-600 mr-4">60%</div>
                <div>
                  <div className="text-lg font-semibold text-gray-900">Repeat Visit Increase</div>
                  <div className="text-pink-600">Restaurant Chain</div>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                Launched a mobile-first loyalty program that drove a 60% increase in repeat visits and 25% growth in customer lifetime value through personalized offers and social engagement.
              </p>
              <div className="space-y-2">
                {[
                  "1.5M app downloads in 6 months",
                  "90% customer satisfaction score",
                  "35% increase in average transaction size"
                ].map((achievement, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {achievement}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gray-50 rounded-3xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Build Customer Loyalty?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Transform your customer relationships with a loyalty program that drives engagement, retention, and revenue growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Launch Your Program
            </Link>
            <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-purple-600 text-purple-600 font-semibold rounded-xl hover:bg-purple-50 transition-colors duration-200">
              See Program Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}