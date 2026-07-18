import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import { footerData } from "../data/footerData";

const Footer = () => {
  const { brand, socials, exploreLinks, companyLinks, contact } = footerData;

  return (
    <footer className="relative pt-24 pb-12 bg-transparent overflow-hidden">
      <div className="absolute top-0 w-full h-40 bg-gradient-to-b from-[#0B0F11] to-transparent pointer-events-none" />

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#28E9E9]/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">{brand.name}</h3>

            <p className="text-gray-400 leading-relaxed">{brand.description}</p>

            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              <a href={socials.instagram} target="_blank" className="icon">
                <FaInstagram />
              </a>

              <a href={socials.facebook} target="_blank" className="icon">
                <FaFacebook />
              </a>

              {/* <a href={socials.twitter} target="_blank" className="icon">
                <FaTwitter />
              </a> */}

              <a href={socials.youtube} target="_blank" className="icon">
                <FaYoutube />
              </a>

              <a
                href={`https://wa.me/${socials.whatsapp}`}
                target="_blank"
                className="icon">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-white font-semibold mb-4">Explore</h4>

            <ul className="space-y-3 text-gray-400">
              {exploreLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="hover:text-[#28E9E9]">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>

            <ul className="space-y-3 text-gray-400">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="hover:text-[#28E9E9]">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>

            <ul className="space-y-3 text-gray-400">
              <li>{contact.location}</li>

              <li>
                <a
                  href={`tel:${contact.phone}`}
                  className="hover:text-[#28E9E9]">
                  {contact.phone}
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-[#28E9E9]">
                  {contact.email}
                </a>
              </li>

              <li>
                <a
                  href={`https://wa.me/${contact.whatsapp}`}
                  target="_blank"
                  className="hover:text-[#28E9E9]">
                  WhatsApp Chat
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <style>
        {`
        .icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 999px;
          cursor: pointer;
          transition: all 0.3s;
          color: #ccc;
        }

        .icon:hover {
          border-color: #28E9E9;
          color: #28E9E9;
          transform: scale(1.1);
        }
        `}
      </style>
    </footer>
  );
};

export default Footer;
