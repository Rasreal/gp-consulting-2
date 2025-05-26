"use client";

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function PageHeader({
  title,
  description,
  className = "",
}: PageHeaderProps) {
  return (
    <div className={`pt-32 pb-16 ${className}`}>
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gp-primary mb-4">
          {title}
        </h1>
        {description && (
          <p className="text-lg md:text-xl text-center text-gp-text-gray max-w-3xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </div>
  );
} 