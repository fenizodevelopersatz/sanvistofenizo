import RocketLoader from './RocketLoader.jsx'

export default function RouteFallback() {
  return (
    <main className="route-loading" aria-busy="true" aria-label="Loading page">
      <RocketLoader />
      <span>Loading CloneScript experience…</span>
    </main>
  )
}
