// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Rest.Video.V1;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        // DANGER! This is insecure. See http://twil.io/secure
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var compositionSettings = CompositionSettingsResource.Create(
            awsS3Url: new Uri("AwsS3Url=https://my-bucket.s3.amazonaws.com/recordings"),
            awsStorageEnabled: true,
            awsCredentialsSid: "CRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            encryptionEnabled: true,
            encryptionKeySid: "CRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            friendlyName: "Upload encrypted"
        );

        Console.WriteLine(compositionSettings.FriendlyName);
    }
}
