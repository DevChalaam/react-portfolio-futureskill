import React from 'react'
import  style from './Portfolio.module.css'
import Tilt from 'react-parallax-tilt';

function Portfolio() {
  return (
    <div className={style.portfolio_container}>
        <p className={style.portfolio_title}>Portfolio</p>
        <div className={style.portfolio_list}>
            <Tilt className={style.portfolio_item} scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                <img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt="#" />
                <p>Project title</p>
            </Tilt>

            <Tilt className={style.portfolio_item} scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                <img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt="#" />
                <p>Project title</p>
            </Tilt>

            <Tilt className={style.portfolio_item} scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                <img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt="#" />
                <p>Project title</p>
            </Tilt>

            <Tilt className={style.portfolio_item} scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                <img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt="#" />
                <p>Project title</p>
            </Tilt>

            <Tilt className={style.portfolio_item} scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                <img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt="#" />
                <p>Project title</p>
            </Tilt>

            <Tilt className={style.portfolio_item} scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                <img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt="#" />
                <p>Project title</p>
            </Tilt>
        </div>
    </div>
  )
}

export default Portfolio
