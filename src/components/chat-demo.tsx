export function ChatDemo() {
  return (
    <aside
      aria-label="Example Sóró interview conversation"
      className="mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-border bg-card shadow-[0_18px_48px_rgb(31_22_18_/_10%)]"
    >
      <div className="flex items-center justify-between border-b border-border bg-background px-4 py-3">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-terracotta text-sm font-bold text-terracotta-foreground">
            S
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-foreground">Sóró interview</p>
            <p className="mt-0.5 flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-sage" aria-hidden="true" />
              AI moderator · live conversation
            </p>
          </div>
        </div>
        <div className="rounded-full border border-sage/30 bg-sage/10 px-3 py-1 text-right">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">Reward</p>
          <p className="font-mono text-sm font-bold text-sage">₦1,000</p>
        </div>
      </div>

      <div className="h-1.5 bg-muted" aria-hidden="true">
        <div className="h-full w-2/3 rounded-r-full bg-sage" />
      </div>

      <div className="space-y-4 px-4 py-5 sm:px-5">
        <p className="max-w-[88%] rounded-2xl rounded-tl-sm bg-muted px-4 py-3 text-sm leading-relaxed text-foreground">
          When you send money to a friend, which app do you reach for first — and why?
        </p>
        <p className="ml-auto max-w-[88%] rounded-2xl rounded-tr-sm bg-terracotta px-4 py-3 text-sm leading-relaxed text-terracotta-foreground">
          OPay. Transfers land instantly and the fees are tiny compared with my bank app.
        </p>
        <div className="rounded-2xl border border-sage/25 bg-sage/10 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sage">Interview insight</p>
          <p className="mt-1.5 text-sm leading-relaxed text-foreground">
            Speed and low transfer fees are driving the choice — not just brand awareness.
          </p>
        </div>
      </div>

      <div className="border-t border-border bg-background px-4 py-3 text-center text-xs font-medium text-muted-foreground">
        A real conversation, not a click-through survey.
      </div>
    </aside>
  )
}
