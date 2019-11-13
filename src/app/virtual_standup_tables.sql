DROP TYPE meeting_progress CASCADE;
CREATE TYPE meeting_progress AS ENUM ('DONE', 'ON_GOING', 'INCOMING');

DROP TYPE role_member;
CREATE TYPE role_member AS ENUM ('FRONT_END', 'BACK_END', 'UX','QA','SCRUM_MASTER','AUTOMATION');

CREATE TABLE team(
   team_id uuid NOT NULL PRIMARY KEY,
   team_name CHARACTER VARYING UNIQUE NOT NULL,
   team_desc CHARACTER VARYING NOT NULL,
   team_image CHARACTER VARYING NOT NULL
);


CREATE TABLE meeting(
   meeting_id uuid NOT NULL PRIMARY KEY,
   team_id uuid NOT NULL REFERENCES team (team_id),
   meeting_subj CHARACTER VARYING NOT NULL,
   meeting_desc CHARACTER VARYING NOT NULL,
   meeting_status meeting_progress NOT NULL,
   meeting_start_date TIMESTAMP WITH TIME ZONE NOT NULL,
   meeting_end_date TIMESTAMP WITH TIME ZONE NOT NULL
);

CREATE TABLE users(
   users_id uuid NOT NULL PRIMARY KEY,
   username CHARACTER VARYING UNIQUE NOT NULL,
   password CHARACTER VARYING NOT NULL,
   name CHARACTER VARYING NOT NULL,
   email CHARACTER VARYING NOT NULL
);


CREATE TABLE standup(
   standup_id uuid NOT NULL PRIMARY KEY,
   meeting_id uuid NOT NULL REFERENCES meeting (meeting_id),
   users_id uuid NOT NULL REFERENCES users (users_id),
   yesterday CHARACTER VARYING NOT NULL,
   today CHARACTER VARYING NOT NULL,
   blockers CHARACTER VARYING NOT NULL
);


CREATE TABLE team_members(
   member_id uuid NOT NULL PRIMARY KEY,
   team_id uuid NOT NULL REFERENCES team (team_id),
   users_id uuid NOT NULL REFERENCES users (users_id),
   role role_member NOT NULL
);



INSERT INTO public.users(
	users_id, username, password, name, email)
	VALUES (uuid_generate_v4(),'test2', 'pass', 'Some Person', 'some.person@trustarc.com');

INSERT INTO public.users(
	users_id, username, password, name, email)
	VALUES (uuid_generate_v4(),'test3', 'pass', 'User Person', 'user.person@trustarc.com');


INSERT INTO public.users(
	users_id, username, password, name, email)
	VALUES (uuid_generate_v4(),'test4', 'pass', 'Third Person', 'third.person@trustarc.com');
	

INSERT INTO public.team(
	team_id, team_name, team_desc, team_image)
	VALUES (uuid_generate_v4(),"IRMV2", "Individual Rights Manager", "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi9h9_mxMXlAhXxDaYKHaabDC4QjRx6BAgBEAQ&url=https%3A%2F%2Fwww.trustarc.com%2Fblog%2F2017%2F06%2F06%2Ftruste-transforms-to-trustarc%2F&psig=AOvVaw0yMWKIAWLP9x90hrGaKmXW&ust=1572578286548566");

INSERT INTO public.team(
	team_id, team_name, team_desc, team_image)
	VALUES (uuid_generate_v4(),"AAA", "Triple A Suite", "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi9h9_mxMXlAhXxDaYKHaabDC4QjRx6BAgBEAQ&url=https%3A%2F%2Fwww.trustarc.com%2Fblog%2F2017%2F06%2F06%2Ftruste-transforms-to-trustarc%2F&psig=AOvVaw0yMWKIAWLP9x90hrGaKmXW&ust=1572578286548566");



INSERT INTO public.team_members(
	member_id, team_id, users_id, mem_role)
	VALUES (uuid_generate_v4(),(SELECT team_id from public.team WHERE team_name='IRMV2'), (SELECT users_id from public.users WHERE email='j.lee@trustarc.com'), 'FRONT_END');

INSERT INTO public.team_members(
	member_id, team_id, users_id, mem_role)
	VALUES (uuid_generate_v4(),(SELECT team_id from public.team WHERE team_name='IRMV2'), (SELECT users_id from public.users WHERE email='some.person@trustarc.com'), 'BACK_END');

INSERT INTO public.team_members(
	member_id, team_id, users_id, mem_role)
	VALUES (uuid_generate_v4(),(SELECT team_id from public.team WHERE team_name='AAA'), (SELECT users_id from public.users WHERE email='user.person@trustarc.com'), 'FRONT_END');

INSERT INTO public.team_members(
	member_id, team_id, users_id, mem_role)
	VALUES (uuid_generate_v4(),(SELECT team_id from public.team WHERE team_name='AAA') , (SELECT users_id from public.users WHERE email='j.lee@trustarc.com'), 'BACK_END');

UPDATE public.team_members
	SET mem_role= 'FRONT_END'
	WHERE member_id= '295ebe74-d70f-4cea-afab-aefce51b77eb';

UPDATE public.team_members
	SET mem_role= 'BACK_END'
	WHERE member_id= 'e91fdcb2-8637-4e42-b770-80f8d6e87581';

UPDATE public.team_members
	SET mem_role= 'FRONT_END'
	WHERE member_id= '64484551-6d35-444b-9a32-43562f8e38e4';

UPDATE public.team_members
	SET mem_role= 'BACK_END'
	WHERE member_id= '93a4acdd-376f-4b57-b042-17ed06848a4f';


INSERT INTO public.meeting(
	meeting_id, team_id, meeting_subj, meeting_desc, meeting_status, meeting_start_date, meeting_end_date)
	VALUES (uuid_generate_v4(), (SELECT team_id from public.team WHERE team_name='AAA'), 'Daily Stand-up', '2/28/2020 Meeting', 'ON_GOING', current_timestamp, current_timestamp + (360 * interval '1 minute'));


INSERT INTO public.meeting(
	meeting_id, team_id, meeting_subj, meeting_desc, meeting_status, meeting_start_date, meeting_end_date)
	VALUES (uuid_generate_v4(), (SELECT team_id from public.team WHERE team_name='AAA'), 'Daily Stand-up', '2/27/2020 Meeting', 'DONE', current_timestamp, current_timestamp + (360 * interval '1 minute'));

INSERT INTO public.meeting(
	meeting_id, team_id, meeting_subj, meeting_desc, meeting_status, meeting_start_date, meeting_end_date)
	VALUES (uuid_generate_v4(), (SELECT team_id from public.team WHERE team_name='AAA'), 'Daily Stand-up', '2/29/2020 Meeting', 'INCOMING', current_timestamp, current_timestamp + (360 * interval '1 minute'));

INSERT INTO public.meeting(
	meeting_id, team_id, meeting_subj, meeting_desc, meeting_status, meeting_start_date, meeting_end_date)
	VALUES (uuid_generate_v4(), (SELECT team_id from public.team WHERE team_name='IRMV2'), 'Daily Stand-up', '9/30/2019 ', 'DONE', current_timestamp -  (360 * interval '1 minute'), current_timestamp);

INSERT INTO public.meeting(
	meeting_id, team_id, meeting_subj, meeting_desc, meeting_status, meeting_start_date, meeting_end_date)
	VALUES (uuid_generate_v4(), (SELECT team_id from public.team WHERE team_name='IRMV2'), 'Daily Stand-up', '10/5/2019', 'INCOMING', current_timestamp, current_timestamp + (360 * interval '1 minute'));

INSERT INTO public.meeting(
	meeting_id, team_id, meeting_subj, meeting_desc, meeting_status, meeting_start_date, meeting_end_date)
	VALUES (uuid_generate_v4(), (SELECT team_id from public.team WHERE team_name='IRMV2'), 'Daily Stand-up', '9/31/2019', 'ON_GOING', current_timestamp, current_timestamp + (60 * interval '1 minute'));


UPDATE public.meeting
	SET meeting_status= 'ON_GOING'
	WHERE meeting_id= '7d98f1a8-f263-4ccb-8c66-972812ae925e' ;

UPDATE public.meeting
	SET meeting_status= 'DONE'
	WHERE meeting_id= 'c508a848-3cf9-4abe-a28b-42a37dec8f5a' ;

UPDATE public.meeting
	SET meeting_status= 'INCOMING'
	WHERE meeting_id= '315e59b4-2ee1-4544-9c5a-85f958d5d5f3';

UPDATE public.meeting
	SET meeting_status= 'DONE'
	WHERE meeting_id= 'ece366fd-c617-4ce1-84f7-743cb15c6d7c' ;

UPDATE public.meeting
	SET meeting_status= 'INCOMING'
	WHERE meeting_id= '1649d81a-c652-4da9-8270-24f814f5eae1' ;

UPDATE public.meeting
	SET meeting_status= 'ON_GOING'
	WHERE meeting_id= 'ebb51c69-fb6d-49b3-bc2b-e6b545dee201' ;




INSERT INTO public.standup(
	standup_id, meeting_id, users_id, yesterday, today, blockers)
	VALUES (uuid_generate_v4(), 
   (SELECT meeting_id from public.meeting WHERE team_id=(SELECT team_id from public.team WHERE team_name= 'IRMV2') AND meeting_status='DONE'),
   (SELECT users_id from public.users WHERE email='j.lee@trustarc.com'),'yesterday taskss', 'todays taskss', 'myblockers');

INSERT INTO public.standup(
	standup_id, meeting_id, users_id, yesterday, today, blockers)
	VALUES (uuid_generate_v4(), 
   (SELECT meeting_id from public.meeting WHERE team_id=(SELECT team_id from public.team WHERE team_name= 'IRMV2') AND meeting_status='DONE'),
   (SELECT users_id from public.users WHERE email='some.person@trustarc.com'),'yesterday taskss', 'todayy taskss', 'my blockers');

INSERT INTO public.standup(
	standup_id, meeting_id, users_id, yesterday, today, blockers)
	VALUES (uuid_generate_v4(), 
   (SELECT meeting_id from public.meeting WHERE team_id=(SELECT team_id from public.team WHERE team_name= 'AAA') AND meeting_status='DONE'),
   (SELECT users_id from public.users WHERE email='user.person@trustarc.com'),'yesterday taskss', 'today taskss', 'mys blockers');

INSERT INTO public.standup(
	standup_id, meeting_id, users_id, yesterday, today, blockers)
	VALUES (uuid_generate_v4(), 
   (SELECT meeting_id from public.meeting WHERE team_id=(SELECT team_id from public.team WHERE team_name= 'AAA') AND meeting_status='DONE'),
   (SELECT users_id from public.users WHERE email='j.lee@trustarc.com'),'yesterday e', 'today taskssw', 'my  sblockers');


   