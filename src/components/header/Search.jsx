import { useState , useEffect } from "react";
import { InputBase, Box , styled, List, ListItem } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {  useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/action/productionActions";
import { Link } from "react-router-dom";

const SearchController = styled(Box)`
  border-radius: 2px;
  margin-left: 10px;
  width: 38%;
  background-color: #fff;
  display: flex;
`;
const InputSearchBase = styled(InputBase)`
    padding-left : 20px;
    width: 100% ; 
    font-size : unset ; 
`

const SearchIconWrapper = styled(Box)`
      margin-left: auto;
  padding: 5px;
  display: flex;
  color: blue;
     
`
const ListWrapper = styled(List)`
     position: absolute;
  color: #000;
  background: #FFFFFF;
  margin-top: 36px;
`;

const Search = () => {

    const [text, setText ] = useState('');

    const {products } = useSelector(state => state.getProducts) ; 

    const dispatch = useDispatch() ;
    useEffect(() =>{
        dispatch(getProducts())

    }, [dispatch])


    const getText = (text) => {
        setText(text) ; 
    }
    return (
        <SearchController >
            <InputSearchBase 
                placeholder="Search for products , Brands & More"
                onChange={(e) => getText(e.target.value)}
                value={text}
            />
            <SearchIconWrapper >
                <SearchIcon />
            </SearchIconWrapper>
            {
                text && <ListWrapper>
                    {
                        products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                            <ListItem>
                            <Link to = {`/product/${product.id}`}
                            //  onclick={() => setText('')}
                            style={{ textDecoration:'none', color:'inherit'}}
                        onClick={() => setText('')}  
                            >
                                {product.title.longTitle}
                                </Link>
                            </ListItem>
                        ))
                    }
                </ListWrapper>
            }

        </SearchController>
    );
}

export default Search ;