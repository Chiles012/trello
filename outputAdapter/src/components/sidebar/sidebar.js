import React,{Fragment, useState} from 'react'

const Sidebar = () =>{

    const [side, setSide] = useState(false);
    const showSidebar = () => setSide(!side);

      const open=()=>{
          side === false ? setSide(true) :setSide(false)
      }

    return(
        <Fragment>
            <div id='slide' className={side ? 'nav-menu active' : 'nav-menu'}>
                <i class="fas fa-plus" onClick={open}></i>
            </div>

        </Fragment>
    )
}
export default Sidebar