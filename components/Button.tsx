'use client'

import { TbArrowBigRightFilled } from 'react-icons/tb';
import Link from 'next/link';

interface ButtonProps {
  text: string; 
  handleClick?: () => void; 
  href?: string; 
  hasArrow?: boolean;
  className?: string
}

export default function Button({ text, handleClick, href, hasArrow, className}: ButtonProps) {
  
  let stylings = "flex items-center justify-center gap-8 px-5 py-5 rounded-lg bg-sky-700 hover:bg-sky-600 transition font-semibold transition-all duration-500 hover:scale-105";
  if (className) {
    stylings = stylings+ " " + className;
  }

  if (href) {
    return (
      <Link href={href || '#'} 
        className={stylings}
      >
        {text}
        {hasArrow && <TbArrowBigRightFilled className="text-lg" />}
      </Link>
    )
  } else if (handleClick) {
    return(
      <button 
        onClick={handleClick} 
        className={stylings}
      >
        {text}
      </button>
    )
  } else {
    return null;
  }
}