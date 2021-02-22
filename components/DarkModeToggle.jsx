/** @format */

import { useEffect, useState } from 'react';
const DarkModeToggle = () => {
	const [darkTheme, setDarkTheme] = useState(undefined);

	const handleToggle = (event) => {
		setDarkTheme(event.target.checked);
	};

	useEffect(() => {
		const root = window.document.documentElement;
		const initialColorValue = root.style.getPropertyValue(
			'--initial-color-mode'
		);
		// console.log('init', initialColorValue);

		setDarkTheme(initialColorValue === 'dark');
	}, []);
	useEffect(() => {
		if (darkTheme !== undefined) {
			if (darkTheme) {
				document.documentElement.setAttribute('data-theme', 'dark');
				window.localStorage.setItem('theme', 'dark');
			} else {
				document.documentElement.removeAttribute('data-theme');
				window.localStorage.setItem('theme', 'light');
			}
		}
	}, [darkTheme]);

	return (
		<>
			{darkTheme !== undefined && (
				<label className='switch'>
					<input type='checkbox' checked={darkTheme} onChange={handleToggle} />
					<span className='slider round'>
						{darkTheme ? (
							<i className='ui icon orange sun large outline' />
						) : (
							<i className='ui icon moon large outline' />
						)}
					</span>
				</label>
			)}
			<style jsx>{`
				.switch {
					right: 1.2em;
					width: 60px;
					height: 30px;
					margin: 0.5em 0;
					position: fixed;
					top: 0.2em;
				}
				.switch input {
					opacity: 0;
					width: 0;
					height: 0;
				}

				.slider {
					width: inherit;
					height: inherit;
					position: absolute;
					cursor: pointer;
					top: 0;
					background-color: #ccc;
					transition: 0.4s;
					display: flex;
					align-items: center;
				}
				.slider .moon {
					position: absolute;
					right: 0;
					color: var(--color-primary);
				}
				.slider:before {
					position: absolute;
					content: '';
					height: 26px;
					width: 26px;
					left: 4px;
					bottom: 2px;
					background-color: white;
					-webkit-transition: 0.4s;
					transition: 0.4s;
				}

				input:focus + .slider {
					box-shadow: 0 0 1px #2196f3;
				}

				input:checked + .slider:before {
					-webkit-transform: translateX(26px);
					-ms-transform: translateX(26px);
					transform: translateX(26px);
				}
				/* Rounded sliders */
				.slider.round {
					border-radius: 34px;
				}

				.slider.round:before {
					border-radius: 50%;
				}
			`}</style>
		</>
	);
};
export default DarkModeToggle;
