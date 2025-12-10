# stage_project_cohort

A site which finds the best intake cohort for an 
interested student, based on input information by an admission counselor.
The result will be displayed to the counselor, who can then inform the student on which the 
details of the program cohort which best suits his needs.

## Installation

Install all dependencies listed in package.json files

```bash
cd server
npm install
```
```bash
cd ..
cd client
npm install
```
```bash
cd ..
npm install
npm start
```

## User Info

Find admin and counselor info in sever/.env

# Front End

## Home page

<img width="1896" height="851" alt="Screenshot 2025-12-10 113410" src="https://github.com/user-attachments/assets/415193e8-5273-42d4-83b0-e19a946c17d2" />

The admin and counselors can search for cohorts based on the students needs.

## Add user and Upload pages

<img width="1896" height="852" alt="Screenshot 2025-12-10 113448" src="https://github.com/user-attachments/assets/532e7dd0-b58c-44c1-99ad-47ad10ba76b2" />
<img width="1897" height="850" alt="Screenshot 2025-12-10 113432" src="https://github.com/user-attachments/assets/68e32537-7143-4ec5-a55d-bdb8639edce3" />

The admin can add new counselors and upload new cohorts to the site

# Back End

Handles user login/logout and login status.<br>
Stores new users and cohorts in the database.
Retrieves cohort details from database.

