const { schedule } = require('@netlify/functions');
const twilio = require('twilio');
require('dotenv').config();

const accountSid = process.env.accountSid; // Your Account SID from www.twilio.com/console
const authToken = process.env.authToken; // Your Auth Token from www.twilio.com/console

const client = new twilio(accountSid, authToken);

function handler(event, context) {
  return client.messages.create({
    body: 'Are you in for ball tonight? Type "1" for yes, or "2" for no.',
    to: process.env.toPhone,
    from: process.env.fromPhone, // From a valid Twilio number
  });
}

module.exports.handler = schedule('* * * * *', handler);
