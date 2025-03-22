
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { File, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import AuthDialog from './AuthDialog';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 glassmorphism"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <File className="h-8 w-8 text-contractBlue-400" />
          <span className="text-xl font-semibold text-white tracking-tight">Contract IQ</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-1">
            <a href="#features" className="nav-link">Features</a>
            <a href="#tools" className="nav-link">Tools</a>
            <a href="#pricing" className="nav-link">Pricing</a>
            <a href="#feedback" className="nav-link">Feedback</a>
          </nav>
          
          <div className="flex items-center space-x-3">
            <ThemeToggle />
            
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  onClick={() => setAuthMode('signin')}
                  variant="ghost" 
                  className="text-white/90 hover:text-white"
                >
                  Sign In
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md bg-card border-white/5">
                <AuthDialog mode={authMode} setMode={setAuthMode} />
              </DialogContent>
            </Dialog>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  className="bg-gradient-shine hover:shadow-lg hover:shadow-blue-500/20 font-medium"
                  onClick={() => setAuthMode('signup')}
                >
                  Get Started
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md bg-card border-white/5">
                <AuthDialog mode={authMode} setMode={setAuthMode} />
              </DialogContent>
            </Dialog>
          </div>
        </div>
        
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <button className="text-white" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden absolute top-16 left-0 right-0 p-5 glassmorphism border-t border-white/5"
        >
          <nav className="flex flex-col space-y-4">
            <a href="#features" className="text-white/90 hover:text-white py-2">Features</a>
            <a href="#tools" className="text-white/90 hover:text-white py-2">Tools</a>
            <a href="#pricing" className="text-white/90 hover:text-white py-2">Pricing</a>
            <a href="#feedback" className="text-white/90 hover:text-white py-2">Feedback</a>
          </nav>
          <div className="flex flex-col space-y-3 mt-5 pt-5 border-t border-white/5">
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  onClick={() => setAuthMode('signin')}
                  variant="outline" 
                  className="w-full border-white/10"
                >
                  Sign In
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md bg-card border-white/5">
                <AuthDialog mode={authMode} setMode={setAuthMode} />
              </DialogContent>
            </Dialog>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full bg-gradient-shine" onClick={() => setAuthMode('signup')}>
                  Get Started
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md bg-card border-white/5">
                <AuthDialog mode={authMode} setMode={setAuthMode} />
              </DialogContent>
            </Dialog>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
