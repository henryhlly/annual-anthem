'use client'

import { TbArrowBigRightFilled } from 'react-icons/tb';
import Link from 'next/link';

interface ButtonProps {
  text: string; 
  handleClick?: () => void; 
  href?: string; 
  hasArrow?: boolean;
  width?: number;
  height?: number;
}

export default function Button({ text, handleClick, href, hasArrow, width, height}: ButtonProps) {

  const stylings = "flex items-center justify-center gap-8 px-5 py-5 rounded-lg bg-sky-700 hover:bg-sky-600 transition font-semibold";

  if (href) {
    return (
      <Link href={href || '#'} 
        className={stylings}
        style={{ width: width || 'auto', height: height || "auto "}}
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
        style={{ width: width || 'auto', height: height || "auto "}}
      >
        {text}
      </button>
    )
  } else {
    return null;
  }
}