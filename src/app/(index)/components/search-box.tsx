"use client";

import Form from "next/form";
import {useSearchParams} from "next/navigation";

import {searchAction} from "../actions";

export default function SearchBox() {
  const searchParams = useSearchParams();

  return (
    <Form action="/" className="mb-4 inline-flex gap-2">
      {/* Inicializamos el input para que contenga el valor actual de la query */}
      <input className="border px-2" defaultValue={searchParams.get("q") || ""} name="q" />
      <button className="bg-white/20 p-2" type="submit">
        Search
      </button>
    </Form>
  );
}
