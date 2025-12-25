import {
  Behance,
  Dribbble,
  Facebook,
  Insta,
  Linkedin,
  Mail,
  PhoneIcon,
  Twitter,
  Upwork,
} from "@/icons";
import Image from "next/image";
import Link from "next/link";
import footerLogo from "../../public/images/footer.logo.svg";

const Footer = () => {
  return (
    <>
      <footer className="bg-[url('/images/footer.bg.jpg')] bg-cover bg-top bg-no-repeat sm:min-h-142.5 w-full">
        {/* Padded content */}
        <div className="px-10 mb-3.5">
          <div className="mx-auto gap-7.5 py-20 grid grid-cols-4 max-w-157">
            <div>
              <h3 className="font-semibold text-text-secondary text-[1.125rem] md:text-lg xl:text-xl mb-4">
                Services
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-text-secondary text-xs sm:text-[1rem]"
                  >
                    Case study
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-text-secondary text-xs sm:text-[1rem]"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-text-secondary text-xs sm:text-[1rem]"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-text-secondary text-xs sm:text-[1rem]"
                  >
                    Career
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-text-secondary text-[1.125rem] md:text-lg xl:text-xl mb-4">
                Company
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-text-secondary text-xs sm:text-[1rem]"
                  >
                    Case study
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-text-secondary text-xs sm:text-[1rem]"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-text-secondary text-xs sm:text-[1rem]"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-text-secondary text-xs sm:text-[1rem]"
                  >
                    Career
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-text-secondary text-[1.125rem] md:text-lg xl:text-xl mb-4">
                Blog
              </h3>
            </div>

            <div>
              <h3 className="font-semibold text-text-secondary text-[1.125rem] md:text-lg xl:text-xl mb-4">
                Contacts
              </h3>
              <div className="flex gap-5">
                <Link
                  href="mailto:contact@igeek.com"
                  className="flex items-center text-text-secondary"
                >
                  <Mail />
                </Link>
                <Link
                  href="tel:+1234567890"
                  className="flex items-center text-text-secondary"
                >
                  <PhoneIcon />
                </Link>
              </div>
            </div>
          </div>
          <Image src={footerLogo} alt="footer logo" className="mx-auto " />
        </div>

        {/* Full-width dashed border */}
        <div className="my-dashed-border w-full" />
        <div className="px-6 py-7.5 gap-4 container flex justify-between items-center">
          <p className="text-[10px] font-bold lg:text-[1rem] md:text-sm text-text-tag">
            Explore iGeek
          </p>
          <p className="font-medium text-center text-[10px] lg:text-[1rem] md:text-sm">
            © 2025 All rights reserved - iGeek Made with ♡{" "}
          </p>
          <div className="grid grid-cols-4 sm:flex sm:flex-nowrap justify-end gap-2.5">
            <Twitter />
            <Linkedin />
            <Insta />
            <Facebook />

            <div className="col-span-4 flex justify-end gap-2.5 sm:hidden">
              <Upwork />
              <Dribbble />
              <Behance />
            </div>

            <div className="hidden sm:contents">
              <Upwork />
              <Dribbble />
              <Behance />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
