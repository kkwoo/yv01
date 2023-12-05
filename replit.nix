{ pkgs }: {
  deps = [
    pkgs.unzip
    pkgs.zip
    pkgs.vim
    pkgs.yarn
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server  
  ];
}