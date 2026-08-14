export default function RouteFallback() {
  return (
    <main className="route-loading" aria-busy="true" aria-label="Loading page">
      <span className="route-loading__spinner" aria-hidden="true" />
      <span>Loading Fenizo experience…</span>
    </main>
  )
}
