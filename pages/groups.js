import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";
import styles from "../styles/groups.module.css";
import MyGroupCards from "@/components/MyGroupCards";
import Button from "@/components/atoms/button.atom";
import Image from "next/image";
import { faArrowRight, faCaretDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import HorizontalScroll from "react-scroll-horizontal";

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
  // Router
  const router = useRouter();

  console.log("all groups", groups);

  const [searchgroup, setSearchGroup] = useState(groups);
  const [searchinput, setSearchInput] = useState("");
  const [recentgroups, setRecentGroups] = useState(null);
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
    if (e) e.preventDefault();
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

  const handleQuerySearch = () => {
    router.push({
      pathname: "/groups",
      query: {
        searchquery: "upsc",
      },
    });
  };

  // useEffect(() => {
  //   if(!router.query.length && searchinput !== ""){
  //     console.log("ayayaya");
  //     setSearchInput("");
  //   }
  //   handleSearchSubmit();
  // }, [router.query])

  // useEffect(() => {
  //   if(searchinput) {
  //     handleSearchSubmit();
  //     return;
  //   }
  //   let newsearchquery = router.query.searchquery;
  //   setSearchInput(newsearchquery);

  //   console.log(router.query)
  // }, [router.query, searchinput])
  return (
    <>
      <div className={styles.mainGroupPageDiv}>
        <div className="container d-flex my-5 flex-column flex-xl-row align-items-center justify-content-xl-between justify-content-center">
          <form
            onSubmit={handleSearchSubmit}
            action=""
            className={`${styles.searchBarDiv} shadow-sm bg-white`}
          >
            <FontAwesomeIcon icon={faSearch} />
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

          <div
            className={` ${styles.dropDownMain} d-flex flex-column justify-content-center align-items-center mt-2 m-xl-0`}
          >
            <div
              className={`${styles.dropDownDiv} shadow-sm bg-white py-2 px-3 d-flex flex-row align-items-center justify-content-evenly`}
              role="button"
              onClick={handleToggleDropDown}
            >
              <p className="my-0 mr-1" style={{ fontSize: "14px" }}>
                Search by: {selectedValue}
              </p>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
            <div
              className={`${dropdown ? "d-block" : "d-none"} ${
                styles.dropDownOptions
              } shadow-sm bg-white`}
            >
              <p
                role="button"
                onClick={() => {
                  setSelectedValue("tags");
                  setDropDown(false);
                }}
                className="text-center m-0 py-2"
              >
                Tags
              </p>
              <hr className="m-0" />
              <p
                onClick={() => {
                  setSelectedValue("groupname");
                  setDropDown(false);
                }}
                role="button"
                className="text-center m-0 py-2"
              >
                Group Name
              </p>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          {searchgroup?.length === 0 && (
            <div
              className="container d-flex justify-content-center align-items-center flex-column"
              style={{ minHeight: "500px" }}
            >
              <Image
                src="/img/No_Group_Found.gif"
                width={300}
                height={300}
              ></Image>
              <p style={{ fontSize: "25px", color: "grey" }}>No Group Found</p>
            </div>
          )}












          {searchgroup?.length !== 0 && searchinput == "" && (
            <>
              <div
                className="container mt-5 mb-2"
                style={{ minHeight: "450px" }}
              >
                <div className="d-flex flex-row justify-content-between align-items-center">
                  <h2 className="fs-2">Recent Added Groups</h2>
                  <FontAwesomeIcon
                    style={{ fontSize: "20px" }}
                    icon={faArrowRight}
                  />
                </div>

                {/* Recent Added Group */}
                <div
                  className="d-flex overflow-hidden border-1"
                  style={{ width: "100%", height: "400px" }}
                >
                  <HorizontalScroll className="py-3 px-2 d-flex">
                    {searchgroup?.map((group, idx) => (
                      <div
                        className=""
                        style={{
                          width: "300px",
                          height: "330px",
                          marginRight: "20px",
                        }}
                      >
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
                  </HorizontalScroll>
                </div>
              </div>
            </>
          )}
















          {searchgroup?.length !== 0 && (
            <>
              {/* All Whatsapp Group */}
              <div
                className="container mt-5 mb-5"
                style={{ minHeight: "450px" }}
              >
                <h2 className="fs-2 mb-4" onClick={handleQuerySearch}>
                  All WhatsApp Groups
                </h2>
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
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default groups;
