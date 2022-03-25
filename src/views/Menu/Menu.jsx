import React from "react";
import { NavLink, } from "react-router-dom";
// icons
import { IoMdContact } from 'react-icons/io';
import {IoFastFoodOutline} from  'react-icons/io5'
import { FaRegNewspaper, FaHospitalUser } from 'react-icons/fa'
import { SiGooglemessages} from 'react-icons/si'
import { MdNotifications} from 'react-icons/md'
import {AiFillSetting} from "react-icons/ai"
import {RiArticleLine} from "react-icons/ri"

import styles from './Menu.module.css' 

function Menu() {
    return (
        <div className={styles.menu}>
            <div className={styles.m_header}>
                <h2>Goniec</h2>
            </div>
            <div className={styles.m_main}>
                <ul>
                    <li>

                        <NavLink to="/" className={(navData) => (navData.isActive ? styles.activeLink : 'none')}> <span> <IoMdContact/> Профіль</span></NavLink>  
                    </li>
                    <li>  
                        <NavLink to="/posts" className={(navData) => (navData.isActive ? styles.activeLink : 'none')}> <span> <RiArticleLine/> Пости</span></NavLink>  
                    </li>
                    <li>
                         <NavLink to="/dialogs" className={(navData) => (navData.isActive ? styles.activeLink : 'none')}> <span> <SiGooglemessages/> Бесіди</span></NavLink>  
                    </li>
                    <li>
                        <NavLink to="/messages" className={(navData) => (navData.isActive ? styles.activeLink : 'none')}> <span> <MdNotifications/> Сповіщення</span></NavLink>
                    </li>
                    <li>
                        <NavLink to="/worker" className={(navData) => (navData.isActive ? styles.activeLink : 'none')}> <span> <FaHospitalUser/> Працівники</span></NavLink>
                    </li>
                    <li>
                        <NavLink to="/settings" className={(navData) => (navData.isActive ? styles.activeLink : 'none')}> <span> <AiFillSetting/> Налаштування</span></NavLink>
                    </li>
                    <li>
                        <NavLink to="/food" className={(navData) => (navData.isActive ? styles.activeLink : 'none')}> <span> <IoFastFoodOutline/> Їжа</span></NavLink>
                    </li>
                    <li>
                        <NavLink to="/news" className={(navData) => (navData.isActive ? styles.activeLink : 'none')}> <span> <FaRegNewspaper/> Новини</span></NavLink>
                    </li>
                </ul>
            </div>
            <div className={styles.m_footer}></div>
        </div>

    )
}


export default Menu