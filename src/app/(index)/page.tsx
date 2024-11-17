import Link from "next/link";

import {RestaurantCard} from "../components/restaurant-card";

import SearchBox from "./components/search-box";

import api from "@/api";

// export const dynamic = "force-dynamic";
// export const revalidate = 60;

export default async function Home({searchParams}: {searchParams: Promise<{q: string}>}) {
  const {q} = await searchParams;
  const restaurants = await api.search(q);

  return (
    <article>
      <SearchBox />
      <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </section>
    </article>
  );
}
