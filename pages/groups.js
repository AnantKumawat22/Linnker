import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import styles from "../styles/groups.module.css";
import MyGroupCards from "@/components/MyGroupCards";
import Button from "@/components/atoms/button.atom";
import Image from "next/image";

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
  const [selectedValue, setSelectedValue] = useState("tags");

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault();

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
          group.name.toLowerCase().includes(searchinput?.toLowerCase()) &&
          group
      );
    }
    setSearchGroup(filterData);
  }

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <div className={styles.mainGroupPageDiv}>
        <div className={styles.searchAndDropDownDiv}>
          <form
            onSubmit={handleSearchSubmit}
            action=""
            className={`${styles.searchBarDiv} shadow-sm bg-white`}
          >
            <input autoComplete="off"
              placeholder="Search for group or tags"
              type="text"
              onChange={handleSearchInput}
              value={searchinput}
              name="searchinput"
              className={`${styles.searchInp}`}
            />
            <button type="submit" className="btn btn-primary rounded-pill">Search</button>
          </form>
          <div className={styles.dropDownDiv}>
            <select value={selectedValue} onChange={handleSelectChange}>
              <option className={styles.selectOptions} value="tags" name="tags">
                Tags
              </option>
              <option
                className={styles.selectOptions}
                value="groupname"
                name="groupname"
              >
                Group Name
              </option>
            </select>
          </div>
        </div>

        <div className="container mt-5 mb-5">
          <h2>All WhatsApp Groups</h2>
          <div className={`${styles.allgroupcard} mt-4`}>



            {searchgroup.length > 0 ? (
              searchgroup?.map((group, idx) => (
                <MyGroupCards
                  key={group._id}
                  group={group}
                  renderAction={(handleJoinGroupBtn) => (
                    <Button
                      onClick={handleJoinGroupBtn}
                      className={`btn btn-primary btn-lg`}
                      value="Join Group"
                    ></Button>
                  )}
                />
              ))
            ) : (
              <>
                <div className="container d-flex justify-content-center align-items-center flex-column" style={{minHeight: '300px'}}>
                <Image src="/img/No_Group_Found.gif" width={300} height={300}></Image>
                <p style={{fontSize: '25px', color: 'grey'}}>No Group Found</p>
                </div>
              </>
            )}




          </div>
        </div>
      </div>
    </>
  );
};

export default groups;
