import { useState, useRef, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";

import b1 from "../audio/b1.mp3";
import b2 from "../audio/b2.mp3";
import b3 from "../audio/b3.mp3";
import b4 from "../audio/b4.mp3";
import a1 from "../audio/a1.mp3";
import a2 from "../audio/a2.mp3";
import a3 from "../audio/a3.mp3";
import a4 from "../audio/a4.mp3";

const audioMap = { b1, b2, b3, b4, a1, a2, a3, a4 };

const tracksBefore = [
  { title: "MMRecords - Mixed by Gansy", time: "0:23", src: "b1" },
  { title: "MMRecords - Mixed by acomedown", time: "0:23", src: "b2" },
  { title: "MMRecords - Mixed by BowsSoHigh", time: "0:39", src: "b3" },
  { title: "MMRecords - Mixed by Gansy_2", time: "0:49", src: "b4" },
];

const tracksAfter = [
  { title: "MMRecords - Mixed by Gansy", time: "0:38", src: "a1" },
  { title: "MMRecords - Mixed by acomedown", time: "0:36", src: "a2" },
  { title: "MMRecords - Mixed by BowsSoHigh", time: "0:40", src: "a3" },
  { title: "MMRecords - Mixed by Gansy_2", time: "1:02", src: "a4" },
];

const formatTime = (seconds) => {
  if (!seconds || isNaN(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
};

export default function AudioPlayer() {
  const audioRef = useRef(null);
  const [current, setCurrent] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const load = () => setDuration(audio.duration);
    const end = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", load);
    audio.addEventListener("ended", end);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", load);
      audio.removeEventListener("ended", end);
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  const toggle = (track) => {
    const src = audioMap[track.src];
    if (!src) return;

    if (current?.src !== track.src) {
      setCurrent({ ...track, realSrc: src });
      setIsPlaying(true);
      setTimeout(() => audioRef.current?.play(), 50);
    } else {
      if (isPlaying) audioRef.current.pause();
      else audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const handleSeek = (e) => {
    const t = parseFloat(e.target.value);
    setCurrentTime(t);
    audioRef.current.currentTime = t;
  };

  const skipForward = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = Math.min(
      audioRef.current.currentTime + 10,
      duration
    );
  };

  const skipBackward = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = Math.max(
      audioRef.current.currentTime - 10,
      0
    );
  };

  const TrackBlock = ({ list, label }) => (
    <div>
      <h2 className="text-sm uppercase tracking-[0.25em] text-orange-400 mb-3">
        {label}
      </h2>
      <div className="space-y-3">
        {list.map((track, i) => {
          const active = current?.src === track.src;

          return (
            <div
              key={i}
              onClick={() => toggle(track)}
              className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition
              ${
                active
                  ? "border-orange-500 bg-black"
                  : "border-zinc-800 bg-zinc-950 hover:border-orange-500/60"
              }`}
            >
              <div className="flex-1 min-w-0">
                <p
                  className={`font-medium truncate ${
                    active ? "text-white" : "text-zinc-200"
                  }`}
                >
                  {track.title}
                </p>
                <p
                  className={`text-sm mt-1 ${
                    active ? "text-orange-300" : "text-zinc-500"
                  }`}
                >
                  {track.time}
                </p>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggle(track);
                }}
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition
                ${
                  active
                    ? "bg-orange-600 hover:bg-orange-500"
                    : "bg-zinc-900 hover:bg-zinc-800"
                }`}
              >
                {active && isPlaying ? (
                  <Pause size={18} className="text-white" />
                ) : (
                  <Play size={18} className="text-white" />
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <section className="w-full bg-gradient-to-b from-black via-zinc-950 to-black py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-orange-400 mb-3">
              до / после
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
              Как меняется звук после студийного сведения
            </h1>
            <p className="mt-3 text-sm sm:text-base text-gray-300 max-w-xl">
              Сравните демо и финальные версии проектов. Нажмите на любой трек в
              списке — плеер автоматически подгрузит нужный фрагмент.
            </p>
          </div>
        </div>

        <div className="border border-zinc-800 rounded-3xl bg-black/80 p-6 sm:p-8 space-y-8 shadow-[0_24px_80px_-40px_rgba(0,0,0,1)]">
          {/* Плеер */}
          <div className="border border-zinc-800 rounded-2xl bg-zinc-950/80 p-4 sm:p-5 space-y-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-1">
                  сейчас играет
                </p>
                <p className="text-sm sm:text-base text-white font-medium">
                  {current ? current.title : "Выберите трек из списка"}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={skipBackward}
                  className="w-9 h-9 rounded-full bg-zinc-900 hover:bg-zinc-800 flex items-center justify-center transition"
                >
                  <SkipBack size={16} className="text-zinc-200" />
                </button>
                <button
                  onClick={() => {
                    if (!current) toggle(tracksAfter[0]);
                    else toggle(current);
                  }}
                  className="w-10 h-10 rounded-full bg-orange-500 hover:bg-orange-600 flex items-center justify-center transition shadow-[0_16px_40px_-20px_rgba(249,115,22,1)]"
                >
                  {isPlaying ? (
                    <Pause size={18} className="text-white" />
                  ) : (
                    <Play size={18} className="text-white" />
                  )}
                </button>
                <button
                  onClick={skipForward}
                  className="w-9 h-9 rounded-full bg-zinc-900 hover:bg-zinc-800 flex items-center justify-center transition"
                >
                  <SkipForward size={16} className="text-zinc-200" />
                </button>
              </div>
            </div>

            {/* Таймлайн */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[11px] text-zinc-400 mb-1">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>

              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer
                   [&::-webkit-slider-thumb]:h-4
                   [&::-webkit-slider-thumb]:w-4
                   [&::-webkit-slider-thumb]:rounded-full
                   [&::-webkit-slider-thumb]:bg-orange-500"
              />
            </div>

            {/* Громкость */}
            <div className="flex items-center space-x-3">
              <Volume2 size={18} className="text-zinc-400" />

              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="flex-1 h-2 bg-zinc-800 rounded-lg appearance-none
                    [&::-webkit-slider-thumb]:h-4
                    [&::-webkit-slider-thumb]:w-4
                    [&::-webkit-slider-thumb]:rounded-full
                    [&::-webkit-slider-thumb]:bg-orange-500"
              />

              <span className="text-zinc-300 text-sm w-10 text-right">
                {Math.round(volume * 100)}%
              </span>
            </div>
          </div>

          {/* Списки треков */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TrackBlock list={tracksBefore} label="до сведения" />
            <TrackBlock list={tracksAfter} label="после сведения" />
          </div>
        </div>
      </div>

      <audio ref={audioRef} src={current?.realSrc} hidden />
    </section>
  );
}
