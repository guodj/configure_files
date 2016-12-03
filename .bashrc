# .bashrc

# Source global definitions
if [ -f /etc/bashrc ]; then
    . /etc/bashrc
fi

alias vi='vim'
alias cp='cp -v'

# For shell script
export PATH="$HOME/work/sh/:$PATH"
# For python
export PATH="$HOME/anaconda3/bin:$PATH"
# For matlab
export PATH="/usr/local/MATLAB/R2015b/bin/:$PATH"
# For openmpi
export PATH="/usr/lib64/openmpi/bin/:$PATH"
#export LD_LIBRARY_PATH=""
# For my python module
export PYTHONPATH="$HOME/work/python/:$PYTHONPATH"
# For my datapath
export DATAPATH="$HOME/data/"
