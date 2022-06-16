import React, { useState } from "react";
import { Card, Image } from "semantic-ui-react";

function Hog({ hogData }) {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div onClick={() => handleClick()}>
      {toggle ? (
        <Card>
          <Image
            src={hogData.image}
            alt={`${hogData.name} the Hog`}
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>{hogData.name}</Card.Header>
            <Card.Meta>
              <span className="weight">{hogData.weight}kg</span>
            </Card.Meta>
            <Card.Description>{hogData.specialty}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <h4>{hogData.greased}</h4>
          </Card.Content>
        </Card>
      ) : (
        <Card>
          <Image src={hogData.image} alt={`${hogData.name} the Hog`} />
          <Card.Content>
            <Card.Header>{hogData.name}</Card.Header>
          </Card.Content>
        </Card>
      )}
    </div>
  );
}

export default Hog;
