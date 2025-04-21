import Link from 'next/link';
import { cn } from '@/lib/utils';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  className?: string;
}

export default function NavLink({ 
  href, 
  children, 
  active = false,
  className 
}: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "font-medium transition-colors hover:text-foreground",
        active ? "text-foreground" : "text-foreground/60",
        className
      )}
    >
      {children}
    </Link>
  );
}