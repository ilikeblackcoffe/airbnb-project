export default function Cards(props){
    
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.price < 10 ){
        badgeText = "FEATURED"
    }
    
    return(
        <div className="cards--div">
            
            {badgeText && <div className="card--badge">{badgeText}</div>}
            
           <img className="card--image" src={props.cardImg} />
           <div className="card--stats">
            <img className="star--card" src="src/images/airbnbSTAR.jpg"/>
            <span>{props.stats.rating}</span>
            <span className="gray">{props.stats.reviewcOUNT} •</span>
            <span className="gray">{props.location}</span>
           </div>
           <p className="cards--title">{props.title}</p>
           <p className="card--price"><span className="bold ">From ${props.price}</span> / person</p>
        </div>
    );
}