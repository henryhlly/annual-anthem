'use client'

import { TbArrowBigRightFilled } from 'react-icons/tb';
import Link from 'next/link';

export const Button = ({ href, text, hasArrow}: { href: string, text: string, hasArrow?: boolean }) => {
  return (
    <Link href={href} className="flex items-center justify-center gap-8 px-5 py-5 rounded-lg bg-sky-600 hover:bg-sky-700">
      {text}
      {hasArrow && <TbArrowBigRightFilled className="text-lg" />}
    </Link>
  )
}