import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './ui/navigation-menu';

const solutions = [
  { title: 'Channel Partner Engagement', href: '/solutions/channel-partner-engagement' },
  { title: 'Automotive', href: '/solutions/automotive' },
  { title: 'Business Events', href: '/solutions/business-events' },
  { title: 'Loyalty Rewards', href: '/solutions/loyalty-rewards' },
];

const industries = [
  { title: 'Automotive', href: '/industries/automotive' },
  { title: 'Tech', href: '/industries/tech' },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/LOGO.png"
              alt="One Auto Salvage"
              className="h-12 w-auto"
            />
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {solutions.map((solution) => (
                      <li key={solution.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={solution.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100"
                          >
                            <div className="text-sm font-medium leading-none">
                              {solution.title}
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {industries.map((industry) => (
                      <li key={industry.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={industry.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100"
                          >
                            <div className="text-sm font-medium leading-none">
                              {industry.title}
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/about-us" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                  About Us
                </Link>
              </NavigationMenuItem>
              <br></br>
              <br></br>
              <NavigationMenuItem>
                <Link to="/contact" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                  Contact Us
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <button
            type="button"
            className="rounded-full p-2 text-gray-700 hover:bg-gray-100"
          >
            <Search className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}