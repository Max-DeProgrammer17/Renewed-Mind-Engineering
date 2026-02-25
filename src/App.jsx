

import "./index.css"
export default function App(){
  return(
    <>
     <div className="container">
      <div className="container__left">

        <div className="left__cont">
            <br />
            <center><img src="../pic.jpg" alt="" /></center>
            <br />

          <center><h1 style={{fontSize: "1.6rem"}}>Nicolas <br />
            Hoffmann</h1></center>
            <br />
            <center><hr style={{width: "70px", height: "6px", backgroundColor:"blue"}}/></center>
             
             <br />
             <p>MARKETING <br /> STRATEGIST</p>
          </div>


      </div>
      <div className="container__right">
        <div className="right__cont">
        <br />
        <h1>Hello</h1>
        <br />
        <p className="intro">Here's who I am & what I do</p>
<br />
         <div className="btn">
          <button className="resume">RESUME</button>
          <button className="projects">PROJECTS</button>
         </div>

         <br />

         <p>As a marketing strategist, I help small businesses unlock their unique voice and grow their audience with simple, effective campaigns.
<br /> <br />
          After spending a decade in agency life, I realize that authentic storytelling makes all the difference. When I'm not crafting brand stories, you'll find me hiking local trails or experimenting with new recipes in my kitchen.
         </p>
         </div>
      </div>
     </div>
    </>
  )
  

}
