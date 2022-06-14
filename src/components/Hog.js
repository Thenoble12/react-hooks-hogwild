import React, { useState } from "react";
import { View } from "react-native"
import { Tile, Text } from "react-native-elements";

function Hog({ hogData }) {
    
    const [ toggle, setToggle ] = useState(false) 

    const handleClick = () => {
        setToggle(!toggle);
    }
    
    return (
      <div>
         <Tile
         onClick={() => handleClick()}
         imageSrc={hogData.image}
         title={hogData.name}
         >
             <View
                style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}
             >
             {
                toggle ?  
                         (<Text>{hogData.specialty}</Text>,
                          <Text>{hogData.weight}</Text>,
                          <Text>{hogData.greased}</Text>,
                          <Text>{hogData["highest medal achieved"]}</Text>)
                       :
                         null
             }
             </View>
         </Tile>
      </div>
    )
}

export default Hog;