cd /tmp
wget --no-check-certificate 'https://docs.google.com/uc?export=download&id=1nsC2yqx8oN8ps86nJeO6Ux_rMg9T2fop' -O ChemIn_first_screen.zip
unzip ChemIn_first_screen.zip
cd ChemIn_first_screen
python -m http.server 8081