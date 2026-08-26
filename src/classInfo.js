// Shared helpers for class listings (Home schedule + Classes page)

// Soonest start date first. Ties are broken by id so the order is stable
// regardless of where a class sits in data.json.
export const sortByStartDate = (classes) =>
  [...classes].sort(
    (a, b) => a.startDate.localeCompare(b.startDate) || a.id - b.id,
  )

// Local YYYY-MM-DD for "today" - string compare against the ISO dates in
// data.json avoids the UTC shift that `new Date('2026-07-29')` would apply.
const todayISO = () => {
  const now = new Date()
  const pad = (n) => String(n).padStart(2, '0')
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`
}

// A class is archived once its final session has passed - an in-progress
// series stays listed. endDate falls back to startDate so a one-day workshop
// needs no extra field.
export const isArchived = (c, today = todayISO()) =>
  (c.endDate || c.startDate) < today

// Splits a class list into current and archived. Current runs soonest first,
// so the next class to register for leads. Archived is reversed - most
// recently finished first - since the newest past class is the relevant one.
export const partitionClasses = (classes) => {
  const today = todayISO()
  const sorted = sortByStartDate(classes)
  return {
    current: sorted.filter((c) => !isArchived(c, today)),
    archived: sorted.filter((c) => isArchived(c, today)).reverse(),
  }
}

// Duration line text is derived from session count in the data rather than
// parsed out of date strings at runtime.
export const durationLabel = (c) => {
  if (c.type === 'day') return 'One-day workshop'
  if (c.type === 'corp') return `${c.sessions}-week series, corporate`
  return `${c.sessions}-week series`
}

// Non-breaking space binds the arrow to the last word so ↗ can't wrap alone.
export const registerLabel = (c) => `Register at ${c.platform} ↗`
