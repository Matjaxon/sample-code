// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.conferences('CFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
      .participants('CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
      .fetch({
         callSid: 'CA386025c9bf5d6052a1d1ea42b4d16662',
         conferenceSid: 'CFbbe4632a3c49700934481addd5ce1659'
       })
      .then(participant => console.log(participant.accountSid))
      .done();
