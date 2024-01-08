import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Header from './Header';

function Images() {
  //todo: declair state varriables
  const [images, setImages] = useState([]);
  const [count, setCount] = useState(10);

  let apiKey = "q4kZZMSqSc4_PR-zs4DAzm2pxiiG0H3V5t2uwxkowLo";

  //todo: useEffact
  useEffect(() => {
    fetchAPI();
  },[]);

  //todo: fetching images from API
  async function fetchAPI() {
    let data = await fetch(
      `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`
    );
    let res = await data.json();
    setImages((prevImages) => [...prevImages, ...res]);
  }

  //todo: logic for infinite scroll
  window.onscroll = () => {
    if ( window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight) {
          console.log("chutiya mayakn");
            setCount((prevCount) => prevCount+10);
      fetchAPI();
    }
  };

  //todo: render the component
  return (
    <>
    <Header/>
      <div className="image_container">
        {images.map((item) => {
          return (
            <div className="image_child" key={nanoid()}>
              <img
                src={item.urls.small}
                alt={item.alt_description}
                width="250px"
                height="200px" 
              />
              <div className="image_overlay">
                <div className="profile">
                  <img
                    src={item.user.profile_image.medium}
                    alt="profile_photo"
                  />
                  <div className="names">
                    <h4>{item.user.name}</h4>
                    <p>@{item.user.username}</p>
                    <p className="desc">{item.alt_description}</p>
                  </div>
                </div>
                <div className="download">
                  <a href={item.urls.small_s3}>
                    <i className="fa-solid fa-cloud-arrow-down"></i>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Images;
