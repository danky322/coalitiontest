import React from 'react';
import '../CSS/Header.css';

const Header = () => {
	return (
		<div className='header'>
			<div className='wrapper'>
				<nav className='nav'>
					<div className='contactheader'>
						<span className='callus'>CALL US NOW!</span>
						<span className='number'>385.154.11.28.35</span>
					</div>
					<div className='membersNav noselect'>
						<span className='login'>LOGIN</span>
						<span className='signup'>SIGN UP</span>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default React.memo(Header);
