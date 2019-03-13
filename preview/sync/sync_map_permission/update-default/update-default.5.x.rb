# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

sync_map_permission = @client.preview
                             .sync
                             .services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                             .sync_maps('MPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                             .sync_map_permissions('identity')
                             .update(read: true, write: true, manage: true)

puts sync_map_permission.service_sid
