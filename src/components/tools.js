import React from 'react'
import { FaTools } from "react-icons/fa";
import { SiVisualstudiocode, SiCodepen } from "react-icons/si";
import { VscExtensions } from "react-icons/vsc";


const tools = () => {
    return (
        <div className="development-tools">
            <div id="header">
                <h3>Development tools<span><FaTools /></span></h3>
                <div id="underline"></div>
            </div>
            <div className="tools">
                <div className="vsCode tools-div">
                    <h3><SiVisualstudiocode /></h3>
                    <h4><a href='https://code.visualstudio.com/' rel="noopener noreferrer" target='_blank'>Visual Studio Code</a></h4>
                    <p>I'm only using this code editor and I'm <br />completely in love with this! See the next resource for my<br /> setup.</p>
                </div>
                <div className="vsCodeExt tools-div">
                    <h3><VscExtensions /></h3>
                    <h4><a href='https://github.com/pranam1603/vsCode-Extensions' rel="noopener noreferrer" target='_blank'>My Visual Studio Code Setup</a> </h4>
                    <p>Check out exactly what theme, extensions and <br />settings I use for VSCode in the projects and<br /> for coding.</p>
                </div>
                <div className="codePen tools-div">
                    <h3><SiCodepen /></h3>
                    <h4><a href='https://codepen.io/' rel="noopener noreferrer" target='_blank'>Codepen</a></h4>
                    <p>Codepen has become an essential tool for me to<br /> quickly test out some ideas or do some tests.<br /> I use it for testing APIs.</p>
                </div>
            </div>
        </div>
    )
}

export default tools
