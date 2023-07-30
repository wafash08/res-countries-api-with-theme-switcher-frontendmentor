"use client";
import { Borders } from "@/types";
import useSWR, { SWRConfig } from "swr";

export const SWRProvider = ({ children }: { children: React.ReactNode }) => {
  return <SWRConfig>{children}</SWRConfig>;
};

function fetcher(urls: string[]) {
  const f = (u: string) => fetch(u).then(r => r.json());

  if (urls.length > 1) {
    return Promise.all(urls.map(f));
  }

  return f(urls[0]);
}

function createUrlByBorderCountries(borders: Borders) {
  return borders.map(
    border => `https://restcountries.com/v3.1/alpha/${border}`
  );
}

export function useMultipleRequests(borders: Borders) {
  const urls = createUrlByBorderCountries(borders);
  const { data, error, isLoading } = useSWR(urls, fetcher);
  return {
    data: data,
    isError: !!error,
    isLoading: isLoading,
  };
}
