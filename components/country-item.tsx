import { Country } from "@/types";
import { formatNumber, toKebabCase } from "@/utils";
import Image from "next/image";
import Link from "next/link";

type CountryItemProps = Pick<
  Country,
  "name" | "population" | "region" | "capital" | "flags"
>;

export default function CountryItem({
  capital,
  flags,
  name,
  population,
  region,
}: CountryItemProps) {
  const slug = toKebabCase(name.common);
  return (
    <li className='overflow-hidden rounded-md shadow-lg relative bg-white dark:bg-el-db hover:-translate-y-3 transition-transform duration-300 ease-in-out'>
      <figure className='h-[160px] overflow-hidden'>
        <Image
          alt={`Bendera negara ${name.official}`}
          src={flags.png}
          width={320}
          height={160}
          className='h-full w-full object-cover'
        />
      </figure>
      <div className='p-6'>
        <h3 className='text-xl text-t-vdb dark:text-white font-extrabold'>
          {name.common}
        </h3>
        <p className='mt-3 text-t-vdb dark:text-white'>
          <span className='font-semibold'>Population</span>:{" "}
          <span className='font-light'>{formatNumber(population)}</span>
        </p>
        <p className='text-t-vdb dark:text-white'>
          <span className='font-semibold'>Region</span>:{" "}
          <span className='font-light'>{region}</span>
        </p>
        <p className='text-t-vdb dark:text-white'>
          <span className='font-semibold'>Capital</span>:{" "}
          <span className='font-light'>{capital ? capital : "-"}</span>
        </p>
      </div>
      <Link href={`/${slug}`} className='absolute inset-0' />
    </li>
  );
}
