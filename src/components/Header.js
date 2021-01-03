import React from 'react'

import logo from "../assets/logo.svg"
import profile from "../assets/profile.svg"

export default function Header() {
    return (
        <nav>
            <input type="checkbox" id="nav-toggle" />
            <label for="nav-toggle" class="nav-toggle-label">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </label>
            <div class="logo">
                <img src={logo} alt=""/>
                <h4>Intguine</h4>
            </div>
            <div class="link-container">
                <div class="nav-links">Home</div>
                <div class="nav-links">Brands</div>
                <div class="nav-links">Transporters</div>
                <div class="nav-links">
                    <div class="profile">     
                        <img src={profile} alt=""/>
                    </div>
                    <div class="profile-drop"></div>
                </div>
            </div>
        </nav>
    )
}
