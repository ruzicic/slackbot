const Botkit = require('botkit');

const SLACK_TOKEN = require('./config.js').slackToken;

const controller = Botkit.slackbot({
    debug: false
});

controller.spawn({
    token: SLACK_TOKEN
}).startRTM((err, bot, payload) => {
    if (err) {
        throw new Error(err);
    }

    console.log('Connected to Slack RTM');
});

const TRIGGERS = [
    {
        trigger: 'Hello',
        reaction: (name) => `Hello, ${name}! How are you today?`,
        scope: ['ambient']
    },
    {
        trigger: 'github', // regex
        reaction: (name) => `Hey guys, ${name} did something on github..`,
        scope: ['ambient']
    }
]

TRIGGERS.forEach(action => {
    controller.hears(action.trigger, action.scope,
        (bot, message) => {
            bot.api.users.info({ user: message.user }, (err, response) => {
                if (err) {
                    throw new Error(err);
                }

                let { name, real_name } = response.user;
                bot.reply(message, action.reaction(real_name));
            });
        });
});
