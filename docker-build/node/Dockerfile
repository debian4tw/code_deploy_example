FROM node:alpine

VOLUME ["/app"]
ADD start /start
RUN chmod 755 /start
CMD ["/start"]

EXPOSE 8080
