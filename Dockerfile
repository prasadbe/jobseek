FROM php:7.2-apache
MAINTAINER KRDS Team <development@krds.com>

ENV APP_PORT=8000 APP_DIR=/var/www/html 
ARG APP_ENV=production
ENV APP_ENV=${APP_ENV}
ENV APP_ROOT=$APP_DIR/public
ENV GENERATE_MANIFEST=true
ENV UNITY_URL=https://unity.krds.com
ENV UNITY_TOKEN=Uty99iAowuaWGu7hxsS1RjOx4nk6vkemZ4hKCG00
RUN apt-get update
RUN apt-cache search mysql | grep mysql | more
RUN apt-get update
RUN apt-cache search mysql | grep mysql | more
RUN apt-get install -y  default-mysql-server mysql-common default-mysql-client

RUN cat /etc/mysql/my.cnf
RUN  /etc/init.d/mysql start
RUN sleep 5;
RUN ls -l /var/run/ | grep mysqld


# Install NodeJS
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get install -y nodejs 
RUN apt-get update
COPY ./ /var/www/html/
RUN npm cache clean --force
RUN npm install 
RUN npm install webpack -g
RUN webpack -p 
EXPOSE 3000
RUN chmod +x /var/www/html/entrypoint.sh
ENTRYPOINT ["/var/www/html/entrypoint.sh"]
CMD ["node", "index"]



