import React,{Component} from 'react';
import {AiFillHeart,AiOutlineShoppingCart,AiOutlineEye} from "react-icons/ai"
import beats from './images/beats.jpg';
import ItemIMG from './components/cardcomponents/itemIMG';
import BuyBidbutton from './components/cardcomponents/buybidButton';


const ItemCardglobal = (prodData) => {
    const {price,productName,imageFileUrl,sellingType,condition, onAdd, productdata,id} = prodData;
    const date = new Date();
    const addcart = <AiOutlineShoppingCart className='shoppingcartIcon'  onAdd={onAdd} productdata={prodData}/>;
    const watchlist = <AiOutlineEye className='shoppingcartIcon' />;
    return ( 
            
            <div className='cardContainer' key={id}>
                <p className='itemConditionTag'>{condition}</p>
                <p className='auctionTime'>{date.toLocaleString()}</p>
                <AiFillHeart  className='favoriteIcon'/>
                <ItemIMG src={imageFileUrl}/>
                <p className='itemName'>{productName}</p>
                <p className='itemBriefDscr'>True Wireless Noise Cancelling Earbuds</p>
                <p className='itemPrice'>¢{price}</p>
                
                <BuyBidbutton tag={sellingType === 'BuyNow'?'Buy Now': 'Bid Now'} onAdd={onAdd}  productdata={prodData}/>
                {sellingType === 'BuyNow'?addcart:watchlist}
            </div>
     );
}

export default ItemCardglobal;

/* <div className='productbox'>
                <div className='imagedisplay'>
                  <img src={dat.imageFileUrl} className='actimage' />
                </div>
                <div className='namesprice'>
                  <h3>{dat.productName}</h3>
                  <h3><strong>GHC {dat.price.toFixed(2)}</strong></h3>
                </div>
                <div className='addcartbtnsection'>
                  <button className='addcartbtn' onClick={() => onAdd(dat)}>Add to Cart</button>
                </div>*/