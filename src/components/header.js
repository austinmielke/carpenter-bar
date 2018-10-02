import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div className="m-4">
    <div>
      <h1 className="border-4 border-pink p-4">
        <Link className="text-blue no-underline" to="/"> {siteTitle} </Link>
      </h1>
    </div>
  </div>
)

export default Header
