CREATE TABLE "Users" (
	"user_id" serial NOT NULL,
	"username" varchar(80) UNIQUE NOT NULL,
	"password" varchar(80) NOT NULL,
	"user_pfp" bytea,
	"user_bio" text,
	"user_bday" date,
	"user_posts" int[],
	"user_mscore" int ,
	"user_followers" int[],
	"user_following" int[],
	CONSTRAINT "User_pk" PRIMARY KEY ("user_id")
);



CREATE TABLE "Post" (
	"post_id" serial NOT NULL,
	"post_desc" TEXT,
	"post_comments" TEXT,
	"post_date" DATE,
	"post_time" TIME,
	"post_likes" int,
	"post_shares" int,
	"vid_id" int,
	"img_id" int,
	CONSTRAINT "Post_pk" PRIMARY KEY ("post_id")
);



CREATE TABLE "Videos" (
	"vid_id" serial NOT NULL,
	"vid_data" bytea,
	"vid_udate" DATE,
	CONSTRAINT "Videos_pk" PRIMARY KEY ("vid_id")
);



CREATE TABLE "Images" (
	"img_id" serial NOT NULL,
	"img_data" bytea,
	"img_udate" DATE,
	CONSTRAINT "Images_pk" PRIMARY KEY ("img_id")
);




ALTER TABLE "Post" ADD CONSTRAINT "Post_fk0" FOREIGN KEY ("vid_id") REFERENCES "Videos"("vid_id");
ALTER TABLE "Post" ADD CONSTRAINT "Post_fk1" FOREIGN KEY ("img_id") REFERENCES "Images"("img_id");