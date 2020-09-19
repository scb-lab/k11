## Get All Claimants
 
Get all Claimants

- **URL**

  /api/claimants/all"

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
    **Content:** : `IClaimant[] | null`

- **Error Response:**

  - **Code:** 500 implementation error" <br />
    **Content:** `{ error : "implementation error"" }`
  - **Code:** 400 implementation error" <br />
    **Content:** `{ error : "One or more of the required parameters was missing. }`

## Get  Claimant
 
Get  Claimant by filters

- **URL**

  /api/claimants/find

- **Method:**

  `POST`
- **scope**
 `user`
- **URL Params**

  None

  **Payload optional:**

  ```  id?:string,
       lastname: string,
       firstname: string,
       email: string,
       address: {
          address1: String,
          address2: String,
          city: String,
          state: String,
          zipcode: String,
          country: String,
        },
        type: number,
        civility: string,
        phone_home: string,
        phone_cell: string,
  ```


- **Success Response:**

  - **Code:** 200 <br />
    **Content:** : `IClaimant[] | null`

- **Error Response:**

  - **Code:** 500 implementation error" <br />
    **Content:** `{ error : "implementation error"" }`
  - **Code:** 400 implementation error" <br />
    **Content:** `{ error : "One or more of the required parameters was missing. }`
## Add  Claimant
 
Add One Claimant 

- **URL**

  /api/claimants/add

- **Method:**

  `POST`
- **scope**
 `user`
- **URL Params**

  None

  **Payload Required:**

  ```  
        lastname: string,
        firstname: string,
        email: string,
        address: {
          address1: String,
          address2: String,
          city: String,
          state: String,
          zipcode: String,
          country: String,
        },
        type: number,
        civility: string,
        phone_home: string,
        phone_cell: string,
  ```


- **Success Response:**

  - **Code:** 201 <br />
    **Content:** : `{id?:string,
       lastname: string,
       firstname: string,
       email: string,
       address: {
          address1: String,
          address2: String,
          city: String,
          state: String,
          zipcode: String,
          country: String,
        },
        type: number,
        civility: string,
        phone_home: string,
        phone_cell: string,}`

- **Error Response:**

  - **Code:** 500 implementation error" <br />
    **Content:** `{ error : "implementation error"" }`
  - **Code:** 400 implementation error" <br />
    **Content:** `{ error : "One or more of the required parameters was missing. }`
    
## update  Claimant
 
Update One Claimant 

- **URL**

  /api/claimants/update

- **Method:**

  `PUT`
- **scope**
 `user`
- **URL Params**

  None

  **Payload Required:**

  ```  
    {id:string,
    claimant:{
       lastname: string,
       firstname: string,
       email: string,
       address: {
          address1: String,
          address2: String,
          city: String,
          state: String,
          zipcode: String,
          country: String,
        },
        type: number,
        civility: string,
        phone_home: string,
        phone_cell: string, }
    }
  ```


- **Success Response:**

  - **Code:** 200 <br />
    **Content:** : `{id?:string,
       lastname: string,
       firstname: string,
       email: string,
       address: {
          address1: String,
          address2: String,
          city: String,
          state: String,
          zipcode: String,
          country: String,
        },
        type: number,
        civility: string,
        phone_home: string,
        phone_cell: string,}`

- **Error Response:**

  - **Code:** 500 implementation error" <br />
    **Content:** `{ error : "implementation error"" }`
  - **Code:** 400 implementation error" <br />
    **Content:** `{ error : "One or more of the required parameters was missing. }`
    
## Delete  Claimant
 
Delete One Claimant by id

- **URL**

  /api/claimants/delete

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
    