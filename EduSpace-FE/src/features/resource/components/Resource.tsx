import React from "react";
import { Upload } from 'lucide-react';
import { motion } from 'motion/react';
import FilterBar from './FilterBar';
import ResourceTable from './ResourceTable';
import { MOCK_RESOURCES } from '../constants';

export const ResourcePage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-on-surface mb-2">
            Study Resources
          </h1>
          <p className="text-on-surface-variant max-w-xl text-lg leading-relaxed">
            Access curated academic materials, past papers, and peer-contributed notes to excel in your studies.
          </p>
        </div>
        <button className="bg-gradient-to-br from-primary to-primary-container text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 shadow-lg shadow-primary/20 active:scale-95 transition-all hover:shadow-xl">
          <Upload className="w-5 h-5" />
          Upload Document
        </button>
      </motion.section>

      {/* Content Area */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <FilterBar />
        <ResourceTable resources={MOCK_RESOURCES} />
        
        {/* Load More */}
        <div className="mt-12 text-center">
          <button className="bg-surface-container-high hover:bg-outline-variant/20 text-on-surface px-10 py-4 rounded-xl font-bold transition-all active:scale-95">
            Load More Resources
          </button>
        </div>
      </motion.div>
    </div>
  );
}
