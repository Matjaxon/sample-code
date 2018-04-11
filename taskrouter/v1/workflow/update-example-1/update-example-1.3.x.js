// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.taskrouter.workspaces('WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                 .workflows('WWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                 .update({
                    sid: 'WWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
                    taskReservationTimeout: 20,
                    workspaceSid: 'WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
                  })
                 .then(workflow => console.log(workflow.accountSid))
                 .done();
