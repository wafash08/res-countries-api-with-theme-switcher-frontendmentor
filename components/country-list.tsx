import { Country } from "@/types";
import CountryItem from "./country-item";

type CountryListProps = {
  countries: Country[];
};

export default function CountryList({ countries }: CountryListProps) {
  return (
    <ul className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10'>
      {countries.map(country => {
        return (
          <CountryItem
            capital={country.capital}
            flags={country.flags}
            name={country.name}
            population={country.population}
            region={country.region}
            key={country.name.official}
          />
        );
      })}
    </ul>
  );
}
