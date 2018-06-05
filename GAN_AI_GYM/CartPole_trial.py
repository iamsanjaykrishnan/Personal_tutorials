import numpy as np
from CartPole_NN import NeuralNetwork
import gym
env = gym.make('CartPole-v0')
env.reset()

NN = NeuralNetwork()

for _ in range(1000):
    env.render()
    env.step(env.action_space.sample()) # take a random action
env.close()