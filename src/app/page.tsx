"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Sparkles,
  ArrowRight,
  Mail,
  Play,
  Pause,
  Volume2,
  VolumeX,
  ExternalLink,
  Feather
} from "lucide-react";

export default function LandingPage() {
  // Video State
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Scroll Animation State for 3D Laptop Screen Opening Effect
  const [rotateX, setRotateX] = useState<number>(22);
  const [scaleVal, setScaleVal] = useState<number>(0.92);

  // Scroll Listener for Laptop Screen Unfolding Effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 400;
      const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1);
      
      const newRotate = 22 * (1 - progress);
      const newScale = 0.92 + 0.08 * progress;

      setRotateX(newRotate);
      setScaleVal(newScale);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="min-h-screen bg-[#f8f8f6] text-[#20221f] selection:bg-[#56715b]/20 selection:text-[#20221f]">
      
      {/* FLOATING PILL HEADER - CLEAN & UNCLUTTERED */}
      <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-4xl">
        <div className="bg-[#fdfdfb]/90 backdrop-blur-md border border-[#e2e5df] rounded-full px-5 h-13 flex items-center justify-between shadow-sm transition-all hover:border-[#56715b]/30">
          
          {/* Left: Clean Bear Icon + Kiroku Title */}
          <div className="flex items-center gap-2.5">
            <img 
              src="/ullaskunder.svg" 
              alt="Kiroku Logo" 
              className="size-7 rounded-full object-contain p-0.5 bg-[#e9eee8] border border-[#56715b]/20"
            />
            <span className="font-semibold text-base tracking-tight text-[#20221f]">
              Kiroku
            </span>
          </div>

          {/* Center: Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-[#7b817a]">
            <a href="#showcase" className="hover:text-[#20221f] transition-colors">Preview</a>
            <a href="#philosophy" className="hover:text-[#20221f] transition-colors">Philosophy</a>
            <a href="#waitlist" className="hover:text-[#20221f] transition-colors">Early Access</a>
          </nav>

          {/* Right: Join Waitlist Action Button */}
          <div className="flex items-center gap-2">
            <a 
              href="http://ullaskunder.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#56715b] text-[#f8f8f6] text-xs px-4 py-2 rounded-full font-medium hover:bg-[#56715b]/90 transition-all flex items-center gap-1.5 shadow-sm"
            >
              <span>Join Waitlist</span>
              <ArrowRight className="size-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-36 pb-12 px-6 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Subtle background glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#f1e7d6]/60 rounded-full blur-3xl -z-10 pointer-events-none" />

        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f1e7d6] text-[#765f3e] border border-[#e2e5df] text-xs font-mono mb-6 shadow-xs">
          <Feather className="size-3.5 text-[#56715b]" />
          <span>Distraction-Free Technical Writing</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl font-medium tracking-tight leading-[1.15] text-[#20221f] max-w-3xl mb-6 font-serif">
          Where speed meets serenity for engineering documentation.
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-[#7b817a] max-w-2xl leading-relaxed font-normal mb-8">
          No clutter. No redundant popups. What you see is what you get — clean typography, instant markdown rendering, and seamless edge persistence.
        </p>

        {/* CTA Waitlist Button Group */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 mb-10 w-full sm:w-auto">
          <a
            href="http://ullaskunder.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto h-11 px-7 rounded-full bg-[#56715b] text-[#f8f8f6] text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#56715b]/90 transition-all shadow-md hover:shadow-lg"
          >
            <Mail className="size-4" />
            <span>Join Early Access Waitlist</span>
            <ArrowRight className="size-4" />
          </a>
        </div>

        {/* Elegant Feature Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-[#7b817a]">
          <span className="px-3 py-1 rounded-md bg-[#e9eee8] text-[#38503d] font-medium">✓ Typewriter Focus</span>
          <span>•</span>
          <span className="px-3 py-1 rounded-md bg-[#e9eee8] text-[#38503d] font-medium">✓ Native Math & Diagrams</span>
          <span>•</span>
          <span className="px-3 py-1 rounded-md bg-[#e9eee8] text-[#38503d] font-medium">✓ Sub-Millisecond Edge Sync</span>
          <span>•</span>
          <span className="px-3 py-1 rounded-md bg-[#e9eee8] text-[#38503d] font-medium">✓ Quiet Hierarchy</span>
        </div>
      </section>

      {/* 3D SCROLL LAPTOP SCREEN FLIP VIDEO SHOWCASE */}
      <section id="showcase" className="py-8 px-4 sm:px-6 max-w-5xl mx-auto scroll-mt-28">
        
        {/* 3D Perspective Container */}
        <div 
          className="w-full transition-transform duration-150 ease-out"
          style={{
            perspective: "1200px",
          }}
        >
          {/* Opening Laptop Lid Frame */}
          <div
            className="relative rounded-2xl sm:rounded-3xl border-4 border-[#2c2f2a] bg-[#1e201d] shadow-[0_25px_60px_rgba(32,34,31,0.22)] overflow-hidden transition-all duration-200 ease-out"
            style={{
              transform: `rotateX(${rotateX}deg) scale(${scaleVal})`,
              transformOrigin: "center bottom",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Laptop Screen Top Camera Notch */}
            <div className="bg-[#1e201d] h-7 w-full flex items-center justify-between px-4 border-b border-[#2c2f2a] text-[#7b817a] text-[11px] font-mono">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-[#56715b] animate-pulse" />
                <span className="text-[#e9eee8] font-sans font-medium text-xs">Distraction-Free Editor Preview</span>
              </div>
              
              {/* WebCam Dot */}
              <div className="size-2 rounded-full bg-[#2c2f2a] border border-[#3e423b]" />
              
              <div className="flex items-center gap-2 text-[10px] text-[#7b817a]">
                <span>1080p • 60 FPS</span>
              </div>
            </div>

            {/* Clear Video Canvas Wrapper */}
            <div className="relative aspect-[16/10] w-full bg-black group overflow-hidden">
              <video
                ref={videoRef}
                src="/kiroku-demo.mp4"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover"
              />

              {/* Video Overlay Controls */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4 pointer-events-none">
                <div className="flex items-center justify-between text-white/90 text-xs font-mono pointer-events-auto">
                  <span className="bg-black/40 backdrop-blur px-2.5 py-1 rounded border border-white/10">
                    Live Demo Recording
                  </span>
                  <span className="bg-black/40 backdrop-blur px-2.5 py-1 rounded border border-white/10 text-[#56715b]">
                    ● What You See Is What You Get
                  </span>
                </div>

                <div className="flex items-center justify-between text-white pointer-events-auto">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={togglePlay}
                      className="size-9 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/30 transition-colors"
                      title={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? <Pause className="size-4 text-white" /> : <Play className="size-4 text-white fill-white ml-0.5" />}
                    </button>

                    <button
                      onClick={toggleMute}
                      className="size-9 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/30 transition-colors"
                      title={isMuted ? "Unmute" : "Mute"}
                    >
                      {isMuted ? <VolumeX className="size-4 text-white" /> : <Volume2 className="size-4 text-white" />}
                    </button>
                  </div>

                  <a
                    href="http://ullaskunder.com/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-white/90 bg-[#56715b] hover:bg-[#56715b]/90 backdrop-blur px-3 py-1.5 rounded-full shadow transition-all flex items-center gap-1.5"
                  >
                    <span>Join Waitlist</span>
                    <ExternalLink className="size-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Laptop Screen Bottom Bezel Title */}
            <div className="bg-[#1e201d] py-1.5 text-center text-[10px] font-mono text-[#7b817a] border-t border-[#2c2f2a]">
              KIROKU LIVING LIBRARY • SERENE TYPOGRAPHY CANVAS
            </div>
          </div>

          {/* Laptop Bottom Hinge / Base Notch */}
          <div className="w-[85%] mx-auto h-2 bg-[#d1d5ce] rounded-b-xl border-t border-[#b8bcae] shadow-sm" />
        </div>
      </section>

      {/* KNOWLEDGE HIERARCHY SCHEMATIC SECTION */}
      <section id="philosophy" className="py-20 px-6 max-w-5xl mx-auto bg-[#f1f3ef]/50 rounded-2xl border border-[#e2e5df] my-16 text-center">
        <span className="font-mono text-xs uppercase tracking-wider text-[#56715b] font-semibold">Clean Hierarchy</span>
        <h2 className="text-3xl font-serif font-medium text-[#20221f] mt-2 mb-4">
          Structured 4-Tier Knowledge Tree
        </h2>
        <p className="text-sm text-[#7b817a] max-w-xl mx-auto mb-10">
          Simple, intuitive organization for technical books, guides, and personal knowledge bases.
        </p>

        {/* Tree Diagram Visual */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-left font-mono text-xs">
          
          <div className="p-4 bg-[#fdfdfb] rounded-lg border border-[#e2e5df] shadow-sm">
            <div className="text-[10px] text-[#56715b] uppercase font-bold mb-1">Level 1</div>
            <div className="font-bold text-[#20221f] text-sm">Library</div>
            <div className="text-[#7b817a] text-[11px] mt-1">Company / Workspace root entity</div>
          </div>

          <div className="p-4 bg-[#fdfdfb] rounded-lg border border-[#e2e5df] shadow-sm">
            <div className="text-[10px] text-[#56715b] uppercase font-bold mb-1">Level 2</div>
            <div className="font-bold text-[#20221f] text-sm">📚 Book</div>
            <div className="text-[#7b817a] text-[11px] mt-1">Custom title & brand accent color</div>
          </div>

          <div className="p-4 bg-[#fdfdfb] rounded-lg border border-[#e2e5df] shadow-sm">
            <div className="text-[10px] text-[#56715b] uppercase font-bold mb-1">Level 3</div>
            <div className="font-bold text-[#20221f] text-sm">📁 Chapter</div>
            <div className="text-[#7b817a] text-[11px] mt-1">Logical grouping & module folders</div>
          </div>

          <div className="p-4 bg-[#fdfdfb] rounded-lg border border-[#e2e5df] shadow-sm">
            <div className="text-[10px] text-[#56715b] uppercase font-bold mb-1">Level 4</div>
            <div className="font-bold text-[#20221f] text-sm">📄 Page</div>
            <div className="text-[#7b817a] text-[11px] mt-1">Markdown, math, & live code document</div>
          </div>

        </div>
      </section>

      {/* CALL TO ACTION WAITLIST BANNER */}
      <section id="waitlist" className="py-20 px-6 max-w-4xl mx-auto text-center">
        <div className="p-10 rounded-2xl bg-[#56715b] text-[#f8f8f6] shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f8f8f6]/15 text-[#f8f8f6] font-mono text-xs mb-4">
              <span>SERENE TECHNICAL WRITING</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-medium mb-4">
              Experience distraction-free writing.
            </h2>
            <p className="text-sm sm:text-base text-[#f8f8f6]/80 max-w-xl mx-auto mb-8">
              Join the private waitlist to get early beta access when we launch.
            </p>
            <div className="flex justify-center">
              <a
                href="http://ullaskunder.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-[#f8f8f6] text-[#38503d] text-sm font-semibold hover:bg-[#e9eee8] transition-all flex items-center gap-2 shadow-md hover:scale-105"
              >
                <span>Join Waitlist at ullaskunder.com</span>
                <ExternalLink className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6 border-t border-[#e2e5df] text-xs text-[#7b817a]">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img 
              src="/ullaskunder.svg" 
              alt="Ullas Kunder Bear Logo" 
              className="size-6 rounded-full object-contain p-0.5 bg-[#e9eee8] border border-[#56715b]/20"
            />
            <span className="font-semibold text-[#20221f]">Kiroku</span>
            <span>— built by <a href="http://ullaskunder.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#56715b]">ullaskunder.com</a></span>
          </div>

          <div className="flex items-center gap-6 font-mono text-[11px]">
            <span className="flex items-center gap-1.5 text-[#56715b]">
              <span className="size-2 rounded-full bg-[#56715b] animate-pulse" />
              Clean Minimal Writing Canvas
            </span>
            <a href="http://ullaskunder.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">ullaskunder.com</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
