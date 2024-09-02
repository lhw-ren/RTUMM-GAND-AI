module.exports = {
    config: {
        name: "owner",
        role: 0,
        author: "Micazhla",
        aliases: ["own", "master"],
        longDescription: "See owner name and link"
    },
    onStart: async function ({ message, api, event }) {
        const msg = "Name: Daryl\nAge: 20\nHobby: Watching Series\nStatus: Single\nLink: https://www.facebook.com/daryl.abarracoso\nIgLink:https://www.instagram.com/hhjryl?igsh=MWRodDE2b3I5OWtjdg==";
        
        message.reply(msg);
    }
};
