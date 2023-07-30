import { Country, CountryNativeName, Currency, Language } from "@/types";

export function toKebabCase(str: string) {
  if (!str.includes(" ")) {
    return str.toLowerCase();
  }

  return str.split(" ").join("-").toLowerCase();
}

export function toCountryName(str: string) {
  if (!str.includes("-")) {
    return str;
  }

  return str.split("-").join(" ");
}

function toStringSeparatedComma(strings: string[]) {
  return strings.join(", ");
}

export function getCurrencyName(currency: Currency) {
  const key = Object.keys(currency)[0];
  return currency[key].name;
}

export function getLanguages(languages: Language) {
  const languageList = Object.values(languages);
  return toStringSeparatedComma(languageList);
}

export function getTld(domains: string[]) {
  return toStringSeparatedComma(domains);
}

export function getCommonNativeName(nativeNames: CountryNativeName) {
  const commons = [];

  for (const [_, value] of Object.entries(nativeNames)) {
    commons.push(value["common"]);
  }

  return toStringSeparatedComma(commons);
}

export function getborderCountriesName(countries: any[][]) {
  const flatArray = countries.flat();
  return flatArray.map(arr => arr.name.common);
}

export function getFormattedCountries(countries: any[]): Country[] {
  return countries.map(country => {
    return {
      borders: country.borders,
      capital: country.capital,
      currencies: country.currencies,
      flags: country.flags,
      languages: country.languages,
      name: country.name,
      nativeName: country.nativeName,
      population: country.population,
      region: country.region,
      subregion: country.subregion,
      tld: country.tld,
    };
  });
}

const formatter = new Intl.NumberFormat();
export function formatNumber(number: number) {
  return formatter.format(number);
}
