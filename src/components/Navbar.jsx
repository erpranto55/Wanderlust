import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className='container mx-auto flex justify-between py-5 items-center'>
            <ul className='flex gap-3'>
                <li><Link href={'/'}>Home</Link> </li>
                <li><Link href={'/destination'}>Destination</Link> </li>
                <li><Link href={'/my-bookings'}>My Bookings</Link> </li>
                <li><Link href={'/add-destination'}>Add Destination</Link> </li>
            </ul>
            <div>
                <h1 className='text-blue-400 text-4xl font-bold '>WanderLust</h1>
            </div>
            <ul className='flex gap-3'>
                <li>
                    <Link href={'/profile'}>Profile</Link>
                </li>
                <li>
                    <Link href={"/login"}>Login</Link>
                </li>
                <li>
                    <Link href={'/signup'}>Signup</Link>
                </li>
            </ul>

        </nav>
    );
};

export default Navbar;