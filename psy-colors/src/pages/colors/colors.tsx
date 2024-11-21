import { colorsData } from "../../shared/colorsData"
import AbstractColor from "../abstractColor/abstractColor"
import './colors.css';

function ColorsPage() {
  return (
    <div className="colors-container">
      {colorsData.map((item) => (
        <AbstractColor title={item.name} description={item.description} imageLink={item.img} key={item.title} textColor={item.textColor}/>
      ))}
    </div>
  )
}
export default ColorsPage