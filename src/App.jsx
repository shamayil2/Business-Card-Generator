import "./App.css"
import {useState} from "react"
const App = () => {
  const [contactData,setContactData] = useState({})
  function contactDataFn(event){
    const id = event.target.id;
    const value = event.target.value;
    setContactData({...contactData,[id]:value})
  }
  return(
    <>
    <div className="row">
      <div className="container">
     <div className="user-details">
      <div><label htmlFor="name">Full Name:</label><br />
      <input onChange={(event)=>contactDataFn(event)} id="name" type="text" /><br /></div>
      <div><label htmlFor="job">Job Title:</label><br />
      <input onChange={(event)=>contactDataFn(event)} id="job" type="text" /><br /></div>
      <div><label htmlFor="bio">Write Your Bio :</label><br />
      <input onChange={(event)=>contactDataFn(event)} id="bio" type="text" /><br /></div>
      <div><label htmlFor="number">Phone Number:</label><br />
      <input onChange={(event)=>contactDataFn(event)} id="number" type="number" /><br /></div>
      <div><label htmlFor="email">Email Address:</label><br />
      <input onChange={(event)=>contactDataFn(event)} id="email" type="email" /><br /></div>
      <div><label htmlFor="website">Personal Website :</label><br />
      <input onChange={(event)=>contactDataFn(event)} id="website" type="text" /><br /></div>
      <div >
        <h4>Your Social Links:</h4>
        <label htmlFor="">LinkedIn: </label><input type="text" /><br />
        <label htmlFor="">Github: </label><input type="text" /><br />
        <label htmlFor="">Twitter: </label><input type="text" /><br />


      </div>
      
      
      
      </div>
      <div className="business-card">
        <h2>Your Business Card</h2>
        <div className="card-container">
          <img src="https://placehold.co/150x150?text=Profile+Pic" alt="" /><br />
          <div className="details-container">
            <p>{contactData.name}</p>
            <p>{contactData.job}</p>
            <p>{contactData.bio}</p>
            <p>{contactData.number}</p>
            <p>{contactData.email}</p>
            <p>{contactData.website}</p>
          </div>
        </div>
        
      </div>
      </div>
     
    </div>
    </>
  )


}

export default App;
