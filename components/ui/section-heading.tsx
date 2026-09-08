export function SectionHeading({ eyebrow, title, detail }: { eyebrow: string; title: string; detail?: string }) {
  return (
    <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-[-0.04em] text-foreground md:text-5xl">{title}</h2>
      </div>
      {detail && <p className="max-w-xs text-sm leading-6 text-muted-foreground">{detail}</p>}
    </div>
  )
}
