"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Instagram, 
  Twitter, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp 
} from "lucide-react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 300;
      if (isScrolled !== showScrollTop) {
        setShowScrollTop(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showScrollTop]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const socialIconVariants = {
    hover: {
      scale: 1.2,
      y: -5,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
  };

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-200 pt-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-full h-full opacity-50 pointer-events-none">
        <Image
          src="/images/seo-pattern.svg"
          alt="SEO pattern background"
          fill
          className="object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* About Black Hat SEO Detector */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Image
                src="/images/logo.png"
                alt="Black Hat SEO Detector Logo"
                width={50}
                height={50}
                priority
              />
              <div className="ml-2 text-gray-900 font-bold text-xs">
                <div>BLACK HAT</div>
                <div>SEO</div>
                <div>DETECTOR</div>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Kami membantu melindungi situs web Anda dari praktik Black Hat SEO yang merusak peringkat. Dengan teknologi deteksi canggih, kami memastikan strategi SEO Anda aman dan etis.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-6">
              {[
                { Icon: Instagram, href: "https://instagram.com/blackhatseodetector", label: "Instagram" },
                { Icon: Twitter, href: "https://twitter.com/blackhatseodetector", label: "Twitter" },
                { Icon: Linkedin, href: "https://linkedin.com/company/blackhatseodetector", label: "LinkedIn" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-red-600 hover:text-white text-gray-900 p-2 rounded-full shadow-md transition-colors"
                  variants={socialIconVariants}
                  whileHover="hover"
                  aria-label={social.label}
                >
                  <social.Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/detect", label: "SEO Detection" },
                { href: "/blog", label: "Blog" },
                { href: "/workflow", label: "How It Works" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-gray-600 hover:text-red-600 transition-colors hover:translate-x-1 inline-block"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Contact Us - Positioned to the right */}
          <motion.div variants={itemVariants} className="md:col-span-1 md:justify-self-end">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h3>
            <div className="flex flex-col space-y-4">
              <div className="flex items-start">
                <MapPin size={20} className="text-red-600 mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-600">
                  Jl. Teknologi No. 123, Sleman, Yogyakarta, Indonesia
                </p>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="text-red-600 mr-3 flex-shrink-0" />
                <p className="text-gray-600">+62 812 3456 7890</p>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="text-red-600 mr-3 flex-shrink-0" />
                <p className="text-gray-600">support@blackhatseodetector.com</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Horizontal Line */}
        <motion.div
          className="border-t border-red-600 my-4"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        {/* Copyright and Bottom Links */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center py-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Black Hat SEO Detector. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-gray-500">
            <Link href="/privacy-policy" className="hover:text-red-600">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-red-600">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="hover:text-red-600">
              Sitemap
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll to top button */}
      <AnimatedScrollToTop show={showScrollTop} onClick={scrollToTop} />
    </footer>
  );
};

// Scroll to Top Button Component
const AnimatedScrollToTop: React.FC<{ show: boolean; onClick: () => void }> = ({
  show,
  onClick,
}) => {
  return (
    <motion.button
      className={`fixed bottom-8 right-8 bg-red-600 text-white p-3 rounded-full shadow-lg z-50 ${
        show ? "flex" : "hidden"
      }`}
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: show ? 1 : 0,
        scale: show ? 1 : 0.5,
        y: show ? 0 : 20,
      }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </motion.button>
  );
};

export default Footer;