## Get All Expertises
 
Get all Expertises

- **URL**

  /api/expertises/all"

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
    **Content:** : `IExpertise[] | null`

- **Error Response:**

  - **Code:** 500 implementation error" <br />
    **Content:** `{ error : "implementation error"" }`
  - **Code:** 400 implementation error" <br />
    **Content:** `{ error : "One or more of the required parameters was missing. }`

## Get  Expertise
 
Get  Expertise by filters

- **URL**

  /api/expertises/find

- **Method:**

  `POST`
- **scope**
 `user`
- **URL Params**

  None

  **Payload optional:**

  ```  
  _id?: string;
  date?: { $gte: string, $lte: string },
  place?: string;
  patient_id?: string;
  applicant_id?: string;
  Payement_condition?: number;
  billed?: boolean;
  travelling_expenses?: number;
  text?: [string];

  ```


- **Success Response:**

  - **Code:** 200 <br />
    **Content:** : `IExpertise[] | null`

- **Error Response:**

  - **Code:** 500 implementation error" <br />
    **Content:** `{ error : "implementation error"" }`
  - **Code:** 400 implementation error" <br />
    **Content:** `{ error : "One or more of the required parameters was missing. }`
## Add  Expertise
 
Add One Expertise 

- **URL**

  /api/expertises/add

- **Method:**

  `POST`
- **scope**
 `user`
- **URL Params**

  None

  **Payload Required:**

  ```  
   date: string;
  place: string;
  patient_id: string;
  applicant_id: String;
  Payement_condition: number;
  billed: boolean;
  travelling_expenses: number;
  text: [string];
  ```


- **Success Response:**

  - **Code:** 201 <br />
    **Content:** : `{ id: string;
    date: string;
  place: string;
  patient_id: string;
  applicant_id: String;
  Payement_condition: number;
  billed: boolean;
  travelling_expenses: number;
  text: [string];}`

- **Error Response:**

  - **Code:** 500 implementation error" <br />
    **Content:** `{ error : "implementation error"" }`
  - **Code:** 400 implementation error" <br />
    **Content:** `{ error : "One or more of the required parameters was missing. }`
    
## update  Expertise
 
Update One Expertise 

- **URL**

  /api/expertises/update

- **Method:**

  `PUT`
- **scope**
 `user`
- **URL Params**

  None

  **Payload Required:**

  ```  
    {id:string,
    expertise:{
          date: string;
          place: string;
          patient_id: string;
          applicant_id: String;
          Payement_condition: number;
          billed: boolean;
          travelling_expenses: number;
          text: [string]; }
    }
  ```


- **Success Response:**

  - **Code:** 200 <br />
    **Content:** : `{id: string;
    date: string;
  place: string;
  patient_id: string;
  applicant_id: String;
  Payement_condition: number;
  billed: boolean;
  travelling_expenses: number;
  text: [string];}`

- **Error Response:**

  - **Code:** 500 implementation error" <br />
    **Content:** `{ error : "implementation error"" }`
  - **Code:** 400 implementation error" <br />
    **Content:** `{ error : "One or more of the required parameters was missing. }`
    
## Delete  Expertise
 
Delete One Expertise by id

- **URL**

  /api/expertises/delete

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
    