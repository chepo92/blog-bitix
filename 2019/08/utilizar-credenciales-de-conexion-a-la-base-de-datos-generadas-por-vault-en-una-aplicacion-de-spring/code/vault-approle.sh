$ vault auth enable approle
$ vault write auth/approle/role/app \
    secret_id_ttl=10m \
    token_num_uses=10 \
    token_ttl=20m \
    token_max_ttl=30m \
    secret_id_num_uses=40 \
    policies=database-app
$ vault read auth/approle/role/app/role-id
Key        Value
---        -----
role_id    a248529d-882c-ef5f-f7e6-6a9d349afa57
$ vault write -f auth/approle/role/app/secret-id
Key                   Value
---                   -----
secret_id             13b6c224-dc18-0404-7bc1-7c258c4c5a48
secret_id_accessor    fd9a0915-af6e-b0a8-4e6c-dbb6ee587903