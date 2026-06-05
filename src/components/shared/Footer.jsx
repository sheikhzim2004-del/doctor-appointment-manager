import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#0F766E] text-[#CCFBF1] px-6 md:px-16 py-16">
      <div className="max-w-7xl mx-auto">

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Newsletter */}
          <div className="flex flex-col items-center">
            <Image src="/footer-logo.png" alt="Newsletter" width={100} height={100} />
            <h3 className="text-white text-4xl font-bold mb-3 tracking-wide">DocAppoint</h3>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-3 tracking-wide">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li className="hover:text-[#99F6E4] cursor-pointer">Home</li>
              <li className="hover:text-[#99F6E4] cursor-pointer">All Appoint</li>
              <li className="hover:text-[#99F6E4] cursor-pointer">Dashboard</li>
              <li className="hover:text-[#99F6E4] cursor-pointer">Login</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white mb-3 tracking-wide">Follow Us</h3>
            <ul className="space-y-2">
              <li className="hover:text-[#99F6E4] cursor-pointer">Facebook</li>
              <li className="hover:text-[#99F6E4] cursor-pointer">Instagram</li>
              <li className="hover:text-[#99F6E4] cursor-pointer">LinkedIn</li>
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
        <div className="border-t border-gray-800 mt-12 pt-6 text-center">
          <p className="text-sm">
            © 2026 Wanderlust. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;