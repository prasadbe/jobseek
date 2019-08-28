#!/bin/sh
set -e
mysql -u root -h localhost  -P 3306 --password=""  -e "CREATE USER 'jobseek'@'localhost' IDENTIFIED BY 'jobseek'; "
mysql -u jobseek --password="jobseek" -e "CREATE DATABASE jobseek; GRANT ALL PRIVILEGES ON *.* TO 'jobseek'@'localhost' IDENTIFIED BY 'jobseek'"
mysql -u jobseek --password="jobseek" -e "USE jobseek;"
mysql -u jobseek ---password="jobseek" -D lba < /var/www/html/dump.sql
exec "$@"