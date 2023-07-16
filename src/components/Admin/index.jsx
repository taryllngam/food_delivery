// import { Formik } from 'formik';
// import React from 'react'
// import { useContext } from 'react';
// import { FoodContext } from '../../context/FoodContext';
// import "../Admin/style.css"

// export default function Admin() {
//     // const isAdmin = localStorage.getItem('userInfo');
//     // validate={values => {
//     //   const errors = {};
//     //   if (!values.e) {
//     //     errors.email = 'Required';
//     //   } else if (
//     //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.)
//     //   )
//     //   return errors;
//     // }}
//     const { foodStorage, setFoodStorage } = useContext(FoodContext);

//     const handleSubmit = () => {}
//   return (
//     <div className='big-container'>
//       <div className='usersInfo'>user dashboard</div>
//       <div className='inputInfo'>
//        <Formik
//       initialValues={{ Image: '', Name: '', Price: '', Description: '' }}

//       onSubmit={(values, { setSubmitting }) => {
//         setTimeout(() => {
//             localStorage.setItem('Admin', JSON.stringify(values));
//             alert(JSON.stringify(values, null, 2));
//           setSubmitting(false);
//         }, 400);
//       }}
//     >
//       {({
//         values,
//         errors,
//         touched,
//         handleChange,
//         handleBlur,
//         handleSubmit,
//         isSubmitting,
//         /* and other goodies */
//       }) => (
//         <form onSubmit={handleSubmit}>
//           <div className='display2'>
//           <span>IMAGE</span>
//             <input
//             type="file"
//             name="file"
//             onChange={handleChange}
//             value={values.file}/>
//             </div>

//             <div className='display2'>
//             <span>Name</span>
//             <input
//             type="name"
//             name="Name"
//             onChange={handleChange}
//             value={values.Name}/>
// </div>
// <div className='display2'>
//             <span>PRICE</span>
//           <input
//             type="price"
//             name="Price"
//             onChange={handleChange}
//             onBlur={handleBlur}
//             value={values.Price}
//           />
//           </div>
//           <div className='display2'>
//           <span>DESCRIPTION</span>
//           <input
//             type="description"
//             name="description"
//             onChange={handleChange}
//             onBlur={handleBlur}
//             value={values.Description}
//           />
//           </div>
//           <button type="submit" disabled={isSubmitting}>
//             Submit
//           </button>
//         </form>
//       )}
//     </Formik>
//     </div>
//     </div>
//   )
// }

import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { GiCancel } from "react-icons/gi";
import { Navigate, useNavigate } from "react-router";
import { FoodContext, useLocalStorage } from "../../context/FoodContext";
import "../Admin/style.css";
import Nav from "../Navbar";
export default function Admin() {
  const { value, setValue } = useLocalStorage("foodStorage", []);
  const [localData, setLocalData] = useState(value);
  const navigate = useNavigate;
  const [showForm, setShowForm] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [foodStorage, setfoodStorage] = useState({
    id: +1,
    name: "",
    price: "",
    image: "",
    details: "",
  });
  const Data = JSON.parse(localStorage.getItem("userInfo"));
  console.log(Data);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setfoodStorage((prevfoodStorage) => ({
      ...prevfoodStorage,
      [name]: value,
    }));
  };

  const convert2base64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const uploadImage = async (event) => {
    const file = event.target.files[0];
    const base64 = await convert2base64(file);
    console.log(base64);

    setfoodStorage((prev) => ({ ...prev, image: base64 }));
  };

  // const handleDelete = (name) => {
  //   const localData = JSON.parse(localStorage.getItem("foodStorage"));
  //   localStorage.setItem("localData", JSON.stringify('setfoodStorage'));

  //   const update = localData?.filter((item) => {
  //     return item.name !== name;
  //   });
  //   localStorage.setItem("setfoodStorage", JSON.stringify(update));
  //   setValue("");
  // };

  const clearForm = (event) => {
    const image = event.target.image;
    image.value = "";
    setfoodStorage({
      name: "",
      price: "",
      image: "",
      details: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("this item", foodStorage);
    const localData = JSON.parse(localStorage.getItem("foodStorage")) || [];

    const newId = localData.length > 0 ? localData[localData.length - 1].id + 1 : 1;
    // console.clear();
  
    // console.log(localData, newId);

    setValue({...foodStorage, id: newId});

    // localStorage.setItem(
    //   "foodStorage",
    //   JSON.stringify([...localData, foodStorage])
    // );

    clearForm(event);
  };

  useEffect(() => {
    setLocalData(value);
  }, [value]);

  return (
    <>
    <Nav />
    <div className="admin-dashboard">

      <div className="profile-section">
        <div className="profile">
          <img src={Data.image} alt="" className="avatar" />
          <div>
            <h2>
              <span>NAME:</span> {Data.firstName} {Data.lastName}
            </h2>
            <p>
              <span>EMAIL:</span> {Data.email}
            </p>
            <button
              className="profileBtn"
              onClick={() => setShowForm((prev) => !prev)}
            >
              Edit Profile
            </button>
          </div>

        </div>
        <div className="blur">
          {showForm && (
            <form className="updateForm" action="submit">
              <input type="text" name="name" placeholder="User Name" />

              <input type="email" name="email" placeholder="change email" />

              <input type="file" name="picture" />
              <div>
                <button className="profileBtn">Update</button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setShowForm((prev) => !prev);
                  } }
                >
                  {" "}
                  <GiCancel />{" "}
                </button>
              </div>
            </form>
          )}
        </div>

        <div>
          <div>
            <div className="dashboard">
              <h1>Dashboard</h1>

              <button
                className="addBtn"
                onClick={() => setShowAddForm(!showAddForm)}
              >
                Add Product
              </button>
            </div>
          </div>

          {showAddForm && (
            <form action="" className="addProductForm" onSubmit={handleSubmit}>
              <input
                type="text"
                id="name"
                name="name"
                value={foodStorage.name}
                onChange={handleChange}
                placeholder="Product Name" />

              <input
                type="number"
                id="price"
                name="price"
                value={foodStorage.price}
                onChange={handleChange}
                placeholder="Price" />

              <input
                type="file"
                id="image"
                name="image"
                className="fileupload"
                onChange={(e) => uploadImage(e)}
                placeholder="Product Image" />

              <textarea
                name="details"
                id="details"
                value={foodStorage.details}
                onChange={handleChange}
                cols="60"
                rows="5"
              >
                Product details...
              </textarea>
              <div className="fBtn flex justify-between">
                <button className="addBt" type="submit">
                  Add
                </button>

                <button
                  className="addBt"
                  onClick={() => setShowAddForm(!showAddForm)}
                >
                  cancel
                </button>
              </div>
            </form>
          )}
          <>
            <div className="foodCards ">
              {localData?.map((foodStorage) => {
                // handle click navigation to product detail page.
                // const handDitails = () =>{(onClick) => {
                //   Navigate(`/details/${foodStorage.id}`)}}
                return (
                  <div key={foodStorage.name} className="catalog">
                    <img
                      src={foodStorage.image}
                      alt={foodStorage.name}
                      className="food-image" />
                    <h3 className="">
                      <span>NAME: </span>
                      {foodStorage.name}
                    </h3>
                    <p>
                      <span>PRICE: </span>${foodStorage.price}
                    </p>
                    <p>
                      <span>DESCRIPTION: </span>
                      {foodStorage.detials}
                    </p>
                    <div className="flex  justify-between">
                      <button className="cardBtn">
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        </div>
      </div>
    </div></>
  );
}
