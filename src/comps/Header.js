import React, { useState } from 'react'

function Header() {

    const [searchText, setSearchText] = useState();
    const [searchedImage, setSearchedImage] = useState();

    let key = 'q4kZZMSqSc4_PR-zs4DAzm2pxiiG0H3V5t2uwxkowLo';

    async function searchImage(){
        let data = await fetch(`https://api.unsplash.com/search/collections?page=1&query=${searchText}&per_page=20&client_id=${key}`);
        let res = await data.json();
        setSearchedImage(res);
    }
    

    
  return (
    <nav>
        <h3>Infinite Scroller</h3>
        <div className="searchBar">
            <input 
                type="text" 
                placeholder="Search images..."
                onChange = {(e) => setSearchText(e.target.value)}
            />
            <button onClick={searchImage}>Search</button>
        </div>
    </nav>
  )
}

export default Header