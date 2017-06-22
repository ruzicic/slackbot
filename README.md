# Slackbot

## Installation
Clone git repo:

`git clone git@github.com:cedevita/slackbot.git`

Install dependencies using yarn or npm

`yarn` or `npm install`


## Run the Bot
Get a Bot token from Slack:
> http://my.slack.com/services/new/bot

Add your Slack API token in config.js!

Run your bot from the command line:

`yarn start` or `npm start`

For development only, you can use `yarn start:dev` or `npm start:dev`. 

[nodemon](https://github.com/remy/nodemon) will be used for monitoring for code changes and automatic app restart.

## See it in action
Add bot to your Slack channel and type 'Hello'.


The bot is written with [botkit](http://howdy.ai/botkit).