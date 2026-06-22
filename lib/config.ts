import { z } from "zod"
import { GAME_IDS } from "@/lib/game-data"

export const trainingConfigSchema = z.object({
  game: z.enum([...GAME_IDS]),
  total_timesteps: z.number().min(1000).max(10000000),
  learning_rate: z.number().min(0.000001).max(1),
  epsilon_start: z.number().min(0).max(1),
  epsilon_end: z.number().min(0).max(1),
  epsilon_decay: z.number().min(0.9).max(0.9999),
  batch_size: z.number().int().min(1).max(512),
  gamma: z.number().min(0).max(1),
})

export type TrainingConfig = z.infer<typeof trainingConfigSchema>

export const defaultTrainingConfig: TrainingConfig = {
  game: "breakout",
  total_timesteps: 1000000,
  learning_rate: 0.0001,
  epsilon_start: 1.0,
  epsilon_end: 0.01,
  epsilon_decay: 0.995,
  batch_size: 32,
  gamma: 0.99,
}

export function buildCheckpointMetadata(config: TrainingConfig) {
  const checkpointToken = `${config.game}-${Date.now()}`
  return {
    checkpoint_id: `checkpoint-${checkpointToken}`,
    checkpoint_path: `/checkpoints/${checkpointToken}.pth`,
    created_at: new Date().toISOString(),
    message: "Checkpoint metadata created successfully.",
  }
}
