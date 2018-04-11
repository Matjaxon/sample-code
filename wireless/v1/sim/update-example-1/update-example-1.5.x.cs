// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Converters;
using Twilio.Rest.Wireless.V1;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var sim = SimResource.Update(
            callbackMethod: Twilio.Http.HttpMethod.Post,
            callbackUrl: new Uri("https://sim-manager.mycompany.com/sim-update-callback/AliceSmithSmartMeter"),
            pathSid: "DEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
            status: SimResource.StatusEnum.Active
        );

        Console.WriteLine(sim.Sid);
    }
}
