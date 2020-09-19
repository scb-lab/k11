import mongoose from "mongoose";
import { User } from "@entities/User";
import { Expertise } from "@entities/Expertise";
import { Payement_condition, ApplicantType } from "./Types";
import { Claimant } from "@entities/Claimant";
import { Patient } from "@entities/Patient";
export const initiateModels = () => {
  return {
    userModel: new User(),
    expertiseModel: new Expertise(),
    claimantModel: new Claimant(),
    patientModel: new Patient(),
  };
};
export const testDB = async () => {
  await mongoose.connect(
    process.env.MONGODB_URL || "mongodb://localhost/myapp"
  );
  const userModel = new User();
  const expertiseModel = new Expertise();
  const claimantModel = new Claimant();
  const patientModel = new Patient();

  // console.log(await expertiseModel.findExpertise({ place: "leboncoin" }));
  // claimantModel.createClaimant({
  //   address: {
  //     address1: "lecoin",
  //     address2: "lecoin2",
  //     city: "lyon",
  //     country: "france",
  //     state: "france",
  //     zipcode: "69000",
  //   },
  //   civility: "mr",
  //   firstname: "leduc",
  //   email: "leduc@ducoin.com",
  //   lastname: "jean",
  //   phone_cell: "07658787065",
  //   phone_home: "0554654654",
  //   type: ApplicantType.fils,
  // });
  // userModel.createUser({
  //   address: {
  //     address1: "lecoin",
  //     address2: "lecoin2",
  //     city: "lyon",
  //     country: "france",
  //     state: "france",
  //     zipcode: "69000",
  //   },
  //   firstname: "ledoc",
  //   email: "ledoc@ducoin.com",
  //   lastname: "jean",
  //   phone_cell: "076584457",
  //   phone_home: "055468754",
  //   establishment: "hopital",
  //   iban: "CBF545GDFGDSFG54",
  //   login: "doc",
  //   pwdHash: "SDFSDFFDSFDS",
  //   service: "doctorologie",
  //   title: "pourfondeur des maladies",
  // });
  // patientModel.createPatient({
  //   address: {
  //     address1: "lerecoin",
  //     address2: "lerecoin2",
  //     city: "lyon",
  //     country: "france",
  //     state: "france",
  //     zipcode: "69000",
  //   },
  //   firstname: "pasbien",
  //   email: "michelpasbien@ducoin.com",
  //   lastname: "michel",
  //   phone_cell: "07658154457",
  //   phone_home: "05546141544",
  //   civility: "Mr",
  //   date_of_birth: new Date(),
  //   place_of_birth: "lerecoin",
  //   doctor_id: mongoose.Types.ObjectId(),
  // });
  // expertiseModel.createExpertise({
  //   date: new Date(),
  //   place: "leboncoin",
  //   patient_id: mongoose.Types.ObjectId(),
  //   applicant_id: mongoose.Types.ObjectId(),
  //   Payement_condition: Payement_condition.chèque,
  //   billed: true,
  //   travelling_expenses: 20,
  //   text: ["lorem ipsum"],
  // });
  // userModel.createUser({lastname: "bob",
  //  firstname:"gob",
  //  title:"master",
  //  establishment:"ici",
  //  service:"des nouilles",
  //  address: {address1: "pas loin",
  //      address2: "de là",
  //      city: "a cote",
  //      state: "proche",
  //      zipcode: "19000",
  //      country: "asgard",},
  //  email: "bobgob@gmail.com",
  //  phone_home: "0666666666",
  //  phone_cell: "0666666666",
  //  iban:"tf1223151sqdd4",
  //  login:"bob",
  //  pwdHash: "gob",})
};
