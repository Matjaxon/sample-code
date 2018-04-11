// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.preview.understand.services('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                         .intents
                         .create({
                            serviceSid: 'UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
                            uniqueName: 'uniqueName'
                          })
                         .then(intent => console.log(intent.sid))
                         .done();
