import { colorsData } from "../../shared/colorsData"
import AbstractColor from "../abstractColor/abstractColor"

function ColorRed() {
  const content = colorsData.find((item) => item.name === 'Красный')
  return (
    <div className="colors-container">
      {content && <AbstractColor title={content?.name} description={content?.description} imageLink={content?.img}></AbstractColor>}
    </div>
  )
}
export default ColorRed