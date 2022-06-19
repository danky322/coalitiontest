import '../CSS/ContactForm.css';

import { ReactComponent as Facebook } from '../icons/facebookGrey.svg';
import { ReactComponent as Twitter } from '../icons/twitterGrey.svg';
import { ReactComponent as LinkedIn } from '../icons/linkedinGrey.svg';
import { ReactComponent as Pinterest } from '../icons/pinterestGrey.svg';

const ContactSocial = () => {
	return (
		<div>
			<div className='socialTitle noselect'>REACH US</div>
			<div className='blackBar'></div>
			<div className='addressBlock'>
				<div className='addressTitle'>Coalition Skills Test</div>
				<div className='address'>
					535 La Plata Street
					<br />
					4200 Argentina
				</div>
				<br />
				<div className='phonenumbers'>Phone: 385.154.11.28.38</div>
				<div className='faxnumbers'> Fax: 385.154.35.66.78</div>

				<div className='socialIcons'>
					<Facebook className='facebook' />
					<Twitter className='twitter' />
					<LinkedIn className='linkedin' />
					<Pinterest className='pinterest' />
				</div>
			</div>
		</div>
	);
};

export default ContactSocial;
