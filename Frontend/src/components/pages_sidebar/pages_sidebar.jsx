import "./pages_sidebar.css"

export const Sidebar=()=>{
    
    return <div className="sidebarDiv">
        <div className="sidebarHead">Products & Services</div>
       <select className="sidebarSelect">
           <option value="">Makeup</option>
           <option value="">Foundation</option>
           <option value="">Compact</option>
           <option value="">Pan Cake Foundation</option>
           <option value="">Pan Stick Foundation</option>
       </select>
       <br></br>
       <select  className="sidebarSelect">
       <option value="">Lipstick</option> 
            <option value="">Cerise Pink Lipstick</option>
            <option value="">Coral Red Lipstick</option>
            <option value="">Desert Rose Lipstick</option>
            <option value="">Eternal Red Lipstick</option>
            <option value=""> Muddy Pink Lipstick</option>
            <option value="">Pretty Purple Lipstick</option>
            <option value="">Radient Red Lipstick</option>
            <option value="">Baked Brick Lipstick</option> 
            <option value="">Cerise Pink Lipstick</option>
            <option value="">Coral Red Lipstick</option>
            <option value="">Desert Rose Lipstick</option>
            <option value="">Eternal Red Lipstick</option>
            <option value=""> Muddy Pink Lipstick</option>
            <option value="">Pretty Purple Lipstick</option>
            <option value="">Radient Red Lipstick</option>
       </select>
       <br></br>
       <select  className="sidebarSelect">
           <option value="">Lips Products</option>
           <option value="">Lip Gloss</option>
           <option value="">Lip Stick</option>
           <option value="">Lip Liner</option>
       </select>
       <br></br>
       <select  className="sidebarSelect">
           <option value="">Bleach Cream</option>
           <option value="">Fruit Bleach</option>
           <option value="">Gold Bleach</option>
           <option value="">Personal Bleach</option>
       </select>
       <br></br>
       <select  className="sidebarSelect">
           <option>Scrubs</option>
           <option value="">Fairness Scrub</option>
            <option value="">Mix Fruit Scrub</option>
            <option value="">Facial Scrub-Walnut & Apricot</option>
       </select>
       <br></br>
       <select  className="sidebarSelect">
           <option value="">Eyes Products</option>
           <option value="">Mascara</option>
           <option value="">Eye Shadow</option>
           <option value="">Eye Liner</option>
       </select>
       <br></br>
       <select  className="sidebarSelect">
           <option value="">LipCare</option>
           <option value="">Lip Balm</option>
           <option value="">Lip Gaurd</option>
       </select>
       <br></br>
       <select  className="sidebarSelect">
           <option value="">Traditional Items</option>
           <option value="">Sindoor</option>
           <option value="">Kajal</option>
       </select>
       
       <div className="sidebarViewAll"><h3>+View All</h3></div>
    </div>
}