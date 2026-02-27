import './MContent.styles.css';

export default function MContent() {
  return (
<>
    <div className="MContent">
      <div className="content__left">
        <div className="contain">

                 <h1>A Bootstrap 5 template for modern businesses</h1>
       <p>Quicky design and customize responsive mobile-first sites with Bootstrap, the world's most popular frontend open source toolkit!</p>

       <div className="left__btn">
        <button className="start">
            Get Started
        </button>

        <button className="learn">
            Learn More
        </button>
       </div>
      </div>
        </div>
  

      <div className="content__right">
         <img src="../pic1.jpg" alt="" />
         
      </div>
    </div>
</>
  );
}

