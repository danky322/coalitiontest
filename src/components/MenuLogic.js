/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useEffect } from 'react';

const MenuLogic = ({ animate }) => {
	useEffect(() => {
		// Logic for dropdown menu
		const pos = document.querySelectorAll('.pos');
		const menus = document.querySelectorAll('.menu');
		const subnav = document.querySelector('.subnav');
		const subMenuParent = document.querySelectorAll('.subMenuParent');
		const subMenu = document.querySelectorAll('.subMenu');

		for (let i = 0; i < pos.length; i++) {
			//on hover close all other menus
			pos[i].addEventListener('mouseenter', () => {
				for (let i = 0; i < pos.length; i++) {
					pos[i].children[1].classList.remove('show');
					pos[i].children[1].classList.add('hide');
				}
				//open target menu
				pos[i].children[1].classList.add('show');
				pos[i].children[1].classList.remove('hide');
			});
		}

		for (let i = 0; i < menus.length; i++) {
			//on mouse leave of menu of subnav close menus
			menus[i].addEventListener('mouseleave', () => {
				menus[i].classList.remove('show');
				menus[i].classList.add('hide');
				subMenu[i].classList.remove('show');
				subMenu[i].classList.add('hide');
			});

			for (let i = 0; i < subnav.length; i++) {
				subnav[i].addEventListener('mouseleave', () => {
					menus[i].classList.remove('show');
					menus[i].classList.add('hide');
					subMenu[i].classList.remove('show');
					subMenu[i].classList.add('hide');
				});
			}
		}

		//SUB MENU LOGICAL

		// Logic for dropdown SMALLER MENU

		for (let i = 0; i < subMenuParent.length; i++) {
			//on hover close all other menus
			subMenuParent[i].addEventListener('mouseenter', () => {
				for (let i = 0; i < subMenuParent.length; i++) {
					subMenuParent[i].children[1].classList.remove('show');
					subMenuParent[i].children[1].classList.add('hide');
				}
				//open target menu
				subMenuParent[i].children[1].classList.add('show');
				subMenuParent[i].children[1].classList.remove('hide');
			});
		}

		return () => {
			//CLEAN UP ON COMPONENT CLOSE
			for (let i = 0; i < pos.length; i++) {
				pos[i].removeEventListener('mouseenter', () => {
					for (let i = 0; i < pos.length; i++) {
						pos[i].children[1].classList.remove('show');
						pos[i].children[1].classList.add('hide');
					}
					pos[i].children[1].classList.add('show');
					pos[i].children[1].classList.remove('hide');
				});
			}

			for (let i = 0; i < menus.length; i++) {
				menus[i].removeEventListener('mouseleave', () => {
					menus[i].classList.remove('show');
					menus[i].classList.add('hide');
					subMenu[i].classList.remove('show');
					subMenu[i].classList.add('hide');
				});
				subnav.removeEventListener('mouseleave', () => {
					menus[i].classList.remove('show');
					menus[i].classList.add('hide');
					subMenu[i].classList.remove('show');
					subMenu[i].classList.add('hide');
				});
			}
		};
	}, [animate]);

	return (
		<nav className={`titles noselect ${animate ? 'burgerMenu' : null}`}>
			<div className='pos'>
				<span className='navButton titleMenus'>TITLE 1</span>
				<ul className={`menu ${animate ? 'bmenu' : null}`}>
					<li>
						<span className='subMenuParent'>
							<span className='navButton'>SUBMENU 1</span>
							<ul
								className={`subMenu ${
									animate ? 'bsubMenu' : null
								}`}>
								<li>
									<a href='#' className='subMenuItem'>
										SUBMENU 1
									</a>
								</li>
								<li>
									<a href='#' className='subMenuItem'>
										SUBMENU 2
									</a>
								</li>
								<li>
									<a href='#' className='subMenuItem'>
										SUBMENU 3
									</a>
								</li>
							</ul>
						</span>
					</li>
					<li>
						<span className='subMenuParent'>
							<span className='navButton'>SUBMENU 2</span>
							<ul
								className={`subMenu ${
									animate ? 'bsubMenu' : null
								}`}>
								<li>
									<a href='#' className='subMenuItem'>
										SUBMENU 1
									</a>
								</li>
								<li>
									<a href='#' className='subMenuItem'>
										SUBMENU 2
									</a>
								</li>
								<li>
									<a href='#' className='subMenuItem'>
										SUBMENU 3
									</a>
								</li>
							</ul>
						</span>
					</li>
					<li>
						<span className='subMenuParent'>
							<span className='navButton'>SUBMENU 3</span>
							<ul
								className={`subMenu ${
									animate ? 'bsubMenu' : null
								}`}>
								<li>
									<a href='#' className='subMenuItem'>
										SUBMENU 1
									</a>
								</li>
								<li>
									<a href='#' className='subMenuItem'>
										SUBMENU 2
									</a>
								</li>
								<li>
									<a href='#' className='subMenuItem'>
										SUBMENU 3
									</a>
								</li>
							</ul>
						</span>
					</li>
				</ul>
			</div>
			<div className='pos'>
				<span className='navButton titleMenus'>TITLE 2</span>
				<ul className={`menu ${animate ? 'bmenu' : null}`}>
					<li>
						<span className='subMenuParent'>
							<span className='navButton'>SUBMENU 1</span>
							<ul
								className={`subMenu ${
									animate ? 'bsubMenu' : null
								}`}>
								<li>
									<a href='#' className='subMenuItem'>
										SUBMENU 1
									</a>
								</li>
								<li>
									<a href='#' className='subMenuItem'>
										SUBMENU 2
									</a>
								</li>
								<li>
									<a href='#' className='subMenuItem'>
										SUBMENU 3
									</a>
								</li>
							</ul>
						</span>
					</li>
					<li>
						<span className='subMenuParent'>
							<span className='navButton'>SUBMENU 2</span>
							<ul
								className={`subMenu ${
									animate ? 'bsubMenu' : null
								}`}>
								<li>
									<a href='#' className='subMenuItem'>
										SUBMENU 1
									</a>
								</li>
								<li>
									<a href='#' className='subMenuItem'>
										SUBMENU 2
									</a>
								</li>
								<li>
									<a href='#' className='subMenuItem'>
										SUBMENU 3
									</a>
								</li>
							</ul>
						</span>
					</li>
					<li>
						<span className='subMenuParent'>
							<span className='navButton'>SUBMENU 3</span>
							<ul
								className={`subMenu ${
									animate ? 'bsubMenu' : null
								}`}>
								<li>
									<a href='#' className='subMenuItem'>
										SUBMENU 1
									</a>
								</li>
								<li>
									<a href='#' className='subMenuItem'>
										SUBMENU 2
									</a>
								</li>
								<li>
									<a href='#' className='subMenuItem'>
										SUBMENU 3
									</a>
								</li>
							</ul>
						</span>
					</li>
				</ul>
			</div>
			<div className='pos'>
				<span className='navButton titleMenus'>TITLE 3</span>
				<ul className={`menu ${animate ? 'bmenu' : null}`}>
					<li>
						<span className='subMenuParent'>
							<span className='navButton'>SUBMENU 1</span>
							<ul
								className={`subMenu ${
									animate ? 'bsubMenu' : null
								}`}>
								<li>
									<a href='#' className='subMenuItem'>
										SUBMENU 1
									</a>
								</li>
								<li>
									<a href='#' className='subMenuItem'>
										SUBMENU 2
									</a>
								</li>
								<li>
									<a href='#' className='subMenuItem'>
										SUBMENU 3
									</a>
								</li>
							</ul>
						</span>
					</li>
					<li>
						<span className='subMenuParent'>
							<span className='navButton'>SUBMENU 2</span>
							<ul
								className={`subMenu ${
									animate ? 'bsubMenu' : null
								}`}>
								<li>
									<a href='#' className='subMenuItem'>
										SUBMENU 1
									</a>
								</li>
								<li>
									<a href='#' className='subMenuItem'>
										SUBMENU 2
									</a>
								</li>
								<li>
									<a href='#' className='subMenuItem'>
										SUBMENU 3
									</a>
								</li>
							</ul>
						</span>
					</li>
					<li>
						<span className='subMenuParent'>
							<span className='navButton'>SUBMENU 3</span>
							<ul
								className={`subMenu ${
									animate ? 'bsubMenu' : null
								}`}>
								<li>
									<a href='#' className='subMenuItem'>
										SUBMENU 1
									</a>
								</li>
								<li>
									<a href='#' className='subMenuItem'>
										SUBMENU 2
									</a>
								</li>
								<li>
									<a href='#' className='subMenuItem'>
										SUBMENU 3
									</a>
								</li>
							</ul>
						</span>
					</li>
				</ul>
			</div>
			<div className='pos'>
				<span className='navButton titleMenus'>TITLE 4</span>
				<ul className={`menu ${animate ? 'bmenu' : null}`}>
					<li>
						<span className='subMenuParent'>
							<span className='navButton'>SUBMENU 1</span>
							<ul
								className={`subMenu ${
									animate ? 'bsubMenu' : null
								}`}>
								<li>
									<a href='#' className='subMenuItem'>
										SUBMENU 1
									</a>
								</li>
								<li>
									<a href='#' className='subMenuItem'>
										SUBMENU 2
									</a>
								</li>
								<li>
									<a href='#' className='subMenuItem'>
										SUBMENU 3
									</a>
								</li>
							</ul>
						</span>
					</li>
					<li>
						<span className='subMenuParent'>
							<span className='navButton'>SUBMENU 2</span>
							<ul
								className={`subMenu ${
									animate ? 'bsubMenu' : null
								}`}>
								<li>
									<a href='#' className='subMenuItem'>
										SUBMENU 1
									</a>
								</li>
								<li>
									<a href='#' className='subMenuItem'>
										SUBMENU 2
									</a>
								</li>
								<li>
									<a href='#' className='subMenuItem'>
										SUBMENU 3
									</a>
								</li>
							</ul>
						</span>
					</li>
					<li>
						<span className='subMenuParent'>
							<span className='navButton'>SUBMENU 3</span>
							<ul
								className={`subMenu ${
									animate ? 'bsubMenu' : null
								}`}>
								<li>
									<a href='#' className='subMenuItem'>
										SUBMENU 1
									</a>
								</li>
								<li>
									<a href='#' className='subMenuItem'>
										SUBMENU 2
									</a>
								</li>
								<li>
									<a href='#' className='subMenuItem'>
										SUBMENU 3
									</a>
								</li>
							</ul>
						</span>
					</li>
				</ul>
			</div>
			<div className='pos'>
				<span className='navButton titleMenus'>TITLE 5</span>
				<ul className={`menu ${animate ? 'bmenu' : null}`}>
					<li>
						<span className='subMenuParent'>
							<span className='navButton'>SUBMENU 1</span>
							<ul
								className={`subMenu ${
									animate ? 'bsubMenu' : null
								}`}>
								<li>
									<a href='#' className='subMenuItem'>
										SUBMENU 1
									</a>
								</li>
								<li>
									<a href='#' className='subMenuItem'>
										SUBMENU 2
									</a>
								</li>
								<li>
									<a href='#' className='subMenuItem'>
										SUBMENU 3
									</a>
								</li>
							</ul>
						</span>
					</li>
					<li>
						<span className='subMenuParent'>
							<span className='navButton'>SUBMENU 2</span>
							<ul
								className={`subMenu ${
									animate ? 'bsubMenu' : null
								}`}>
								<li>
									<a href='#' className='subMenuItem'>
										SUBMENU 1
									</a>
								</li>
								<li>
									<a href='#' className='subMenuItem'>
										SUBMENU 2
									</a>
								</li>
								<li>
									<a href='#' className='subMenuItem'>
										SUBMENU 3
									</a>
								</li>
							</ul>
						</span>
					</li>
					<li>
						<span className='subMenuParent'>
							<span className='navButton'>SUBMENU 3</span>
							<ul
								className={`subMenu ${
									animate ? 'bsubMenu' : null
								}`}>
								<li>
									<a href='#' className='subMenuItem'>
										SUBMENU 1
									</a>
								</li>
								<li>
									<a href='#' className='subMenuItem'>
										SUBMENU 2
									</a>
								</li>
								<li>
									<a href='#' className='subMenuItem'>
										SUBMENU 3
									</a>
								</li>
							</ul>
						</span>
					</li>
				</ul>
			</div>
			<div className='pos'>
				<span className='navButton titleMenus'>TITLE 6</span>
				<ul className={`menu ${animate ? 'bmenu' : null}`}>
					<li>
						<span className='subMenuParent'>
							<span className='navButton'>SUBMENU 1</span>
							<ul
								className={`subMenu ${
									animate ? 'bsubMenu' : null
								}`}>
								<li>
									<a href='#' className='subMenuItem'>
										SUBMENU 1
									</a>
								</li>
								<li>
									<a href='#' className='subMenuItem'>
										SUBMENU 2
									</a>
								</li>
								<li>
									<a href='#' className='subMenuItem'>
										SUBMENU 3
									</a>
								</li>
							</ul>
						</span>
					</li>
					<li>
						<span className='subMenuParent'>
							<span className='navButton'>SUBMENU 2</span>
							<ul
								className={`subMenu ${
									animate ? 'bsubMenu' : null
								}`}>
								<li>
									<a href='#' className='subMenuItem'>
										SUBMENU 1
									</a>
								</li>
								<li>
									<a href='#' className='subMenuItem'>
										SUBMENU 2
									</a>
								</li>
								<li>
									<a href='#' className='subMenuItem'>
										SUBMENU 3
									</a>
								</li>
							</ul>
						</span>
					</li>
					<li>
						<span className='subMenuParent'>
							<span className='navButton'>SUBMENU 3</span>
							<ul
								className={`subMenu ${
									animate ? 'bsubMenu' : null
								}`}>
								<li>
									<a href='#' className='subMenuItem'>
										SUBMENU 1
									</a>
								</li>
								<li>
									<a href='#' className='subMenuItem'>
										SUBMENU 2
									</a>
								</li>
								<li>
									<a href='#' className='subMenuItem'>
										SUBMENU 3
									</a>
								</li>
							</ul>
						</span>
					</li>
				</ul>
			</div>
			<div className='pos'>
				<span href='#' className='navButton titleMenus'>
					TITLE 7
				</span>
				<ul
					className={`menu menuEnd ${
						animate ? 'endbubbleMove' : null
					}`}></ul>
			</div>
		</nav>
	);
};

export default MenuLogic;
