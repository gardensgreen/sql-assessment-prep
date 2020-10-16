CREATE TABLE merchants
(id serial not null primary key,
merchant_name varchar(255) not null,
country_id integer not null references countries(id),
created_at timestamp not null,
admin_id integer not null references users(id),
merchant_type_id integer not null references merchant_types(id));
