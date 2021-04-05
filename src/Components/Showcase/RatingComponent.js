import React, {useEffect} from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const RatingComponent = ()=>{

  const [value, setValue] = React.useState(2);


  const randomValue = ()=>{
    const newValue = Math.floor(Math.random() * (6-1 + 1)) + 1
    return newValue
  }

  useEffect(() => {
    const newValue= randomValue()

    setValue(newValue)
  }, [])

  return(

    <div className="rating">

        <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating name="read-only" value={value} readOnly />
      </Box>
      
    </div>
  )
}

export default RatingComponent;