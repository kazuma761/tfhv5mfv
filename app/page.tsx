import { ArrowRight, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(236,72,153,0.45),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.45),_transparent_30%),linear-gradient(135deg,_#581c87_0%,_#be185d_45%,_#f97316_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:72px_72px] opacity-25" />
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-white/20 blur-3xl" />

      <section className="relative z-10 flex min-h-screen flex-col">
        <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-2xl bg-white/15 shadow-2xl ring-1 ring-white/25 backdrop-blur-md">
              <Sparkles className="size-5" aria-hidden="true" />
            </div>
            <span className="text-lg font-semibold tracking-tight">Ahana</span>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-white/80 md:flex" aria-label="Main navigation">
            <a className="transition hover:text-white" href="#welcome">
              Welcome
            </a>
            <a className="transition hover:text-white" href="#vibe">
              Vibe
            </a>
            <a className="transition hover:text-white" href="#connect">
              Connect
            </a>
          </nav>
        </header>

        <div id="welcome" className="mx-auto flex w-full max-w-6xl flex-1 items-center px-6 py-16">
          <div className="max-w-4xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 shadow-xl backdrop-blur-md">
              <span className="size-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.9)]" />
              Landing in a bright new space
            </div>

            <h1 className="text-balance text-6xl font-black tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
              hello im at <span className="bg-gradient-to-r from-yellow-200 via-pink-100 to-cyan-100 bg-clip-text text-transparent">ahana</span>
            </h1>

            <p className="mt-8 max-w-2xl text-pretty text-lg leading-8 text-white/78 sm:text-xl">
              A warm, radiant landing page with soft gradients, glowing accents, and a calm visual rhythm built to make your first impression feel memorable.
            </p>

            <div id="connect" className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="rounded-full bg-white px-7 text-slate-950 shadow-2xl shadow-pink-950/30 hover:bg-white/90">
                <a href="mailto:hello@ahana.example">
                  Say hello
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-white/30 bg-white/10 px-7 text-white shadow-2xl backdrop-blur-md hover:bg-white/20 hover:text-white">
                <a href="#vibe">Explore the vibe</a>
              </Button>
            </div>
          </div>
        </div>

        <div id="vibe" className="relative z-10 mx-auto grid w-full max-w-6xl gap-4 px-6 pb-10 sm:grid-cols-3">
          {[
            ["01", "Gradient glow", "Layered color fields create depth without overwhelming the message."],
            ["02", "Soft motion feel", "Blurred shapes and glass cards make the page feel alive and modern."],
            ["03", "Simple greeting", "The message stays bold, centered, and easy to remember."],
          ].map(([number, title, description]) => (
            <article key={number} className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-md">
              <p className="text-sm font-semibold text-yellow-100">{number}</p>
              <h2 className="mt-4 text-xl font-bold">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-white/70">{description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
