// Shared helpers for class listings (Home band + Classes page)

export const sortByStartDate = (classes) =>
  [...classes].sort((a, b) => a.startDate.localeCompare(b.startDate))

// Duration tag text is derived from session count in the data rather than
// parsed out of date strings at runtime.
export const durationLabel = (c) => {
  if (c.type === 'day') return 'One-Day Workshop'
  if (c.type === 'corp') return `${c.sessions}-Week Series · Corporate`
  return `${c.sessions}-Week Series`
}

export const durationTagClass = {
  series: 'bg-sage-tint border border-sage-border text-sage-text',
  day: 'bg-tag-terracotta text-[#FBF6EE]',
  corp: 'bg-[#F4F5F7] border border-[#C4C7CE] text-[#5B616E]',
}

export const venueDotClass = {
  csma: 'bg-forest-green',
  pal: 'bg-terracotta',
  other: 'bg-slate',
}

// Non-breaking space binds the arrow to the last word so ↗ can't wrap alone.
export const registerLabel = (c) => `Register at ${c.platform} ↗`
