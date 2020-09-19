## Get All Users
 
Get all users

- **URL**

  /api/users/all"

- **Method:**

  `GET`
- **scope**
 `user`
- **URL Params**
  None
  **Payload Required:**

  None


- **Success Response:**

  - **Code:** 200 <br />
    **Content:** : `IUser[] | null`

- **Error Response:**

  - **Code:** 500 implementation error" <br />
    **Content:** `{ error : "implementation error"" }`
  - **Code:** 400 implementation error" <br />
    **Content:** `{ error : "One or more of the required parameters was missing. }`

## Get  User
 
Get  User by filters

- **URL**

  /api/users/find

- **Method:**

  `POST`
- **scope**
 `user`
- **URL Params**

  None

  **Payload optional:**

  ```  
  id?:string;
  lastname?: string;
  firstname?: string;
  title?: string;
  establishment?: string;
  service?: string;
  address: {
                address1: String,
                address2: String,
                city: String,
                state: String,
                zipcode: String,
                country: String,
              },
  email?: string;
  phone_home?: string;
  phone_cell?: string;
  iban?: string;
  login?: string;
  isAdmin?: boolean; 
  ```


- **Success Response:**

  - **Code:** 200 <br />
    **Content:** : `IUser[] | null`

- **Error Response:**

  - **Code:** 500 implementation error" <br />
    **Content:** `{ error : "implementation error"" }`
  - **Code:** 400 implementation error" <br />
    **Content:** `{ error : "One or more of the required parameters was missing. }`
## Add  User
 
Add One User 

- **URL**

  /api/users/add

- **Method:**

  `POST`
- **scope**
 `admin`
- **URL Params**

  None

  **Payload Required:**

  ```  
  lastname: string;
  firstname: string;
  title: string;
  establishment: string;
  service: string;
  address: {
                address1: String,
                address2: String,
                city: String,
                state: String,
                zipcode: String,
                country: String,
              },
  email: string;
  phone_home: string;
  phone_cell: string;
  iban: string;
  login: string;
  pwdHash: string;
  isAdmin: boolean; 
  ```


- **Success Response:**

  - **Code:** 201 <br />
    **Content:** : `{id?:string;
  lastname?: string;
  firstname?: string;
  title?: string;
  establishment?: string;
  service?: string;
  address: {
                address1: String,
                address2: String,
                city: String,
                state: String,
                zipcode: String,
                country: String,
              },
  email?: string;
  phone_home?: string;
  phone_cell?: string;
  iban?: string;
  login?: string;
  isAdmin?: boolean; }`

- **Error Response:**

  - **Code:** 500 implementation error" <br />
    **Content:** `{ error : "implementation error"" }`
  - **Code:** 400 implementation error" <br />
    **Content:** `{ error : "One or more of the required parameters was missing. }`
    
## update  User
 
Update One User 

- **URL**

  /api/users/update

- **Method:**

  `PUT`
- **scope**
 `user`
- **URL Params**

  None

  **Payload Required:**

  ```  
    {id:string,
    user:{
      lastname: string;
      firstname: string;
      title: string;
      establishment: string;
      service: string;
      address: {
                address1: String,
                address2: String,
                city: String,
                state: String,
                zipcode: String,
                country: String,
              },
      email: string;
      phone_home: string;
      phone_cell: string;
      iban: string;
      login: string;
      isAdmin: boolean; }
    }
  ```


- **Success Response:**

  - **Code:** 200 <br />
    **Content:** : `{id?:string;
  lastname?: string;
  firstname?: string;
  title?: string;
  establishment?: string;
  service?: string;
  address: {
                address1: String,
                address2: String,
                city: String,
                state: String,
                zipcode: String,
                country: String,
              },
  email?: string;
  phone_home?: string;
  phone_cell?: string;
  iban?: string;
  login?: string;
  isAdmin?: boolean; }`

- **Error Response:**

  - **Code:** 500 implementation error" <br />
    **Content:** `{ error : "implementation error"" }`
  - **Code:** 400 implementation error" <br />
    **Content:** `{ error : "One or more of the required parameters was missing. }`
    
## Delete  User
 
Delete One User by id

- **URL**

  /api/users/delete

- **Method:**

  `DELETE`
- **scope**
 `admin`
- **URL Params**

  None

  **Payload Required:**

  ```  
    {id:string }
  ```


- **Success Response:**

  - **Code:** 200 <br />
    **Content:** : `{}`

- **Error Response:**

  - **Code:** 500 implementation error" <br />
    **Content:** `{ error : "implementation error"" }`
  - **Code:** 400 implementation error" <br />
    **Content:** `{ error : "One or more of the required parameters was missing. }`
    