import { colorsData } from "../../shared/colorsData"
import AbstractColor from "../abstractColor/abstractColor"

function ColorYellow() {
  const content = colorsData.find((item) => item.name === 'Желтый')
  return (
    <>
      {content && <AbstractColor title={content?.name} description={content?.description} imageLink={content?.img} textColor={content.textColor}></AbstractColor>}
    </>
  )
}
export default ColorYellow