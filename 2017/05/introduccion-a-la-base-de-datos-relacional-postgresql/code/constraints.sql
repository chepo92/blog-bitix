companies=#

CREATE TABLE company (
   ID             BIGSERIAL PRIMARY KEY NOT NULL,
   NAME           VARCHAR(50) UNIQUE NOT NULL,
   FOUNDATION     DATE NOT NULL,
   ADDRESS        TEXT,
   EMPLOYEES      INTEGER CONSTRAINT employees_positive CHECK (EMPLOYEES > 0)
);

INSERT INTO company (name, foundation, address, employees) VALUES
('Dummy', '1970-01-01', 'Unknow', -10);
ERROR:  new row for relation "company" violates check constraint "employees_positive"
DETAIL:  Failing row contains (1, Dummy, 1970-01-01, Unknow, -10).