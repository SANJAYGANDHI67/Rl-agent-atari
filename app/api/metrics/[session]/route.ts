import { NextResponse } from "next/server"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

export async function GET(
  request: Request,
  { params }: { params: Promise<{ session: string }> }
) {
  const { session } = await params

  try {
    const response = await fetch(`${BASE_URL}/data/${session}/metrics.json`, { cache: "no-store" })

    if (!response.ok) {
      console.error("Metrics file missing for session", session)
      return NextResponse.json({ error: "Session not found" }, { status: 404 })
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Metrics route error", session, error)
    return NextResponse.json({ error: "Failed to fetch metrics" }, { status: 500 })
  }
}
