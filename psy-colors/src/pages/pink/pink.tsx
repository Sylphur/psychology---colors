import { colorsData } from "../../shared/colorsData"
import AbstractColor from "../abstractColor/abstractColor"

function ColorPink() {
  const content = colorsData.find((item) => item.name === 'Розовый')
  return (
    <>
      {content && <AbstractColor title={content?.name} description={content?.description} imageLink={content?.img} textColor={content.textColor}></AbstractColor>}
    </>
  )
}
export default ColorPink