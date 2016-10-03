#!/bin/bash
basedir=/home/gdj/backup
PATH=/bin:/usr/bin:/sbin:/usr/sbin; export PATH
export LANG=C
basefile=$basedir/week.$(date +%Y-%m-%d).tar.gz
rmfile=$basedir/week.$(date --date='7 days ago' +%Y-%m-%d).tar.gz
[ ! -d "$basedir" ] && mkdir $basedir
cd /home/gdj
tar -zpc -f $basefile work document desktop /data/output/
rm -f $rmfile
