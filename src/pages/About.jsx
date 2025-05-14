import Navbar from "../components/Navbar";
import { Users, Briefcase, Award, Book } from "lucide-react";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-indigo-700 about-bg-hero">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            About Our Club
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-xl text-indigo-200">
            Learn about our mission, our values, and the team behind our
            success.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Story
              </h2>
              <div className="mt-3 text-lg text-gray-500">
                <p className="mb-4">
                  ENACTUS FSBM( Faculté des Sciences Ben M'sick) ⇒ Enactus FSBM,
                  fondée en mars 2014 par Abderazak Bouhram, est l'héritière
                  d'initiatives lancées en 2009 sous l'appellation SIFE. Depuis
                  sa création, l’équipe développe des projets à impact social et
                  économique, mobilisant chaque année 50 à 100 membres. Enactus
                  FSBM a récemment été classée parmi le top 12 du Maroc et a été
                  demi-finaliste lors des compétitions 2023-2024
                </p>
                <p className="mb-4">
                  Over the years, we've stayed true to our founding principles
                  of innovation, quality, and customer satisfaction. We believe
                  in pushing boundaries and challenging the status quo to
                  deliver exceptional products and services.
                </p>
                <p>
                  Today, we're proud to be an industry leader, but we haven't
                  forgotten our roots. We still approach each project with the
                  same passion and dedication that fueled our early success.
                </p>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="aspect-w-5 aspect-h-3 overflow-hidden rounded-lg bg-gray-100 flex items-center justify-center h-64">
                <p className="text-gray-400">
                  <img src="/assets/Hackathon.JPG" alt="" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-black sm:text-5xl sm:tracking-tight lg:text-6xl animate-fade-in-up">
            Our Mission
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-xl text-gray-600 animate-fade-in-up delay-300">
            👉 Enactus FSBM a pour mission de mobiliser les étudiants à devenir
            des leaders engagés, en réalisant des projets innovants qui offrent
            des solutions durables aux défis sociaux et environnementaux.
          </p>
        </div>
      </div>
      {/* Values Section */}
      <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              These core principles guide everything we do.
            </p>
          </div>

          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="bg-indigo-100 rounded-lg p-2 w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Teamwork</h3>
              <p className="mt-2 text-base text-gray-500">
                We believe collaboration leads to better solutions and outcomes
                for our customers.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="bg-indigo-100 rounded-lg p-2 w-12 h-12 flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Integrity</h3>
              <p className="mt-2 text-base text-gray-500">
                We conduct business with honesty, transparency, and unwavering
                ethical standards.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="bg-indigo-100 rounded-lg p-2 w-12 h-12 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Excellence</h3>
              <p className="mt-2 text-base text-gray-500">
                We strive for the highest standards in everything we do, from
                product development to customer service.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="bg-indigo-100 rounded-lg p-2 w-12 h-12 flex items-center justify-center mb-4">
                <Book className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Innovation</h3>
              <p className="mt-2 text-base text-gray-500">
                We embrace creativity and forward-thinking to develop solutions
                that address evolving needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Meet Our Leadership
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Our experienced team is passionate about driving our company
            forward.
          </p>

          <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center">
                <p className="text-gray-400">
                  <img src="/assets/maryam.png" alt="" />
                </p>
              </div>
              <h3 className="text-lg font-medium text-gray-900">
                Maryam BADRI
              </h3>
              <p className="text-indigo-600">Vice Team Leader</p>
              <p className="mt-3 text-base text-gray-500">
                Maryam BADRI brings over 15 years of industry experience and a
                passion for innovation.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center">
                <p className="text-gray-400">
                  <img src="/assets/younes.png" alt="younes" />
                </p>
              </div>
              <h3 className="text-lg font-medium text-gray-900">
                Younes TAOUMI
              </h3>
              <p className="text-indigo-600">Team Leader</p>
              <p className="mt-3 text-base text-gray-500">
                Younes TAOUMI leads our technical strategy with a focus on
                cutting-edge solutions.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center">
                <p className="text-gray-400">
                  <img src="/assets/imane.png" alt="" />
                </p>
              </div>
              <h3 className="text-lg font-medium text-gray-900">
                Imane OUAZZANI CHAHDI
              </h3>
              <p className="text-indigo-600"> Head of partnerships</p>
              <p className="mt-3 text-base text-gray-500">
                Imane OUAZZANI CHAHDI at building brand awareness and driving
                customer engagement.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
