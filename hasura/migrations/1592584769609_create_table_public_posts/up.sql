CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."posts"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "title" text NOT NULL, "content" text NOT NULL, "user_id" text NOT NULL, "sanitize" boolean NOT NULL DEFAULT false, "created_at" date NOT NULL DEFAULT now(), "cover_img" text, PRIMARY KEY ("id") , UNIQUE ("id"));
