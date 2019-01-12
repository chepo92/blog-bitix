#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

alias ls='ls --color=auto'
#PS1='[\u@\h \W$ '

#
GIT_PS1_SHOWDIRTYSTATE="true"
GIT_PS1_SHOWSTASHSTATE="true"
GIT_PS1_SHOWUNTRACKEDFILES="true"
GIT_PS1_SHOWUPSTREAM="true"
GIT_PS1_SHOWCOLORHINTS="true"
source ~/.git-prompt.sh

PS1='[\[\033[01;34m\]\u\[\033[00m\]@\[\033[01;35m\]\h\[\033[00m\] \W]\$ '
PROMPT_COMMAND='__git_ps1 "[\[\033[01;34m\]\u\[\033[00m\]@\[\033[01;35m\]\h\[\033[00m\] \W" "]\$ "'
