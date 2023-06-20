# User Management System

To run the project 

create .env file and include 

PORT=3000
MONGODB_URI='mongodb+srv://adhikaribikash821:kkYwqjw26Y8SBY9f@cluster0.r3yzzfx.mongodb.net/ums'
SECRET_KEY='paradise"

 Next follow the steps:

# step1: npm install

# step2: npm start

# --------------------------------------------------------------------------------------------------- #

Open postman to test the api's

 Postman Documentation url: https://documenter.getpostman.com/view/16111145/2s93sjWA9y

Note: 

1. Super Admin can register themselves.

2. Super Admin and Admin can login to get the token in the response to authorize themselves.

3. Super Admin can change role and status of a user.

4. Admin can change the status of the user but cannnot change the role of the user.

5. User can login and check out their status.

# --------------------------------------------------------------------------------------------------- #
Register
![Screenshot from 2023-06-20 13-39-26](https://github.com/Bikash01293/User-Management-System/assets/48493235/2242f27a-1aab-47d6-80b4-3e838f343187)

Login
![Screenshot from 2023-06-20 13-40-04](https://github.com/Bikash01293/User-Management-System/assets/48493235/c6dda980-bbe8-4587-a7b5-58b3dade0ac9)

Create User - Super Admin can create Admin or User.
![Screenshot from 2023-06-20 13-42-05](https://github.com/Bikash01293/User-Management-System/assets/48493235/ff6274e1-3678-451c-8106-3b8cf79f01a5)


![Screenshot from 2023-06-20 13-43-12](https://github.com/Bikash01293/User-Management-System/assets/48493235/1a3663fc-5c9b-4d0e-acff-52b15651d535)

Get-All-User
![Screenshot from 2023-06-20 13-43-35](https://github.com/Bikash01293/User-Management-System/assets/48493235/8bb00cfa-ad82-4831-aa4c-7d033ec32331)

Get-User-By-Id
![Screenshot from 2023-06-20 13-44-43](https://github.com/Bikash01293/User-Management-System/assets/48493235/b45dd192-8b44-486e-a10f-3ad5fd5bb7bf)

Change-Role

1. When the Admin is trying to change role but the authorization fails!
![Screenshot from 2023-06-20 13-47-04](https://github.com/Bikash01293/User-Management-System/assets/48493235/0eee5e4a-f18b-40d6-ad40-3911eed982fc)

2. When the Super Admin changes the role it successfully changes.
![Screenshot from 2023-06-20 13-48-02](https://github.com/Bikash01293/User-Management-System/assets/48493235/11b45ed1-8903-4cf2-a689-57d3558ba713)

Change-Status - Either Admin or Super Admin can change the role of the status.
![Screenshot from 2023-06-20 13-49-09](https://github.com/Bikash01293/User-Management-System/assets/48493235/0d31d759-c08e-45f1-a146-d5a980175f1b)

User- login to check the status
![Screenshot from 2023-06-20 14-20-49](https://github.com/Bikash01293/User-Management-System/assets/48493235/1a516bdc-4b96-4859-a17f-8bcce2931c27)

