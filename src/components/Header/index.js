import React, { useState, useEffect } from 'react'
import './Header.css';

export const Header = (props) => {
	const [headerText, setHeaderText] = useState();
	useEffect( () => {
		setHeaderText(props.text)
	}, [props.text]);

	return (
		<div>
			<p className="title">
				{headerText}
			</p>
		</div>
	)
}

export default Header;