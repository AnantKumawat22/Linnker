import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import styles from "../styles/groups.module.css";
import MyGroupCards from "@/components/MyGroupCards";
import Button from "@/components/atoms/button.atom";
import Image from "next/image";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export async function getServerSideProps() {
  try {
    const jsonResponse = await fetch(
      "http://localhost:3000/api/groups/fetchAllGroups"
    );
    const response = await jsonResponse.json();
    return {
      props: { groups: response?.groups || [] },
    };
  } catch (err) {
    console.log(err, "err");
    return { props: { groups: [] } };
  }
}

const groups = ({ groups }) => {
  const [searchgroup, setSearchGroup] = useState(groups);
  const [searchinput, setSearchInput] = useState("");
  const [dropdown, setDropDown] = useState(false);
  const [selectedValue, setSelectedValue] = useState("tags");

  const handleSearchInput = (event) => {
    let newsearchinput = event.target.value;
    setSearchInput(newsearchinput);
    if (newsearchinput == "") {
      setSearchGroup(groups);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("searhc", searchinput, selectedValue);

    let filterData = "";

    if (selectedValue === "tags") {
      let checktag;
      let mapData = groups.map((group) => {
        checktag = group.tags.filter((eachtag) =>
          eachtag.toLowerCase().includes(searchinput?.toLowerCase())
        );

        return checktag.length > 0 ? group : false;
      });
      filterData = mapData.filter((data) => data);
    } else if (selectedValue === "groupname") {
      filterData = groups.filter(
        (group) =>
          group.name.toLowerCase().includes(searchinput?.toLowerCase()) && group
      );
    }
    console.log(filterData, "data");
    setSearchGroup(filterData);
  };

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleToggleDropDown = () => {
    setDropDown(!dropdown);
  };

  const handleJoinGroupBtn = (link) => {
    window.open(link, "_blank");
  };

  return (
    <>
      <div className={styles.mainGroupPageDiv}>
        <div className="container d-flex my-5 flex-column flex-xl-row align-items-center justify-content-xl-between justify-content-center">
          <form
            onSubmit={handleSearchSubmit}
            action=""
            className={`${styles.searchBarDiv} shadow-sm bg-white`}
          >
            <i className="bi bi-search"></i>
            <input
              autoComplete="off"
              placeholder="Search for group or tags"
              type="search"
              onChange={handleSearchInput}
              value={searchinput}
              name="searchinput"
              className={`${styles.searchInp}`}
            />
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </form>

          <div className={` ${styles.dropDownMain} d-flex flex-column justify-content-center align-items-center mt-2 m-xl-0`}>
            <div
              className={`${styles.dropDownDiv} shadow-sm bg-white py-3 px-3 d-flex flex-row align-items-center justify-content-evenly`}
              role="button"
              onClick={handleToggleDropDown}
            >
              <p className="my-0 mr-1">Search by: Tags</p>
              <FontAwesomeIcon icon={faCaretDown} />
              
            </div>
            <div
                className={`${dropdown ? "d-block" : "d-none"} ${
                  styles.dropDownOptions
                } shadow-sm bg-white`}
              >
                <p role="button" className="text-center m-0 py-2">Tags</p> <hr className="m-0" />
                <p role="button" className="text-center m-0 py-2">Group Name</p>
              </div>
          </div>

          {/* <div className={styles.dropDownDiv}>
            <select value={selectedValue} onChange={handleSelectChange}>
              <option className='dropdown-item' value='tags' name='tags'>
                Tags
              </option>
              <option
                className={styles.selectOptions}
                value='groupname'
                name='groupname'
              >
                Group Name
              </option>
            </select>
          </div> */}
        </div>

        <div className="container mt-5 mb-5" style={{ minHeight: "450px" }}>
          <h2 className="fs-2 mb-4">All WhatsApp Groups</h2>
          <div className="row gy-5">
            {searchgroup?.map((group, idx) => (
              <div className="col-12 col-md-6 col-lg-4 col-xxl-3">
                <MyGroupCards
                  key={group._id}
                  group={group}
                  renderAction={() => (
                    <Button
                      onClick={() => handleJoinGroupBtn(group.link)}
                      className={`btn btn-primary btn-lg`}
                      value="Join Group"
                    ></Button>
                  )}
                />
              </div>
            ))}
            {searchgroup?.length === 0 && (
              <div
                className="container d-flex justify-content-center align-items-center flex-column"
                style={{ minHeight: "400px" }}
              >
                <Image
                  src="/img/No_Group_Found.gif"
                  width={300}
                  height={300}
                ></Image>
                <p style={{ fontSize: "25px", color: "grey" }}>
                  No Group Found
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default groups;
