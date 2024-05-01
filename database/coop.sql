CREATE TABLE coop (
create_by text DEFAULT 'system'::text,
  created_date timestamp with time zone,
  updated_date timestamp with time zone,
  deleted boolean DEFAULT false,
  id integer NOT NULL,
  name text,
  requester text DEFAULT 'USER_CPP01'::text,
  approver text DEFAULT 'USER_CPP02'::text,
  coop_code text,
  cc_email text,
  cv_flag text,
  pur_org text,
  warehouse text,
  sub_warehouse text,
  spc_price text,
  sale_org text,
  sale_warehouse text,
  sale_sub_warehouse text,
  saleman text,
  area_code text,
  sale_spc_price text,
  credit_term integer,
  credit_authority text,
  phone_number text,
  company_id integer
);

INSERT INTO coop (create_by,created_date,updated_date,deleted,id,name,requester,approver,coop_code,cc_email,cv_flag,pur_org,warehouse,sub_warehouse,spc_price,sale_org,sale_warehouse,sale_sub_warehouse,saleman,area_code,sale_spc_price,credit_term,credit_authority,phone_number,company_id) VALUES
	 ('system','2023-12-27 12:24:55.061+07','2023-12-27 12:24:55.717+07',false,6,'coop name','USER_CPP01','USER_CPP02','coop code',NULL,NULL,NULL,'warehouse','sub_warehouse',NULL,NULL,NULL,NULL,NULL,NULL,NULL,100,NULL,NULL,28);


