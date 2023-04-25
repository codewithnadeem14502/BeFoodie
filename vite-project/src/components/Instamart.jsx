import React, { useState } from 'react'
import first from '../assets/D4.png'
const Section = ({title,descption,isVisible,setIsVisible}) => {
  // const [isVisible,setIsVisible] = useState(false);
  return (
    <>
     <div  className=' p-2 m-2 border border-black'>
      <h1 className='text-xl font-bold'> {title}</h1>
      {
       isVisible == false ?
<button onClick={() =>{
  setIsVisible(true);
}} className='font-semibold underline'>Show</button> :
<button onClick={() =>{
  setIsVisible(false);
}} className='font-semibold underline'>Hide</button>
        
        
      }
        
      { isVisible && <p> {descption}</p>}
     </div>
     </>
   )
  }
  const Instamart = () => {
   const [visibleSection,setIsVisibleSection] = useState("about");
    return (
      <div className='bg-white'>
      <h1 className=' font-bold '> Instamart</h1>
        <div className='bg-white mt-32 '> 
    <Section
      title={"About Instamart"}
      descption={"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat." }
      isVisible={visibleSection === "about"}
      setIsVisible={() =>setIsVisibleSection (visibleSection === 'about' ? " ": "about")}
     
    />
    <Section 
      title={"Team Instamart"}
      descption={"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat." }
      isVisible={visibleSection === "team"}
      setIsVisible={() =>setIsVisibleSection (visibleSection === 'team' ? " ": "team")}
    />
    <Section 
      title={"Careers"}
      descption={"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat." }
      isVisible={visibleSection === "career"}
      setIsVisible={() =>setIsVisibleSection (visibleSection === 'career' ? " ": "career")}
    />
    </div>
    <img src={first} className='w-[800px] h-[700px]  ml-56' alt="" />
    </div>
  )
}

export default Instamart
