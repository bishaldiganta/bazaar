import "./footer.css"

const  Footer = () => {
    return ( 


     <div>
        <div className="left-container">
            <h3>Tulos</h3>
            <p>Get newsletter update for upcoming product and best discount for all item</p>
            
            <input type="text" placeholder=" Your Email"></input>
            <button>Submit</button>
        </div>

        <div className="right-container">
                <ul>
                 <li className="list-titles">Product</li>
                 <li>Tshirt</li>
                 <li>Jacket</li>
                 <li>Shoes</li>
                 <li>Pants</li>
                 <li>Sunglasses</li>
                 <li>Tuxedo</li>
                 </ul>
                 <ul>
                 <li className="list-titles">Categories</li>
                 <li>Man</li>
                 <li>Woman</li>
                 <li>Kids</li>
                 <li>Gift</li>
                 <li>New Arrival</li>
                 </ul>
                 <ul>
                 <li className="list-titles">Our Social Media</li>
                 <li>Instagram</li>
                 <li>Facebook</li>
                 <li>Youtube</li>
                 <li>Twitter</li>
                 
                 </ul>

                
        </div>

     </div>

     );
}
 
export default Footer;