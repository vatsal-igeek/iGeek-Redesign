import { Mail, PhoneIcon } from "@/icons";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[url('/images/footer.background.png')] bg-auto bg-center bg-no-repeat  min-h-142.5 w-full">
      <div className="mx-auto py-20 grid grid-cols-4 max-w-157">
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Services</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="#"
                className="text-gray-600 hover:text-blue-600 transition"
              >
                Case study
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-600 hover:text-blue-600 transition"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-600 hover:text-blue-600 transition"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-600 hover:text-blue-600 transition"
              >
                Career
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="#"
                className="text-gray-600 hover:text-blue-600 transition"
              >
                Case study
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-600 hover:text-blue-600 transition"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-600 hover:text-blue-600 transition"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-600 hover:text-blue-600 transition"
              >
                Career
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Blog</h3>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Contacts</h3>
          <div className="flex gap-5">
            <Link
              href="mailto:contact@igeek.com"
              className="flex items-center text-gray-600 hover:text-blue-600 transition"
            >
              <Mail />
            </Link>
            <Link
              href="tel:+1234567890"
              className="flex items-center text-gray-600 hover:text-blue-600 transition"
            >
              <PhoneIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
