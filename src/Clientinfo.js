import React from 'react'

function Clientinfo() {
    return (
        <div>
                      
        <label>Client Name</label>
            <select>
      <option >client1</option>
      <option>client 2</option>
    </select>
    <input type="checkbox"></input>
    <label>Current Level</label>
    <select>
      <option >0</option>
      <option>1</option>
    </select>
    <label>Last Compas Eval Date</label>
    <input type="text"></input>
    <label>Next Compas Eval Date</label>
    <input type="text"></input>
    <br></br>
    
    <div className="filters">
        <b>FILTERS </b><label> Added BY  </label>
         <select>
      <option >admin 1</option>
      <option>admin 2</option>
    </select>
    <label>   Contact Type </label>
         <select>
      <option >admin 1</option>
      <option>admin 2</option>
    </select>

    </div>
        </div>
    )
}

export default Clientinfo
