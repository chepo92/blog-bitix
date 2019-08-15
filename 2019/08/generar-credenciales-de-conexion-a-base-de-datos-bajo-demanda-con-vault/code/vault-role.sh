$ vault write database/config/app \
   plugin_name=postgresql-database-plugin \
   allowed_roles="app" \
   connection_url="postgresql://{{username}}:{{password}}@localhost:5432/?sslmode=disable" \
   username="postgres" \
   password="postgres"
$ vault write database/roles/app \
    db_name=app \
    creation_statements="CREATE ROLE \"{{name}}\" WITH LOGIN PASSWORD '{{password}}' VALID UNTIL '{{expiration}}'; GRANT SELECT ON ALL TABLES IN SCHEMA public TO \"{{name}}\";" \
    default_ttl="1h" \
    max_ttl="24h"