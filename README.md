# 🎮 Atari Reinforcement Learning Dashboard

## Overview

Atari Reinforcement Learning Dashboard is a web-based monitoring and management platform for Deep Reinforcement Learning experiments on Atari environments. The project is based on the Deep Q-Network (DQN) framework and provides training configuration, session analytics, replay inspection, experiment tracking, and performance visualization.

The dashboard complements a DQN-based Atari RL system trained on:

* Pong
* Breakout
* Space Invaders

The underlying reinforcement learning implementation uses Deep Q-Networks (DQN), experience replay, target networks, and convolutional neural networks for learning directly from raw pixel observations.

---

## Project Objectives

* Monitor Atari RL training sessions
* Configure DQN hyperparameters
* Visualize reward progression
* Track epsilon decay
* Analyze Q-value distributions
* Compare training runs
* Review replay summaries
* Manage experiment metadata

---

## Reinforcement Learning Architecture

### Environment Layer

The RL agent interacts with Atari environments through OpenAI Gym and the Arcade Learning Environment (ALE).

Supported Environments:

* ALE/Pong-v5
* ALE/Breakout-v5
* ALE/SpaceInvaders-v5

### State Representation

Raw Atari frames undergo preprocessing:

1. RGB to Grayscale conversion
2. Resize to 84×84
3. Pixel normalization
4. Four-frame stacking

Final state shape:

84 × 84 × 4

This enables the agent to infer motion and object velocity from consecutive frames.

---

## Deep Q-Network (DQN)

The RL model is based on the DeepMind DQN architecture.

### CNN Architecture

Input:

84 × 84 × 4

Convolution Layers:

* Conv1: 32 filters, 8×8 kernel, stride 4
* Conv2: 64 filters, 4×4 kernel, stride 2
* Conv3: 64 filters, 3×3 kernel, stride 1

Fully Connected Layers:

* Dense: 512 neurons
* Output Layer: Q-values for each action

Activation:

* ReLU

---

## Experience Replay

Replay Buffer Size:

100,000 transitions

Features:

* Random mini-batch sampling
* Reduced temporal correlation
* Improved sample efficiency
* Stable gradient updates

---

## Target Network

The project uses a separate target network to stabilize Q-learning.

Benefits:

* Reduces moving target problem
* Improves convergence stability
* Prevents oscillating Q-values

Target Synchronization:

Every 1000 training steps

---

## Exploration Strategy

Epsilon-Greedy Exploration

Initial Epsilon:

ε = 1.0

Final Epsilon:

ε = 0.1

Decay:

Linear decay over 1 million steps

This ensures sufficient exploration during early training while enabling policy exploitation later.

---

## Hyperparameters

| Parameter          | Value      |
| ------------------ | ---------- |
| Learning Rate      | 0.00025    |
| Discount Factor    | 0.99       |
| Replay Buffer Size | 100000     |
| Batch Size         | 32         |
| Warm-up Steps      | 10000      |
| Target Update      | 1000 Steps |
| Initial Epsilon    | 1.0        |
| Minimum Epsilon    | 0.1        |

---

## Dashboard Features

### Training Dashboard

* Episode reward tracking
* Loss monitoring
* Epsilon visualization
* Performance summaries

### Session Analysis

* Historical run comparison
* Session metadata
* Checkpoint tracking

### Replay Viewer

* Replay summaries
* Agent behavior review
* Experiment comparison

### Configuration Management

* Schema validation
* Hyperparameter management
* Experiment reproducibility

---

## Improvements Added

### Shared Utilities

* lib/game-data.ts
* lib/config.ts
* lib/api.ts
* lib/metrics.ts
* lib/types.ts

### API Enhancements

* Standardized API responses
* Improved logging
* Better validation
* Enhanced error handling

### Documentation

* README.md
* CHANGELOG.md
* PROJECT_STRUCTURE.md

### Validation

* requirements.txt
* validate_requirements.py

---

## Project Structure

```text
app/
├── dashboard/
├── train/
├── replay/
├── sessions/
├── api/

components/
├── charts/
├── ui/

lib/
├── api.ts
├── config.ts
├── game-data.ts
├── metrics.ts
├── types.ts

public/
└── data/

requirements.txt
CHANGELOG.md
PROJECT_STRUCTURE.md
README.md
```

## Tech Stack

Frontend

* Next.js
* React
* TypeScript

Reinforcement Learning

* Python
* PyTorch
* OpenAI Gym
* ALE

Visualization

* Chart Components
* Session Analytics

---

## Future Enhancements

* Double DQN
* Dueling DQN
* Prioritized Experience Replay
* PPO Integration
* A3C Integration
* Multi-Game Transfer Learning
* Advanced Evaluation Dashboard

---

## Author

Sanjay Gandhi

Bachelor of Technology – Artificial Intelligence

SRM Institute of Science and Technology

Project: RL Agent for Atari Games
