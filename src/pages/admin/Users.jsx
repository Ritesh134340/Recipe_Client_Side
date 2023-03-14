import React, { useEffect, useState } from "react";
import AdminNav from "../../components/AdminNav";
import {Heading} from "../../components/Heading"
import { BodyWrapper } from "../../styles/commonStyle/flexbody.styled";
import { UsersWrapper } from "../../styles/adminStyle/users.styled";
import storage from "../../utils/firebaseStorage";
import { ref, deleteObject } from "firebase/storage";
import { useSelector, useDispatch } from "react-redux";
import {
  getUser,
  filterUsers,
  deleteUser,
} from "../../redux/AdminRedux/action";
import Loading from "../../components/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Search from "../../components/Search";

const Users = () => {
  const [deleting, setDeleting] = useState(false);
  const { users, loading, filteredUser } = useSelector((state) => {

    return {
      users: state.AdminReducer.users,
      loading: state.AdminReducer.loading,
      filteredUser: state.AdminReducer.filteredUser,
    };
  });

  const token=useSelector((state)=>state.AuthReducer.token)

  const dispatch = useDispatch();

  const deleteFirebaseImage = (url) => {
    const imagePath = decodeURIComponent(url.split("/o/")[1].split("?")[0]);
    const storageRef = ref(storage, imagePath);

    return deleteObject(storageRef);
  };

  const handleSearch = (searchTerm) => {
    const filter =
      users &&
      users.filter((ele) => {
        
        return (
          ele.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          ele.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          ele.gender.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
      
    dispatch(filterUsers(filter));
  };

  const handleDelete = async (image, id) => {
    setDeleting(true);
    if (image.includes("/o/")) {
      deleteFirebaseImage(image).then(() => {
        setDeleting(false);
        dispatch(deleteUser(id,{headers:{'Authorization':`Bearer ${token}`}})).then((res) => {
          if (res.successCode === 200) {
            dispatch(getUser({headers:{'Authorization':`Bearer ${token}`}})).then(() => {
              setDeleting(false);
              toast.success("User deleted successfully !", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
            });
          } else if (res.errCode === 500) {
            toast.err(res.mesg, {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            setDeleting(false);
          }
        });
      });
    } else {
      setDeleting(true);
      dispatch(deleteUser(id,{headers:{'Authorization':`Bearer ${token}`}})).then((res) => {
        if (res.successCode === 200) {
          dispatch(getUser({headers:{'Authorization':`Bearer ${token}`}})).then(() => {
            setDeleting(false);
            toast.success("User deleted successfully !", {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          });
        } else if (res.errCode === 500) {
          toast.err(res.mesg, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setDeleting(false);
        }
      });
    }
  };

  useEffect(() => {
    users.length === 0 && dispatch(getUser({headers:{'Authorization':`Bearer ${token}`}}));
  }, []);

  return (
    <UsersWrapper>
      <AdminNav selected="users" />
      {deleting || loading ? (
          <Loading />
        ) :  <BodyWrapper>
        <div className="search-div">
          <Heading/>
          <div className="search-wrapper">
          <Search handleSearch={handleSearch} placeholder="Search user data" width="100%" />
          </div>
         
        </div>

          <table className="table-main">
           
            <thead className="thead">
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Remove</th>
              </tr>
            </thead>

            <tbody className="table-body">
              {filteredUser &&
                filteredUser.map((ele) => (
                  <tr key={ele._id} className="body-row">
                     <td>
                     <div className="pro-img" alt="profile" style={{backgroundImage:`url(${ele.image})`}} />
                     </td>
                     

                    <td>
                    <div className="name-with-email">
                    <div className="data-common-name">{ele.name}</div>
                    <div className="data-common">{ele.email}</div>
                    </div>
                    </td>
                    

                    
                    
                    <td >
                     <div className="data-common-gender">
                     {ele.gender}
                     </div>
                    </td>


                    <td>
                      <button
                        onClick={() => handleDelete(ele.image, ele._id)}
                        className="user-del-btn"
                      >
                        Delete
                      </button>
                    </td>

                  </tr>
                ))}
            </tbody>
          </table>
        
      </BodyWrapper>
      }
      <ToastContainer />
    </UsersWrapper>
  );
};

export default Users;
