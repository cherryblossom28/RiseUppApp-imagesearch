import './index.css';
import React from 'react';

const Header = () => {
    return (
        <nav className='navbar'>
            <h1 className='riseup-heading'>RiseUppApp</h1>
            <div className='profile-container'>
                <img className='user-profile-image'
                    src='https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg'
                />
                <span>Guest</span>
            </div>
        </nav>
    );
}

export default Header;

