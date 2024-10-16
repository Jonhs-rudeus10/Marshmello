module.exports = {
	config: {
			name: "😒",
			version: "1.0",
			author: "Ariel Ackerman",
			countDown: 5,
			role: 0,
			shortDescription: "sarcasm",
			longDescription: "sarcasm",
			category: "reply",
	},
onStart: async function(){}, 
onChat: async function({
	event,
	message,
	getLang
}) {
	if (event.body && event.body.toLowerCase() == "t'es qui au fait 😶") return message.reply("🧎🏽‍♂️");
}
};
