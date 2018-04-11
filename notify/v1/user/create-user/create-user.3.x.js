// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.notify.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
             .users
             .create({
                identity: 'User0001',
                segment: 'premium',
                serviceSid: 'ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
              })
             .then(user => console.log(user.sid))
             .done();
