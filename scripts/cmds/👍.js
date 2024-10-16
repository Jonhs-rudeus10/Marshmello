module.exports = {
	config: {
			name: "👍",
			version: "1.0",
			author: "Jaychris Garcia",
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
	if (event.body && event.body.toLowerCase() == "👍") return message.reply("my name is ariel Ackerman ou tu peux m'appeler vortex blade 😶 ");
}
};
