#!/usr/bin/env bash
tmux new-session -s "Session" -d
tmux set-option -g mouse on
tmux split-window -h
tmux split-window -v
tmux attach-session -t "Session"