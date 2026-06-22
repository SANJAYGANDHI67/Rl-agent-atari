import { NextResponse } from "next/server"
import { trainingConfigSchema, buildCheckpointMetadata } from "@/lib/config"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validation = trainingConfigSchema.safeParse(body)

    if (!validation.success) {
      console.error("Config validation failed", validation.error.format())
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
          details: validation.error.flatten(),
        },
        { status: 400 }
      )
    }

    const checkpoint = buildCheckpointMetadata(validation.data)

    return NextResponse.json({
      success: true,
      config: validation.data,
      checkpoint,
      message: "Configuration validated successfully. In production, this would start a training job and save a checkpoint.",
    })
  } catch (error) {
    console.error("Failed to parse config payload", error)
    return NextResponse.json(
      { success: false, error: "Invalid JSON payload" },
      { status: 400 }
    )
  }
}
