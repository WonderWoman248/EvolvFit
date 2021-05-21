import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import { login } from '../Actions/index';
function MenuBar() {
	const auth = useSelector((state) => state.login);
	const dispatch = useDispatch();
	function dispatcher(val) {
		dispatch(login(val));
	}
	function onLoginClick() {
		if (auth.username != '') {
			dispatcher({ username: '', password: '' });
		}
	}
	return (
		<div className='menu-bar'>
			<div className='header'>
				<div className='header-left'>
					<Link to='/EvolveFit'>
						<img style={{ width: '2rem' }} src={logo}></img>
					</Link>
					<Link to='/EvolvFit'>HOME</Link>
					<Link to='/EvolvFit/about'> ABOUT</Link>
					<Link to='/EvolvFit/contact'> CONTACT</Link>
				</div>
				<div className='header-right'>
					<Link to='/EvolvFit/login' onClick={onLoginClick}>
						{auth.username === '' ? 'LOGIN' : auth.username}
					</Link>
				</div>
			</div>
		</div>
	);
}

export default MenuBar;
