## Get All Patients
 
Get all Patients

- **URL**

  /api/patients/all"

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
    **Content:** : `IPatient[] | null`

- **Error Response:**

  - **Code:** 500 implementation error" <br />
    **Content:** `{ error : "implementation error"" }`
  - **Code:** 400 implementation error" <br />
    **Content:** `{ error : "One or more of the required parameters was missing. }`

## Get  Patient
 
Get  Patient by filters

- **URL**

  /api/patients/find

- **Method:**

  `POST`
- **scope**
 `user`
- **URL Params**

  None

  **Payload optional:**

  ```  
  id:string,
  firstname: string,
  lastname: string,
  date_of_birth: string,
  place_of_birth: string,
  email: string,
  address: {
          address1: String,
          address2: String,
          city: String,
          state: String,
          zipcode: String,
          country: String,
        },
  civility: string,
  phone_home: string,
  phone_cell: string,
  doctor_id: string,
  ```


- **Success Response:**

  - **Code:** 200 <br />
    **Content:** : `IPatient[] | null`

- **Error Response:**

  - **Code:** 500 implementation error" <br />
    **Content:** `{ error : "implementation error"" }`
  - **Code:** 400 implementation error" <br />
    **Content:** `{ error : "One or more of the required parameters was missing. }`
## Add  Patient
 
Add One Patient 

- **URL**

  /api/patients/add

- **Method:**

  `POST`
- **scope**
 `user`
- **URL Params**

  None

  **Payload Required:**

  ```  
  firstname: string,
  lastname: string,
  date_of_birth: string,
  place_of_birth: string,
  email: string,
  address: {
          address1: String,
          address2: String,
          city: String,
          state: String,
          zipcode: String,
          country: String,
        },
  civility: string,
  phone_home: string,
  phone_cell: string,
  doctor_id: string,
  ```


- **Success Response:**

  - **Code:** 201 <br />
    **Content:** : `{ id:string,
        firstname: string,
        lastname: string,
        date_of_birth: string,
        place_of_birth: string,
        email: string,
        address: {
                address1: String,
                address2: String,
                city: String,
                state: String,
                zipcode: String,
                country: String,
              },
        civility: string,
        phone_home: string,
        phone_cell: string,
        doctor_id: string,}`

- **Error Response:**

  - **Code:** 500 implementation error" <br />
    **Content:** `{ error : "implementation error"" }`
  - **Code:** 400 implementation error" <br />
    **Content:** `{ error : "One or more of the required parameters was missing. }`
    
## update  Patient
 
Update One Patient 

- **URL**

  /api/patients/update

- **Method:**

  `PUT`
- **scope**
 `user`
- **URL Params**

  None

  **Payload Required:**

  ```  
    {id:string,
    patient:{
        id:string,
        firstname: string,
        lastname: string,
        date_of_birth: string,
        place_of_birth: string,
        email: string,
        address: {
                address1: String,
                address2: String,
                city: String,
                state: String,
                zipcode: String,
                country: String,
              },
        civility: string,
        phone_home: string,
        phone_cell: string,
        doctor_id: string, }
    }
  ```


- **Success Response:**

  - **Code:** 200 <br />
    **Content:** : `{ id:string,
        firstname: string,
        lastname: string,
        date_of_birth: string,
        place_of_birth: string,
        email: string,
        address: {
                address1: String,
                address2: String,
                city: String,
                state: String,
                zipcode: String,
                country: String,
              },
        civility: string,
        phone_home: string,
        phone_cell: string,
        doctor_id: string,}`

- **Error Response:**

  - **Code:** 500 implementation error" <br />
    **Content:** `{ error : "implementation error"" }`
  - **Code:** 400 implementation error" <br />
    **Content:** `{ error : "One or more of the required parameters was missing. }`
    
## Delete  Patient
 
Delete One Patient by id

- **URL**

  /api/patients/delete

- **Method:**

  `DELETE`
- **scope**
 `user`
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
    