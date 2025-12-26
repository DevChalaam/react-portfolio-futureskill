import React from 'react'
import styles from './Service.module.css'
import { FaCode, FaPaintbrush, FaDesktop } from 'react-icons/fa6'

function Service() {
  return (
    <div className={styles.service_con}>
      <h3 className={styles.service_title}>My Services</h3>
      <div className={styles.service_list}>
        <div className={styles.service_items}>
            <FaCode />
            <h4>Web Development</h4>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni recusandae enim consectetur sapiente necessitatibus neque eos ipsa ullam minima nulla.
            </p>
        </div>

        <div className={styles.service_items}>
            <FaPaintbrush />
            <h4>Web Design</h4>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni recusandae enim consectetur sapiente necessitatibus neque eos ipsa ullam minima nulla.
            </p>
        </div>

        <div className={styles.service_items}>
            <FaDesktop />
            <h4>Front-end Consulting</h4>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni recusandae enim consectetur sapiente necessitatibus neque eos ipsa ullam minima nulla.
            </p>
        </div>
      </div>
    </div>
  )
}

export default Service
