

import { useEffect } from 'react';

// component import 
import NavBar from "./NavBar";
import Banner from "./Banner";
import styled from "@emotion/styled";
import { Box} from "@mui/material";
import Slide from './Slide';


import MidSlide from './MidSlide';
import MidSection from './MidSection';

import { getProducts } from "../../redux/action/productionActions";
import { useDispatch, useSelector } from "react-redux";


const Box1 = styled(Box)`
    padding : 10px ;
    background : #CCCCC

`


const Home =() => {
  const {products} = useSelector(state => state.getProducts);

  console.log(products);


  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getProducts()) 

  }, [dispatch])

    return (
       <>
         <NavBar/>
         <Box1>
            <Banner/>
            <MidSlide products= {products} title =  "Deal of the Day" timer = {true } />
            <MidSection/>
            <Slide products= {products} title =  "Discount for you" timer = {false} />

            <Slide products= {products} title =  "Suggested Item" timer ={false} />
            <Slide products= {products} title =  "Top Selection" timer ={false} />
            <Slide products= {products} title =  "Recommended" timer ={false}/>
            <Slide products= {products} title =  "Trending Offer" timer ={false}/>
            <Slide products= {products} title =  "Season Tops" timer ={false}/>
            <Slide products= {products} title =  "Top Deals on Accessories " timer ={false}/>


         </Box1>
       </>
    )
}
export default Home ; 