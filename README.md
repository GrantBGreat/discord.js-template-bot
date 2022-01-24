# Discord.js Template Bot
This is another template bot for discord.js. Quick reminder about [discord.js guide](https://discordjs.guide) and how great of a place it is for documentation.

## 2022 Update:
This bot template is **NO LONGER UP TO DATE**, and will no longer be updated by me. At the time of writing this, I am in senior high school and quite busy. I am the lead programmer on the school robotics team and have been busy building a resume by developing games using Unity. Making this template bot is nowhere near the top of my priority list.

Starting April 2022 Discord will be making their new Slash Command system mandatory. This means that this bot will no longer work without a decent amount of modification starting after April 2022. Discord is making it quite hard to keep bots up to date these days and I am certainly not the only one feeling the pressure. Danny, better known as Rapptz for developing the discord.py also recently ceased development for the library because of this. You can read more about this in his gist [here](https://gist.github.com/Rapptz/4a2f62751b9600a31a0d3c78100287f1). Discords API updates are forcing developers to completely rewrite sections of their code rather than adapt it. As Danny states, there is nothing we can do about this aside from expressing our opinions to Discord.

If I do find time in the future, after Discord has sorted out these updates, I may come back and make a new template bot. However, for the moment, if you would still like help with this bot, feel free to come over and join [my Discord server](https://discord.com/invite/dX34pgyHzp) and I'll try my best to help out. :)


# Setup
1) Click `Use this template` and clone the code from your Github to work on it.
2) Create a new discord application in the [developer portal](https://discord.com/developers/applications) and create a bot.
3) Make sure you have [installed node](https://nodejs.org/en/).
4) Navigate to the folder with the bots code and run `npm i`, this will install the following dependencies:
    ```
    discord.js
    dotenv
    fs
    ms
    nodemon
    ```
5) You can now start the bot by running the [`run.bat`](https://github.com/GrantBGreat/discord.js-template-bot/blob/main/run.bat) file (linux users can use the [`run.sh`](https://github.com/GrantBGreat/discord.js-template-bot/blob/main/run.sh) file) **OR** running `node .` in the bot's root folder.<br>
    **NOTE:** For bot development, you may want to use nodemon, more information on that can be found in the [developement readme](https://github.com/GrantBGreat/discord.js-template-bot/blob/main/commands/README.md).
6) Copy the discord token given for the bot:
  
    ![image](https://user-images.githubusercontent.com/72450527/111185348-408d9880-8588-11eb-94ca-8f35220b7864.png)

7) After running the bot once, a `.env` (environmental) file will be created. Inside it you will see `TOKEN=your_token_here`, replace `your_token_here` with the token you just copied **and save the file!**<br>
    Example: `TOKEN=NzgwNjM4NTYyNTY3MDYxNTM2.X7yAUA.W6sjNFvgosqDurfdPXG0AZyyRpQ`
8) You are now done the initial setup of your own discord bot! Congrats and fun coding! 🥳

# Config
You will notice a config.json file in the root directory, this file stores the main config for the bot. You can find each option and what they are below:<br>
`prefix` -- This is the prefix for the bot as a string.<br>
`status` -- This is the status the bot appears with, your options for this are `online` (default), `dnd` (do not disturb), `idle`, and `invisible` (shows as offline).<br>
`statusmessage` -- This is the message that appears in the bot's custom status.<br>
`cooldown` -- This is the amount of time you must wait between commands. The time is in milliseconds and the default is 2000 (2 seconds).

# Developing the bot
Developing using this bot template is quite easy. You dont need to make any changes to the bot.js and it's all ready for you to just start adding command files in the [commands](https://github.com/GrantBGreat/discord.js-template-bot/tree/main/commands) folder. In addition to this, 3 basic example commands, including a help command are provided.

Full instructions on how to edit the commands and create new ones can be found [here](https://github.com/GrantBGreat/discord.js-template-bot/blob/main/commands/README.md).
