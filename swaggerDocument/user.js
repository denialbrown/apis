/**
 * @swagger
 * /signup:
 *   post:
 *     summary: user sign-up or login
 *     tags: [user]
 *     parameters:
 *      - in: header
 *        name: nonce
 *        required: true
 *        default: 123456
 *      - in: header
 *        name: timestamp
 *        required: true
 *        default: 12345678
 *      - in: header
 *        name: token
 *        required: true
 *        default: 9067b6a045f321090ea476eaec169002c5e335a540cd77b5726c7547b2bf5209 
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 example: abc 
 *               lastName:
 *                 type: string
 *                 example: abc 
 *               gender:
 *                 type: Number
 *                 example: 1
 *               dob:
 *                 type: string
 *                 example: abc  
 *               email:
 *                 type: string
 *                 example: dhaval@gmail.com
 *               phone:
 *                 type: string
 *                 example: 9898989898
 *               countryCode:
 *                 type: string
 *                 example: 91
 *     responses:
 *       200:
 *         description: signup success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 responseCode:
 *                   type: integer
 *                 responseMessage:
 *                    type: string
 *                 responseData:
 *                   type: object
 *                   properties:
 *                     loginToken:
 *                       type: string
 *                       example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MjE1Y2I3NjAxZDg2OTJhZjkzMGVkMTkiLCJhY3Rpb24iOiJhY2Nlc3MiLCJpYXQiOjE2NDU1OTc4MTksImV4cCI6MTY0NTY0MTAxOX0.Zve63LUqIOh3lwhBfgQLbVE73PgbaY0tCPQ7y2vQVsk
 *       500:
 *         description: signup failed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 responsecode:
 *                   type: integer
 *                 responseMessage:
 *                    type: string
 */


/**
 * @swagger
 * /getUser:
 *   get:
 *     summary: get user profile
 *     tags: [user]
 *     parameters:
 *      - in: header
 *        name: nonce
 *        required: true
 *        default: 123456
 *      - in: header
 *        name: timestamp
 *        required: true
 *        default: 12345678
 *      - in: header
 *        name: token
 *        required: true
 *        default: 9067b6a045f321090ea476eaec169002c5e335a540cd77b5726c7547b2bf5209 
 *      - in: header
 *        name: accesstoken
 *        required: true
 *        default: 9067b6a045f321090ea476eaec169002c5e335a540cd77b5726c7547b2bf5209 
 *     responses:
 *       200:
 *         description: success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 responseCode:
 *                   type: integer
 *                 responseMessage:
 *                    type: string
 *                 responseData:
 *                   type: object
 *                   properties:
 *                     loginToken:
 *                       type: string
 *                       example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MjE1Y2I3NjAxZDg2OTJhZjkzMGVkMTkiLCJhY3Rpb24iOiJhY2Nlc3MiLCJpYXQiOjE2NDU1OTc4MTksImV4cCI6MTY0NTY0MTAxOX0.Zve63LUqIOh3lwhBfgQLbVE73PgbaY0tCPQ7y2vQVsk
 *       500:
 *         description: failed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 responsecode:
 *                   type: integer
 *                 responseMessage:
 *                    type: string
 */

/**
 * @swagger
 * /update/user:
 *   post:
 *     summary: update user data
 *     tags: [user]
 *     parameters:
 *      - in: header
 *        name: nonce
 *        required: true
 *        default: 123456
 *      - in: header
 *        name: timestamp
 *        required: true
 *        default: 12345678
 *      - in: header
 *        name: token
 *        required: true
 *        default: 9067b6a045f321090ea476eaec169002c5e335a540cd77b5726c7547b2bf5209 
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 example: abc 
 *               lastName:
 *                 type: string
 *                 example: abc 
 *               gender:
 *                 type: Number
 *                 example: 1
 *               dob:
 *                 type: string
 *                 example: abc  
 *               email:
 *                 type: string
 *                 example: dhaval@gmail.com
 *               phone:
 *                 type: string
 *                 example: 9898989898
 *               countryCode:
 *                 type: string
 *                 example: 91
 *               otp:
 *                 type: string
 *                 example: 12345
 *     responses:
 *       200:
 *         description: success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 responseCode:
 *                   type: integer
 *                 responseMessage:
 *                    type: string
 *                 responseData:
 *                   type: object
 *                   properties:
 *                     loginToken:
 *                       type: string
 *                       example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MjE1Y2I3NjAxZDg2OTJhZjkzMGVkMTkiLCJhY3Rpb24iOiJhY2Nlc3MiLCJpYXQiOjE2NDU1OTc4MTksImV4cCI6MTY0NTY0MTAxOX0.Zve63LUqIOh3lwhBfgQLbVE73PgbaY0tCPQ7y2vQVsk
 *       500:
 *         description:  failed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 responsecode:
 *                   type: integer
 *                 responseMessage:
 *                    type: string
 */


/**
 * @swagger
 * /logIn:
 *   post:
 *     summary: login with phone 
 *     tags: [user]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               phone:
 *                 type: string
 *                 example: 9898989898
 *     responses:
 *       200:
 *         description: success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 responseCode:
 *                   type: integer
 *                 responseMessage:
 *                    type: string
 *                 responseData:
 *                   type: object
 *                   properties:
 *                     loginToken:
 *                       type: string
 *                       example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MjE1Y2I3NjAxZDg2OTJhZjkzMGVkMTkiLCJhY3Rpb24iOiJhY2Nlc3MiLCJpYXQiOjE2NDU1OTc4MTksImV4cCI6MTY0NTY0MTAxOX0.Zve63LUqIOh3lwhBfgQLbVE73PgbaY0tCPQ7y2vQVsk
 *       500:
 *         description: Login failed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 responsecode:
 *                   type: integer
 *                 responseMessage:
 *                    type: string
 */

/**
 * @swagger
 * /add/city:
 *   post:
 *     summary: Add city
 *     tags: [user]
 *     parameters:
 *      - in: header
 *        name: nonce
 *        required: true
 *        default: 123456
 *      - in: header
 *        name: timestamp
 *        required: true
 *        default: 12345678
 *      - in: header
 *        name: token
 *        required: true
 *        default: 9067b6a045f321090ea476eaec169002c5e335a540cd77b5726c7547b2bf5209 
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cityName:
 *                 type: string
 *                 example: ahmedabad 
 *     responses:
 *       200:
 *         description: success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 responseCode:
 *                   type: integer
 *                 responseMessage:
 *                    type: string
 *                 responseData:
 *                   type: object
 *                   properties:
 *                     city:
 *                       type: string
 *                       example: ahmedabad 
 *       500:
 *         description: failed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 responsecode:
 *                   type: integer
 *                 responseMessage:
 *                    type: string
 */


/**
 * @swagger
 * /add/state:
 *   post:
 *     summary: Add state 
 *     tags: [user]
 *     parameters:
 *      - in: header
 *        name: nonce
 *        required: true
 *        default: 123456
 *      - in: header
 *        name: timestamp
 *        required: true
 *        default: 12345678
 *      - in: header
 *        name: token
 *        required: true
 *        default: 9067b6a045f321090ea476eaec169002c5e335a540cd77b5726c7547b2bf5209 
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               stateName:
 *                 type: string
 *                 example: gujrat 
 *     responses:
 *       200:
 *         description: success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 responseCode:
 *                   type: integer
 *                 responseMessage:
 *                    type: string
 *                 responseData:
 *                   type: object
 *                   properties:
 *                     stateName:
 *                       type: string
 *                       example: gujrat 
 *       500:
 *         description: failed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 responsecode:
 *                   type: integer
 *                 responseMessage:
 *                    type: string
 */

/**
 * @swagger
 * /logIn/token:
 *   post:
 *     summary: login with otp verification 
 *     tags: [user]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               token:
 *                 type: string
 *                 example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
 *               otp:
 *                 type: string
 *                 example: 1234
 *     responses:
 *       200:
 *         description: success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 responseCode:
 *                   type: integer
 *                 responseMessage:
 *                    type: string
 *                 responseData:
 *                   type: object
 *                   properties:
 *                     loginToken:
 *                       type: string
 *                       example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MjE1Y2I3NjAxZDg2OTJhZjkzMGVkMTkiLCJhY3Rpb24iOiJhY2Nlc3MiLCJpYXQiOjE2NDU1OTc4MTksImV4cCI6MTY0NTY0MTAxOX0.Zve63LUqIOh3lwhBfgQLbVE73PgbaY0tCPQ7y2vQVsk
 *       500:
 *         description: Login failed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 responsecode:
 *                   type: integer
 *                 responseMessage:
 *                    type: string
 */

