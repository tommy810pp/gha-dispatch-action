FROM alpine:latest

RUN apk add --no-cache nodejs npm

ADD src src
RUN cd src && npm i
ADD entrypoint.sh .

ENTRYPOINT ["sh", "entrypoint.sh"]
