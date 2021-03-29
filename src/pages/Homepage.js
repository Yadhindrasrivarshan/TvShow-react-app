import React from 'react'

import {useContext} from 'react'
import Loader from '../components/Loader'
import ShowContext from '../context/shows/showsContext'
import ListItem from '../components/ListItem'
import Searchbar from '../components/Searchbar'
const Homepage = () => {
    const showsContext=useContext(ShowContext)
    const {loading,shows}=showsContext
    return (
        <div className="homepage">
            <Searchbar/>
            {loading?<Loader/>:
             (
                <div className="homepage__list">
                  {shows.map((item) => (
                    <ListItem
                      key={item.show.id}
                      id={item.show.id}
                      image={
                        item.show.image
                          ? item.show.image.medium
                          : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
                      }
                      name={item.show.name}
                      rating={
                        item.show.rating.average
                          ? item.show.rating.average
                          : "No rating"
                      }
                    />
                  ))}
                </div>
              ) 
                }
        </div>
    )
}

export default Homepage
