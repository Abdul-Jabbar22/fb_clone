import React from 'react'
import Story from "./Story";
import "./StoryReel.css";


function StoryReel() {
  return (
    <div className='storyReel'>
        <Story 
        image ="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg"
        profileSrc ="https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d41570842e57e427ad44&v=4"
        title = "Abdul jabbar"/>
        
        <Story 
        image ="https://cdn.pixabay.com/photo/2021/06/17/19/07/tunnel-6344390_960_720.jpg"
        profileSrc ="https://cdn.pixabay.com/photo/2023/01/28/11/45/man-7750736_960_720.jpg"
        title = "Ahmed"/>
            
            <Story 
        image ="https://cdn.pixabay.com/photo/2016/04/12/10/14/sculpture-1324042_960_720.jpg"
        profileSrc ="https://cdn.pixabay.com/photo/2017/09/11/05/32/suit-2737911_960_720.jpg"
        title = "Ali"/>
        
            
        <Story 
        image ="https://cdn.pixabay.com/photo/2021/06/16/20/39/castle-6342154_960_720.jpg"
        profileSrc ="https://cdn.pixabay.com/photo/2019/03/05/11/06/prom-4035992_960_720.jpg"
        title = "Abdul Sattar"/>
        
            
        <Story 
        image ="https://cdn.pixabay.com/photo/2015/07/27/20/16/book-863418_960_720.jpg"
        profileSrc ="https://cdn.pixabay.com/photo/2021/02/06/08/54/man-5987375_960_720.jpg"
        title = "Abu Safyan"/>
        

    </div>
  )
}

export default StoryReel;