import React from "react";
import logo from './logo4.png'
import { LogoText } from "./logoText";

export const Logo = ({withText}) => {
  return <div className="logo"><img src={logo}/>
  {withText && <LogoText/>}
  </div>
}