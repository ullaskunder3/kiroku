"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Mail,
  Play,
  Pause,
  Volume2,
  VolumeX,
  ExternalLink,
  Feather,
  CheckCircle
} from "lucide-react";

export default function LandingPage() {
  // Video State
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Scroll Animation State for 3D Laptop Screen Opening Effect
  const [rotateX, setRotateX] = useState<number>(22);
  const [scaleVal, setScaleVal] = useState<number>(0.92);

  // In-Page Waitlist Form State
  const [email, setEmail] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setIsSubmitted(true);

    try {
      await fetch("https://formsubmit.co/ajax/ullaskunder3+wl@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          email: email,
          _subject: `🎉 New Kiroku Waitlist Sign-Up: ${email}`,
          message: `A new subscriber joined the Kiroku Waitlist!\n\nEmail: ${email}\nSource: Kiroku Landing Page\nTime: ${new Date().toISOString()}`,
          _template: "table"
        })
      });
    } catch (err) {
      console.error("Failed to dispatch waitlist email:", err);
    }
  };

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
      
      {/* FLOATING PILL HEADER - CLEAN & RESPONSIVE */}
      <header className="fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-[94%] sm:w-[92%] max-w-4xl">
        <div className="bg-[#fdfdfb]/90 backdrop-blur-md border border-[#e2e5df] rounded-full px-3.5 sm:px-5 h-12 sm:h-13 flex items-center justify-between shadow-sm transition-all hover:border-[#56715b]/30">
          
          {/* Left: Clean Bear Icon + Kiroku Title */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <img 
              src="/ullaskunder.svg" 
              alt="Kiroku Logo" 
              className="size-6 sm:size-7 rounded-full object-contain p-0.5 bg-[#e9eee8] border border-[#56715b]/20"
            />
            <span className="font-semibold text-sm sm:text-base tracking-tight text-[#20221f]">
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
              href="http://ullaskunder.com/wl"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#56715b] text-[#f8f8f6] text-[11px] sm:text-xs px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-medium hover:bg-[#56715b]/90 transition-all flex items-center gap-1.5 shadow-sm whitespace-nowrap"
            >
              <span>Join Waitlist</span>
              <ArrowRight className="size-3 sm:size-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-28 sm:pt-36 pb-8 sm:pb-12 px-4 sm:px-6 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Subtle background glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-[#f1e7d6]/60 rounded-full blur-3xl -z-10 pointer-events-none" />

        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 rounded-full bg-[#f1e7d6] text-[#765f3e] border border-[#e2e5df] text-[11px] sm:text-xs font-mono mb-5 sm:mb-6 shadow-xs max-w-full truncate">
          <Feather className="size-3 sm:size-3.5 text-[#56715b] shrink-0" />
          <span className="truncate">Distraction-Free Writing</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-[1.18] sm:leading-[1.15] text-[#20221f] max-w-3xl mb-4 sm:mb-6 font-serif text-balance">
          Where speed meets serenity for your writing, organization,&nbsp;and&nbsp;ideas.
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-[#7b817a] max-w-2xl leading-relaxed font-normal mb-6 sm:mb-8 text-balance">
          No clutter. No redundant popups. What you see is what you get. Clean typography, instant markdown rendering, and seamless edge&nbsp;persistence.
        </p>

        {/* INLINE EMAIL WAITLIST FORM */}
        {isSubmitted ? (
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#e9eee8] text-[#38503d] border border-[#56715b]/30 text-xs sm:text-sm font-medium mb-8 sm:mb-10 shadow-xs animate-rubber">
            <CheckCircle className="size-4 text-[#56715b] shrink-0" />
            <span>You&apos;re on the waitlist! We&apos;ll notify you as soon as early access opens.</span>
          </div>
        ) : (
          <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row items-center gap-2.5 mb-8 sm:mb-10 w-full max-w-md mx-auto">
            <div className="relative w-full">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-[#7b817a]" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="w-full h-11 pl-10 pr-4 rounded-full bg-[#fdfdfb] border border-[#e2e5df] text-xs sm:text-sm text-[#20221f] placeholder:text-[#7b817a] focus:outline-none focus:border-[#56715b] focus:ring-2 focus:ring-[#56715b]/20 shadow-xs transition-all"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto h-11 px-6 rounded-full bg-[#56715b] text-[#f8f8f6] text-xs sm:text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#56715b]/90 active:scale-95 transition-all shadow-md shrink-0 whitespace-nowrap"
            >
              <span>Join Waitlist</span>
              <ArrowRight className="size-4" />
            </button>
          </form>
        )}

        {/* Elegant Feature Pills - Symmetrical 2x2 Grid on Mobile/Tablet, Single Centered Row on Desktop */}
        <div className="grid grid-cols-1 xs:grid-cols-2 max-w-lg mx-auto md:flex md:max-w-none md:w-full md:flex-wrap md:justify-center md:items-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-mono text-[#7b817a]">
          <span className="px-3 py-1.5 rounded-md bg-[#e9eee8] text-[#38503d] font-medium shadow-2xs flex items-center justify-center text-center whitespace-nowrap">✓ Typewriter Focus</span>
          <span className="px-3 py-1.5 rounded-md bg-[#e9eee8] text-[#38503d] font-medium shadow-2xs flex items-center justify-center text-center whitespace-nowrap">✓ Native Math & Diagrams</span>
          <span className="px-3 py-1.5 rounded-md bg-[#e9eee8] text-[#38503d] font-medium shadow-2xs flex items-center justify-center text-center whitespace-nowrap">✓ Sub-Millisecond Edge Sync</span>
          <span className="px-3 py-1.5 rounded-md bg-[#e9eee8] text-[#38503d] font-medium shadow-2xs flex items-center justify-center text-center whitespace-nowrap">✓ Quiet Hierarchy</span>
        </div>
      </section>

      {/* 3D SCROLL LAPTOP SCREEN FLIP VIDEO SHOWCASE */}
      <section id="showcase" className="py-6 sm:py-8 px-3 sm:px-6 max-w-5xl mx-auto scroll-mt-24 sm:scroll-mt-28">
        
        {/* 3D Perspective Container */}
        <div 
          className="w-full transition-transform duration-150 ease-out"
          style={{
            perspective: "1200px",
          }}
        >
          {/* Sleek Minimal App Window Container */}
          <div
            className="relative rounded-2xl sm:rounded-3xl border border-[#e2e5df] bg-[#1e201d] shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden transition-all duration-200 ease-out"
            style={{
              transform: `rotateX(${rotateX}deg) scale(${scaleVal})`,
              transformOrigin: "center bottom",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Sleek Modern Window Control Bar */}
            <div className="bg-[#181a17] h-8 sm:h-9 w-full flex items-center justify-between px-3.5 sm:px-4 border-b border-[#2a2d28] text-[#7b817a] text-[11px] font-mono">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="size-2.5 rounded-full bg-[#ff5f56]/80" />
                  <span className="size-2.5 rounded-full bg-[#ffbd2e]/80" />
                  <span className="size-2.5 rounded-full bg-[#27c93f]/80" />
                </div>
                <span className="text-[#a0a59d] font-sans font-medium text-[11px] sm:text-xs ml-2 truncate">Kiroku • Distraction-Free Canvas</span>
              </div>
              
              <div className="hidden sm:flex items-center gap-2 text-[10px] text-[#7b817a]">
                <span className="size-1.5 rounded-full bg-[#56715b] animate-pulse" />
                <span>Live Preview</span>
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

              {/* Video Overlay Controls - Touch and Desktop Friendly */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3 sm:p-4 pointer-events-none">
                <div className="flex items-center justify-between text-white/90 text-[10px] sm:text-xs font-mono pointer-events-auto gap-2">
                  <span className="bg-black/40 backdrop-blur px-2.5 py-1 rounded border border-white/10 truncate">
                    Live Demo Recording
                  </span>
                  <span className="hidden xs:inline-block bg-black/40 backdrop-blur px-2.5 py-1 rounded border border-white/10 text-[#56715b] shrink-0">
                    ● What You See Is What You Get
                  </span>
                </div>

                <div className="flex items-center justify-between text-white pointer-events-auto gap-2">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <button
                      onClick={togglePlay}
                      className="size-8 sm:size-9 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/30 active:scale-95 transition-all"
                      title={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? <Pause className="size-4 text-white" /> : <Play className="size-4 text-white fill-white ml-0.5" />}
                    </button>

                    <button
                      onClick={toggleMute}
                      className="size-8 sm:size-9 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/30 active:scale-95 transition-all"
                      title={isMuted ? "Unmute" : "Mute"}
                    >
                      {isMuted ? <VolumeX className="size-4 text-white" /> : <Volume2 className="size-4 text-white" />}
                    </button>
                  </div>

                  <a
                    href="http://ullaskunder.com/wl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] sm:text-xs font-mono text-white/90 bg-[#56715b] hover:bg-[#56715b]/90 backdrop-blur px-3 py-1.5 rounded-full shadow transition-all flex items-center gap-1.5 whitespace-nowrap"
                  >
                    <span>Join Waitlist</span>
                    <ExternalLink className="size-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KNOWLEDGE HIERARCHY SCHEMATIC SECTION */}
      <section id="philosophy" className="py-10 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto bg-[#f1f3ef]/50 rounded-2xl border border-[#e2e5df] my-10 sm:my-16 text-center">
        <span className="font-mono text-xs uppercase tracking-wider text-[#56715b] font-semibold">Clean Hierarchy</span>
        <h2 className="text-2xl sm:text-3xl font-serif font-medium text-[#20221f] mt-2 mb-3 sm:mb-4 text-balance">
          Structured 4-Tier Knowledge Tree
        </h2>
        <p className="text-xs sm:text-sm text-[#7b817a] max-w-xl mx-auto mb-8 sm:mb-10 text-balance">
          Simple, intuitive organization for your notes, guides, books, and personal knowledge base.
        </p>

        {/* Tree Diagram Visual */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-left font-mono text-xs">
          
          <div className="p-4 bg-[#fdfdfb] rounded-lg border border-[#e2e5df] shadow-sm hover:border-[#56715b]/30 transition-colors">
            <div className="text-[10px] text-[#56715b] uppercase font-bold mb-1 flex items-center justify-between">
              <span>Level 1</span>
              <span className="text-[#7b817a] font-normal">Root</span>
            </div>
            <div className="font-bold text-[#20221f] text-sm">Library</div>
            <div className="text-[#7b817a] text-[11px] mt-1">Company / Workspace root entity</div>
          </div>

          <div className="p-4 bg-[#fdfdfb] rounded-lg border border-[#e2e5df] shadow-sm hover:border-[#56715b]/30 transition-colors">
            <div className="text-[10px] text-[#56715b] uppercase font-bold mb-1 flex items-center justify-between">
              <span>Level 2</span>
              <span className="text-[#7b817a] font-normal">Module</span>
            </div>
            <div className="font-bold text-[#20221f] text-sm">📚 Book</div>
            <div className="text-[#7b817a] text-[11px] mt-1">Custom title & brand accent color</div>
          </div>

          <div className="p-4 bg-[#fdfdfb] rounded-lg border border-[#e2e5df] shadow-sm hover:border-[#56715b]/30 transition-colors">
            <div className="text-[10px] text-[#56715b] uppercase font-bold mb-1 flex items-center justify-between">
              <span>Level 3</span>
              <span className="text-[#7b817a] font-normal">Group</span>
            </div>
            <div className="font-bold text-[#20221f] text-sm">📁 Chapter</div>
            <div className="text-[#7b817a] text-[11px] mt-1">Logical grouping & module folders</div>
          </div>

          <div className="p-4 bg-[#fdfdfb] rounded-lg border border-[#e2e5df] shadow-sm hover:border-[#56715b]/30 transition-colors">
            <div className="text-[10px] text-[#56715b] uppercase font-bold mb-1 flex items-center justify-between">
              <span>Level 4</span>
              <span className="text-[#7b817a] font-normal">Document</span>
            </div>
            <div className="font-bold text-[#20221f] text-sm">📄 Page</div>
            <div className="text-[#7b817a] text-[11px] mt-1">Markdown, math, & live code document</div>
          </div>

        </div>
      </section>

      {/* CALL TO ACTION WAITLIST BANNER */}
      <section id="waitlist" className="py-10 sm:py-20 px-4 sm:px-6 max-w-4xl mx-auto text-center">
        <div className="p-6 sm:p-10 rounded-2xl bg-[#56715b] text-[#f8f8f6] shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f8f8f6]/15 text-[#f8f8f6] font-mono text-[10px] sm:text-xs mb-3 sm:mb-4 max-w-full truncate">
              <span className="truncate">SERENE DISTRACTION-FREE WRITING</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-medium mb-3 sm:mb-4 text-balance">
              Experience distraction-free writing.
            </h2>
            <p className="text-xs sm:text-base text-[#f8f8f6]/80 max-w-xl mx-auto mb-6 sm:mb-8 text-balance">
              Join the private waitlist to get early beta access when we launch.
            </p>

            {/* INLINE BANNER WAITLIST FORM */}
            {isSubmitted ? (
              <div className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#f8f8f6]/20 text-[#f8f8f6] border border-[#f8f8f6]/30 text-xs sm:text-sm font-medium backdrop-blur animate-rubber">
                <CheckCircle className="size-4 text-[#f8f8f6] shrink-0" />
                <span>You&apos;re on the waitlist! We&apos;ll be in touch.</span>
              </div>
            ) : (
              <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-2.5 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="w-full h-11 px-4 rounded-full bg-[#fdfdfb] text-[#20221f] placeholder:text-[#7b817a] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-white/40 shadow-sm"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto h-11 px-7 rounded-full bg-[#f8f8f6] text-[#38503d] text-xs sm:text-sm font-semibold hover:bg-[#e9eee8] active:scale-95 transition-all flex items-center justify-center gap-2 shadow-md shrink-0 whitespace-nowrap"
                >
                  <span>Join Waitlist</span>
                  <ArrowRight className="size-4 text-[#38503d]" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 sm:py-10 px-4 sm:px-6 border-t border-[#e2e5df] text-xs text-[#7b817a]">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <img 
              src="/ullaskunder.svg" 
              alt="Ullas Kunder Bear Logo" 
              className="size-6 rounded-full object-contain p-0.5 bg-[#e9eee8] border border-[#56715b]/20"
            />
            <span className="font-semibold text-[#20221f]">Kiroku</span>
            <span>• built by <a href="http://ullaskunder.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#56715b]">ullaskunder.com</a></span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 font-mono text-[11px]">
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


