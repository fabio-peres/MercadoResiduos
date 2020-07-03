FROM node:12.14.0
RUN npm install -g pm2@3.5.0
RUN echo "America/Sao_Paulo" > /etc/timezone && \
        dpkg-reconfigure -f noninteractive tzdata
RUN apt-get update \
    && apt-get --only-upgrade install tzdata
