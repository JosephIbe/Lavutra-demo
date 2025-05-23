'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function Navbar() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'EVENTS', href: '#events' },
    { name: 'VENDORS', href: '#vendors' },
    { name: 'CULTURE', href: '#culture' },
    { name: 'PLANNERS', href: '#planners' },
  ]

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-black'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src='/lavutra_logo.png'
              width={60}
              height={60}
              alt='Lavutra Logo'
              className="flex-shrink-0" // Prevent image from shrinking
            />
            
            <h3 className='text-gold-500 text-2xl font-bold tracking-widest'>
              LAVUTRA
            </h3>
        </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-mono text-sm tracking-widest text-white hover:text-gold-500 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu with animations */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 bg-black border-t border-gold-500/30">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-3 text-base font-mono tracking-widest text-white hover:text-gold-500 hover:bg-gray-900/50 rounded-md"
                >
                  {item.name}
                </Link>
              ))}
              <button className="w-full mt-4 px-4 py-3 bg-gold-500 hover:bg-gold-600 text-black font-mono tracking-widest text-sm rounded-md">
                DOWNLOAD APP
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )

}

// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';

// export default function Navbar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <nav className="bg-black border-b border-gold-500 fixed w-full top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-20 items-center">
//           {/* Logo */}
//           <Link href="/" className="text-2xl font-bold tracking-widest text-gold-500">
//             LAVUTRA
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex space-x-10">
//             <NavLink href="#events">EVENTS</NavLink>
//             <NavLink href="#vendors">VENDORS</NavLink>
//             <NavLink href="#culture">CULTURE</NavLink>
//             <NavLink href="#planners">PLANNERS</NavLink>
//           </div>

//           {/* Mobile menu button */}
//           <button
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             className="md:hidden text-gold-500 focus:outline-none"
//             aria-label="Toggle menu"
//           >
//             {mobileMenuOpen ? (
//               <XMarkIcon className="h-8 w-8" />
//             ) : (
//               <Bars3Icon className="h-8 w-8" />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
//         <div className="px-2 pt-2 pb-3 space-y-1 bg-black border-t border-gold-500">
//           <MobileNavLink href="#events" onClick={() => setMobileMenuOpen(false)}>
//             EVENTS
//           </MobileNavLink>
//           <MobileNavLink href="#vendors" onClick={() => setMobileMenuOpen(false)}>
//             VENDORS
//           </MobileNavLink>
//           <MobileNavLink href="#culture" onClick={() => setMobileMenuOpen(false)}>
//             CULTURE
//           </MobileNavLink>
//           <MobileNavLink href="#planners" onClick={() => setMobileMenuOpen(false)}>
//             PLANNERS
//           </MobileNavLink>
//         </div>
//       </div>
//     </nav>
//   );
// }

// function NavLink({ href, children }) {
//   return (
//     <Link
//       href={href}
//       className="font-mono tracking-widest text-sm text-white hover:text-gold-500 transition-colors"
//     >
//       {children}
//     </Link>
//   );
// }

// function MobileNavLink({ href, children, onClick }) {
//   return (
//     <Link
//       href={href}
//       onClick={onClick}
//       className="block px-3 py-2 font-mono tracking-widest text-white hover:text-gold-500 hover:bg-gray-900"
//     >
//       {children}
//     </Link>
//   );
// }

// function Bars3Icon(props) {
//   return (
//     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//     </svg>
//   );
// }

// function XMarkIcon(props) {
//   return (
//     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//     </svg>
//   );
// }

// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';

// export default function Navbar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const closeMobileMenu = () => {
//     setMobileMenuOpen(false);
//   };

//   return (
//     <nav className="bg-white shadow-md fixed w-full top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           {/* Logo/Brand */}
//           <div className="flex items-center">
//             <Link href="/" className="text-2xl font-bold text-amber-600">
//               Lavutra
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:ml-6 md:flex md:space-x-8">
//             <Link href="#events" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
//               Events
//             </Link>
//             <Link href="#vendors" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
//               Vendors
//             </Link>
//             <Link href="#explore" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
//               Explore
//             </Link>
//             <Link href="#planners" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
//               For Planners
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <div className="-mr-2 flex items-center md:hidden">
//             <button
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open main menu</span>
//               {mobileMenuOpen ? (
//                 <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               ) : (
//                 <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
//         <div className="pt-2 pb-3 space-y-1">
//           <Link 
//             href="#events" 
//             onClick={closeMobileMenu}
//             className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300"
//           >
//             Events
//           </Link>
//           <Link 
//             href="#vendors" 
//             onClick={closeMobileMenu}
//             className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300"
//           >
//             Vendors
//           </Link>
//           <Link 
//             href="#explore" 
//             onClick={closeMobileMenu}
//             className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300"
//           >
//             Explore
//           </Link>
//           <Link 
//             href="#planners" 
//             onClick={closeMobileMenu}
//             className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300"
//           >
//             For Planners
//           </Link>
//           <div className="mt-4 pl-3 pr-4">
//             <button className="w-full bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-md text-base font-medium">
//               Download App
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }