import { FileText, Edit3, HelpCircle, Download, Plus } from 'lucide-react';
import { Resource } from '@/src/types/resource.type';

interface ResourceTableProps {
  resources: Resource[];
}

export default function ResourceTable({ resources }: ResourceTableProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case 'Past Exams': return FileText;
      case 'Revision Notes': return Edit3;
      case 'Practice Problems': return HelpCircle;
      default: return FileText;
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case 'Past Exams': return 'text-primary bg-primary/10';
      case 'Revision Notes': return 'text-tertiary bg-tertiary/10';
      case 'Practice Problems': return 'text-secondary bg-secondary/10';
      default: return 'text-primary bg-primary/10';
    }
  };

  return (
    <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant/5">
      <div className="overflow-x-auto scrollbar-hide">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low text-on-surface-variant text-[11px] uppercase tracking-widest font-bold">
              <th className="px-6 py-4">Document Name</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Author</th>
              <th className="px-6 py-4 text-center">Downloads</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/5">
            {resources.map((res) => {
              const Icon = getIcon(res.type);
              return (
                <tr key={res.id} className="hover:bg-primary/5 transition-colors group cursor-pointer">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-lg transition-colors ${getIconColor(res.type)} group-hover:bg-primary group-hover:text-on-primary`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-on-surface group-hover:text-primary transition-colors">
                          {res.title}
                        </h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-tight">
                            {res.category}
                          </span>
                          <span className="text-[10px] text-on-surface-variant/60">{res.format}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-medium text-on-surface-variant">{res.type}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-surface-container overflow-hidden flex-shrink-0">
                        <img 
                          alt={res.author.name} 
                          className="w-full h-full object-cover" 
                          src={res.author.avatar}
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="text-[11px]">
                        <p className="font-bold text-on-surface">{res.author.name}</p>
                        <p className="text-on-surface-variant/60">{res.uploadDate}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex flex-col items-center">
                      <span className="text-sm font-bold text-on-surface">{res.downloads}</span>
                      <span className="text-[9px] uppercase tracking-tighter text-on-surface-variant/60">Views</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 hover:bg-primary/10 rounded-lg text-primary transition-colors" title="Download">
                        <Download className="w-5 h-5" />
                      </button>
                      <button className="bg-primary/10 hover:bg-primary text-primary hover:text-on-primary px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all">
                        View
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      
      {/* Table Footer */}
      <div className="bg-primary/5 p-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-surface-container-lowest rounded-full flex items-center justify-center shadow-sm border border-primary/10">
            <Plus className="w-4 h-4 text-primary" />
          </div>
          <p className="text-xs text-on-surface-variant">
            <span className="font-bold text-on-surface">Contribute Resource:</span> Help the community grow by sharing your notes.
          </p>
        </div>
        <button className="text-primary font-bold text-[10px] uppercase tracking-widest border border-primary/20 px-6 py-2 rounded-lg hover:bg-primary/10 transition-colors bg-surface-container-lowest shadow-sm">
          Browse Files
        </button>
      </div>
    </div>
  );
}
