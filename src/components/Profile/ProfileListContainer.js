import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import ProfileList from "./ProfileList";

function ProfileListContainer(props) {
  const listInnerRef = useRef();
  const [currPage, setCurrPage] = useState(1);
  const [prevPage, setPrevPage] = useState(0);
  const [userList, setUserList] = useState([]);
  const [lastList, setLastList] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://randomuser.me/api/?page=${currPage}&results=10`
      );
      console.log(response.data.results);
      // console.log(response.data, "<<<");
      if (!response.data.results.length) {
        setLastList(true);
        return;
      }
      setPrevPage(currPage);
      setUserList([...userList, ...response.data.results]);
    };
    if (!lastList && prevPage !== currPage) {
      fetchData();
    }
  }, [currPage, lastList, prevPage, userList]);

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        setCurrPage(currPage + 1);
      }
    }
  };

  return (
    <ProfileList
      onScroll={onScroll}
      listInnerRef={listInnerRef}
      userList={userList}
    />
  );
}

export default ProfileListContainer;
