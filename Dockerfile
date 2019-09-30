FROM alpine:latest

RUN apk add --no-cache nodejs

ADD entrypoint.sh .
ADD src src

ENTRYPOINT ["sh", "entrypoint.sh"]
