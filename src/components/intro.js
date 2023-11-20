import React from "react";
import {Logo} from './logo/logo'
import { LogoText } from "./logo/logoText";

export default function Intro() {
  return (
    <section className="intro flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="font-bold tracking-tighter leading-tight">
        <Logo withText/>
      </h1>
    </section>
  )
}
