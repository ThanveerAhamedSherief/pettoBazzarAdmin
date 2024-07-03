import React, { useState } from "react";

import { IoMdCloseCircle } from "react-icons/io";
import { toast } from "react-toastify";

const PopUp = ({ openPopUp, closePopUp, selectedItem, onSave }) => {
  const handlelosePopUp = (e) => {
    if (e.target.id === "ModelContainer") {
      closePopUp();
    }
  };
  const formatDate = (isoDate) => {
    // const date = new Date(isoDate);
    // const year = date.getFullYear();
    // const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    // const day = String(date.getDate()).padStart(2, '0');
    return isoDate.split('T')[0];
  };
  console.log("popupItem=>", selectedItem)
  if (openPopUp !== true) return null;
   let [Adoption, setAdoption] = useState(selectedItem.Adoption);
   let [petName, setPetName] = useState(selectedItem.petName);
   let [breedName, setBreedName] = useState(selectedItem.breedName);
   let [city, setCity] = useState(selectedItem.city);
   let [Description, setDescription] = useState(selectedItem.Description);
   let [petColor, setPetColor] = useState(selectedItem.petColor);
   let [petDob, setPetDob] = useState(selectedItem.petDob);
  //  let [petDob, setPetDob] = useState(formatDate(selectedItem.petDob));
   let [petGender, setPetGender] = useState(selectedItem.petGender);
   let [petType, setPetType] = useState(selectedItem.petType);
   let [price, setPrice] = useState(selectedItem.price);
   let [weight, setWeight] = useState(selectedItem.weight);
   let [whatsAppNumber, setWhatsAppNumber]= useState(selectedItem.whatsAppNumber);


  const handleSubmit = async (e) => {
    e.preventDefault();

    let payLoad = {
      petName,
      Adoption,
      breedName,
      city,
      Description,
      petColor,
      petDob,
      petGender,
      petType,
      price,
      weight,
      whatsAppNumber
    }
    let updatePost = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/v1/admin/${selectedItem._id}/updatePost`,{
      method: 'PUT',
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payLoad)
    });
    const response = await updatePost.json()
    console.log("Response ==>", response);

    if(updatePost.status === 200){
      toast.success("Post updated successfully..!");
       onSave(response.Data);
      closePopUp();
    }


  }
  const setDate = (e) => {
    console.log('date', e.target.value)
    setPetDob(e.target.value);
  }

  return (
    <div
      id="ModelContainer"
      onClick={handlelosePopUp}
      className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center"
    >
      <div className="bg-white rounded-lg w-full max-w-lg p-6 overflow-auto max-h-full">
        <button className="mb-4 text-right" onClick={closePopUp}>
          <IoMdCloseCircle className="text-indigo-700 text-xl" />
        </button>

        <div className="w-full p-3 justify-center items-center">
          <h2 className="font-semibold py-3 text-center text-xl">Edit page</h2>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="mb-8">
                <label
                  htmlFor="petName"
                  className={`block font-bold text-sm mb-2 ${"text-indigo-700"}`}
                >
                  PetName
                </label>
                <input
                  type="text"
                  name="petName"
                  id="petName"
                  onChange={(e) => setPetName(e.target.value)}
                  placeholder="petName"
                  value={petName}
                  className={`block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-indigo-700 ${"text-indigo-700 border-indigo-700"}`}
                  // ref={register}
                />
              </div>
              <div className="mb-8">
                <label
                  htmlFor="breedName"
                  className={`block font-bold text-sm mb-2 ${"text-indigo-700"}`}
                >
                  BreedName
                </label>
                <input
                  type="text"
                  name="breedName"
                  id="breedName"
                  onChange={(e) => setBreedName(e.target.value)}
                  placeholder="breedName"
                  value={breedName}
                  className={`block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-indigo-700 ${"text-indigo-700 border-indigo-700"}`}
                  // ref={register}
                />
              </div>
              <div className="mb-8">
                <label
                  htmlFor="Adoption"
                  className={`block font-bold text-sm mb-2 ${"text-indigo-700"}`}
                >
                  Adoption
                </label>
                <input
                  type="text"
                  name="Adoption"
                  id="Adoption"
                  value={Adoption}
                  onChange={(e) => setAdoption(e.target.value)}
                  placeholder="Adoption"
                  className={`block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-indigo-700 ${"text-indigo-700 border-indigo-700"}`}
                  // ref={register}
                />
              </div>
              <div className="mb-8">
                <label
                  htmlFor="petGender"
                  className={`block font-bold text-sm mb-2 ${"text-indigo-700"}`}
                >
                  Gender
                </label>
                <input
                  type="text"
                  name="petGender"
                  id="petGender"
                  value={petGender}
                  onChange={(e) => setPetGender(e.target.value)}
                  placeholder="petGender"
                  className={`block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-indigo-700 ${"text-indigo-700 border-indigo-700"}`}
                  // ref={register}
                />
              </div>
              <div className="mb-8">
                <label
                  htmlFor="City"
                  className={`block font-bold text-sm mb-2 ${"text-indigo-700"}`}
                >
                  City
                </label>
                <input
                  type="text"
                  name="City"
                  id="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="City"
                  className={`block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-indigo-700 ${"text-indigo-700 border-indigo-700"}`}
                  // ref={register}
                />
              </div>
              <div className="mb-8">
                <label
                  htmlFor="petDob"
                  className={`block font-bold text-sm mb-2 ${"text-indigo-700"}`}
                >
                  PetDob
                </label>
                <input
                  type="date"
                  name="petDob"
                  id="petDob"
                  onChange={setDate}
                  value={petDob}
                  placeholder="petDob"
                  className={`block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-indigo-700 ${"text-indigo-700 border-indigo-700"}`}
                  // ref={register}
                />
              </div>
              <div className="mb-8">
                <label
                  htmlFor="petColor"
                  className={`block font-bold text-sm mb-2 ${"text-indigo-700"}`}
                >
                  PetColor
                </label>
                <input
                  type="text"
                  name="petColor"
                  id="petColor"
                  onChange={(e) => setPetColor(e.target.value)}
                  value={petColor}
                  placeholder="petColor"
                  className={`block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-indigo-700 ${"text-indigo-700 border-indigo-700"}`}
                  // ref={register}
                />
              </div>
              <div className="mb-8">
                <label
                  htmlFor="petType"
                  className={`block font-bold text-sm mb-2 ${"text-indigo-700"}`}
                >
                  PetType
                </label>
                <input
                  type="text"
                  name="petType"
                  id="petType"
                  onChange={(e) => setPetType(e.target.value)}
                  value={petType}
                  placeholder="petType"
                  className={`block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-indigo-700 ${"text-indigo-700 border-indigo-700"}`}
                  // ref={register}
                />
              </div>
              <div className="mb-8">
                <label
                  htmlFor="Description"
                  className={`block font-bold text-sm mb-2 ${"text-indigo-700"}`}
                >
                  Description
                </label>
                <input
                  type="text"
                  name="Description"
                  id="Description"
                  onChange={(e) => setDescription(e.target.value)}
                  value={Description}
                  placeholder="Description"
                  className={`block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-indigo-700 ${"text-indigo-700 border-indigo-700"}`}
                  // ref={register}
                />
              </div>
              <div className="mb-8">
                <label
                  htmlFor="weight"
                  className={`block font-bold text-sm mb-2 ${"text-indigo-700"}`}
                >
                  Weight
                </label>
                <input
                  type="text"
                  name="weight"
                  id="weight"
                  onChange={(e) => setWeight(e.target.value)}
                  value={weight}
                  placeholder="weight"
                  className={`block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-indigo-700 ${"text-indigo-700 border-indigo-700"}`}
                  // ref={register}
                />
              </div>
              <div className="mb-8">
                <label
                  htmlFor="price"
                  className={`block font-bold text-sm mb-2 ${"text-indigo-700"}`}
                >
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                  placeholder="Price"
                  className={`block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-indigo-700 ${"text-indigo-700 border-indigo-700"}`}
                  // ref={register}
                />
              </div>
              <div className="mb-8">
                <label
                  htmlFor="whatsAppNumber"
                  className={`block font-bold text-sm mb-2 ${"text-indigo-700"}`}
                >
                  WhatsAppNumber
                </label>
                <input
                  type="number"
                  name="whatsAppNumber"
                  id="whatsAppNumber"
                  onChange={(e)=> setWhatsAppNumber(e.target.value)}
                  value={whatsAppNumber}
                  placeholder="whatsAppNumber"
                  className={`block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-indigo-700 ${"text-indigo-700 border-indigo-700"}`}
                  // ref={register}
                />
              </div>
            

              <button className="inline-block bg-yellow-500 text-yellow-800 rounded shadow py-2 px-5 text-sm">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// ownerId
// 6646e8959a2584da3a0f2d16
// petName
// "meow"
// breedName
// "persian"
// Adoption
// "free"
// city
// "ranipet"
// petGender
// "male"
// petDob
// 1970-01-20T20:37:54.740+00:00
// petColor
// "green"
// petType
// "dog"
// Description
// "The cat, commonly referred to as the domestic cat or house cat, is a s…"
// weight
// 2
// price
// 230
// whatsAppNumber
// 32323232332

// petImages
// Array (3)
export default PopUp;
