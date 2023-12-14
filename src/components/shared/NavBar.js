'use client'
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image';
import myImage from '@/assets/my-image.jpg'
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';
import Google from 'next-auth/providers/google';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

const drawerWidth = 240;
const navItems = [
    {
        "id": 1,
        "item": "Home",
        "link": "/"
    },
    {
        "id": 2,
        "item": "About",
        "link": "/about"
    },
    {
        "id": 3,
        "item": "Contact",
        "link": "/contact"
    },
    {
        "id": 4,
        "item": "GitHub",
        "link": "https://github.com/Asif3359"
    }
];

const NavBar = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const session = useSession();
    const router = useRouter();
    const storedData = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('password')) : null;
    const passwordRef = React.useRef(null);
    const adminPass = process.env.NEXT_PUBLIC_ADMIN_PASS;

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const singInWithGoogle = async () => {
        try {
            const response = await signIn('google');
            const user = session.data.user;
            // console.log(response);

            const userData = {
                name: user.name,
                email: user.email,
            };

            const mongoResponse = await fetch('https://asif-server-site.vercel.app/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            console.log('MongoDB Response:', mongoResponse);

            if (mongoResponse.ok) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Message has been sent",
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                console.error('Failed to send user data to MongoDB');
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Something went wrong",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (error) {
            console.error('Error signing in:', error);
        }
    }

    const handleSignIn = (modalId) => {
        document.getElementById(modalId).showModal();

    };

    const handleFrom = (event, modalId) => {
        event.preventDefault();
        const form = event.target;
        const password = form.elements.password.value;


        if (adminPass === password) {
            // console.log(password);
            const dataToStore = { key: password };
            localStorage.setItem('password', JSON.stringify(dataToStore));
            router.push('/admin');
            document.getElementById(modalId).close();
        }
    }

    const handleCloseModal = (modalId, event) => {
        event.preventDefault();
        document.getElementById(modalId).close();

    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography className="flex justify-center" variant="h6" sx={{ my: 2 }}>
                <Image src={myImage}  alt='my image' width={40} height={40} priority={true}  className=' w-14 h-14 rounded-full' ></Image>
            </Typography>
            <Divider />
            <List  >
                {navItems.map((item) => (
                    <ListItem key={item.id} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <Link href={item.link} key={item.id} sx={{ color: '#fff' }} className='hover:underline ' >
                                {item.item}
                            </Link>
                        </ListItemButton>
                    </ListItem>
                ))}
                {
                    session.status === "authenticated" ?
                        <>
                            <button className='hover:underline flex justify-start items-start pl-4 w-full py-2 hover:bg-gray-200 ' onClick={() => signOut('google')}>Sing out</button>
                        </>
                        :
                        <>
                            <button className='hover:underline flex justify-start items-start pl-4 w-full py-2 hover:bg-gray-200 ' onClick={singInWithGoogle}>Sing In</button>
                        </>
                }
                {/* <button  onClick={(() => document.getElementById('my_modal_5').showModal(), handleSignIn)}>Sing In </button> */}
                <button className='hover:underline flex justify-start items-start pl-4 w-full py-2 hover:bg-gray-200 ' onClick={() => handleSignIn('modal-1')}>
                    Admin
                </button>
                <dialog id="modal-1" className="modal  modal-middle text-black ">
                    <div className="modal-box">
                        <div className='flex justify-center items-center flex-col'>
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">There Is No Functionality yet</p>
                        </div>
                        <div className=" w-full space-y-3 ">
                            <form onSubmit={(e) => handleFrom(e, 'modal-1')} method="dialog" className='space-y-3 flex  justify-center items-center flex-col'>
                                <input id='password' type="password" placeholder='Your Pass' name='password' className='p-2 w-full border-2 border-black rounded-lg text-black focus:text-white my-2 focus:bg-black' />
                                <div className='flex justify-center gap-3 items-center'>
                                    <input type='submit' value='submit' className="btn  btn-sm bg-white border-black hover:bg-black hover:border-white text-black hover:text-white" />
                                    {/* Submit
                                    </button> */}
                                    <button className="btn btn-sm bg-white border-black hover:bg-black hover:border-white text-black hover:text-white" onClick={(e) => handleCloseModal('modal-1', e)}>
                                        Close
                                    </button>

                                </div>
                            </form>
                        </div>
                    </div>
                </dialog>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;



    return (
        <Box >
            <Box sx={{ display: 'flex' }}  >
                <CssBaseline />
                <AppBar component="nav" sx={{ backgroundColor: "black" }}>
                    <Toolbar className='flex justify-between items-center container mx-auto' >
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            <IconButton aria-label="delete">
                                <Image src={myImage} alt='my image' width={40} height={40} priority={true}  className=' w-14 h-14 rounded-full' ></Image>
                            </IconButton>
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'flex', gap: 20 } }}>
                            {navItems.map((item) => (
                                <Link href={item.link} key={item.id} sx={{ color: '#fff' }} className='hover:underline ' >
                                    {item.item}
                                </Link>
                            ))}
                            {
                                session.status === "authenticated" ?
                                    <>
                                        <button className='hover:underline ' onClick={() => signOut('google')}>Sing Out</button>
                                    </>
                                    :
                                    <>
                                        <button className='hover:underline ' onClick={singInWithGoogle}>Sing In</button>
                                    </>
                            }
                            <button className='hover:underline' onClick={() => handleSignIn('modal-2')}>
                                Admin
                            </button>
                            <dialog id="modal-2" className="modal-bottom w-fit sm:modal-middle text-black ">
                                <div className="modal-box shadow-none w-full ">
                                    <div className='flex justify-center items-center flex-col'>
                                        <h3 className="font-bold text-lg">Hello!</h3>
                                        <p className="py-4 text-center">There Is No Functionality yet</p>
                                    </div>
                                    <div className=" w-full flex space-y-3 ">
                                        <form onSubmit={(e) => handleFrom(e, 'modal-2')} className=' space-y-3 flex justify-center items-center flex-col' method="dialog">
                                            <input type="password" name='password' placeholder='Your Pass' className='p-2 w-full border-2 border-black rounded-lg text-black focus:text-white my-2 focus:bg-black' />
                                            <div className='flex justify-center gap-3 items-center'>
                                                <input type="submit" value='submit' className="btn btn-sm bg-white border-black hover:bg-black hover:border-white text-black hover:text-white" />
                                                {/* Submit
                                                </button> */}
                                                <button className="btn btn-sm bg-white border-black hover:bg-black hover:border-white text-black hover:text-white" onClick={(e) => handleCloseModal('modal-2', e)}>
                                                    Close
                                                </button>

                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </Box>
                        <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
                            <IconButton aria-label="delete">
                                <Image src={myImage} alt='my image' width={40} height={40} className='rounded-full' ></Image>
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>

                <nav  >
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}

                    >
                        {drawer}
                    </Drawer>
                </nav>

            </Box>
        </Box>
    );
}

NavBar.propTypes = {
    window: PropTypes.func,
};

export default NavBar;
