var webPush = require('web-push')

const vapidKeys = {
	"publicKey": "BFAcQep2CXaFlTVPbSgfqy6LQyUGeppS1xf6cyTeWUaqOFURaFO2ZQdlXaYVT1M1_D9dxxnMenpiDbVAO66NEdA",
	"privateKey": "ivwapgJHiEDzJDuX0dnPfUCn-eC7kMaSOlk60_uMZy0"
}

webPush.setVapidDetails(
	'mailto:rafi.rizkiriadi@gmail.com',
	vapidKeys.publicKey,
	vapidKeys.privateKey)

var pushSubscription = 
{
	"endpoint": "https://fcm.googleapis.com/fcm/send/eHspea2XxAo:APA91bFNU8qPXMdcrRtSkW2bClN7wKs8iXzdqn2ufoaffM6sTSPbpxmqU9Nj7XBS0loRAP5I3AaZBMwazDGSrHsqKqFqqFGy8cBDZJbgw9wR_ScYm5zFhZFWG5zJKryLVuz6s7LBq3F7",
	"keys": {
		"p256dh": "BBF2gz0gZYOXLCobq5nq8DfF8oV/J712n/I5hhQ58dWDISGm4h++vwK7PBFJFkGV4Nkf647EYywbDGFPgIyWvyQ=",
		"auth": "+cbM09yZGVYzImQ3coW4iQ=="
	}
}

var payload = "Push Notification Enabled"
var options = 
{
	gcmAPIKey: '684755142524',
	TTL: 60
}

webPush.sendNotification(
   pushSubscription,
   payload,
   options
);