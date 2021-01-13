CREATE EXTENSION IF NOT EXISTS citext WITH SCHEMA public;
COMMENT ON EXTENSION citext IS 'data type for case-insensitive character strings';

CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA public;
COMMENT ON EXTENSION pgcrypto IS 'cryptographic functions';

--CREATE FUNCTION "public"."assert_valid_password"(new_password text) RETURNS void
--    LANGUAGE plpgsql AS $$
--begin
--  -- TODO: add better assertions!
--  if length(new_password) < 8 then
--    raise exception 'Password is too weak' using errcode = 'WEAKP';
--  end if;
--end;
--$$;

CREATE TABLE "public"."users" (
  "id" uuid NOT NULL UNIQUE DEFAULT gen_random_uuid(),
  "name" varchar,
  "email" varchar UNIQUE NOT NULL,
  "email_verified" timestamptz,
  "password" varchar NOT NULL,
  "image" varchar,
  "created_at" timestamptz NOT NULL DEFAULT now(),
  "updated_at" timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY ("id"),
  UNIQUE ("id")
);

COMMENT ON TABLE "public"."users" IS 'A user who can log in to the application.';

CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER "set_public_users_updated_at"
BEFORE UPDATE ON "public"."users"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();

COMMENT ON TRIGGER "set_public_users_updated_at" ON "public"."users"
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
