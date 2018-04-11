// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.sync.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
           .documents('ETXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
           .update({
              data: {
                date_updated: "2018-02-14 12:24:33.889341",
                movie_title: "On The Line",
                show_times: "None",
                starring: "['Lance Bass', 'Joey Fatone']",
                genre: "Romance"
            },
              serviceSid: 'ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
              sid: 'MyFirstDocument'
            })
           .then(document => console.log(document.sid))
           .done();
