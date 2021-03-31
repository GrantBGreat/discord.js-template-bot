# discord.js template bot
This is another template bot for discord.js.

# Setup
1) Clone the code.
2) Create a new discord application in the [developer portal](https://discord.com/developers/applications) and create a bot.
3) Copy the discord token given for the bot:
  
    ![image](https://user-images.githubusercontent.com/72450527/111185348-408d9880-8588-11eb-94ca-8f35220b7864.png)

4) Create a file `.env` in the root folder of the bot, and enter `TOKEN=the_bot_token_you_just_copied`.
5) Make sure you have [installed node](https://nodejs.org/en/).
6) Navigate to the folder with the bots code and run `npm i`, this will install the following dependancys:
    ```
    discord.js
    dotenv
    fs
    ms
    nodemon
    ```
7) You can now start the bot by running `node .` in the bot's root folder.

# config
You will notice a config.json file in the root directory, this file stores the main config for the bot. You can find each option and what they are below:<br>
`prefix` -- This is the prefix for the bot as a string.<br>
`status` -- This is the status the bot appears with, your options for this are `online` (default), `dnd` (do not disturb), `idle`, and `invisible` (shows as offline).<br>
`statusmessage` -- This is the message that appears in the bot's custom status.<br>
`cooldown` -- This is the amount of time you must wait between commands. The time is in milliseconds and the default is 2000 (2 seconds).

# Developing the bot
Developing using this bot template is quite easy. You dont need to make any changes to the bot.js and it's all ready for you to just start adding command files in the [commands](https://github.com/GrantBGreat/discord.js-template-bot/tree/main/commands) folder. In addition to this, 3 basic example commands, including a help command are provided.

Full instructions on how to edit the commands and create new ones can be found [here](https://github.com/GrantBGreat/discord.js-template-bot/blob/main/commands/README.md).
