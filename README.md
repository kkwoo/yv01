# Groovate: Case Study Using Yarn and Vite in the HTML,CSS,JS replit
- In the shell tab
  - yarn init -2
  - yarn create vite
    - name the project "dev"
  - cd dev
  - yarn
  - yarn build
  - cd dist
  - cp -vR * ~/groovate/
- At this point, all files in the asset directory return 404
  - workaround: via the GUI
    -  In the ~/groovate replit root, rename the files to something different (eg add a ".dummy" extension)
    -  rename back to old name (eg remove ".dummy" extension)
      - This seems to internally register the files as servable to the outside world
    - rename "asset" directory to "asset.dummy" and back to "asset"
      - Multiple files in the "asset" directory now become visible
-   asset file 404 seems reproducible with subsequent extractions from ~/dist.zip   
  -   UNTIL FILES ARE COMMITTED TO SOURCE CONTROL
      - commit failed state as a baseline
      - rename files
      - commit
      - rename away previous file rename
      - commit
      - TEST: check if asset files are now accessible
      - rollback to failed state
      - TEST: check if 404 is reproducible (so far, unable)
      - TEST
        - unzip ~/dist.zip
        - TEST: check if 404 is reproducible (so far, unable)
  - create build.sh
  - run zip and unzip to add these to the nix environment
  - cd ~/$PROJ && sh -x build.sh
  - FYI, build.sh looks like this:
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