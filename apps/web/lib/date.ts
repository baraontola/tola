import {
  differenceInSeconds,
  differenceInMinutes,
  differenceInHours,
  format,
  isSameYear,
} from "date-fns"

export function formatPostDate(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()

  // 1. Under 1 minute
  const diffInSeconds = differenceInSeconds(now, date)
  if (diffInSeconds < 60) {
    return "now"
  }

  // 2. Under 1 hour (Minutes)
  const diffInMinutes = differenceInMinutes(now, date)
  if (diffInMinutes < 60) {
    return `${diffInMinutes}m`
  }

  // 3. Under 24 hours (Hours)
  const diffInHours = differenceInHours(now, date)
  if (diffInHours < 24) {
    return `${diffInHours}h`
  }

  // 4. Over 24 hours (Absolute date)
  if (isSameYear(now, date)) {
    return format(date, "MMM d") // e.g. "Jun 7"
  }

  return format(date, "MMM d, yyyy") // e.g. "Jun 7, 2025"
}

export function formatAbsoluteDate(dateString: string): string {
  const date = new Date(dateString)
  // Format detail: "7:50 AM · Jun 7, 2026"
  return format(date, "h:mm a · MMM d, yyyy")
}
