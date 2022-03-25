import React from "react";
import styles from './Header.module.css' 

function Header(props) {

    let skills = props.header.skill.map(skill=>{
        return(
            <li key={skill.id}>
                <span className={styles.nameSkill}>{skill.name}:</span>
                <span className={styles.descSkill}> {skill.describe}</span>
            </li>
        )
    }) 

    return (
         <div className={styles.profile}>
             <div className={styles.header}>
                 <img  src={props.header.imgFon} alt="backroundFoto"/>
             </div>
            <div className={styles.profileDescription}>
                <div className={styles.profileDescriptionBlock}>
                    <div className={styles.avatar}>
                        <img className={styles.img} src={props.header.img} alt="icon"/> 
                    </div>
                    <div className={styles.description}>
                        <h2>{props.header.name}</h2>
                        <ul>
                            {skills}
                        </ul>
                    </div>
                </div>
                <hr/>
            </div>
        </div>
    )
}

export default Header