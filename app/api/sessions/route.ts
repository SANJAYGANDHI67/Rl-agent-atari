import { NextResponse } from "next/server"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

export async function GET() {
  try {
    const response = await fetch(`${BASE_URL}/data/index.json`, { cache: "no-store" })

    if (!response.ok) {
      console.error("Failed to fetch session index", response.status, response.statusText)
      return NextResponse.json({ sessions: [] })
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Session route error", error)
    return NextResponse.json({ sessions: [] })
  }
}
