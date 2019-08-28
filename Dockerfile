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
RUN apt-get install   mysql-common

RUN apt-get update
RUN apt-cache search mysql | grep mysql | more
RUN apt-get install -y  default-mysql-server mysql-common default-mysql-client
RUN cat /etc/mysql/my.cnf
RUN  /etc/init.d/mysql start
#RUN mysql -u root -h 127.0.0.1  -P 3306 --password=""  -e "CREATE USER 'jobseek'@'localhost' IDENTIFIED BY 'jobseek'; ";
#RUN mysql -u jobseek --password="jobseek" -e "CREATE DATABASE jobseek; GRANT ALL PRIVILEGES ON *.* TO 'jobseek'@'localhost' IDENTIFIED BY 'jobseek'";
#RUN mysql -u jobseek --password="jobseek" -e "USE jobseek;";
#RUN mysql -u jobseek ---password="jobseek" -D lba < dump.sql;

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

CMD ["node", "index"]



