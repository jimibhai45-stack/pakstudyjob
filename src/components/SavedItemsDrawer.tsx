import React from 'react';
import {
  X,
  Bookmark,
  Briefcase,
  BookOpen,
  FileText,
  Trash2,
  ExternalLink,
  ArrowRight,
} from 'lucide-react';
import { BookmarkItem, NavSection } from '../types';

interface SavedItemsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedItems: BookmarkItem[];
  onRemoveBookmark: (id: string) => void;
  onClearAll: () => void;
  onNavigateToItem: (type: 'job' | 'note' | 'paper', id: string) => void;
}

export const SavedItemsDrawer: React.FC<SavedItemsDrawerProps> = ({
  isOpen,
  onClose,
  savedItems,
  onRemoveBookmark,
  onClearAll,
  onNavigateToItem,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/50 backdrop-blur-2xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-md h-full bg-white shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-200">
        {/* Header */}
        <div className="p-5 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-blue-600 fill-blue-600" />
            <h3 className="font-bold text-slate-900 text-base font-display">
              Saved Bookmarks ({savedItems.length})
            </h3>
          </div>
          <button
            id="close-saved-drawer-btn"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 cursor-pointer"
            aria-label="Close saved items"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List of Saved Items */}
        <div className="p-5 overflow-y-auto flex-1 space-y-3">
          {savedItems.length === 0 ? (
            <div className="text-center py-16">
              <Bookmark className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h4 className="text-sm font-bold text-slate-700">No saved items yet</h4>
              <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
                Click the bookmark icon on any job advertisement, study note, or past paper to save it for offline review.
              </p>
            </div>
          ) : (
            savedItems.map((item) => (
              <div
                key={item.id}
                id={`saved-item-${item.id}`}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/90 hover:border-blue-300 transition-all flex items-start justify-between gap-3 group"
              >
                <div
                  className="flex-1 cursor-pointer"
                  onClick={() => onNavigateToItem(item.type, item.id)}
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    {item.type === 'job' && <Briefcase className="w-3.5 h-3.5 text-amber-600" />}
                    {item.type === 'note' && <BookOpen className="w-3.5 h-3.5 text-blue-600" />}
                    {item.type === 'paper' && <FileText className="w-3.5 h-3.5 text-emerald-600" />}
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      {item.type === 'job' ? 'Job Posting' : item.type === 'note' ? 'Study Note' : 'Past Paper'}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-700 line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 truncate">{item.subtitle}</p>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    id={`remove-saved-item-${item.id}`}
                    onClick={() => onRemoveBookmark(item.id)}
                    className="p-1 text-slate-400 hover:text-rose-600 rounded transition-colors cursor-pointer"
                    title="Remove from saved"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {savedItems.length > 0 && (
          <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
            <button
              id="clear-all-saved-btn"
              onClick={onClearAll}
              className="text-xs text-rose-600 hover:underline font-semibold cursor-pointer"
            >
              Clear All Items
            </button>
            <button
              id="saved-drawer-done-btn"
              onClick={onClose}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg cursor-pointer"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
