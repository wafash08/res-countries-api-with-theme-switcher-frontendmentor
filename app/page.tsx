import CountryList from "@/components/country-list";
import SearchForm from "@/components/search-form";
import { Country } from "@/types";
import { getFormattedCountries } from "@/utils";
import React from "react";

async function getAllCountries(): Promise<Country[]> {
  const res = await fetch("https://restcountries.com/v3.1/all");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const result = await res.json();
  const formattedCountries = getFormattedCountries(result);
  return formattedCountries;
}

export default async function Home() {
  const countries = await getAllCountries();

  return (
    <main className='mt-10 max-w-[1200px] mx-auto'>
      <section className='flex items-center justify-between'>
        <SearchForm />
        <select name='filterRegion' id='filterRegion'>
          <option value='africa'>Africa</option>
          <option value='america'>America</option>
          <option value='asia'>Asia</option>
          <option value='europe'>Europe</option>
          <option value='oceania'>Oceania</option>
        </select>
      </section>
      <section className='mt-10 px-6 lg:px-0'>
        <CountryList countries={countries} />
      </section>
    </main>
  );
}
