import React from 'react';

import './top-nav.css';

export default function TopNav(props) {
    return (
        <nav>
            <ul className="clearfix">
                <li>
                    <a onClick = { () => props.setGameMode(2) } className="what" href="#">
                        What?
                    </a>
                </li>
                <li>
                    <a onClick = { () => props.setGameMode(3) }className="new" href="#">
                        + New Game
                    </a>
                </li>
            </ul>
        </nav>
    );
}

//on click goes to instructions mode = 2