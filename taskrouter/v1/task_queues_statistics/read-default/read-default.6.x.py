# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

statistics = client.taskrouter \
                   .workspaces("WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX") \
                   .task_queues \
                   .statistics \
                   .list()

for record in statistics:
    print(record.account_sid)
