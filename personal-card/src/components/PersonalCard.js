import React from "react";
import './PersonalCard.css'
import emailIcon from "../images/email-icon.png"
import linkedInIcon from "../images/linkedIn.png"
import personalImg from "../images/personal_image.jpg";
import facebookIcon from "../images/FacebookIcon.png";
import gitHubIcon from "../images/GitHub Icon.png";
import twitterIcon from "../images/TwitterIcon.png";

export default function PersonalCard() {
    return (
        <div className="card">
            <img src={personalImg} className="card--img" alt="personal"/>
            <h1 className='card--name'>Ahmed Saed</h1>
            <p className='card--job'>Web Developer</p>
            <a className='card--link' href='https://ahmedsaed.me'>ahmedsaed.me</a>

            <div> 
                <a href="mailto:ahmedsaed2652003@gmail.com" target="_blank" rel="noreferrer">
                <button className='card--btn white'><img src={emailIcon} alt="email" className='btn--icon'/>Email</button>
                </a>

                <a href="https://linkedin.com/in/ahmedsaed26" target="_blank" rel="noreferrer">
                    <button className='card--btn blue'><img src={linkedInIcon} alt="email" className='btn--icon'/>LinkedIn</button>
                </a>
            </div>

            <div className='card--text'>
                <h3>About Me</h3>
                <p>I'm a Computer Science Student at Misr University For Science and Technology (MUST) 🏛 . I'm a passionate learner who's always willing to learn and work across technologies and domains 💡.</p>
                <h3>Interests</h3>
                <p>I'm currently into Artificial Intelligence 🤖 and I also do some Web Development 🕸️.</p>
            </div>

            <footer className='footer'>
                <a href="https://www.facebook.com/ahmedsaed26" target="_blank" rel="noreferrer"><img src={facebookIcon} alt='facebook' /></a>
                <a href="https://www.twitter.com/ahmed_saed26" target="_blank" rel="noreferrer"><img src={twitterIcon} alt='twitter' /></a>
                <a href="https://www.github.com/ahmedsaed" target="_blank" rel="noreferrer"><img src={gitHubIcon} alt='GitHub' /></a>
            </footer>
        </div>
    )
}