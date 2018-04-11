// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.sip.ipAccessControlLists('ALXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
      .update({
         sid: 'ALXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
         friendlyName: 'friendlyName'
       })
      .then(ip_access_control_list => console.log(ip_access_control_list.sid))
      .done();
