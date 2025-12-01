import React from "react";

import vultures2 from "../img/vultures_2.jpg";
import nightsLikeThis from "../img/nights-like-this.jpg";
import sensational from "../img/sensational.jpg";
import allHopeIsGone from "../img/All_Hope_Is_Gone.png";
import boy from "../img/2hollis_boy_album_cover.jpg";
import iAmMusic from "../img/i_am_music.png";
import longLiveAsap from "../img/long_live_asap.jpg";
import heroesVillains from "../img/heroes_and_villians.jpg";

const covers = {
  vultures2,
  nightsLikeThis,
  sensational,
  allHopeIsGone,
  boy,
  iAmMusic,
  longLiveAsap,
  heroesVillains,
};

const sampleReleases = [
  {
    id: 1,
    title: "VULTURES 2",
    artist: "¥$, Kanye West, Ty Dolla $ign",
    cover: "vultures2",
    date: "2024",
    link: "#",
  },
  {
    id: 2,
    title: "NIGHTS LIKE THIS",
    artist: "The Kid LAROI",
    cover: "nightsLikeThis",
    date: "2023",
    link: "#",
  },
  {
    id: 3,
    title: "Sensational",
    artist: "WizTheMc",
    cover: "sensational",
    date: "2025",
    link: "#",
  },
  {
    id: 4,
    title: "All Hope Is Gone",
    artist: "Slipknot",
    cover: "allHopeIsGone",
    date: "2008",
    link: "#",
  },
  {
    id: 5,
    title: "Boy",
    artist: "2hollis",
    cover: "boy",
    date: "2024",
    link: "#",
  },
  {
    id: 6,
    title: "I AM MUSIC",
    artist: "Playboi Carti",
    cover: "iAmMusic",
    date: "2025",
    link: "#",
  },
  {
    id: 7,
    title: "LONG.LIVE.A$AP",
    artist: "A$AP ROCKY",
    cover: "longLiveAsap",
    date: "2013",
    link: "#",
  },
  {
    id: 8,
    title: "Heroes & Villains",
    artist: "Metro Boomin",
    cover: "heroesVillains",
    date: "2022",
    link: "#",
  },
];

function CardVariantC({ release }) {
  return (
    <a
      href={release.link}
      target="_blank"
      rel="noreferrer"
      className="group block overflow-hidden border border-orange-500/30 bg-[#050505] hover:border-orange-400 transition-colors rounded-md"
    >
      <div className="w-full aspect-square overflow-hidden">
        <img
          src={covers[release.cover]}
          alt={release.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold mb-1 text-orange-400">
          {release.title}
        </h3>
        <p className="text-sm text-gray-300 mb-1">{release.artist}</p>
        <p className="text-xs text-gray-500">{release.date}</p>
      </div>
    </a>
  );
}

function CardVariantB({ release }) {
  return (
    <a
      href={release.link}
      target="_blank"
      rel="noreferrer"
      className="group block overflow-hidden bg-[#050505] rounded-md shadow-md hover:shadow-xl transition border border-orange-500/30"
    >
      <div className="relative w-full aspect-square overflow-hidden">
        <img
          src={covers[release.cover]}
          alt={release.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />

        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
          <div>
            <h3 className="text-sm font-bold text-orange-400">
              {release.title}
            </h3>
            <p className="text-xs text-gray-200">{release.artist}</p>
          </div>
        </div>
      </div>

      <div className="p-3 bg-black">
        <p className="text-sm font-medium text-orange-400">
          {release.title}
        </p>
        <p className="text-xs text-gray-300">{release.artist}</p>
      </div>
    </a>
  );
}

export default function ReleasesSection({
  releases = sampleReleases,
  variant = "C",
}) {
  return (
    <section className="w-full bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
         <p className="text-xs uppercase tracking-[0.25em] text-orange-400 mb-3">
              примеры работ
            </p>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-orange-500">
          Релизы студии
        </h2>
        <p className="text-gray-300 max-w-2xl mb-12 text-lg">
          Часть синглов и альбомов были созданы или сведены на нашей студии. И
          многие другие…
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {releases.map((release) =>
            variant === "B" ? (
              <CardVariantB key={release.id} release={release} />
            ) : (
              <CardVariantC key={release.id} release={release} />
            )
          )}
        </div>
      </div>
    </section>
  );
}
