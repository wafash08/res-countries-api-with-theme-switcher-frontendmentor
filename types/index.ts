export type Currency = Record<string, { name: string; symbol: string }>;

export type Language = Record<string, string>;

export type CountryNativeName = Record<
  string,
  { official: string; common: string }
>;

export type Borders = string[];

type CountryName = {
  common: string;
  official: string;
  nativeName: CountryNativeName;
};

export type Country = {
  name: CountryName;
  tld: string[];
  capital: string;
  subregion: string;
  region: string;
  population: number;
  borders: Borders;
  nativeName: CountryNativeName;
  flags: {
    svg: string;
    png: string;
  };
  currencies: Currency;
  languages: Language;
};
