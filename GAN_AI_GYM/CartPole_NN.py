import tensorflow as tf
import numpy as np
class NeuralNetwork:
    def __init__(self): # constructor
        self.neural_network_init()
    def Actor(self,input_actor):
        # define Actor neural network
        with tf.variable_scope('Generator')as scope:
            hidden = tf.layers.dense(input_actor, units=10, )
            hidden = tf.sigmoid(hidden) * hidden
            hidden = tf.layers.dense(hidden, units=10, )
            hidden = tf.sigmoid(hidden) * hidden
            hidden = tf.layers.dense(hidden, units=10, )
            hidden = tf.sigmoid(hidden) * hidden
            hidden = tf.layers.dense(hidden, units=2, )
            Actor_out = hidden
        return Actor_out


    def Discrimitator(self,input_disc,reuse=False):
        # define Discrimitator neural network
        with tf.variable_scope('Discriminator')as scope:
            if reuse:
                scope.reuse_variables()
            hidden = tf.layers.dense(input_disc, units=10, )
            hidden = tf.sigmoid(hidden) * hidden
            hidden = tf.layers.dense(hidden, units=10, )
            hidden = tf.sigmoid(hidden) * hidden
            hidden = tf.layers.dense(hidden, units=10, )
            hidden = tf.sigmoid(hidden) * hidden
            hidden = tf.layers.dense(hidden, units=1, )
            Reward_prediction = hidden
        return Reward_prediction

    def neural_network_init(self):
        # reset the graph
        tf.reset_default_graph()

        # define input place holder
        self.Observation = tf.placeholder(tf.float32, shape=[None, 8])
        self.Action_past = tf.placeholder(tf.float32, shape=[None, 2])
        self.Reward = tf.placeholder(tf.float32, shape=[None, 1])

        # build Actor->Discriminator connected neural network
        actor_descision = self.Actor(self.Observation)
        Act_disc_inp = tf.concat([self.Observation, actor_descision],axis=1)
        Act_reward_pred = self.Discrimitator(Act_disc_inp)

        # Create discriminator that reuses the weights
        # This network can be trained independantly
        disc_inp = tf.concat([self.Observation, self.Action_past],axis=1)
        disc_out = self.Discrimitator(disc_inp, True)

        # Define Training methods
        # Get variables to be trained
        D_var = tf.get_collection(tf.GraphKeys.TRAINABLE_VARIABLES, 'Discriminator')
        G_var = tf.get_collection(tf.GraphKeys.TRAINABLE_VARIABLES, 'Generator')
        # Discriminator loss
        Reward_loss = tf.losses.mean_squared_error(self.Reward, disc_out)
        # Discriminator optimisation by reducing prediction error
        self.Disc_op = tf.train.AdamOptimizer().minimize(Reward_loss, var_list=D_var)
        # Actor optimisation by maximizing predicted reward
        self.Actor_op = tf.train.AdamOptimizer().minimize(-Act_reward_pred, var_list=G_var)