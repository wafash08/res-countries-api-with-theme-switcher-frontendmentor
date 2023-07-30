"use client";
import { Borders } from "@/types";
import { useMultipleRequests } from "./swr-provider";
import { getborderCountriesName } from "@/utils";
import SkeletonLoading from "./skeleton-loading";

export default function BorderCountryList({ borders }: { borders: Borders }) {
  const { data, isLoading } = useMultipleRequests(borders);

  if (isLoading) {
    return <SkeletonLoading />;
  }

  const borderCountries = getborderCountriesName(data);
  console.table("borderCountries >>", borderCountries);

  return (
    <>
      <p className='text-t-vdb dark:text-white capitalize md:basis-[170] shrink-0'>
        <strong className='font-semibold'>border countries:</strong>
      </p>
      <ul className='flex items-center gap-3 flex-wrap'>
        {borderCountries.map(name => (
          <BorderCountryItem name={name} key={name} />
        ))}
      </ul>
    </>
  );
}

function BorderCountryItem({ name }: { name: string }) {
  return (
    <li className='px-6 py-1 rounded-sm shadow-back text-center dark:bg-el-db dark:text-white'>
      {name}
    </li>
  );
}
