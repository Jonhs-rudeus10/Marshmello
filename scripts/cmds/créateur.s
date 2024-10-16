module.exports = {
	config: {
			name: "Qui es ton créateur",
			version: "1.0",
			author: rudeus Ariel,
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
	if (event.body && event.body.toLowerCase() == "qui es ton créateur") return message.reply("rudeus ariel le seul et l'unique 😁");
}
};
