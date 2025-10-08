export function BackgroundDecor() {
  return (
    <>
      <div className="fixed inset-0 bg-[var(--background)] w-full" aria-hidden="true" />
      <div className="fixed inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/[0.03] via-transparent to-sky-500/[0.03]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--card-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--card-border)_1px,transparent_1px)] bg-[size:44px_44px]" />
      </div>
    </>
  )
}
