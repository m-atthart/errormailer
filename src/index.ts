import { env } from "./env";

/**
 * A function that takes in a single recipient or an array of recipients
 *  and sends an email to each of them with the optional message
 *
 * @param {string | string[]}     recipients - A single recipient or array of recipients
 * @param {string}                [message]  - An optional message to send to the recipients
 *
 */
function sendEmail(recipients: string | string[], message?: string) {
	if (message) console.log("Message is ", message);
	if (!Array.isArray(recipients)) recipients = [recipients];
	recipients.forEach((recipient) =>
		console.log("Sending email to ", recipient)
	);
	return;
}

export default sendEmail;
