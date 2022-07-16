import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

const mappingFunction = (arr:any[])=>{
  return arr.map((element)=>{
    if(!element.image){
      element.image = {}
      element.image.url = ''
    }
    return element
  })
}

export default function Gallery() {
  const [postsList, setPostsList] = useState<any[]>([]);
  const [postsListImages, setPostsListImages] = useState<any[]>([]);
  const fetchPosts = async()=>{
    const resolve = await axios.get<any[]>('https://api.thecatapi.com/v1/breeds');
    //setPostsList(resolve.data);
    const clone = JSON.parse(JSON.stringify(resolve.data));
    console.log(resolve.data);
    let mapper = mappingFunction(clone);
    console.log(mapper);
    setPostsList(mapper);
    
  }
  useEffect(()=>{
    fetchPosts();
  },[])
  return (
    <div className='gallery'>
        <div className='gallery__items'>
        {
          postsList.map(catPost=>
            <div className='gallery__item ' key={catPost.id}>
              <img src={catPost.image.url} alt={catPost.name} />
            </div>
          )}
               
        </div>
        {/* <div className='gallery__items'>
          <div className='gallery__item gallery__item_middle'>

          </div>
          <div className='gallery__item '>

          </div>
          <div className='gallery__item'>

          </div>
          <div className='gallery__item gallery__item_big'>

          </div>
          <div className='gallery__item'>

          </div>
        </div> */}
        {/* <div className='gallery__items gallery__items_rotate'>
          <div className='gallery__item gallery__item_middle'>

          </div>
          <div className='gallery__item '>

          </div>
          <div className='gallery__item'>

          </div>
          <div className='gallery__item gallery__item_big'>

          </div>
          <div className='gallery__item'>

          </div>
        </div> */}

      </div>
  )
}
