import Color from './color'

const   ColorList = ({colors, onDelete, rateColor}) => {
    if(!colors.length)
        return <h2>There are no colors. Add one</h2>
        
return (
   <>
    <h2>Showinig how many colors {colors.length}Colors</h2> 
    <div className='colors'>
        {/* Portray 3 components By Mapping throught this 3*/}
        {/* The problem was in here */}
        {colors.map(color => <Color key={color.id} colorObj ={color} onDelete={onDelete} rateColor = {rateColor} /> )}
    </div>
   
   </>

  )
}

export default ColorList