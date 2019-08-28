#!/bin/sh
set -e
/etc/init.d/mysql start
mysql -u root -h localhost  -P 3306 --password=""  -e "CREATE USER 'jobseek'@'localhost' IDENTIFIED BY 'jobseek'; "
mysql -u root -h localhost  -P 3306 --password=""  -e "CREATE DATABASE jobseek; GRANT ALL PRIVILEGES ON *.* TO 'jobseek'@'localhost' IDENTIFIED BY 'jobseek'"
mysql -u jobseek -h localhost -P 3306 --password="jobseek" -e "USE jobseek;"
mysql -u jobseek -h localhost -P 3306 --password="jobseek" -D lba < /var/www/html/dump.sql
exec "$@"