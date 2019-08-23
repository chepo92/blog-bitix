$ vault write auth/approle/login role_id=a248529d-882c-ef5f-f7e6-6a9d349afa57 secret_id=13b6c224-dc18-0404-7bc1-7c258c4c5a48
Key                     Value
---                     -----
token                   s.yAKbv8Qz5tfXpc8n7C8oND01
token_accessor          GPHO70D2NFRHFFdsiNiftmzO
token_duration          20m
token_renewable         true
token_policies          ["database-app" "default"]
identity_policies       []
policies                ["database-app" "default"]
token_meta_role_name    app