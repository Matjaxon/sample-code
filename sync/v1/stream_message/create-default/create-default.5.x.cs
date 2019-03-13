// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using System.Collections.Generic;
using Twilio;
using Twilio.Rest.Sync.V1.Service.SyncStream;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        // DANGER! This is insecure. See http://twil.io/secure
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var streamMessage = StreamMessageResource.Create(
            data: new Dictionary<string, Object>(),
            pathServiceSid: "ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            pathStreamSid: "TOXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
        );

        Console.WriteLine(streamMessage.Sid);
    }
}
