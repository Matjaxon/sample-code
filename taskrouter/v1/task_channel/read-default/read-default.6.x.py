# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

task_channels = client.taskrouter \
                      .workspaces("WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX") \
                      .task_channels \
                      .list()

for record in task_channels:
    print(record.sid)
