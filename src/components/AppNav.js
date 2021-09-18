import { useState } from "react";

import '../assets/css/app-nav.scss';

const AppNav = ({ setQuery }) => {
    const [tab, setTab] = useState('Home');
    const tabs = ["Home", "Likes"]
    return (
        <div className="app-body__nav">
            <ul className="links">
                {
                    tabs.map((item, i) =>
                        <li
                            key={i}
                            className={ item === tab ? 'active' : '' }
                            onClick={() => setTab(item)}>{ item }</li>
                    )
                }
            </ul>
            {
                tab === 'Home' &&
                <div className="search">
                    <input
                        type="text"
                        placeholder="Search for an image (planet, star, galaxy)"
                        onInput={(event) =>{
                            setQuery(event.target.value)
                        }}
                    />
                </div>
            }
        </div>
    );
}

export default AppNav;
