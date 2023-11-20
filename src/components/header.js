import React from "react";
import { Link } from 'gatsby'
import {Logo} from './logo/logo'

export default function Header() {
  return (
    <h2 className="header text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link to="/" className="hover:underline">
        <Logo/>
      </Link>
    </h2>
  )
}
