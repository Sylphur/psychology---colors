import { colorsData } from "../../shared/colorsData"
import AbstractColor from "../abstractColor/abstractColor"

function ColorOrange() {
  const content = colorsData.find((item) => item.name === 'Оранжевый')
  return (
    <>
      {content && <AbstractColor title={content?.name} description={content?.description} imageLink={content?.img} textColor={content.textColor}></AbstractColor>}
    </>
  )
}
export default ColorOrange