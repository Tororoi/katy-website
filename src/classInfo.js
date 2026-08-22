// Shared helpers for class listings (Home schedule + Classes page)

export const sortByStartDate = (classes) =>
  [...classes].sort((a, b) => a.startDate.localeCompare(b.startDate))

// Duration line text is derived from session count in the data rather than
// parsed out of date strings at runtime.
export const durationLabel = (c) => {
  if (c.type === 'day') return 'One-day workshop'
  if (c.type === 'corp') return `${c.sessions}-week series, corporate`
  return `${c.sessions}-week series`
}

// Non-breaking space binds the arrow to the last word so ↗ can't wrap alone.
export const registerLabel = (c) => `Register at ${c.platform} ↗`
