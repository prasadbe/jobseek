FROM php:7.2-apache
MAINTAINER KRDS Team <development@krds.com>

ENV APP_PORT=8000 APP_DIR=/var/www/html 
ARG APP_ENV=production
ENV APP_ENV=${APP_ENV}
ENV APP_ROOT=$APP_DIR/public
ENV GENERATE_MANIFEST=true
ENV UNITY_URL=https://unity.krds.com
ENV UNITY_TOKEN=Uty99iAowuaWGu7hxsS1RjOx4nk6vkemZ4hKCG00


# Install NodeJS
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get install -y nodejs 
RUN apt-get update
COPY ./ /var/www/html/
RUN npm cache clean --force
RUN npm install 

RUN webpack -p 
EXPOSE 9000

CMD ["node", "index"]



