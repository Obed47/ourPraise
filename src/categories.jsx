import React from 'react'
import CategoryCard from './categoryCard'
import './categories.css'
export default function Categories() {
  return (
    <div className='catMain'>
        <h3 className='explore'>Explore!</h3>
        <div data-aos="fade-up" className="allCategories">
        <CategoryCard 
        title="Songs of the church" 
        description='A huge collection of songs of praise and worship from "songs of the church"
        ,"Songs of Praise and harmony etc"'/>

        <CategoryCard 
        title="Chants De Victoire" 
        description='A huge collection of songs of praise and worship from "songs of the church"
        ,"Songs of Praise and harmony etc"'/>

        <CategoryCard 
        title="Choruses" 
        description='A huge collection of songs of praise and worship from "songs of the church"
        ,"Songs of Praise and harmony etc"'/>
        </div>
        

    </div>
  )
}
