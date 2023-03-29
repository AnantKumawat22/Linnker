import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";
import styles from "../styles/groups.module.css";
import MyGroupCards from "@/components/MyGroupCards";
import Button from "@/components/atoms/button.atom";
import Image from "next/image";
import {
  faArrowRight,
  faCaretDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

export async function getServerSideProps() {
  try {
    const jsonResponse = await fetch(
      `${process.env.BASE_URL}/api/groups/fetchAllGroups`
    );
    const response = await jsonResponse.json();

    return {
      props: { groups: response?.groups || [] },
    };
  } catch (err) {
    return { props: { groups: [] } };
  }
}

const groups = ({ groups }) => {
  // Router
  const router = useRouter();

  // Recent Groups
  let newrecentgroups = [];

  // Get Current Date.
  var currentdate = new Date().toLocaleDateString("en-US");
  var startDate = new Date(currentdate);

  // Recent item get logic.
  groups.forEach((element) => {
    var eleDate = new Date(element?.date).toLocaleDateString("en-US");
    var endDate = new Date(eleDate);

    if ((startDate - endDate) / 1000 / 86400 <= 20) {
      newrecentgroups.push(element);
    }
  });

  const [searchgroup, setSearchGroup] = useState(groups);
  const [searchinput, setSearchInput] = useState("");
  const [recentgroups, setRecentGroups] = useState(newrecentgroups);
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

  // Horizontal Scroll - Recent Groups.
  const containerRef = useRef(null);
  useEffect(() => {
    if (searchinput != "") return;
    if( recentgroups.length < 6) return;
    
    const container = containerRef.current;

    const handleWheel = (e) => {
      container.scrollLeft += e.deltaY * 5;
      e.preventDefault();
    };

    container.addEventListener("mousewheel", handleWheel);

    return () => {
      container.removeEventListener("mousewheel", handleWheel);
    };
  }, [searchinput]);

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
              onMouseLeave={() => {
                setDropDown(false);
              }}
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

        <div className="w-100 h-100">
          {searchgroup?.length === 0 && (
            <div
              className="container d-flex justify-content-center align-items-center flex-column"
              style={{ minHeight: "500px" }}
            >
              <Image
                src="/img/No_Group_Found.gif"
                width={280}
                height={280}
              ></Image>
              <p style={{ fontSize: "20px", color: "grey" }}>No Group Found</p>
            </div>
          )}

          {searchgroup?.length !== 0 &&
            searchinput == "" &&
            recentgroups.length >= 6 && (
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
                    className={`${styles.wrapper} d-flex pt-3 pb-1 px-2`}
                    ref={containerRef}
                  >
                    {searchgroup?.map((group, idx) => (
                      <div key={group._id} className={`${styles.item}`}>
                        <MyGroupCards
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
                    <div
                      key={group._id}
                      className="col-12 col-md-6 col-lg-4 col-xxl-3"
                    >
                      <MyGroupCards
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
