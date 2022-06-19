import '../CSS/Contact.css';
import ContactForm from './ContactForm';
import ContactSocial from './ContactSocial';

const Contact = () => {
	//programatically change to Links when site is expanded to incorporate these pages
	return (
		<section className='contact'>
			<div className='wrapper'>
				<div className='sitetree'>
					Home / Who we Are /
					<span className='contacttext'> Contact</span>
				</div>

				<header className='contactHeader'>
					<h1 className='noselect'>Contact</h1>
					<div>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Aliquam posuere ipsum nec velit mattis elementum. Cum
						sociis natoque penatibus et magnis dis parturient
						montes, nascetur ridiculus mus. Maecenas eu placerat
						metus, eget placerat libero.
					</div>
				</header>

				<div className='contactBody'>
					<div className='contactForm'>
						<ContactForm />
					</div>
					<div className='contactSocial'>
						<ContactSocial />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
