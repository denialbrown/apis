/**
 * @swagger
 * /add/address:
 *   post:
 *     summary: Add adddress
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
 *               address1:
 *                 type: string
 *                 example: address1 
 *               address2:
 *                 type: string
 *                 example: address2
 *               address3:
 *                 type: string
 *                 example: address3
 *               landMark:
 *                 type: string
 *                 example: landMark  
 *               cityId:
 *                 type: string
 *                 example: 6238065052c1161b5594f7a2
 *               stateId:
 *                 type: string
 *                 example: 62383921ae40860ffd1fd029
 *               pincode:
 *                 type: string
 *                 example: 382350
 *     responses:
 *       200:
 *         description: Address added successfully
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
 *                     address1:
 *                       type: string
 *                       example: address1
 *                     address2:
 *                       type: string
 *                       example:    address2 
 *                     address3:
 *                       type: string
 *                       example: address3
 *                     landMark:
 *                       type: string
 *                       example:  landMark      
 *                     city:
 *                       type: string
 *                       example:    city  
 *                     pincode:
 *                       type: string
 *                       example:  pincode 
 *                     addresstype:
 *                       type: string
 *                       example:  addresstype    
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
 * /getAddress:
 *   get:
 *     summary: get address list
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
 *     responses:
 *       200:
 *         description: Address list
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
 *                     address1:
 *                       type: string
 *                       example: address1
 *                     address2:
 *                       type: string
 *                       example:    address2 
 *                     address3:
 *                       type: string
 *                       example: address3
 *                     landMark:
 *                       type: string
 *                       example:  landMark      
 *                     city:
 *                       type: string
 *                       example:    city  
 *                     pincode:
 *                       type: string
 *                       example:  pincode 
 *                     addresstype:
 *                       type: string
 *                       example:  addresstype    
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
 * /address/getAddress:
 *   get:
 *     summary: get address list by populate
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
 *     responses:
 *       200:
 *         description: Address list
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
 *                     address1:
 *                       type: string
 *                       example: address1
 *                     address2:
 *                       type: string
 *                       example:    address2 
 *                     address3:
 *                       type: string
 *                       example: address3
 *                     landMark:
 *                       type: string
 *                       example:  landMark      
 *                     city:
 *                       type: string
 *                       example:    city  
 *                     pincode:
 *                       type: string
 *                       example:  pincode 
 *                     addresstype:
 *                       type: string
 *                       example:  addresstype    
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
 * /address/update/{addressId}:
 *   post:
 *     summary: update address
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
 *      - in: path
 *        name: addressId
 *        required: true
 *        default: 62395a01adb56e8f5964ea45  
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               address1:
 *                 type: string
 *                 example: address1 
 *               address2:
 *                 type: string
 *                 example: address2
 *               address3:
 *                 type: string
 *                 example: address3
 *               landMark:
 *                 type: string
 *                 example: landMark  
 *               cityId:
 *                 type: string
 *                 example: 6238065052c1161b5594f7a2
 *               stateId:
 *                 type: string
 *                 example: 62383921ae40860ffd1fd029
 *               pincode:
 *                 type: string
 *                 example: 382350
 *     responses:
 *       200:
 *         description: Address added successfully
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
 *                     address1:
 *                       type: string
 *                       example: address1
 *                     address2:
 *                       type: string
 *                       example:    address2 
 *                     address3:
 *                       type: string
 *                       example: address3
 *                     landMark:
 *                       type: string
 *                       example:  landMark      
 *                     city:
 *                       type: string
 *                       example:    city  
 *                     pincode:
 *                       type: string
 *                       example:  pincode 
 *                     addresstype:
 *                       type: string
 *                       example:  addresstype    
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

