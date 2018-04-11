// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.recordings('REXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
      .addOnResults('XRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
      .fetch({
         referenceSid: 'REXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
         sid: 'XRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
       })
      .then(add_on_result => console.log(add_on_result.sid))
      .done();
