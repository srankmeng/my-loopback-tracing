CREATE TABLE officer (
  create_by text DEFAULT 'system'::text,
  created_date timestamp with time zone,
  updated_date timestamp with time zone,
  deleted boolean DEFAULT false,
  id text NOT NULL,
  display_name text,
  image_key text,
  firstname text,
  lastname text,
  tel text,
  role text,
  country_id integer,
  language_id integer,
  currency_id integer,
  last_active_date timestamp with time zone,
  email text,
  saleman_code text,
  is_active boolean DEFAULT true,
  is_select_all_coop boolean DEFAULT false
);


INSERT INTO officer (create_by,created_date,updated_date,deleted,id,display_name,image_key,firstname,lastname,tel,role,country_id,language_id,currency_id,last_active_date,email,saleman_code,is_active,is_select_all_coop) VALUES
	 ('system','2023-10-17 10:20:55.061+07','2023-10-17 10:20:55.717+07',false,'a72665bf-497c-4d50-abc8-a44dbdf92622','ทศพล',NULL,'ทศพล','สกุลทอง',NULL,NULL,1,1,1,NOW(),null,null,true,false),
   ('system','2023-10-17 10:20:55.061+07','2023-10-17 10:20:55.717+07',false,'cbd3875a-51e9-4acd-86ae-d4b96ae50954','จาตุรงค์',NULL,'จาตุรงค์','ดวงสุข',NULL,NULL,1,1,1,NOW(),null,null,true,false);
