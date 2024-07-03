import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import moment from "moment";
import { MdModeEdit } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";
import { Carousel, IconButton } from "@material-tailwind/react";
import PopUp from "../components/Popup";
import noImage from '../assets/no-image.png'
import ViewPopup from "../components/ViewPopup";
import { IoMdCloseCircle } from "react-icons/io";
import ReadOnlyField from "../components/ReadOnlyField";
const Posts = () => {
  const [allPosts, setPosts] = useState([]);
  const [openUpdateRole, setOpenUpdateRole] = useState(false);
  const [edit, setEdit] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [openPopup1, setOpenPopup1] = useState(false);

  const [selectedItem, setSelectedItem] = useState({})
  const images = [
    "https://via.placeholder.com/400x300?text=Image+1",
    "https://via.placeholder.com/400x300?text=Image+2",
    "https://via.placeholder.com/400x300?text=Image+3"
];

const [currentImageIndex, setCurrentImageIndex] = useState(0);
const [openView, setOpenView] = useState(false);
const [viewItem, setViewItem] = useState({});

const handlePrevious = () => {
    const newIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
};

const handleNext = () => {
    const newIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
};
  const HandleRemovePopUp = () => setOpenPopup(false);
  const [updateUserDetails, setUpdateUserDetails] = useState({
    email: "",
    name: "",
    role: "",
    _id: "",
  });
  const fetchUsers = async () => {
    let users = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/api/v1/admin/requestedPosts`,
      {
        method: "GET",
      }
    );

    let dataResponse = await users.json();
    if (dataResponse.Data.length > 0) {
      setPosts(dataResponse.Data);
    }
    //   if (dataResponse.error) {
    //     toast(dataResponse.message);
    //   }
    console.log("dataresponse=->", allPosts);
  };

  //   const ITEMS_PER_PAGE = 10;

  //   const [currentPage, setCurrentPage] = useState(1);

  //   const handleClick = (page) => {
  //     setCurrentPage(page);
  //   };
  // const images = [
  //   {
  //     _id: 1,
  //     src: "https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     link: "link here",
  //   },
  //   {
  //     _id: 2,
  //     src: "https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     link: "link here",
  //   },
  //   {
  //     _id: 3,
  //     src: "https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     link: "link here",
  //   },
  //   {
  //     _id: 4,
  //     src: "https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     link: "link here",
  //   },
  //   {
  //     _id: 5,
  //     src: "https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     link: "link here",
  //   },
  //   {
  //     _id: 6,
  //     src: "https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     link: "link here",
  //   },
  //   {
  //     _id: 7,
  //     src: "https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     link: "link here",
  //   },
  //   {
  //     _id: 8,
  //     src: "https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     link: "link here",
  //   },
  //   {
  //     _id: 9,
  //     src: "https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     link: "link here",
  //   },
  //   {
  //     _id: 10,
  //     src: "https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     link: "link here",
  //   },
  //   {
  //     _id: 11,
  //     src: "https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     link: "link here",
  //   },
  //   {
  //     _id: 12,
  //     src: "https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     link: "link here",
  //   },
  //   {
  //     _id: 13,
  //     src: "https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     link: "link here",
  //   },
  //   {
  //     _id: 14,
  //     src: "https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     link: "link here",
  //   },
  //   {
  //     _id: 15,
  //     src: "https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     link: "link here",
  //   },
  // ];
  //   const currentItems = images.slice(
  //     (currentPage - 1) * ITEMS_PER_PAGE,
  //     currentPage * ITEMS_PER_PAGE
  //   );

  //   const totalPages = Math.ceil(images.length / ITEMS_PER_PAGE);

  useEffect(() => {
    fetchUsers();
    console.log("------->")
  }, []);

  const handleApprovedStatus = async (e) => {
    try {
      console.log("item ==>", e.target.dataset.value);
      let itemid = e.target.dataset.value;
      let payload = {
        status: "Approved",
      };
      let url = `${import.meta.env.VITE_API_BASE_URL}/api/v1/admin/${itemid}/updatePostStatus`;
      let approveStatus = await fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      console.log("reee==>", approveStatus);
      if (approveStatus.status === (200 || 201)) {
        toast.success("Post Approved");
        // allPosts.filter(item => toString(item._id) != itemid);
        let updatePosts = allPosts.filter((item) => item._id != itemid);
        console.log("all==>", updatePosts);

        setPosts(updatePosts);
        setViewItem(false);

      }
    } catch (error) {
      console.log("Error in approving the status", error);
    }
  };
  const openDialog = (item) =>{
    // let item = e.target.dataset.value;
    // console.log("item==>", item)
    setSelectedItem(item);
    setOpenPopup(true)
  }
  const openDialog1 = (item) =>{
    // let item = e.target.dataset.value;
    console.log("item==>", item)
    setSelectedItem(item);
    setOpenPopup1(true)
  }
  const newFormat = () => {
    console.log("0000000=>", viewItem.petDob)
    let date = new Date(viewItem.petDob);
    console.log("Milliseconds = " + date.toString());
    return date.toString();
  }
  const handleRejectedStatus = async (e) => {
    try {
      console.log("item ==>", e.target.dataset.value);
      let itemid = e.target.dataset.value;
      let payload = {
        status: "Rejected",
      };
      let url = `${import.meta.env.VITE_API_BASE_URL}/api/v1/admin/${itemid}/updatePostStatus`;
      let approveStatus = await fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (approveStatus.status === (200 || 201)) {
        toast.error("Post Rejected");
        let updatePosts = allPosts.filter((item) => item._id != itemid);

        setPosts(updatePosts);  
        setViewItem(false);
          }
    } catch (error) {
      console.log("Error in approving the status", error);
    }
  };
  const handleUpdatedPost = async(updatedPosts) => {
    let tempPosts = allPosts.map(post => post._id === updatedPosts._id ? updatedPosts : post);
    //  setPosts((preItems) => {
    //   preItems.map((item) => (item.id === updatedPosts.id ? updatedPosts : item) )
    //  })
    setPosts(tempPosts);
    console.log("updatedPosts", updatedPosts)

     console.log("&&&&&&&&&&&=====>", allPosts);
  }
  const handleViewPopup = (item) => {
    console.log("itesm -->", item)
    setOpenView(true);
    setViewItem(item)
  }
  return (
    // src/App.js
    <div className="">
   { !openView &&  <div className="container mx-auto p-4">
        <h1 className="font-bold text-center text-2xl m-4">
          Posts to be Approved or Reject
        </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
            {allPosts.length > 0 ? allPosts.map((item) => (
              <div key={item._id}>
                <div className="relative ">
                 
                  <div className="cursor-pointer h-40 w-full" onClick={() => handleViewPopup(item)} >
                 {item.petImages.length > 0 ? <img
                    src={item.petImages[0]}
                    alt={item.breedName}
                   className="h-40 w-full object-contain"
                  /> : <img
                  src={noImage}
                  alt="No images"
                  className="h-40 w-full object-contain"
                  />}
                  </div>
                  <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">
                    {item.breedName}
                  </div>
                  <div
                    className="absolute bottom-0 right-0 bg-black bg-opacity-50 text-white p-2 cursor-pointer"
                    data-value={item._id}
                    onClick={() => openDialog(item)}
                  >
                    <MdEditSquare />
                  </div>
                </div>
                <p>{item.Description}</p>
                <div className="flex justify-between">
                  <button
                    className="bg-green-600 w-1/2 px-6 py-3 m-4 duration-200  text-white hover:scale-105 "
                    data-value={item._id}
                    onClick={handleApprovedStatus}
                  >
                    Approve
                  </button>
                  <button
                    className="w-1/2 px-6 py-3 m-4 duration-200  text-white hover:scale-105 bg-red-500"
                    data-value={item._id}
                    onClick={handleRejectedStatus}
                  >
                    Reject
                  </button>
                </div>
              </div>
            )) : (
              <div className="text-bold text-3xl items-center"> No Posts found</div>
            )}
          </div>
      </div>}
     { openView &&<div className="max-w-2xl mx-auto my-10 p-6 rounded-lg shadow-md ">
          <button className="mb-4 text-right left-0 top-0" onClick={() => setOpenView(false)}>
          <IoMdCloseCircle className="text-indigo-700 text-xl" />
        </button>
            <div className="relative">
                <img 
                    className="h-48 w-full object-contain" 
                    src={viewItem.petImages[currentImageIndex]} 
                    alt="Product"
                />
                <button 
                    onClick={handlePrevious} 
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none"
                >
                    &lt;
                </button>
                <button 
                    onClick={handleNext} 
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none"
                >
                    &gt;
                </button>
            </div>
            <div className="p-6 max-h-96 overflow-y-auto">
                <h2 className="text-2xl font-semibold text-indigo-700">{viewItem.breedName}</h2>
                <p className="text-gray-600 mt-4">
                    {viewItem.Description}
                </p>
                
            <ReadOnlyField label ="Adoption" value={viewItem.Adoption}/>
            <ReadOnlyField label ="City" value={viewItem.city}/>
            <ReadOnlyField label ="PetColor" value={viewItem.petColor}/>
            <ReadOnlyField label ="PetDob" value={newFormat}/>
            <ReadOnlyField label ="PetGender" value={viewItem.petGender}/>
            <ReadOnlyField label ="PetName" value={viewItem.petName}/>
            <ReadOnlyField label ="PetType" value={viewItem.petType}/>
            <ReadOnlyField label ="Price" value={viewItem.price}/>
            <ReadOnlyField label ="Weight" value={viewItem.weight}/>
            <ReadOnlyField label ="WhatsAppNumber" value={viewItem.whatsAppNumber}/>
            </div>
        </div>}
      <PopUp openPopUp={openPopup} closePopUp={HandleRemovePopUp} selectedItem={selectedItem} onSave={handleUpdatedPost} />
    </div>
  );
};

export default Posts;
