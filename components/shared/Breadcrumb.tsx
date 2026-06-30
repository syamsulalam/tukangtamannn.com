import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbProps {
  items: { label: string; href?: string }[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center text-sm font-medium mb-6 relative z-10 w-fit mx-auto lg:mx-0 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/" className="text-white/70 hover:text-white transition-colors flex items-center justify-center">
            <Home size={14} />
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <ChevronRight size={14} className="text-white/40" />
            {item.href ? (
              <Link href={item.href} className="text-white/70 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
                {item.label}
              </Link>
            ) : (
              <span className="text-white text-xs font-bold uppercase tracking-widest">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
