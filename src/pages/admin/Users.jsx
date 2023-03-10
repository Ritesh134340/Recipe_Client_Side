import React, { useEffect, useState } from "react";
import AdminNav from "../../components/AdminNav";
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
      dispatch(deleteUser(id)).then((res) => {
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
      <BodyWrapper>
        <div className="search-div">
          <Search handleSearch={handleSearch} placeholder="Search user data" />
        </div>

        {deleting || loading ? (
          <Loading />
        ) : (
          <table className="table-main">
            <thead className="thead">
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Remove</th>
              </tr>
            </thead>

            <tbody className="table-body">
              {filteredUser &&
                filteredUser.map((ele) => (
                  <tr key={ele._id} className="body-row">
                    <td className="image-data">
                      <img className="pro-img" src={ele.image} alt="profile" />
                    </td>
                    <td className="data-common">{ele.name}</td>
                    <td className="data-common">{ele.email}</td>
                    <td className="data-common">{ele.gender}</td>

                    <td className="data-common">
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
        )}
      </BodyWrapper>
      <ToastContainer />
    </UsersWrapper>
  );
};

export default Users;
