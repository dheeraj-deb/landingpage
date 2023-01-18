import React from 'react'
import Logo from '../../assets/logo.svg'
function Header() {
    return (
        <header className='flex items-center justify-between max-w-7xl mx-auto py-4'>
            <div>
                <img src={Logo} alt="logo" className='w-32 lg:w-auto' />
            </div>
            <nav>
                <ul className='flex items-center justify-center gap-2'>
                    <li><button>Features</button></li>
                    <li><button>Team</button></li>
                    <li><button>Sign In</button></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header