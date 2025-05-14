import {
  Menu,
  X,
  ChevronRight,
  ArrowRight,
  Check,
  Users,
  Code,
  BarChart,
} from "lucide-react";

// Home Page Component
const Main = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Feature Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Features
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to succeed
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our platform provides all the tools and resources you need to take
              your business to the next level.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <Users className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Team Collaboration
                </p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Work together seamlessly with your team members in real-time,
                  no matter where they are located.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <Code className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Powerful API
                </p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Integrate with your existing tools and systems through our
                  comprehensive API.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <BarChart className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Advanced Analytics
                </p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Gain valuable insights with detailed reports and
                  visualizations that help you make informed decisions.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <Check className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Compliance & Security
                </p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Rest easy knowing your data is secure and compliant with
                  industry standards and regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Trusted by businesses worldwide
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              See what our customers have to say about us.
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    CEO, Tech Company
                  </p>
                  <div className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      Increased our productivity by 40%
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      "This platform has transformed how our team works
                      together. The collaborative features and intuitive
                      interface have made a significant impact on our
                      productivity."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    Marketing Director, Retail Brand
                  </p>
                  <div className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      Analytics transformed our strategy
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      "The insights we've gained from the analytics dashboard
                      have completely changed how we approach our marketing
                      strategy. We can now make data-driven decisions with
                      confidence."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    CTO, Financial Services
                  </p>
                  <div className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      Security we can trust
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      "In our industry, security is paramount. This solution
                      provides the robust security features and compliance
                      standards we need, giving us peace of mind."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
