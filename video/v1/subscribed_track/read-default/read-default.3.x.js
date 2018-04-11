// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.video.rooms('RMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
            .participants('PAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
            .subscribedTracks
            .each({
               roomSid: 'RMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
               subscriberSid: 'PAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
             },
                 subscribedTracks => console.log(subscribedTracks.sid)
             );
