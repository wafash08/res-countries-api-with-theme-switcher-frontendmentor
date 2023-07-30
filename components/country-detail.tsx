"use client";
import { Country } from "@/types";
import {
  formatNumber,
  getCommonNativeName,
  getCurrencyName,
  getLanguages,
  getTld,
} from "@/utils";
import Image from "next/image";
import BorderCountryList from "./border-country-list";

type CountryDetailProps = { country: Country };

export default function CountryDetail({ country }: CountryDetailProps) {
  let currencyName = "";
  if (country.currencies) {
    currencyName += getCurrencyName(country.currencies);
  }
  const languages = getLanguages(country.languages);
  const nativeNames = getCommonNativeName(country.name.nativeName);
  const tld = getTld(country.tld);

  return (
    <section className='mt-10 flex lg:items-center gap-10 flex-col lg:flex-row'>
      <div className='flex-1 shadow-md'>
        <Image
          src={country.flags.svg}
          alt={`Bendera negara ${country.name.common}`}
          width={320}
          height={160}
          className='w-full'
        />
      </div>

      <div className='flex-1'>
        <div>
          <h3 className='text-3xl font-extrabold mb-8 dark:text-white'>
            {country.name.common}
          </h3>
          <div className='flex flex-col md:flex-row gap-8 lg:gap-2 lg:justify-between'>
            <ul className='flex flex-col gap-2'>
              <DetailItem detailKey='Native Name' detailValue={nativeNames} />
              <DetailItem
                detailKey='Population'
                detailValue={formatNumber(country.population)}
              />
              <DetailItem detailKey='region' detailValue={country.region} />
              {country.subregion && (
                <DetailItem
                  detailKey='sub region'
                  detailValue={country.subregion}
                />
              )}
              {country.capital && (
                <DetailItem detailKey='capital' detailValue={country.capital} />
              )}
            </ul>
            <ul className='flex flex-col gap-2'>
              <DetailItem detailKey='top level domain' detailValue={tld} />
              {currencyName && (
                <DetailItem detailKey='currencies' detailValue={currencyName} />
              )}
              <DetailItem detailKey='languages' detailValue={languages} />
            </ul>
          </div>
          {country.borders && (
            <div className='mt-16 flex gap-4 flex-col md:flex-row'>
              <BorderCountryList borders={country.borders} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function DetailItem({
  detailKey,
  detailValue,
}: {
  detailKey: string;
  detailValue: string | number;
}) {
  return (
    <li>
      <p className='text-t-vdb dark:text-white font-light'>
        <strong className='font-semibold capitalize'>{detailKey}:</strong>{" "}
        {detailValue}
      </p>
    </li>
  );
}
