export  function AdminHotelOwner() {
    const [owner, setOwner] = useState("");
    const [hotelName, setHotelName] = useState();
    const [phonenumber, setphonenumber] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [hotelImage, sethotelImage] = useState("");
  
  
  
  
   
    async function addHotelOwner()
    {
        const ownerobj = {
            owner , hotelName ,phonenumber ,email ,address, hotelImage
        }
        try {
            const result = await axios.post('/api/hotel/owner' , ownerobj)
        } catch (error) {
            
        }
    }
    return (
      <div className="row">
       
          <div className="col-md-5">
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Hotel Owner"
              value={owner}
              onChange={(e) => {
                setOwner(e.target.value);
              }}
            />
  
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Hotel name"
              value={hotelName}
              onChange={(e) => {
                setHotelName(e.target.value);
              }}
            />
  
            <input
              type="text"
              className="form-control mt-1"
              placeholder="phone number"
              value={phonenumber}
              onChange={(e) => {
                setphonenumber(e.target.value);
              }}
            />
  
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
  
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Address"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
           <input
              type="text"
              className="form-control mt-1"
              placeholder="Image of Hotel"
              value={hotelImage}
              onChange={(e) => {
                sethotelImage(e.target.value);
              }}
            />
                      <button className="btn btn-primary" onClick={addHotelOwner}>ADD Owner</button>
  
          </div>
  
  
          
  
        
          
          
          
       
      </div>
    );
  }
  