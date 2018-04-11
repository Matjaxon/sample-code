// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Converters;
using Twilio.Rest.Api.V2010.Account;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var calls = CallResource.Read(
            startTimeAfter: new DateTime(2009, 7, 6, 0, 0, 0),
            status: CallResource.StatusEnum.Completed
        );

        foreach(var record in calls)
        {
           Console.WriteLine(record.Sid);
        }
    }
}
