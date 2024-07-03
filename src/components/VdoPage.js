
import React from 'react';
import BsTabs from './BsTabs';
const VdoPage = () => {
  return (
    <>
    <div className='container justify-center items-center m-auto flex p-16 flex-wrap gap-11' style={{backgroundColor:"#072F57"}}>
       <div><iframe className='h-80 w-80 mx-auto'
          src="https://www.youtube.com/embed/IZLp-TZyDkQ?si=63crnZgrt0EElM7l"
          title="YouTube video"
          allowfullscreen
         ></iframe>
         </div>
          <BsTabs/>
       </div>
       </>
  )
}
export default VdoPage