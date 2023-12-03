export function formatBytes(bytes: number) {
  const total = bytes / 1024
  if (total < 1024) {
    return `${total.toFixed(1)}Kb`
  }

  return `${(total / 1024).toFixed(1)}Mb`
}
