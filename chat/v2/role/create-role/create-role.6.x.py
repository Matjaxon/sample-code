# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

role = client.chat.services("ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX") \
                  .roles \
                  .create(
                       friendly_name="new_role",
                       permission="createChannel",
                       type="deployment"
                   )

print(role.sid)
