import { cn } from '@/lib/utils';

interface CategoryPillProps {
  category: string;
  isActive: boolean;
  onClick: () => void;
}

export const CategoryPill = ({ category, isActive, onClick }: CategoryPillProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'rounded-full px-5 py-2 text-sm font-medium transition-colors',
        isActive
          ? 'bg-white text-gp-primary hover:bg-white/90'
          : 'text-gp-primary hover:bg-gp-accent/10 hover:text-gp-accent'
      )}
    >
      {category}
    </button>
  );
};
