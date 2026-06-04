import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 px-6 md:px-16 py-16">
      <div className="max-w-7xl mx-auto">

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Newsletter */}
          <div>
            <Image src="/footer-logo.png" alt="Newsletter" width={100} height={100} />
            <h3 className="text-white text-4xl font-bold mb-3 tracking-wide">DocAppoint</h3>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-3 tracking-wide">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Destinations</li>
              <li className="hover:text-white cursor-pointer">My Bookings</li>
              <li className="hover:text-white cursor-pointer">My Profile</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white mb-3 tracking-wide">SUPPORT</h3>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Help Center</li>
              <li className="hover:text-white cursor-pointer">
                Terms of Service
              </li>
              <li className="hover:text-white cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white mb-3 tracking-wide">CONTACT US</h3>
            <ul className="space-y-2">
              <li>+880 1957388915</li>
              <li>sheikhzim2004@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © 2026 Wanderlust. All rights reserved.
          </p>

          <div className="flex gap-5 mt-4 md:mt-0 text-white text-lg">
            <span className="cursor-pointer">X</span>
            <span className="cursor-pointer">in</span>
            <span className="cursor-pointer">◎</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;