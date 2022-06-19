import { useState } from 'react';
import '../CSS/ContactSocial.css';

const ContactForm = () => {
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState({});

	const validate = () => {
		let errors = {};
		const phoneCheck = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
		const emailCheck = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;

		if (!name) {
			errors.name = 'You must enter a name';
		}

		if (!phone) {
			errors.phone = 'You must enter a phone number';
		} else if (!phone.match(phoneCheck)) {
			errors.phone = 'You must enter a correct phone number';
		}

		if (!email) {
			errors.email = 'You must enter an email';
		} else if (!email.match(emailCheck)) {
			errors.email = 'You must enter a correct email address';
		}

		if (!message) {
			errors.message = 'You must enter a message';
		} else if (message.length < 10) {
			errors.message = 'Your message be longer than 10 characters';
		}

		return errors;
	};

	const handleForm = e => {
		e.preventDefault();
		setErrors({});
		let checkErrors = validate();
		if (!Object.keys(checkErrors).length) {
			setLoading(true);
			//api call here to handle form
			setTimeout(() => {
				setLoading(false);
				setName('');
				setPhone('');
				setEmail('');
				setMessage('');
				alert('Message has been sent!');
			}, 3000);
		} else {
			setErrors(checkErrors);
			return;
		}
	};

	return (
		<div>
			<div className='socialTitle noselect'>CONTACT US</div>
			<div className='blackBar'></div>
			<form onSubmit={e => handleForm(e)}>
				<div className='name'>
					<input
						placeholder='Name *'
						type='text'
						onChange={e => setName(e.target.value)}
						value={name}
					/>
					<div className='errors'>
						{errors.name ? errors.name : ' '}
					</div>
				</div>
				<div className='phoneEmail'>
					<input
						placeholder='Phone *'
						type='tel'
						onChange={e => setPhone(e.target.value)}
						value={phone}
					/>

					<input
						placeholder='Email *'
						type='text'
						onChange={e => setEmail(e.target.value)}
						value={email}
					/>
				</div>
				<div className='errors double'>
					<span>{errors.phone ? errors.phone : ' '}</span>
					<span>{errors.email ? errors.email : ' '}</span>
				</div>
				<div className='message'>
					<textarea
						placeholder='Message *'
						onChange={e => setMessage(e.target.value)}
						value={message}
					/>
					<div className='errors'>
						{errors.message ? errors.message : ' '}
					</div>
				</div>

				<div className='buttonBox'>
					<button
						className={`submit ${loading ? 'loading' : null}`}
						type='submit'
						disabled={loading}>
						{loading ? 'SENDING...' : 'SUBMIT'}
					</button>
					<div
						className={`lds-ring ${
							loading ? 'displaySpinner' : null
						}`}>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default ContactForm;
