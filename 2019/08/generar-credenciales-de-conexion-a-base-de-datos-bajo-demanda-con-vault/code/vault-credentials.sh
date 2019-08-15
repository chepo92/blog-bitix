$ vault read database/roles/app
Key                      Value
---                      -----
creation_statements      [CREATE ROLE "{{name}}" WITH LOGIN PASSWORD '{{password}}' VALID UNTIL '{{expiration}}'; GRANT SELECT ON ALL TABLES IN SCHEMA public TO "{{name}}";]
db_name                  app
default_ttl              1h
max_ttl                  24h
renew_statements         []
revocation_statements    []
rollback_statements      []
$ vault read database/creds/app
Key                Value
---                -----
lease_id           database/creds/app/rFFlNmpNoxezccTVh3WufZOT
lease_duration     1h
lease_renewable    true
password           A1a-6hRTGNaShFIEGLvp
username           v-root-app-ydbbHqVq1gYQqsUxMuIc-1565857370