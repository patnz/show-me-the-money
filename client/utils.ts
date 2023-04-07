export function parseDuration(duration: number): [string, string, string] {
  const seconds = Math.round(duration / 1000)
  const minutes = Math.round(seconds / 60)
  const hours = Math.round(minutes / 60)
  return [hours, minutes % 60, seconds % 60].map((n) => n.toString()) as [
    string,
    string,
    string
  ]
}
