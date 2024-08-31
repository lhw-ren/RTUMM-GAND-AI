module.exports = {
    config: {
        name: "help",
        role: 0,
        author: "Micazhla",
        longDescription: "See bot's list of commands",
        guide: "{pn}"
    },
    onStart: async function ({ message }) {
        message.reply("LIST OF BOT'S COMMANDS\n—————————\n#help <command name>\n#math <calculate>\n#ai <query>\n#quiz <subject>\n—————————\ntype #help <command name> to see description and usage of commands.");
    }
};
