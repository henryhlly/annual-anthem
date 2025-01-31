'use client'

import { TbArrowBigRightFilled } from 'react-icons/tb';
import Link from 'next/link';

export const Button = ({ text, handleClick, href, hasArrow }: { text: string, handleClick?: () => void, href?: string, hasArrow?: boolean }) => {

  if (href) {
    return (
      <Link href={href || '#'} className="flex items-center justify-center gap-8 px-5 py-5 rounded-lg bg-sky-600 hover:bg-sky-700">
        {text}
        {hasArrow && <TbArrowBigRightFilled className="text-lg" />}
      </Link>
    )
  } else if (handleClick) {
    return(
      <button className="flex items-center justify-center gap-8 px-5 py-5 rounded-lg bg-sky-600 hover:bg-sky-700" onClick={handleClick}>
        {text}
      </button>
    )
  } else {
    return null;
  }
}