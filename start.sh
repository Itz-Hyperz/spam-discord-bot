
#!/bin/sh

if test "`whoami`" != "root" ; then
	echo "You must be logged in as root to install/run this bot"
	echo "Enter 'su' or 'sudo bash' to switch to root"
	exit
fi

PS3='Please enter your choice: '
options=("Install" "Run" "Quit")
select opt in "${options[@]}"
do
    case $opt in
        "Install")
            sudo apt install npm
            npm install discord.js
            ;;
        "Run")
            node main.js
            ;;
        "Quit")
            break
            ;;
        *) echo "invalid option $REPLY";;
    esac
done
node main.js
