#!/bin/bash

filesPath=$(echo $DOWNLOAD_PATH)

if [ "$filesPath" == "" ]
then
    echo 'Please create DOWNLOAD_PATH variable, its the path of your current downloaded file'
    exit 1
fi

if [ ! -d ${filesPath}/mp3Files ]
then
    mkdir ${filesPath}/mp3Files
fi

for fileMp4 in $filesPath/*.mp4; do
    # Get filename without extension
    fileName=$(basename "${fileMp4}" mp4)
    ffmpeg -i "${fileMp4}" "${filesPath}/mp3Files/${fileName}mp3" && rm "${fileMp4}"
done