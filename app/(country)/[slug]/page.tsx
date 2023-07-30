import BackButton from "@/components/back-button";
import CountryDetail from "@/components/country-detail";
import { SWRProvider } from "@/components/swr-provider";
import { Country } from "@/types";
import { getFormattedCountries, toCountryName, toKebabCase } from "@/utils";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const countries = await fetch("https://restcountries.com/v3.1/all").then(
    res => res.json()
  );

  const formattedCountries = getFormattedCountries(countries);

  return formattedCountries.map(country => {
    const slug = toKebabCase(country.name.common);
    return {
      slug,
    };
  });
}

async function getCountryByName(name: string): Promise<Country> {
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${name}?fullText=true`
  );

  const country = await res.json();
  const formattedCountries = getFormattedCountries(country);
  return formattedCountries[0];
}

export default async function CountryDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const countryName = toCountryName(params.slug);
  const country = await getCountryByName(countryName);

  return (
    <SWRProvider>
      <main className='my-16 max-w-[1200px] mx-auto'>
        <BackButton href='/' />
        <CountryDetail country={country} />
      </main>
    </SWRProvider>
  );
}
