# Types:

## IAddress
 ```
IAddress {
  address1: string;
  address2: string;
  city: string;
  state: string;
  zipcode: string;
  country: string;
}

 ```
 ## ApplicantType
 ```
enum ApplicantType {
  "fille",
  "fils",
  "mère",
  "père",
  "juge des tutelles",
  "procureur",
  "autre",
}

 ```
 ## Payement_condition
 ```
enum Payement_condition {
  "chèque",
  "virement",
  "espèces",
  "CB",
}

 ```
 ## IClaimantBase
 ```
IClaimantBase {
  lastname: string;
  firstname: string;
  email: string;
  address: IAddress;
  type: ApplicantType;
  civility: string;
  phone_home: string;
  phone_cell: string;
}

 ```
 ## IExpertiseBase
 ```
IExpertiseBase {
  date: Date;
  place: string;
  patient_id: mongoose.Types.ObjectId;
  applicant_id: String;
  Payement_condition: Payement_condition;
  billed: boolean;
  travelling_expenses: number;
  text: [string];
}

 ```
 
 ## IPatientBase {

 ```
IPatientBase {
  firstname: string;
  lastname: string;
  date_of_birth: Date;
  place_of_birth: string;
  email: string;
  address: IAddress;
  civility: string;
  phone_home: string;
  phone_cell: string;
  doctor_id: mongoose.Types.ObjectId;
}

 ```
 
 ## IUserBase {

 ```
IUserBase {
  lastname: string;
  firstname: string;
  title: string;
  establishment: string;
  service: string;
  address: IAddress;
  email: string;
  phone_home: string;
  phone_cell: string;
  iban: string;
  login: string;
  pwdHash: string;
  isAdmin: boolean;
}

 ```