select full_name, type, name, merchant_name
from users
join merchants on merchants.admin_id = users.id
join countries on merchants.country_id = countries.id
join merchant_types on merchants.merchant_type_id = merchant_types.id
order by merchant_name ASC;
