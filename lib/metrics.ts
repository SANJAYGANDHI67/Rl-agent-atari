import type { EpisodeReward, EpsilonValue, Metrics } from "@/lib/types"

export function computeAverageReward(rewards: EpisodeReward[] = []): number {
  if (rewards.length === 0) return 0
  const total = rewards.reduce((sum, entry) => sum + entry.reward, 0)
  return total / rewards.length
}

export function computeRewardImprovement(rewards: EpisodeReward[] = []): number {
  if (rewards.length < 2) return 0
  return rewards[rewards.length - 1].reward - rewards[0].reward
}

export function computeRewardTrend(rewards: EpisodeReward[] = []): "up" | "down" | "flat" {
  if (rewards.length < 2) return "flat"
  const improvement = computeRewardImprovement(rewards)
  return improvement > 0 ? "up" : improvement < 0 ? "down" : "flat"
}

export function generateEpsilonSchedule(
  start: number,
  end: number,
  decay: number,
  steps: number = 10
): EpsilonValue[] {
  const schedule: EpsilonValue[] = []
  let epsilon = start

  for (let episode = 1; episode <= steps; episode += 1) {
    schedule.push({ episode, epsilon: Number(epsilon.toFixed(4)) })
    epsilon = Math.max(end, epsilon * decay)
  }

  return schedule
}

export function getPerformanceSummary(metrics?: Metrics) {
  if (!metrics) {
    return {
      averageReward: 0,
      rewardImprovement: 0,
      latestLoss: 0,
      totalEpisodes: 0,
    }
  }

  return {
    averageReward: computeAverageReward(metrics.episode_rewards),
    rewardImprovement: computeRewardImprovement(metrics.episode_rewards),
    latestLoss: metrics.loss_values?.[metrics.loss_values.length - 1]?.loss ?? 0,
    totalEpisodes: metrics.episode_rewards?.length ?? 0,
  }
}
