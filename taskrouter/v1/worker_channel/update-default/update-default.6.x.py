# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

worker_channel = client.taskrouter \
                       .workspaces("WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX") \
                       .workers("WKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX") \
                       .worker_channels("WCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX") \
                       .update(capacity=1)

print(worker_channel.account_sid)
