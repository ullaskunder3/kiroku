"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ExternalLink,
  Feather,
  Zap,
  ShieldCheck,
  Check,
  Sparkles,
  Layers,
  BookOpen,
  Cloud,
  Brain,
  Mic,
  Server,
  Workflow,
  Key,
  HardDrive,
  Building2,
  FolderTree,
  FileText,
  ChevronRight,
  Menu,
  X
} from "lucide-react";

export default function LandingPage() {
  // Mobile Nav Menu State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Demo Image Pop-up animation state
  const [isPopping, setIsPopping] = useState<boolean>(false);

  // Scroll Animation State for 3D Laptop Screen Opening Effect
  const [rotateX, setRotateX] = useState<number>(22);
  const [scaleVal, setScaleVal] = useState<number>(0.92);

  // Pricing Billing Selection State: 'annual' | 'monthly'
  const [billingCycle, setBillingCycle] = useState<"annual" | "monthly">("annual");

  const handleDemoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isPopping) return;
    setIsPopping(true);
    // Seamless cinematic dive-in redirect without waiting to stop
    setTimeout(() => {
      window.location.href = "https://app.kiroku.xyz";
    }, 180);
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

  return (
    <div className="min-h-screen bg-[#f8f8f6] text-[#20221f] selection:bg-[#56715b]/20 selection:text-[#20221f]">

      {/* FLOATING PILL HEADER - CLEAN & RESPONSIVE */}
      <header className="fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-[94%] sm:w-[92%] max-w-4xl">
        <div className="bg-[#fdfdfb]/90 backdrop-blur-md border border-[#e2e5df] rounded-full px-3.5 sm:px-5 h-12 sm:h-13 flex items-center justify-between shadow-sm transition-all hover:border-[#56715b]/30">

          {/* Left: Animated Kiroku Logo + Title */}
          <Link href="/" className="flex items-center gap-2 sm:gap-2.5 group">
            <Image
              src="/animated.svg"
              alt="Kiroku Logo"
              width={32}
              height={32}
              className="h-7 sm:h-8 w-auto object-contain transition-transform group-hover:scale-105"
              priority
            />
            <span className="font-semibold text-sm sm:text-base tracking-tight text-[#20221f]">
              Kiroku
            </span>
          </Link>

          {/* Center: Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-[#7b817a]">
            <a href="#showcase" className="hover:text-[#20221f] transition-colors">Preview</a>
            <a href="#planning" className="hover:text-[#20221f] transition-colors">Planning</a>
            <a href="#pricing" className="hover:text-[#20221f] transition-colors">Pricing</a>
            <a
              href="https://www.ullaskunder.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#20221f] transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-2">
            {/* Desktop Open App CTA */}
            <a
              href="https://app.kiroku.xyz"
              className="hidden md:flex bg-[#56715b] text-[#f8f8f6] text-xs px-4.5 py-2 rounded-full font-medium hover:bg-[#56715b]/90 transition-all items-center gap-1.5 shadow-sm whitespace-nowrap"
            >
              <span>Open App</span>
              <ArrowRight className="size-3.5" />
            </a>

            {/* Mobile Nav Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden size-9 rounded-full bg-[#e9eee8] text-[#20221f] flex items-center justify-center hover:bg-[#e2e5df] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="size-4.5 text-[#20221f]" /> : <Menu className="size-4.5 text-[#20221f]" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown Card */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 p-3.5 rounded-2xl bg-[#fdfdfb]/95 backdrop-blur-lg border border-[#e2e5df] shadow-lg flex flex-col gap-1.5 font-mono text-xs animate-in fade-in slide-in-from-top-2 duration-200">
            <a
              href="#showcase"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl hover:bg-[#e9eee8] text-[#20221f] transition-colors flex items-center justify-between"
            >
              <span>Preview</span>
              <ChevronRight className="size-3.5 text-[#7b817a]" />
            </a>
            <a
              href="#planning"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl hover:bg-[#e9eee8] text-[#20221f] transition-colors flex items-center justify-between"
            >
              <span>Planning</span>
              <ChevronRight className="size-3.5 text-[#7b817a]" />
            </a>
            <a
              href="#pricing"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl hover:bg-[#e9eee8] text-[#20221f] transition-colors flex items-center justify-between"
            >
              <span>Pricing</span>
              <ChevronRight className="size-3.5 text-[#7b817a]" />
            </a>
            <a
              href="https://www.ullaskunder.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl hover:bg-[#e9eee8] text-[#20221f] transition-colors flex items-center justify-between"
            >
              <span>Need Help / Contact</span>
              <ChevronRight className="size-3.5 text-[#7b817a]" />
            </a>
            <div className="pt-2 border-t border-[#e2e5df]">
              <a
                href="https://app.kiroku.xyz"
                className="w-full py-2.5 rounded-xl bg-[#56715b] text-[#f8f8f6] font-medium flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Launch App</span>
                <ArrowRight className="size-3.5" />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-28 sm:pt-36 pb-10 sm:pb-16 px-4 sm:px-6 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Subtle background glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-[#f1e7d6]/60 rounded-full blur-3xl -z-10 pointer-events-none" />

        {/* Centered Hero Animated SVG Logo - Enriched & Bigger */}
        <div className="mb-6 sm:mb-8 flex flex-col items-center">
          <Image
            src="/animated.svg"
            alt="Kiroku Logo"
            width={224}
            height={224}
            className="h-28 sm:h-40 md:h-48 lg:h-56 w-auto max-w-[85vw] object-contain drop-shadow-sm"
            priority
          />
        </div>

        {/* Hero Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-[1.18] sm:leading-[1.15] text-[#20221f] max-w-3xl mb-4 sm:mb-6 font-serif text-balance">
          Where speed meets serenity for your writing, organization,&nbsp;and&nbsp;ideas.
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-[#7b817a] max-w-2xl leading-relaxed font-normal mb-8 sm:mb-10 text-balance">
          No clutter. No redundant popups. What you see is what you get. Clean typography, instant markdown rendering, and seamless edge&nbsp;persistence.
        </p>

        {/* Product Hunt Badge - Centered & Aligned */}
        <div className="mb-8 sm:mb-10 flex justify-center">
          <a
            href="https://www.producthunt.com/products/kiroku-2?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-kiroku-2"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-90 transition-opacity"
          >
            <img
              alt="Kiroku - Where speed meets serenity for your writing and ideas. | Product Hunt"
              width="200"
              height="54"
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1244708&theme=light&t=1788867838507"
              className="h-auto w-auto max-w-[80vw] sm:max-w-none"
            />
          </a>
        </div>

        {/* Hero CTA Button Group - Sleek & Uncluttered */}
        <div className="flex flex-col items-center justify-center gap-2.5 mb-6 sm:mb-8 w-full max-w-sm sm:max-w-none">
          <a
            href="https://app.kiroku.xyz"
            className="w-full sm:w-auto h-12 px-8 rounded-full bg-[#56715b] text-[#f8f8f6] text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#56715b]/90 active:scale-95 transition-all shadow-md hover:shadow-lg whitespace-nowrap"
          >
            <span>Start Writing Free</span>
            <ArrowRight className="size-4" />
          </a>

          <p className="text-[11px] sm:text-xs text-[#7b817a] font-mono">
            Free Sandbox · No credit card or account needed
          </p>
        </div>

        {/* Minimalist Inline Feature Bullets (No bulky stacked boxes) */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 sm:gap-x-7 gap-y-2 text-xs font-mono text-[#7b817a]">
          <span className="flex items-center gap-1.5"><Check className="size-3.5 text-[#56715b]" /> Typewriter Focus</span>
          <span className="flex items-center gap-1.5"><Check className="size-3.5 text-[#56715b]" /> KaTeX Math</span>
          <span className="flex items-center gap-1.5"><Check className="size-3.5 text-[#56715b]" /> Edge Sync</span>
          <span className="flex items-center gap-1.5"><Check className="size-3.5 text-[#56715b]" /> 1-Click Export</span>
        </div>
      </section>

      {/* 3D SCROLL LAPTOP SCREEN FLIP PREVIEW SHOWCASE */}
      <section id="showcase" className="py-6 sm:py-10 px-2 sm:px-6 max-w-6xl mx-auto scroll-mt-24 sm:scroll-mt-28 relative z-20">

        {/* 3D Perspective Container */}
        <div
          className="w-full transition-all duration-300 ease-out"
          style={{
            perspective: "1400px",
          }}
        >
          <div
            onClick={handleDemoClick}
            className={`cursor-pointer block relative rounded-2xl sm:rounded-3xl border border-[#e2e5df] bg-[#fdfdfb] overflow-hidden group will-change-transform ${isPopping
              ? "shadow-[0_40px_100px_rgba(0,0,0,0.28)] border-[#56715b]/50 z-30"
              : "shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.12)] hover:-translate-y-1"
              }`}
            style={{
              transform: isPopping
                ? `rotateX(0deg) scale(1.08) translateY(-16px)`
                : `rotateX(${rotateX}deg) scale(${scaleVal})`,
              transformOrigin: "center bottom",
              transformStyle: "preserve-3d",
              transition: isPopping
                ? "transform 350ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 350ms ease-out, border-color 200ms ease-out"
                : "transform 150ms ease-out, box-shadow 200ms ease-out",
            }}
          >
            <Image
              src="/promo.png"
              alt="Kiroku Editor Living Canvas"
              width={1920}
              height={966}
              className={`w-full h-auto object-cover rounded-2xl sm:rounded-3xl will-change-transform ${isPopping
                ? "scale-[1.015] brightness-[1.03] transition-all duration-300 ease-out"
                : "transition-transform duration-300 group-hover:scale-[1.008]"
                }`}
              priority
            />
          </div>
        </div>
      </section>

      {/* VISUAL MIND CANVAS & ENTERPRISE INFRASTRUCTURE SHOWCASE */}
      <section id="planning" className="py-12 sm:py-16 px-4 sm:px-6 max-w-5xl mx-auto scroll-mt-20">
        {/* Section Header - Clean & Symmetrically Aligned */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e9eee8] text-[#38503d] font-mono text-xs font-semibold mb-3">
            <Workflow className="size-3.5 text-[#56715b]" />
            <span>In Active Development · Future Horizons</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-serif font-medium text-[#20221f] mb-3 text-balance">
            Big Architecture. Zero Bloat.
          </h2>

          <p className="text-xs sm:text-sm text-[#7b817a] max-w-xl mx-auto leading-relaxed mb-4">
            Engineered on lean foundations. Powered by early subscriber backing to scale dedicated AWS edge infrastructure and visual tools.
          </p>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#56715b]/10 border border-[#56715b]/20 font-mono text-xs text-[#38503d]">
            <span className="size-2 rounded-full bg-[#56715b] animate-pulse" />
            <span>Dedicated AWS Infra · Backed by Supporters</span>
          </div>
        </div>

        {/* OPEN BENTO GRID SHOWCASE (SEAMLESS INTEGRATION) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

          {/* CARD 1: MIND CANVAS (2 COLUMNS) */}
          <div className="lg:col-span-2 rounded-2xl bg-[#fdfdfb] border border-[#e2e5df] p-6 sm:p-7 shadow-sm hover:border-[#56715b]/40 transition-all flex flex-col justify-between gap-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="size-8 rounded-lg bg-[#e9eee8] text-[#38503d] flex items-center justify-center font-mono text-xs font-bold">
                  <Brain className="size-4.5 text-[#56715b]" />
                </div>
                <div>
                  <h3 className="font-serif font-medium text-base sm:text-lg text-[#20221f]">Mind Canvas</h3>
                  <p className="text-[11px] text-[#7b817a] font-mono">Bi-directional Node Graph & Visual Mapping</p>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#e9eee8] text-[#38503d] font-semibold">
                In Development
              </span>
            </div>

            {/* Visual Node Flow Simulation */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 relative">
              <div className="p-3.5 rounded-xl bg-[#f8f8f6] border border-[#e2e5df] shadow-2xs hover:border-[#56715b]/50 transition-all">
                <div className="text-[9px] font-mono text-[#56715b] font-bold mb-1">NODE 01</div>
                <div className="font-semibold text-xs text-[#20221f]">Core Thought</div>
                <div className="text-[10px] text-[#7b817a] mt-0.5">Raw markdown capture</div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#f8f8f6] border-2 border-[#56715b] shadow-xs relative">
                <div className="absolute -top-2 right-2 px-1.5 py-0.2 rounded-full bg-[#56715b] text-[#f8f8f6] font-mono text-[8px] font-bold">
                  ACTIVE
                </div>
                <div className="text-[9px] font-mono text-[#56715b] font-bold mb-1">NODE 02</div>
                <div className="font-semibold text-xs text-[#20221f]">LaTeX & Proofs</div>
                <div className="text-[10px] text-[#7b817a] mt-0.5">Interactive equations</div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#f8f8f6] border border-[#e2e5df] shadow-2xs hover:border-[#56715b]/50 transition-all">
                <div className="text-[9px] font-mono text-[#56715b] font-bold mb-1">NODE 03</div>
                <div className="font-semibold text-xs text-[#20221f]">Vault Release</div>
                <div className="text-[10px] text-[#7b817a] mt-0.5">Multi-device sync</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] font-mono text-[#7b817a] pt-3 border-t border-[#e2e5df]">
              <span>Connects notes, formulas & diagrams into infinite visual boards</span>
              <span className="text-[#56715b] font-semibold">Zero Surcharge for Backers</span>
            </div>
          </div>

          {/* CARD 2: RICH MEDIA & AUDIO WAVEFORM (1 COLUMN) */}
          <div className="rounded-2xl bg-[#fdfdfb] border border-[#e2e5df] p-6 sm:p-7 shadow-sm hover:border-[#56715b]/40 transition-all flex flex-col justify-between gap-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="size-8 rounded-lg bg-[#e9eee8] text-[#38503d] flex items-center justify-center font-mono text-xs font-bold">
                  <Mic className="size-4.5 text-[#56715b]" />
                </div>
                <div>
                  <h3 className="font-serif font-medium text-base sm:text-lg text-[#20221f]">Rich Media Hub</h3>
                  <p className="text-[11px] text-[#7b817a] font-mono">Audio & Voice Memos</p>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#e9eee8] text-[#38503d] font-semibold">
                Upcoming
              </span>
            </div>

            {/* Animated Waveform Simulation */}
            <div className="p-4 rounded-xl bg-[#f8f8f6] border border-[#e2e5df] shadow-2xs space-y-3">
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-[#20221f] font-semibold">Voice Memo Stream</span>
                <span className="text-[#56715b]">02:14 / 04:30</span>
              </div>

              <div className="flex items-center gap-1 h-8 px-2 py-1 bg-[#fdfdfb] rounded-lg border border-[#e2e5df]">
                {[30, 60, 45, 90, 70, 100, 50, 85, 40, 95, 65, 45, 80, 55, 100, 35, 75, 50, 85, 30].map((h, i) => (
                  <span
                    key={i}
                    className="w-1 rounded-full bg-[#56715b] animate-pulse"
                    style={{
                      height: `${h * 0.28}px`,
                      animationDelay: `${(i * 0.06).toFixed(2)}s`
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="text-[11px] font-mono text-[#7b817a] pt-3 border-t border-[#e2e5df]">
              Native audio waveform players & 16:9 video embeds
            </div>
          </div>

          {/* CARD 3: INFRASTRUCTURE ROADMAP (3 COLUMNS FULL WIDTH) */}
          <div className="lg:col-span-3 rounded-2xl bg-[#fdfdfb] border border-[#e2e5df] p-6 sm:p-8 shadow-sm hover:border-[#56715b]/40 transition-all flex flex-col justify-between gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="size-8 rounded-lg bg-[#56715b] text-[#f8f8f6] flex items-center justify-center font-mono text-xs font-bold shadow-xs">
                  <Server className="size-4.5" />
                </div>
                <div>
                  <h3 className="font-serif font-medium text-base sm:text-lg text-[#20221f]">Infrastructure Roadmap & Bring Your Own Keys</h3>
                  <p className="text-[11px] text-[#7b817a] font-mono">From lean local foundation to dedicated enterprise AWS scale</p>
                </div>
              </div>
              <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-[#56715b]/10 text-[#38503d] font-bold border border-[#56715b]/20 shrink-0">
                Scaling with Supporter Backing
              </span>
            </div>

            {/* 3 Architecture Pillars Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">

              {/* Pillar 1 */}
              <div className="p-4 rounded-xl bg-[#f8f8f6] border border-[#e2e5df] space-y-1.5 shadow-2xs">
                <div className="flex items-center gap-2 text-[#56715b] font-bold text-[11px]">
                  <HardDrive className="size-3.5" />
                  <span>01 / Current Engine</span>
                </div>
                <div className="font-sans font-semibold text-sm text-[#20221f]">Local-First & SQLite Edge</div>
                <div className="text-[11px] text-[#7b817a] font-sans">
                  Zero-bloat local persistence, sub-millisecond response, and complete privacy.
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="p-4 rounded-xl bg-[#f8f8f6] border-2 border-[#56715b]/40 space-y-1.5 shadow-2xs">
                <div className="flex items-center gap-2 text-[#56715b] font-bold text-[11px]">
                  <Cloud className="size-3.5" />
                  <span>02 / Dedicated AWS Scaling</span>
                </div>
                <div className="font-sans font-semibold text-sm text-[#20221f]">AWS S3 & Media CDN</div>
                <div className="text-[11px] text-[#7b817a] font-sans">
                  Scaling high-speed S3 asset storage and distributed multi-region sync for subscribers.
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="p-4 rounded-xl bg-[#f8f8f6] border border-[#e2e5df] space-y-1.5 shadow-2xs">
                <div className="flex items-center gap-2 text-[#56715b] font-bold text-[11px]">
                  <Key className="size-3.5" />
                  <span>03 / Bring Your Own Key (BYOK)</span>
                </div>
                <div className="font-sans font-semibold text-sm text-[#20221f]">Direct Private API Keys</div>
                <div className="text-[11px] text-[#7b817a] font-sans">
                  Plug in private OpenAI, Claude, or custom S3 buckets with zero markup.
                </div>
              </div>

            </div>

            {/* Bottom Assurance */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#7b817a] pt-3 border-t border-[#e2e5df]">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-[#56715b]" />
                <span>Early Lite Power subscribers unlock all future infrastructure upgrades at zero surcharge.</span>
              </div>
              <div className="font-mono text-[11px] text-[#56715b] font-semibold">
                Privacy-First · Zero Middleman Markup
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* THE PHILOSOPHY */}
      <section id="philosophy" className="py-14 sm:py-20 px-4 sm:px-6 max-w-4xl mx-auto text-center scroll-mt-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#e9eee8] text-[#38503d] font-mono text-xs font-semibold mb-6">
          <Sparkles className="size-3.5" />
          <span>The Philosophy</span>
        </div>

        <blockquote className="font-serif text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#20221f] leading-[1.25] sm:leading-[1.2] mb-6 sm:mb-8 text-balance max-w-3xl mx-auto">
          &ldquo;Less noise. More clarity.
          <br />
          When your tools get out of the way, your ideas come alive.&rdquo;
        </blockquote>

        <p className="text-sm sm:text-base md:text-lg text-[#7b817a] max-w-2xl mx-auto leading-relaxed font-normal text-balance mb-10">
          Crafted for thinkers, creators, and teams who value focus, quiet precision, and effortless organization.
        </p>

        {/* 3 Core Value Statements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left max-w-3xl mx-auto">
          <div className="p-5 bg-[#fdfdfb] rounded-xl border border-[#e2e5df] shadow-2xs hover:border-[#56715b]/40 transition-colors">
            <div className="text-[#56715b] font-mono text-[11px] font-bold mb-1.5 uppercase tracking-wider">01 / Local-First</div>
            <p className="text-xs sm:text-sm text-[#20221f] font-medium leading-relaxed">
              &ldquo;Write locally. Sync on demand. Never lose a word.&rdquo;
            </p>
          </div>
          <div className="p-5 bg-[#fdfdfb] rounded-xl border border-[#e2e5df] shadow-2xs hover:border-[#56715b]/40 transition-colors">
            <div className="text-[#56715b] font-mono text-[11px] font-bold mb-1.5 uppercase tracking-wider">02 / Pure Focus</div>
            <p className="text-xs sm:text-sm text-[#20221f] font-medium leading-relaxed">
              &ldquo;Zero clutter. What you see is what you get.&rdquo;
            </p>
          </div>
          <div className="p-5 bg-[#fdfdfb] rounded-xl border border-[#e2e5df] shadow-2xs hover:border-[#56715b]/40 transition-colors">
            <div className="text-[#56715b] font-mono text-[11px] font-bold mb-1.5 uppercase tracking-wider">03 / Freedom</div>
            <p className="text-xs sm:text-sm text-[#20221f] font-medium leading-relaxed">
              &ldquo;No subscription lock-in: Export your entire vault as standard Markdown & JSON anytime with 1 click.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES & TYPOGRAPHY / TRUST + CONTROL */}
      <section id="features" className="py-12 sm:py-16 px-4 sm:px-6 max-w-5xl mx-auto scroll-mt-20">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="font-mono text-xs uppercase tracking-wider text-[#56715b] font-semibold">Distraction-Free Engineering</span>
          <h2 className="text-2xl sm:text-4xl font-serif font-medium text-[#20221f] mt-2 mb-3 text-balance">
            Crafted for Uninterrupted Thought
          </h2>
          <p className="text-xs sm:text-sm text-[#7b817a] text-balance">
            Every interaction is calibrated for high-speed responsiveness and quiet elegance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">

          {/* Feature 1: Fluid Typography Rhythm */}
          <div className="p-6 sm:p-8 bg-[#fdfdfb] rounded-2xl border border-[#e2e5df] shadow-sm hover:border-[#56715b]/40 transition-all flex flex-col justify-between">
            <div>
              <div className="size-10 rounded-xl bg-[#e9eee8] text-[#38503d] flex items-center justify-center mb-4">
                <Feather className="size-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-serif font-medium text-[#20221f] mb-2">
                Fluid Typography Rhythm
              </h3>
              <p className="text-xs sm:text-sm text-[#7b817a] leading-relaxed">
                Carefully tuned line-height, optical tracking, and responsive layout for effortless reading and natural writing flow.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#e2e5df]/60 font-mono text-[11px] text-[#56715b]">
              ✓ Optical tracking • Adaptive margins • Serene contrast
            </div>
          </div>

          {/* Feature 2: Effortless, Fast Writing */}
          <div className="p-6 sm:p-8 bg-[#fdfdfb] rounded-2xl border border-[#e2e5df] shadow-sm hover:border-[#56715b]/40 transition-all flex flex-col justify-between">
            <div>
              <div className="size-10 rounded-xl bg-[#e9eee8] text-[#38503d] flex items-center justify-center mb-4">
                <Zap className="size-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-serif font-medium text-[#20221f] mb-2">
                Effortless, Fast Writing
              </h3>
              <p className="text-xs sm:text-sm text-[#7b817a] leading-relaxed">
                Instant markdown preview, interactive math and live code blocks with zero lag and instant keystroke response.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#e2e5df]/60 font-mono text-[11px] text-[#56715b]">
              ✓ Sub-millisecond latency • KaTeX formulas • Live syntax
            </div>
          </div>

          {/* Feature 3: Trust + Control (Span 2 Columns) */}
          <div className="md:col-span-2 p-6 sm:p-8 bg-[#fdfdfb] rounded-2xl border border-[#e2e5df] shadow-sm hover:border-[#56715b]/40 transition-all">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8">
              <div className="max-w-xl">
                <div className="size-10 rounded-xl bg-[#e9eee8] text-[#38503d] flex items-center justify-center mb-4">
                  <ShieldCheck className="size-5" />
                </div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#56715b] font-semibold mb-1">
                  Trust + Control
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#20221f] mb-2.5">
                  Your notes. Your choice. Always.
                </h3>
                <p className="text-xs sm:text-sm text-[#7b817a] leading-relaxed">
                  Start writing locally. When you&apos;re ready to back up to the cloud, flip a switch. Change your mind? Your local draft stays safe. Never lose work, never feel locked in.
                </p>
              </div>

              {/* Sync Details Subcard */}
              <div className="bg-[#f8f8f6] p-5 rounded-xl border border-[#e2e5df] lg:w-84 shrink-0 space-y-2.5 font-mono text-xs">
                <div className="flex items-center gap-2 text-[#20221f]">
                  <Check className="size-4 text-[#56715b] shrink-0" />
                  <span>Write offline, sync anytime</span>
                </div>
                <div className="flex items-center gap-2 text-[#20221f]">
                  <Check className="size-4 text-[#56715b] shrink-0" />
                  <span>Keep a local copy even after syncing</span>
                </div>
                <div className="flex items-center gap-2 text-[#20221f]">
                  <Check className="size-4 text-[#56715b] shrink-0" />
                  <span>Unsync without losing a word</span>
                </div>
                <div className="flex items-center gap-2 text-[#20221f]">
                  <Check className="size-4 text-[#56715b] shrink-0" />
                  <span>Resume syncing whenever you want</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* KNOWLEDGE HIERARCHY SCHEMATIC SECTION - CONNECTED TREE PIPELINE */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e9eee8] text-[#38503d] font-mono text-xs font-semibold mb-3">
            <Layers className="size-3.5 text-[#56715b]" />
            <span>Clean Hierarchy</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-medium text-[#20221f] mb-3 text-balance">
            Structured 4-Tier Knowledge Tree
          </h2>
          <p className="text-xs sm:text-sm text-[#7b817a] max-w-xl mx-auto leading-relaxed">
            Simple, intuitive organization for your notes, guides, books, and personal knowledge base.
          </p>
        </div>

        {/* Connected Horizontal Tree Pipeline */}
        <div className="relative">
          {/* Connector Rail (Desktop) */}
          <div className="hidden lg:block absolute top-[4.5rem] left-12 right-12 h-[2px] bg-gradient-to-r from-[#e2e5df] via-[#56715b]/40 to-[#e2e5df] z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10">

            {/* LEVEL 1: LIBRARY */}
            <div className="group relative flex flex-col p-6 rounded-2xl bg-[#fdfdfb] border border-[#e2e5df] hover:border-[#56715b]/40 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center justify-between w-full mb-4">
                <span className="font-mono text-[10px] font-bold text-[#56715b] tracking-wider uppercase">Level 01 · Root</span>
                <span className="size-2 rounded-full bg-[#56715b]/30 group-hover:bg-[#56715b] transition-colors" />
              </div>
              <div className="size-11 rounded-xl bg-[#e9eee8] text-[#38503d] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Building2 className="size-5.5 text-[#56715b]" />
              </div>
              <h3 className="font-serif font-medium text-base sm:text-lg text-[#20221f] mb-1">Library</h3>
              <p className="text-xs text-[#7b817a] leading-relaxed">
                Company or personal root workspace entity. Houses your complete ecosystem of books.
              </p>
            </div>

            {/* LEVEL 2: BOOK */}
            <div className="group relative flex flex-col p-6 rounded-2xl bg-[#fdfdfb] border border-[#e2e5df] hover:border-[#56715b]/40 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center justify-between w-full mb-4">
                <span className="font-mono text-[10px] font-bold text-[#56715b] tracking-wider uppercase">Level 02 · Module</span>
                <span className="size-2 rounded-full bg-[#56715b]/30 group-hover:bg-[#56715b] transition-colors" />
              </div>
              <div className="size-11 rounded-xl bg-[#e9eee8] text-[#38503d] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <BookOpen className="size-5.5 text-[#56715b]" />
              </div>
              <h3 className="font-serif font-medium text-base sm:text-lg text-[#20221f] mb-1">Book</h3>
              <p className="text-xs text-[#7b817a] leading-relaxed">
                Dedicated subject or project module with custom title and brand accent color.
              </p>
            </div>

            {/* LEVEL 3: CHAPTER */}
            <div className="group relative flex flex-col p-6 rounded-2xl bg-[#fdfdfb] border border-[#e2e5df] hover:border-[#56715b]/40 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center justify-between w-full mb-4">
                <span className="font-mono text-[10px] font-bold text-[#56715b] tracking-wider uppercase">Level 03 · Group</span>
                <span className="size-2 rounded-full bg-[#56715b]/30 group-hover:bg-[#56715b] transition-colors" />
              </div>
              <div className="size-11 rounded-xl bg-[#e9eee8] text-[#38503d] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <FolderTree className="size-5.5 text-[#56715b]" />
              </div>
              <h3 className="font-serif font-medium text-base sm:text-lg text-[#20221f] mb-1">Chapter</h3>
              <p className="text-xs text-[#7b817a] leading-relaxed">
                Logical folder grouping to organize documents into coherent topics and modules.
              </p>
            </div>

            {/* LEVEL 4: PAGE */}
            <div className="group relative flex flex-col p-6 rounded-2xl bg-[#fdfdfb] border-2 border-[#56715b]/30 hover:border-[#56715b] shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center justify-between w-full mb-4">
                <span className="font-mono text-[10px] font-bold text-[#56715b] tracking-wider uppercase">Level 04 · Document</span>
                <span className="size-2 rounded-full bg-[#56715b] animate-pulse" />
              </div>
              <div className="size-11 rounded-xl bg-[#56715b] text-[#f8f8f6] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform shadow-xs">
                <FileText className="size-5.5" />
              </div>
              <h3 className="font-serif font-medium text-base sm:text-lg text-[#20221f] mb-1">Page</h3>
              <p className="text-xs text-[#7b817a] leading-relaxed">
                Distraction-free canvas with markdown, math formulas, live code, and media.
              </p>
            </div>

          </div>
        </div>

        {/* Live Pathway Navigation Bar */}
        <div className="mt-6 p-4 sm:p-4.5 rounded-2xl bg-[#fdfdfb] border border-[#e2e5df] shadow-2xs flex flex-col md:flex-row items-center justify-between gap-3 font-mono text-xs">
          <div className="flex items-center gap-2 text-[#7b817a] text-[11px] shrink-0">
            <Workflow className="size-3.5 text-[#56715b]" />
            <span>Path Hierarchy:</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] sm:text-xs">
            <span className="px-2.5 py-1 rounded-lg bg-[#f8f8f6] border border-[#e2e5df] text-[#20221f] font-medium flex items-center gap-1.5">
              <Building2 className="size-3 text-[#56715b]" /> Library
            </span>
            <ChevronRight className="size-3 text-[#7b817a]" />
            <span className="px-2.5 py-1 rounded-lg bg-[#f8f8f6] border border-[#e2e5df] text-[#20221f] font-medium flex items-center gap-1.5">
              <BookOpen className="size-3 text-[#56715b]" /> Book
            </span>
            <ChevronRight className="size-3 text-[#7b817a]" />
            <span className="px-2.5 py-1 rounded-lg bg-[#f8f8f6] border border-[#e2e5df] text-[#20221f] font-medium flex items-center gap-1.5">
              <FolderTree className="size-3 text-[#56715b]" /> Chapter
            </span>
            <ChevronRight className="size-3 text-[#7b817a]" />
            <span className="px-2.5 py-1 rounded-lg bg-[#56715b]/15 border border-[#56715b]/30 text-[#38503d] font-semibold flex items-center gap-1.5 shadow-2xs">
              <FileText className="size-3 text-[#56715b]" /> Page
            </span>
          </div>

          <div className="text-[10px] text-[#7b817a] font-mono shrink-0">
            Bi-directional Breadcrumbs
          </div>
        </div>
      </section>

      {/* MARKETABLE PRICING STRUCTURE & FEATURE LIST */}
      <section id="pricing" className="py-14 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto scroll-mt-20">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e9eee8] text-[#38503d] font-mono text-xs font-semibold mb-3">
            <span>Transparent Pricing</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-medium text-[#20221f] mb-3 text-balance">
            Marketable Pricing Structure
          </h2>
          <p className="text-xs sm:text-sm text-[#7b817a] text-balance">
            Start writing in your serene sandbox for free, or power up with infinite scale and cloud backup.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

          {/* TIER 1: FREE TIER — "SERENE SANDBOX" */}
          <div className="bg-[#fdfdfb] rounded-2xl border border-[#e2e5df] p-6 sm:p-8 flex flex-col justify-between shadow-sm relative">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs uppercase tracking-wider text-[#7b817a] font-semibold">Tier 1</span>
                <span className="px-2.5 py-1 rounded-full bg-[#e9eee8] text-[#38503d] font-mono text-[11px] font-medium">
                  Free Sandbox
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#20221f] mb-1">
                Serene Sandbox
              </h3>
              <p className="text-xs text-[#7b817a] mb-6">
                For solo thinkers, students, and casual note-takers.
              </p>

              <div className="mb-6 pb-6 border-b border-[#e2e5df]">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-serif font-bold text-[#20221f]">$0.00</span>
                  <span className="text-xs sm:text-sm text-[#7b817a] font-mono">/ forever</span>
                </div>
                <p className="text-[11px] font-mono text-[#56715b] mt-1 font-medium">
                  ✓ No credit card or account required
                </p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="text-xs font-mono font-semibold text-[#20221f] uppercase tracking-wider">
                  Key Features Included:
                </div>
                <ul className="space-y-2.5 text-xs text-[#50544f]">
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-[#56715b] shrink-0" />
                    <span><strong>Unlimited Local Notes:</strong> Write freely on your device</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-[#56715b] shrink-0" />
                    <span>1 Cloud Book & 10 Synced Pages</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-[#56715b] shrink-0" />
                    <span>Instant Local-First Offline Speed</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-[#56715b] shrink-0" />
                    <span>Markdown, Math & Diagram Rendering</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-[#56715b] shrink-0" />
                    <span>Local Device Image Insertion</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-[#56715b] shrink-0" />
                    <span>Zero Ads & Distraction-Free Flow</span>
                  </li>
                </ul>
              </div>
            </div>

            <a
              href="https://app.kiroku.xyz"
              className="w-full h-11 rounded-full border border-[#56715b] text-[#56715b] hover:bg-[#56715b]/10 text-xs sm:text-sm font-medium flex items-center justify-center gap-2 transition-all"
            >
              <span>Get Started Free</span>
              <ArrowRight className="size-4" />
            </a>
          </div>

          {/* TIER 2: LITE POWER — "FOR CREATORS, DEVELOPERS & POWER THINKERS" */}
          <div className="bg-[#fdfdfb] rounded-2xl border-2 border-[#56715b] p-6 sm:p-8 flex flex-col justify-between shadow-lg relative">
            <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-[#56715b] text-[#f8f8f6] font-mono text-[10px] font-bold uppercase tracking-wider shadow-sm">
              Most Popular
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs uppercase tracking-wider text-[#56715b] font-semibold">Tier 2</span>
                <span className="px-2.5 py-1 rounded-full bg-[#f1e7d6] text-[#765f3e] font-mono text-[11px] font-semibold">
                  Full Power
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#20221f] mb-1">
                Lite Power
              </h3>
              <p className="text-xs text-[#7b817a] mb-5">
                For creators, developers, and power thinkers.
              </p>

              {/* Billing Cycle Switcher Tabs */}
              <div className="bg-[#f1f3ef] p-1 rounded-xl flex items-center gap-1 mb-5 font-mono text-[11px]">
                <button
                  type="button"
                  onClick={() => setBillingCycle("annual")}
                  className={`flex-1 py-1.5 px-2 rounded-lg transition-all text-center cursor-pointer ${billingCycle === "annual"
                    ? "bg-[#56715b] text-[#f8f8f6] font-semibold shadow-xs"
                    : "text-[#7b817a] hover:text-[#20221f]"
                    }`}
                >
                  Annual (15% Off)
                </button>
                <button
                  type="button"
                  onClick={() => setBillingCycle("monthly")}
                  className={`flex-1 py-1.5 px-2 rounded-lg transition-all text-center cursor-pointer ${billingCycle === "monthly"
                    ? "bg-[#56715b] text-[#f8f8f6] font-semibold shadow-xs"
                    : "text-[#7b817a] hover:text-[#20221f]"
                    }`}
                >
                  Monthly
                </button>
              </div>

              {/* Price Dynamic Display */}
              <div className="mb-6 pb-6 border-b border-[#e2e5df]">
                {billingCycle === "annual" && (
                  <div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl sm:text-4xl font-serif font-bold text-[#20221f]">$84.15</span>
                      <span className="text-xs sm:text-sm text-[#7b817a] font-mono">/ year</span>
                    </div>
                    <p className="text-[11px] font-mono text-[#56715b] mt-1">
                      Equivalent to <strong>$7.01/mo</strong> (15% discount applied) • Tax included
                    </p>
                  </div>
                )}
                {billingCycle === "monthly" && (
                  <div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl sm:text-4xl font-serif font-bold text-[#20221f]">$10.00</span>
                      <span className="text-xs sm:text-sm text-[#7b817a] font-mono">/ month</span>
                    </div>
                    <p className="text-[11px] font-mono text-[#56715b] mt-1">
                      Flexible monthly billing • Tax included
                    </p>
                  </div>
                )}
              </div>

              {/* Features Included List */}
              <div className="space-y-3 mb-8">
                <div className="text-xs font-mono font-semibold text-[#20221f] uppercase tracking-wider">
                  Key Features Included:
                </div>
                <ul className="space-y-2.5 text-xs text-[#50544f]">
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-[#56715b] shrink-0" />
                    <span><strong>10,000 Cloud Pages</strong> · Unlimited Local Capacity</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-[#56715b] shrink-0" />
                    <span><strong>On-Demand Multi-Device Cloud Sync</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-[#56715b] shrink-0" />
                    <span><strong>Cloud CDN Media Hosting:</strong> 250 images / 500 MB</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-[#56715b] shrink-0" />
                    <span><strong>Document Revision History & Time Travel</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-[#56715b] shrink-0" />
                    <span><strong>Watermark-Free Beautiful PDF Export</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-[#56715b] shrink-0" />
                    <span><strong>Full Workspace Backup & 1-Click Export</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-[#56715b] shrink-0" />
                    <span><strong>Curated Anime & Ambient Aesthetic Themes</strong></span>
                  </li>
                  <li className="flex items-center gap-2 text-[#38503d] font-medium pt-1">
                    <Check className="size-4 text-[#56715b] shrink-0" />
                    <span>Everything in Free included</span>
                  </li>
                </ul>
              </div>
            </div>

            <a
              href="https://app.kiroku.xyz/settings/billing"
              className="w-full h-11 rounded-full bg-[#56715b] text-[#f8f8f6] hover:bg-[#56715b]/90 text-xs sm:text-sm font-medium flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <span>Upgrade to Lite Power</span>
              <ArrowRight className="size-4" />
            </a>
          </div>

        </div>

        {/* ACTIVE FOCUS SPRINT & COMING SOON ROADMAP BANNER */}
        <div className="mt-8 p-6 sm:p-7 rounded-2xl bg-[#fdfdfb] border border-[#e2e5df] shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-lg">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#e9eee8] text-[#38503d] font-mono text-[10px] font-semibold uppercase tracking-wider">
              <Sparkles className="size-3 text-[#56715b]" />
              <span>Active Sprint & Future Horizons</span>
            </div>
            <h4 className="text-base sm:text-lg font-serif font-medium text-[#20221f]">
              Building the ultimate thinking canvas.
            </h4>
            <p className="text-xs text-[#7b817a] leading-relaxed">
              Lite Power members receive all upcoming features automatically with zero extra charges upon release.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full md:w-auto font-mono text-xs">
            <div className="p-3 rounded-xl bg-[#f8f8f6] border border-[#e2e5df] flex items-center gap-2.5">
              <span className="size-2 rounded-full bg-[#56715b] animate-pulse shrink-0" />
              <div>
                <div className="font-semibold text-[#20221f]">Mind Canvas</div>
                <div className="text-[10px] text-[#7b817a]">Infinite visual diagram boards</div>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-[#f8f8f6] border border-[#e2e5df] flex items-center gap-2.5">
              <span className="size-2 rounded-full bg-[#56715b] animate-pulse shrink-0" />
              <div>
                <div className="font-semibold text-[#20221f]">Rich Media Hub</div>
                <div className="text-[10px] text-[#7b817a]">Native audio & video embeds</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION BANNER */}
      <section id="waitlist" className="py-10 sm:py-16 px-4 sm:px-6 max-w-4xl mx-auto text-center scroll-mt-20">
        <div className="p-6 sm:p-10 rounded-2xl bg-[#56715b] text-[#f8f8f6] shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f8f8f6]/15 text-[#f8f8f6] font-mono text-[10px] sm:text-xs mb-3 sm:mb-4 max-w-full truncate">
              <span className="truncate">SERENE DISTRACTION-FREE WRITING</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-medium mb-3 sm:mb-4 text-balance">
              Experience distraction-free writing.
            </h2>
            <p className="text-xs sm:text-base text-[#f8f8f6]/80 max-w-xl mx-auto mb-6 sm:mb-8 text-balance">
              Create your living library now with instant local speed and cloud persistence.
            </p>
            <div className="flex justify-center">
              <a
                href="https://app.kiroku.xyz"
                className="w-full xs:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#f8f8f6] text-[#38503d] text-xs sm:text-sm font-semibold hover:bg-[#e9eee8] transition-all flex items-center justify-center gap-2 shadow-md hover:scale-105 active:scale-95"
              >
                <span>Launch Kiroku App</span>
                <ExternalLink className="size-3.5 sm:size-4 shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 sm:py-10 px-4 sm:px-6 border-t border-[#e2e5df] text-xs text-[#7b817a]">
        <div className="max-w-5xl mx-auto space-y-6">

          {/* Bug / Support Callout */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#fdfdfb] border border-[#e2e5df] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left shadow-2xs">
            <div className="flex items-center gap-2.5">
              <span className="size-2 rounded-full bg-[#56715b] shrink-0" />
              <p className="text-xs sm:text-sm text-[#50544f]">
                Facing a bug, glitch, or error? Contact{" "}
                <a
                  href="mailto:ullaskunder3@gmail.com"
                  className="font-medium text-[#20221f] underline hover:text-[#56715b] transition-colors"
                >
                  ullaskunder3@gmail.com
                </a>{" "}
                or visit{" "}
                <a
                  href="https://www.ullaskunder.com/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#20221f] underline hover:text-[#56715b] transition-colors inline-flex items-center gap-0.5"
                >
                  ullaskunder.com/contact
                  <ExternalLink className="size-3 text-[#7b817a]" />
                </a>.
              </p>
            </div>
            <a
              href="https://www.ullaskunder.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full bg-[#e9eee8] hover:bg-[#56715b] hover:text-[#f8f8f6] text-[#38503d] font-mono text-xs font-medium transition-all shrink-0"
            >
              Report a Bug ↗
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left pt-1">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <Image
                src="/animated.svg"
                alt="Kiroku Logo"
                width={24}
                height={24}
                className="h-6 w-auto object-contain"
              />
              <span className="font-semibold text-[#20221f]">Kiroku</span>
              <span>• built by <a href="http://ullaskunder.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#56715b]">ullaskunder.com</a></span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 font-mono text-[11px]">
              <Link href="/privacy" className="hover:underline hover:text-[#20221f]">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:underline hover:text-[#20221f]">
                Terms of Service
              </Link>
              <a href="http://ullaskunder.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">ullaskunder.com</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}



