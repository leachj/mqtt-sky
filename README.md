mqtt-sky
========

MQTT adapter to sky HD network API

This code relies on the Node sky module at https://github.com/dalhundal/sky-plus-hd. Unfortunately the version in NPM is too old to work with the latest sky software so my code requires this to be checked out locally.

This module listens for commands on the topic sky-control and publishes state change event to sky-status.

The messages on sky-control can be pause, play or channel number
