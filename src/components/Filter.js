import { useDispatch } from "react-redux";
import { carFilter } from "../Redux/filter/filterSlice";

const Brands = [
    "Buick", "Volvo", "HUMMER", "Subaru", "Mitsubishi", "Nissan",
    "Lincoln", "GMC", "Hyundai", "MINI", "Bentley", "Mercedes-Benz",
    "Aston Martin", "Pontiac", "Lamborghini", "Audi", "BMW",
    "Chevrolet", "Chrysler", "Kia", "Land"
];

export const Search = () => {
    const dispatch = useDispatch();
    const handleFilterChange = selectedBrand => dispatch(carFilter(selectedBrand));
    return (
      <form className="select-search">
      <div>
          <label htmlFor="brand">Car brand</label>
          <select name="brand" id="brand" >
              <option key='all' value=''>Enter the text</option>
              {Brands.map(brand => (
                  <option key={brand} value={brand}>{ brand }</option>
              ))}
          </select>
      </div>
       <div>
       <label htmlFor="price">Price/ 1 hour</label>
       <select name="price" id="price">
           <option value="30">30</option>
           <option value="40">40</option>
           <option value="50">50</option>
           <option value="60">60</option>
           <option value="70">70</option>
           <option value="80">80</option>
           <option value="90">90</option>
           <option value="100">100</option>
           <option value="110">110</option>
           <option value="120">120</option>
           <option value="130">130</option>
           <option value="140">140</option>
           <option value="160">160</option>
           <option value="180">180</option>
           <option value="200">200</option>
           <option value="220">220</option>
           <option value="240">240</option>
           <option value="260">260</option>
           <option value="280">280</option>
           <option value="300">300</option>
           <option value="320">320</option>
           <option value="340">340</option>
           <option value="360">360</option>
           <option value="380">380</option>
           <option value="400">400</option>
           <option value="500">500</option>
       </select>
   </div>
   <div>
            <span>Сar mileage / km</span>
            <label htmlFor="from">From</label>
            <input type="number" id="from" name="from" />
            
            <label htmlFor="to">To</label>
            <input type="number" id="to" name="to"></input>
        </div>
        <button type="submit" onChange={evt => handleFilterChange(evt.target.value)}>Search</button>
   </form>
  )
}