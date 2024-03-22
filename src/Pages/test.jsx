
const toggleMenu = () => { setIsOpen(!isOpen); }

const [isOpen, setIsOpen] = useState(false);

         <nav className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
               <div className="flex items-center">
                  <Link to="/" className="text-2xl font-bold">
                     Logo
                  </Link>
               </div>
               <div className="hidden md:block">
                  <ul className="flex space-x-4">
                     <li>
                     <Link to="/">Accueil</Link>
                     </li>
                     <li>
                     <Link to="/about">À propos</Link>
                     </li>
                     <li>
                     <Link to="/contact">Contact</Link>
                     </li>
                  </ul>
               </div>
               <div className="md:hidden">
                  <button
                     onClick={toggleMenu}
                     className="focus:outline-none text-white"
                  >
                     <BsList className="w-6 h-6" />
                  </button>
               </div>
            </div>
            {isOpen && (
            <div className="md:hidden mt-4">
               <ul className="flex flex-col space-y-2">
                  <li>
                  <Link to="/" onClick={toggleMenu}>
                     Accueil
                  </Link>
                  </li>
                  <li>
                  <Link to="/about" onClick={toggleMenu}>
                     À propos
                  </Link>
                  </li>
                  <li>
                  <Link to="/contact" onClick={toggleMenu}>
                     Contact
                  </Link>
                  </li>
               </ul>
            </div>
            )}
         </nav>