# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

message_interaction = client.proxy \
    .services('KSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
    .sessions('KCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
    .participants('KPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
    .message_interactions \
    .create(body='Reply to this message to chat!')

print(message_interaction.sid)
