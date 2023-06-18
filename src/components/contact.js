import headphone from '../images/icons/headphone.png';
// import question from '../images/icons/question.png'
// import globe from '../images/icons/worldwide.png';
// import map from '../images/icons/world-map.png'


function Cont({classs, source, h3, email, tel}) {
    
    return(
        <div className={classs}>
            <img src={source} alt="icons" />
            <h3>{h3}</h3>
            <p>The brilliant reasons Travelog should be your one-stop-shop</p>
            <h5>{email}</h5>
            <h5>{tel}</h5>
        </div>
    );
}

const Contact = () => {
    return ( 
        <div className="container">
            <h3>Still have a question?</h3>
            <span>The brilliant reasons Travelog should be your one-stop-shop</span>
            <div className="sub-cont">
                <Cont 
                    classs="cont left"
                    source={headphone}
                    h3="For Sales"
                    email="sales@travelog.com"
                    tel="+254(123) 456-78-91" 
                />
                <Cont
                    classs="cont right"
                    // source={question}
                    h3="Help&Support"
                    email="help@travelog.com"
                    tel="+254(123) 456-78-91" 
                />
            </div>
        </div>
     );
}
 
export default Contact;
