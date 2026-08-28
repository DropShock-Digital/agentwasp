"use client"

import { useMemo, useState } from "react"
import {
  Activity, Bot, BrainCircuit, CheckCircle2, ChevronRight, CircleDot,
  Clock3, Command, FileSearch, Layers3, Menu, MoreHorizontal, Network,
  Play, ShieldCheck, Sparkles, X, Zap,
} from "lucide-react"

const goals = [
  { title: "Prepare the Inland Empire meetup brief", owner: "Maya", progress: 78, state: "In review", tint: "bg-amber-300" },
  { title: "Review venue research with the operator", owner: "Atlas", progress: 52, state: "Needs decision", tint: "bg-sky-300" },
  { title: "Reconcile the community launch checklist", owner: "Scout", progress: 34, state: "Running", tint: "bg-emerald-300" },
]

const traces = [
  ["18:42", "Atlas", "Venue shortlist refreshed", "Research"],
  ["18:31", "Maya", "Draft held for operator review", "Approval"],
  ["18:16", "Scout", "Calendar conflict detected", "Signal"],
  ["17:58", "System", "Memory consolidation completed", "Memory"],
]

const nav = [
  ["Command center", Command], ["Agents", Bot], ["Goals", CircleDot],
  ["Memory", BrainCircuit], ["Decision traces", FileSearch], ["Integrations", Network],
]

export default function Page() {
  const [active, setActive] = useState("Command center")
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedGoal, setSelectedGoal] = useState(0)
  const selected = useMemo(() => goals[selectedGoal], [selectedGoal])

  return (
    <main className="min-h-screen bg-[#090b10] text-zinc-100 selection:bg-amber-300 selection:text-black">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_76%_2%,rgba(244,191,42,.12),transparent_29%),radial-gradient(circle_at_0%_70%,rgba(55,145,255,.09),transparent_34%)]" />
      <div className="relative mx-auto grid min-h-screen max-w-[1680px] lg:grid-cols-[248px_1fr]">
        <aside className={`fixed inset-y-0 left-0 z-30 w-72 border-r border-white/10 bg-[#0c0f16]/95 p-5 backdrop-blur-xl transition-transform lg:static lg:w-auto lg:translate-x-0 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="mb-10 flex items-center justify-between">
            <div className="flex items-center gap-3"><div className="grid h-9 w-9 place-items-center rounded-xl bg-amber-300 text-[#111] shadow-[0_0_32px_rgba(244,191,42,.28)]"><Sparkles size={18}/></div><div><p className="text-sm font-bold tracking-[.18em]">NEXUS</p><p className="text-[10px] tracking-[.24em] text-zinc-500">FOUNDRY / V3</p></div></div>
            <button className="lg:hidden" onClick={() => setMenuOpen(false)} aria-label="Close menu"><X size={20}/></button>
          </div>
          <p className="mb-3 px-3 text-[10px] font-medium uppercase tracking-[.18em] text-zinc-500">Operator workspace</p>
          <nav className="space-y-1">{nav.map(([label, Icon]) => <button key={label as string} onClick={() => {setActive(label as string); setMenuOpen(false)}} className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm transition ${active === label ? "bg-amber-300 text-black shadow-lg shadow-amber-300/10" : "text-zinc-400 hover:bg-white/5 hover:text-zinc-100"}`}><Icon size={17}/>{label as string}</button>)}</nav>
          <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-white/[.035] p-4"><div className="flex items-center gap-2 text-xs text-zinc-300"><span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]"/> Runtime healthy</div><p className="mt-2 text-xs leading-5 text-zinc-500">This is a review fixture. Controls do not call the runtime.</p></div>
        </aside>
        <section className="min-w-0 p-4 sm:p-7 lg:p-9">
          <header className="mb-9 flex items-center justify-between gap-4"><div className="flex items-center gap-3"><button className="rounded-xl border border-white/10 p-2.5 lg:hidden" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu size={19}/></button><div><div className="mb-2 flex items-center gap-2 text-xs text-emerald-300"><Activity size={14}/><span>Live review fixture</span></div><h1 className="text-2xl font-semibold tracking-tight sm:text-4xl">Build clarity before action.</h1></div></div><button className="hidden items-center gap-2 rounded-xl border border-amber-300/50 bg-amber-300/10 px-4 py-3 text-sm font-medium text-amber-200 hover:bg-amber-300 hover:text-black sm:flex"><Play size={15}/> Review queue</button></header>
          <div className="mb-7 grid gap-3 md:grid-cols-4">
            {[ ["Active agents", "04", "+1 ready", Bot], ["Open goals", "12", "3 need review", CircleDot], ["Memory records", "4,280", "98% indexed", BrainCircuit], ["Guarded actions", "07", "0 awaiting auth", ShieldCheck] ].map(([label, value, caption, Icon]) => <article key={label as string} className="rounded-2xl border border-white/10 bg-white/[.035] p-5"><div className="flex items-start justify-between"><p className="text-xs text-zinc-500">{label as string}</p><Icon size={16} className="text-amber-300"/></div><p className="mt-5 text-3xl font-semibold tracking-tight">{value as string}</p><p className="mt-2 text-xs text-emerald-300">{caption as string}</p></article>)}
          </div>
          <div className="grid gap-5 xl:grid-cols-[1.45fr_.85fr]">
            <article className="overflow-hidden rounded-3xl border border-white/10 bg-[#11151f]">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 p-6"><div><p className="text-xs uppercase tracking-[.18em] text-amber-300">Goal flow</p><h2 className="mt-1 text-xl font-semibold">Work with a visible handoff.</h2></div><button className="flex items-center gap-1 text-sm text-zinc-400 hover:text-white">All goals <ChevronRight size={16}/></button></div>
              <div className="p-3 sm:p-5">{goals.map((goal, i) => <button onClick={() => setSelectedGoal(i)} key={goal.title} className={`mb-2 grid w-full grid-cols-[auto_1fr_auto] items-center gap-3 rounded-2xl p-4 text-left transition ${selectedGoal === i ? "bg-white/[.08]" : "hover:bg-white/[.045]"}`}><div className={`h-9 w-1 rounded-full ${goal.tint}`}/><div className="min-w-0"><p className="truncate font-medium">{goal.title}</p><div className="mt-2 flex items-center gap-3 text-xs text-zinc-500"><span>{goal.owner}</span><span>{goal.state}</span><span>{goal.progress}% complete</span></div><div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10"><div className={`h-full rounded-full ${goal.tint}`} style={{width:`${goal.progress}%`}}/></div></div><MoreHorizontal className="text-zinc-500" size={18}/></button>)}</div>
            </article>
            <article className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#1c2230] to-[#10141e] p-6"><p className="text-xs uppercase tracking-[.18em] text-sky-300">Review focus</p><h2 className="mt-2 text-2xl font-semibold">{selected.title}</h2><p className="mt-3 text-sm leading-6 text-zinc-400">A deliberate pause keeps this decision visible before any communication or external action happens.</p><div className="my-6 border-y border-white/10 py-5"><div className="flex justify-between text-sm"><span className="text-zinc-500">Progress</span><span>{selected.progress}%</span></div><div className="mt-3 h-2 rounded-full bg-white/10"><div className={`h-full rounded-full ${selected.tint}`} style={{width:`${selected.progress}%`}}/></div></div><div className="space-y-3 text-sm"><p className="flex items-center gap-3"><CheckCircle2 size={17} className="text-emerald-300"/> Evidence attached</p><p className="flex items-center gap-3"><Clock3 size={17} className="text-amber-300"/> Human review still required</p></div><button className="mt-7 w-full rounded-xl bg-zinc-100 px-4 py-3 text-sm font-semibold text-black">Open review packet</button></article>
          </div>
          <article className="mt-5 rounded-3xl border border-white/10 bg-white/[.025] p-6"><div className="mb-5 flex items-center justify-between"><div><p className="text-xs uppercase tracking-[.18em] text-zinc-500">Decision traces</p><h2 className="mt-1 text-lg font-semibold">The runtime leaves a readable trail.</h2></div><Zap className="text-amber-300"/></div><div className="divide-y divide-white/10">{traces.map(([time, agent, action, type]) => <div key={action} className="grid grid-cols-[50px_85px_1fr_auto] gap-3 py-4 text-sm"><span className="font-mono text-zinc-500">{time}</span><span className="text-sky-200">{agent}</span><span>{action}</span><span className="hidden rounded-full border border-white/10 px-2 py-0.5 text-xs text-zinc-500 sm:block">{type}</span></div>)}</div></article>
        </section>
      </div>
    </main>
  )
}
