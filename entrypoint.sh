RUN mysql -u root -h localhost  -P 3306 --password=""  -e "CREATE USER 'jobseek'@'localhost' IDENTIFIED BY 'jobseek'; ";
RUN mysql -u jobseek --password="jobseek" -e "CREATE DATABASE jobseek; GRANT ALL PRIVILEGES ON *.* TO 'jobseek'@'localhost' IDENTIFIED BY 'jobseek'";
RUN mysql -u jobseek --password="jobseek" -e "USE jobseek;";
RUN mysql -u jobseek ---password="jobseek" -D lba < dump.sql;