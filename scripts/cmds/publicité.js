module.exports = {
	config: {
			name: "contact",
			version: "1.0",
			author: "rudeus Ackerman",
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
	if (event.body && event.body.toLowerCase() == "contact") return message.reply("Salut! je m'appelle Ariel Ackerman alias jonhs Rudeus smith pour me contacter retrouve moi sur ma page https://www.facebook.com/profile.php?id=61566968672831 je vous attends 😁 ");
}
};
