import React from "react";
import Banner from "./components/Banner";
import Explore from "./components/Explore";
import Live from "./components/Live";
import GreadestOutdoors from "./components/GreadestOutdoors";

export default function Home() {
  return (
    <main>
      <Banner />
      <Explore />
      <Live />
      <GreadestOutdoors
        img='https://images.unsplash.com/photo-1609688669309-fc15db557633?ixlib=rb-4.O.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWd1fHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        title='The Greatest Outdoors'
        description='wishlist curant by casa'
        linkText='Get inspired'
      />
    </main>
  );
}
