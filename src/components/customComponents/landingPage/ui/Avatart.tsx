// Avatar.tsx
import { ReactNode } from "react";

interface AvatarProps {
  children: ReactNode;
  className?: string;
}

interface AvatarImageProps {
  src: string;
  alt: string;
}

interface AvatarFallbackProps {
  children: ReactNode;
}

export function Avatar({ children, className = "" }: AvatarProps) {
  return (
    <div className={`inline-flex items-center justify-center rounded-full overflow-hidden h-10 w-10 ${className}`}>
      {children}
    </div>
  );
}

export function AvatarImage({ src, alt }: AvatarImageProps) {
  return <img src={src} alt={alt} className="h-full w-full object-cover" />;
}

export function AvatarFallback({ children }: AvatarFallbackProps) {
  return (
    <div className="bg-gray-300 text-black flex items-center justify-center h-full w-full">
      {children}
    </div>
  );
}
