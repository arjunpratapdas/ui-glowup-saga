
import { useState } from 'react';
import { motion } from 'framer-motion';
import { File, FileText, Upload, Send, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Tools = () => {
  const [selectedDocument, setSelectedDocument] = useState('Non-Disclosure Agreement');
  
  return (
    <div className="py-20 px-4 md:px-8 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 mb-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
          >
            <span className="text-sm font-medium">Interactive Tools</span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Try Our Contract Tools
          </motion.h2>
          
          <motion.p 
            className="text-lg text-white/70 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Experience the power of AI-driven contract analysis and generation
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Document Analysis Tool */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-xl border border-white/5 p-6 md:p-8"
          >
            <div className="flex items-center mb-5">
              <File className="h-6 w-6 text-contractBlue-400 mr-3" />
              <h3 className="text-xl font-semibold">AI Document Analysis</h3>
            </div>
            
            <div className="mb-5">
              <div className="border border-dashed border-white/10 rounded-lg p-8 mb-4 text-center hover:border-white/20 transition-colors bg-muted/30">
                <div className="flex flex-col items-center">
                  <Upload className="h-10 w-10 text-white/40 mb-3" />
                  <p className="text-white/70 mb-3">Drop your file here or</p>
                  <Button className="px-5 bg-white/10 hover:bg-white/15">Choose File</Button>
                  <p className="text-white/50 text-sm mt-3">No file chosen</p>
                </div>
              </div>
            </div>
            
            <div className="bg-muted/30 rounded-lg p-4 mb-5">
              <p className="text-white/80 italic">
                Hello! I'm your Contract IQ assistant. I can help you analyze documents, generate
                contracts, and track compliance. How can I assist you today?
              </p>
            </div>
            
            <div className="relative">
              <input
                type="text"
                placeholder="Ask questions about your document..."
                className="w-full form-input pr-10"
              />
              <button
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-contractBlue-400 hover:text-contractBlue-300"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
          
          {/* Contract Generator Tool */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-xl border border-white/5 p-6 md:p-8"
          >
            <div className="flex items-center mb-5">
              <FileText className="h-6 w-6 text-contractBlue-400 mr-3" />
              <h3 className="text-xl font-semibold">Contract Generator</h3>
            </div>
            
            <div className="mb-5">
              <div className="relative mb-4">
                <button className="w-full flex justify-between items-center bg-muted/30 border border-white/10 rounded-lg px-4 py-3 text-white/80">
                  <span>{selectedDocument}</span>
                  <ChevronDown size={18} />
                </button>
              </div>
              
              <div className="mb-4">
                <textarea
                  placeholder="Describe your requirements..."
                  rows={3}
                  className="form-input resize-none h-32"
                />
              </div>
              
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Jurisdiction"
                  className="form-input"
                />
              </div>
              
              <Button className="w-full bg-gradient-blue hover:shadow-lg hover:shadow-blue-500/20 py-5 mb-4">
                Generate Contract
              </Button>
            </div>
            
            <div className="bg-muted/30 rounded-lg p-4 mb-3">
              <h4 className="text-center text-lg font-medium mb-2">Contract Preview</h4>
              <p className="text-white/90 text-center font-medium">MUTUAL NON-DISCLOSURE AGREEMENT</p>
              <p className="text-white/70 text-sm mt-2">
                This Non-Disclosure Agreement (the "Agreement") is entered into as of [Date] by and between:
              </p>
            </div>
            
            <Button variant="outline" className="w-full border-white/10 flex items-center justify-center">
              <FileText className="h-4 w-4 mr-2" />
              Download
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
