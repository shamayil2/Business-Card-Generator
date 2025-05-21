import "./App.css"
import Favicon from "react-favicon"
import QRCode from "react-qr-code"
import {useState} from "react"
const App = () => {
  const [contactData,setContactData] = useState({})
  function contactDataFn(event){
    const id = event.target.id;
    const value = event.target.value;
    setContactData({...contactData,[id]:value})
  }

   const vcfData = `
  BEGIN:VCARD
  VERSION:3.0
  FN:${contactData.name}
  TEL;TYPE=CELL:${contactData.number}
  EMAIL:${contactData.email}
  END:VCARD
  `;

   function downloadVcfFile(){

    const blob = new Blob([vcfData],{ type: "text/vcard;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a");
    link.href = url;
    link.download = `${contactData.name}.vcf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
   
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
        <label htmlFor="linkedin">LinkedIn: </label><input onChange={(event)=>contactDataFn(event)} id="linkedin" type="text" /><br />
        <label htmlFor="github">Github: </label><input onChange={(event)=>contactDataFn(event)} id="github" type="text" /><br />
        <label htmlFor="twitter">Twitter: </label><input onChange={(event)=>contactDataFn(event)} id="twitter" type="text" /><br />


      </div>
      
      
      
      </div>
      <div className="business-card">
        <h2>Your Business Card</h2>
        <div className="card-container">
          <img src="https://placehold.co/150x150?text=Profile+Pic" alt="" /><br />
          <div className="details-container">
            <div>
            <h5>{contactData.name}</h5>
            <h6>{contactData.job}</h6>
            <p>{contactData.bio}</p>
            <p>{contactData.number}</p>
            <p>{contactData.email}</p>
            <p>{contactData.website}</p>
            <p><a target="_blank" href={contactData.linkedin}>Linkedin</a><a target="_blank" href={contactData.twitter}>Twitter</a><a target="_blank" href={contactData.github}>Github</a></p>
            </div>
            
          </div>
        </div>
        <div className="qr-div">
          <h2>Scan To Open Website</h2>
        <QRCode value={contactData.website? contactData.website:"null"} size={100}/>
        </div>
        <div className="copy-vcf">
        <button onClick={()=>downloadVcfFile()}>Download The Contact</button>
        </div>
        
      </div>
      </div>
     
    </div>
    </>
  )


}

export default App;
