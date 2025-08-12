import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Channel Partner Engagement',
    description: 'Build stronger relationships with your channel partners through innovative engagement solutions.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800',
    href: '/solutions/channel-partner-engagement',
  },
  {
    title: 'Automotive',
    description: 'Drive success in the automotive industry with our specialized solutions and expertise.',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800',
    href: '/solutions/automotive',
  },
  {
    title: 'Business Events',
    description: 'Create memorable experiences that inspire and connect people through world-class events.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800',
    href: '/solutions/business-events',
  },
  {
    title: 'Loyalty Rewards',
    description: 'Design and implement loyalty programs that drive customer engagement and retention.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
    href: '/solutions/loyalty-rewards',
  },
];

export function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section
        className="relative flex min-h-[600px] items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2000")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="mb-6 text-5xl font-bold">
            Engaging People, Elevating Performance
          </h1>
          <p className="mx-auto max-w-2xl text-xl">
            With an Automotive Marketing System, dealers can streamline every aspect of their business by integrating essential tools into a single platform.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Our Solutions</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.href}
                className="group overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-[1.02]"
              >
                <div className="relative h-48">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                  <p className="mb-4 text-gray-600">{service.description}</p>
                  <div className="flex items-center text-blue-600">
                    <span className="font-medium">Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}