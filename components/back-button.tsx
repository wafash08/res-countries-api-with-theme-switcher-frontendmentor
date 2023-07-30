"use client";

import Link, { LinkProps } from "next/link";

type BackButtonProps = LinkProps;

export default function BackButton(props: BackButtonProps) {
  return (
    <nav aria-label='Back'>
      <Link
        {...props}
        className='bg-white dark:bg-el-db shadow-back flex items-center justify-center w-20 py-1 dark:text-white'
      >
        Back
      </Link>
    </nav>
  );
}
