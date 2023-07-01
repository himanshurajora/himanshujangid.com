### Problem: 
**Current Working directory is not preserved in gnome terminal (bash/zsh) fix.** I faced this issue when I recently switched to Manjaro linux. Everything was working fine until I noticed that the current working directory was not being preserved by the gnome-terminal when I created a new tab with `Ctrl + Shift + T`. It worked fine in Fedora and Ubuntu that I used earlier. 

### Solution

You can add this command to you shell's confuguration file (.zshrc / .bashrc)
if the vte.sh is not avaible you can just google it

```shell
# including this ensures that new gnome-terminal tabs keep the parent `pwd` !
if [ -e /etc/profile.d/vte.sh ]; then
    . /etc/profile.d/vte.sh
fi
```

---
Thanks for reading!