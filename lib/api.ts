export const apiRoutes = {
  config: "/api/config",
  sessions: "/api/sessions",
  metrics: (sessionId: string) => `/api/metrics/${sessionId}`,
  games: "/api/games",
}

export async function fetchJson<T>(url: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, { cache: "no-store", ...init })

  if (!response.ok) {
    const responseBody = await response.text()
    throw new Error(`API request failed: ${response.status} ${response.statusText} - ${responseBody}`)
  }

  return response.json()
}
