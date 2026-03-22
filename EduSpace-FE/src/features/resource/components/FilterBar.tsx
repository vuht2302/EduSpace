import { ChevronDown } from 'lucide-react';

export default function FilterBar() {
  const filters = ['All', 'Past Exams', 'Revision Notes', 'Practice Problems'];

  return (
    <div className="bg-surface-container-low p-6 rounded-xl mb-8 flex flex-wrap items-center gap-6">
      <div className="flex items-center gap-3">
        <span className="text-xs font-bold uppercase tracking-wider text-secondary">Filter by:</span>
        <div className="flex gap-2">
          {filters.map((filter, idx) => (
            <button 
              key={filter}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors
                ${idx === 0 
                  ? 'bg-primary text-on-primary shadow-md shadow-primary/20' 
                  : 'bg-surface-container-high hover:bg-outline-variant/20 text-on-surface-variant'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      
      <div className="ml-auto flex items-center gap-3">
        <div className="relative">
          <select className="appearance-none bg-surface-container-lowest border-none text-sm rounded-lg pl-3 pr-10 py-2 focus:ring-2 focus:ring-primary/20 cursor-pointer shadow-sm">
            <option>Newest First</option>
            <option>Most Downloaded</option>
            <option>Alphabetical</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
