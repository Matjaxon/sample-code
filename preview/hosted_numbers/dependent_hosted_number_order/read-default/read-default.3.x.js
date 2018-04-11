// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.preview.hosted_numbers
  .authorizationDocuments('PXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
  .dependentHostedNumberOrders
  .each({
     signingDocumentSid: 'PXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
   },
       dependentHostedNumberOrders => console.log(dependentHostedNumberOrders.sid)
   );
