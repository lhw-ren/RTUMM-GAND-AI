module.exports = {
    config: {
        name: "help",
        role: 0,
        author: "Micazhla",
        longDescription: "See bot's list of commands",
        guide: "{pn}"
    },
    onStart: async function ({ message }) {
        message.reply("I'm RTUMM-GAND AI,\nyour new AI buddy by Math Major.\nJust type my prefix (#) to ask me anything.\n🎀———————————🎀\nLIST OF BOT'S COMMANDS\n🎀—————————————🎀\n#help [command name]\n#math [calculate]\n#calculate [provide an expression to calculate]\n#ai [query]\n#gpt, gpt2, gpt3 [gpt]\n#dictionary [lookup at dictionary]\n#define [define it]\n#quiz [subject]\n#guessnumber [number game]\n#google [query]\n#imgsearch [search image]\n🎀—————————🎀\ntype #help [command name] to see description and usage of commands.");
    }
};
