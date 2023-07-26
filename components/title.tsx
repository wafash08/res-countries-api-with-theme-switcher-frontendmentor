"use client";
import { useParams } from "next/navigation";

export default function Title() {
  const { slug } = useParams();

  console.log(slug);
  return <h1>Halaman informasi detail tentang negara {slug}</h1>;
}
