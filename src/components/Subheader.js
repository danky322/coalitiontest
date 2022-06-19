import { useState } from 'react';
import '../CSS/Subheader.css';
import MenuLogic from './MenuLogic';

const Subheader = () => {
	const [animate, setAnimate] = useState(false);

	const addAnimation = e => {
		e.stopPropagation();
		setAnimate(!animate);
	};
	return (
		<div className='subheader'>
			<div className='wrapper'>
				<div className='menuNav'>
					<div className='logo noselect'>
						<span className='yourText'>YOUR</span>
						<span className='logoText'>LOGO</span>
					</div>
					<div className='subnav'>
						<MenuLogic />
					</div>
					<div
						className={`subnav showburgermenu ${
							animate ? 'hamSubNav' : null
						}`}>
						<div
							className={`hamburger_button ${
								animate ? 'close' : null
							}`}
							onClick={e => addAnimation(e)}>
							<div>
								<div></div>
								<div></div>
								<div></div>
							</div>

							<MenuLogic animate={animate} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Subheader;
