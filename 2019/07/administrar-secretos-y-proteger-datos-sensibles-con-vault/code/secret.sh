$ export VAULT_ADDR='http://127.0.0.1:8200'
$ vault kv put secret/key key=s3cr3t
Key              Value
---              -----
created_time     2019-07-27T17:30:29.559274833Z
deletion_time    n/a
destroyed        false
version          1
$ vault kv get secret/key
====== Metadata ======
Key              Value
---              -----
created_time     2019-07-27T17:30:29.559274833Z
deletion_time    n/a
destroyed        false
version          1

=== Data ===
Key    Value
---    -----
key    s3cr3t