Hello brothers,

What do you think I have come up with today. Indeed I am following the 100 things principle up until this day, I know what's good for me and indeed I am doing that.

### Tmux

For sure this is what I have learnt today

What? The answer to `What` is that it a terminal multiplexer, so basically you can have the feel of multiple terminals in a single terminal.

How? It's simple we just have to install the cli tool. In my case as I am an Arch user

> I use arch btw

I just install it using the command `pacman -S tmux`

Why? There's no question why I am going to use it in the future. It just saves a lot of my time. That's it. I have recently started using the lunar vim. Just another configuration for neovim that is of course configuration for vim using lua that is indeed a configuration of vi and using vimscript.

Ok back to the point, I just like what tmux is doing. There are basically 5-10 simple commands to learn and that's it. You will save atleast half an hour per day and more than that you will save yourself and your mind being frustrated everyday going back and forth in terminal using the mouse. Because in my case even the `Ctrl + Tab` doesn't wok, so I had to figure out something.

How can you use it? Though I don't think whatever I am writing right here is ever going to public, I think I would convert this to a GitHub gist (most probably). But still I am going to write the commands right here, just because I want to memorize them and want to learn some writing skills as well.

Ok so let's start. I am considering that you have already figured out how to install **Tmux** on you system. weather it's deb, rpm or anything else. (I use arch btw).

1. Creating a session A session is basically a session, that contains multiple terminal sessions, that's it. You can group multiple terminals into one session. You can use the following command to do this: `tmux new -s <session name>` You will instantly we sent to that session, you will see a status bar there. To get out of the session you can press `Ctrl B` and then d. This command will Detach the session.
2. Creating a new window: To create a new windows in a session Let's call the `Ctrl + B` from now. Press and then `c`. you will have a new windows ready to use.
3. Close a window Press and x and then press y to close or n to cancel your decision.
4. Switching session: Press + s , you will know what to do
5. Switching windows: Press + w, you will see the list, you can toggle from there

Other commands

+ n to next windows + l to toggle window (Not sure about it)

I think that's enough about T-mux from my side, you can google the rest.

#linux #tmux
