import React from 'react';
import Categories from '../components/Categories';
import MenuItems from '../components/MenuItems';
import  Title from '../components/Title';

import {useState} from 'react'
import portfolios from '../components/Allportfolios';

const allCategories = ['All', ...new Set(portfolios.map((item)=>item.category))];
//console.log(allCategories)
function PortfolioPage() {
    const  [categories, setCategories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(portfolios);

const filter =  (category)=>{
    if(category ==='All'){
        setMenuItems(portfolios)
        return
    }
 const filteredData = portfolios.filter((item)=>{
     return category ===item.category
 })

 setCategories(filteredData);
}

    return (
        <div className="PortfoliPage">
            <div className="title">
                <Title title={'Portfolios'} span={"portfolios"}/>
            </div>
            <div className='portfolios-data'>
                <Categories filter={filter} categories={categories} />
                <MenuItems menuItem={menuItems} />

            </div>
        </div>
    )
}

export default PortfolioPage
