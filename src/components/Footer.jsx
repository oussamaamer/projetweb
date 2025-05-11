import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <span className="text-xl font-bold text-yellow-400">Enactus</span>
              <span className="text-xl font-bold text-white">Fsbm</span>
            </div>
            <p className="mt-2 text-sm text-gray-300">
              Enactus FSBM, Faculté des Sciences Ben M'Sick - Bd Commandant
              Driss Al Harti, Casablanca 20670 - Maroc E-mail :
              enactus24.25fsbm@gmail.com Tél : Team leader +212 639 380 894 /
              head of partnerships
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-base text-gray-300 hover:text-white"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-gray-300 hover:text-white"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-gray-300 hover:text-white"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-base text-gray-300 hover:text-white"
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-gray-300 hover:text-white"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-gray-300 hover:text-white"
                >
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
              Connect
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="https://www.tiktok.com/@enactus.fsbmposting"
                  target="_blank"
                  className="text-base text-gray-300 hover:text-white"
                >
                  Tiktok
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/company/enactus-fsbmc/"
                  target="_blank"
                  className="text-base text-gray-300 hover:text-white"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.instagram.com/3nac1us.fsbm?igsh=YWcyaGQyOGMzNzJo"
                  target="_blank"
                  className="text-base text-gray-300 hover:text-white"
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <Link
              to="https://www.tiktok.com/@enactus.fsbmposting"
              target="_blank"
              className="text-gray-400 hover:text-gray-300"
            >
              <span className="sr-only">Tiktok</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <path
                  d="M172 32C172 46.3594 183.641 58 198 58C204.627 58 211.121 56.0231 216.5 52.5V92.5C207.07 94.6875 197.426 95.911 188 95C180.332 94.2665 173.334 91.3718 167.5 86.5V168.5C167.5 200.852 141.852 226.5 109.5 226.5C77.1475 226.5 51.5 200.852 51.5 168.5C51.5 139.274 71.319 114.642 98.5 108.5V146.5C87.5 151 80.5 160.5 80.5 170.5C80.5 182.926 90.5736 193 103 193C115.426 193 125.5 182.926 125.5 170.5V30.5H172V32Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
            <Link
              to="https://www.linkedin.com/company/enactus-fsbmc/"
              target="_blank"
              className="text-gray-400 hover:text-gray-300"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </Link>
            <Link
              to="https://www.instagram.com/3nac1us.fsbm?igsh=YWcyaGQyOGMzNzJo"
              target="_blank"
              className="text-gray-400 hover:text-gray-300"
            >
              <span className="sr-only">Instagrame</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 2C4.239 2 2 4.239 2 7V17C2 19.761 4.239 22 7 22H17C19.761 22 22 19.761 22 17V7C22 4.239 19.761 2 17 2H7ZM12 8C14.209 8 16 9.791 16 12C16 14.209 14.209 16 12 16C9.791 16 8 14.209 8 12C8 9.791 9.791 8 12 8ZM18 6C18.552 6 19 6.448 19 7C19 7.552 18.552 8 18 8C17.448 8 17 7.552 17 7C17 6.448 17.448 6 18 6Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            © 2025 EnactusFsbm, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
