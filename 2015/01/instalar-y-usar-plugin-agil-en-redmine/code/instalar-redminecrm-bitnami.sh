$ sudo loadkeys es
$ cd /opt/bitnami/apps/redmine/htdocs/plugins
$ wget http://redminecrm.com/license_manager/15337/redmine_agile-1_3_5-light.zip
$ unzip redmine_agile-1_3_5-light.zip
$ cd /opt/bitnami/apps/redmine/htdocs/
$ bundle install --without development test
$ bundle exec rake redmine:plugins NAME=redmine_agile RAILS_ENV=production
$ cd /opt/bitnami/
$ sudo ctlscript.sh restart apache