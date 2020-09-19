## Login User 
 
Log in user to get token jwt which is saved in the signed cookie jwt.

- **URL**

  /api/auth/login

- **Method:**

  `POST`

- **URL Params**
  None
  **Payload Required:**

  `email=[string]`
  
  `password=[string]`


- **Success Response:**

  - **Code:** 200 <br />
    **Content:** `{}`

- **Error Response:**

  - **Code:** 400 UNAUTHORIZED <br />
    **Content:** `{ error : "One or more of the required parameters was missing." }`

## Logout User 
 
Logout  user by clearing the cookies.

- **URL**

  /api/auth/logout

- **Method:**

  `GET`

- **URL Params**
  None
  **Payload Required:**

  None


- **Success Response:**

  - **Code:** 200 <br />
    **Content:** `{}`

- **Error Response:**

  None
