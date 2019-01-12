companies=#

CREATE TYPE company_type AS ENUM ('startup', 'pyme', 'multinational');

CREATE TABLE company (
   ID             BIGSERIAL PRIMARY KEY NOT NULL,
   NAME           VARCHAR(50) UNIQUE NOT NULL,
   TYPE           COMPANY_TYPE NOT NULL,
   FOUNDATION     DATE NOT NULL,
   ADDRESS        TEXT,
   EMPLOYEES      INTEGER CONSTRAINT employees_positive CHECK (EMPLOYEES > 0)
);