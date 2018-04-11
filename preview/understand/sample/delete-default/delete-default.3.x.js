// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.preview.understand.services('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                         .intents('UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                         .samples('UFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                         .remove({
                            serviceSid: 'UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
                            intentSid: 'UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
                            sid: 'UFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
                          })
                         .then(sample => console.log(sample.sid))
                         .done();
