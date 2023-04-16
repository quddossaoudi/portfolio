import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub}  from 'react-icons/fa'
import {AiOutlineMail}  from 'react-icons/ai'
import {FaGitlab}  from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/quddossaoudi/" target="_blank"><BsLinkedin/></a>
        <a href="https://www.gitlab.com/quddossaoudi" target="_blank"><FaGitlab/></a>
        <a href="https://www.github.com/quddossaoudi" target="_blank"><FaGithub/></a>
        <a href="https://dribbble.com" target="_blank"><AiOutlineMail/></a>
    </div>
  )
}

export default HeaderSocials