Invoke-Expression -Command (aws ecr get-login --no-include-email --region us-west-1)
docker build -t presence-bot/presence-bot-web-app .
docker tag presence-bot/presence-bot-web-app:latest 879970359011.dkr.ecr.us-west-1.amazonaws.com/presence-bot/presence-bot-web-app:latest
docker push 879970359011.dkr.ecr.us-west-1.amazonaws.com/presence-bot/presence-bot-web-app:latest