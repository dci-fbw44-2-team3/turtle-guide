/**
 * @desc Component to handle the contents into the Section
 */

import React, { useState, useEffect } from "react";

// * Imports
import SectionContentManager from "../../Components/SectionContentManager/SectionContentManager";
import Spinner from "../../Components/Spinner/Spinner";

// * Redux
import { useDispatch } from "react-redux";
import { userFecth } from "../../store/actions/userActions";
const AboutAdmin = (props) => {
  // destru
  const { sectionId, eventNameIdentifier } = props;
  // * Hooks
  const dispatch = useDispatch();
  // * States
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    async function fetchData() {
      // fetch data
      const res = await dispatch(userFecth());
      // set in state
      setUserInfo(res);
    }

    fetchData();

    // eslint-disable-next-line
  }, []);

  console.log("userInfo", userInfo);

  return (
    <>
      {!userInfo ? (
        Spinner
      ) : (
        // state null to use it as about admin manager
        <SectionContentManager
          state={{
            id: 100000,
            title: "title",
            slug: "slug",
            nameIdentifier: "nameIdentifier",
          }}
          userInfo={userInfo}
          isAboutAdmin={true}
        />
      )}
    </>
  );
};

export default AboutAdmin;
