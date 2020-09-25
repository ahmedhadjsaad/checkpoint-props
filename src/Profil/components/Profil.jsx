import React from 'react';



const Profil = (props) => {
    let HandleName=()=>{
        return alert(props.FullName)
    }
    return ( <div>
        <img src="https://thumbs.dreamstime.com/b/ic-ne-d-homme-conception-de-personne-dessin-de-vecteur-73697014.jpg" alt="" onClick={()=>HandleName()}/>
    </div> );
}
 
export default Profil;