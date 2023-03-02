import React from 'react'
import { Link } from '../link/Link';

export const Header = () => {
    return (
        <div className="ui secondary pointing menu">
          <Link href="/select" className="item">
            Select
          </Link>
          <br />
          <Link href="/button" className="item">
            Button
          </Link>
        </div>
      );
}
