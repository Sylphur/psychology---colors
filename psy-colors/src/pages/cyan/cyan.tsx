import { colorsData } from "../../shared/colorsData"
import AbstractColor from "../abstractColor/abstractColor"

function ColorCyan() {
  const content = colorsData.find((item) => item.name === 'Голубой')
  return (
    <>
      {content && <AbstractColor title={content?.name} description={content?.description} imageLink={content?.img} textColor={content.textColor}></AbstractColor>}
    </>
  )
}
export default ColorCyan