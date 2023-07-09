
const Card = ({name,age,img}) => {




return(
<div>

<img src={img} style={{width:"150px"  }} alt="" />
<h2>{name}</h2>
<h2>{age}</h2>

  </div>
  ) 
};

export default Card
