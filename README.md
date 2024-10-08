# Car rental reservation system
## How can you install this project and use
## live site link https://car-vehicle.vercel.app/
 step 1. Open your terminal and paste in your terminal and hit enter button -> git clone https://github.com/lanjudev16/car-rental-reservation-system

 step 2. Copy this command and paste in your terminal and hit enter button -> cd car-rental-reservation-system

 step 3. Copy this command and paste in your terminal and hit enter button -> npm install

 step 4. Copy this command and paste in your terminal and hit enter button -> npm run start:dev


 step 5. Open your browser and paste it -> http://localhost:5000/


## Admin Actions:

### Car Management: 
Admins can create new car entries in the system, specifying details like name, color, features, etc. They can also update existing car information to keep things accurate. Additionally, admins can perform "soft deletes" on cars that are no longer available for rent. This keeps a record of the car but removes it from active listings. 

### Booking Oversight:  
Admins have a comprehensive view of all ongoing and past bookings within the system. This allows them to monitor rental activity and identify any potential issues.

#### Ride Cost Calculation: 
For completed rentals (where the end time has been entered by admin), admins can calculate the total cost using startTime , endTime and pricePerHour to ensure accurate billing.

## User’s Actions:

### Book a Ride: 
Users can select their pick-up entering carId and startTime to book the perfect car for their needs.

### Rental History: 
They can easily access their booking history, allowing them to review past rentals.

## Technology Stack:
1. TypeScript as the programming language.
2. Express.js as the web framework.
3. Mongoose as the Object Data Modeling (ODM) and validation library for MongoDB
4. Zod for extra validation
5. bycrypt for password hasing
6. jwt for authentication and authrization

