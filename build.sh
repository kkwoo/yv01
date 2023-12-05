#!/bin/sh
export PROJ=yv01

date
cd ~/$PROJ/dev
rm ~/$PROJ/index.html
rm ~/$PROJ/index.html.RENAMEBACK
rm -rf ~/$PROJ/assets
rm -rf ~/$PROJ/assets.RENAMEBACK
rm ~/dist.zip
yarn run vite build && cd dist && zip -9r ~/dist.zip .
unzip -o ~/dist.zip -d ~/$PROJ/
mv ~/$PROJ/assets ~/$PROJ/assets.RENAMEBACK
mv -v ~/$PROJ/dev/dist/index.html ~/$PROJ/
mv -v ~/$PROJ/index.html ~/$PROJ/index.html.RENAMEBACK
cd ~/$PROJ
