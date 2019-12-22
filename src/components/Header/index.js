import React, { useState, useEffect } from 'react'

export const Header = (props) => {
	const [headerText, setHeaderText] = useState();
	useEffect( () => {
		setHeaderText(props.text)
	}, [props.text]);

	return (
		<div>
			<h4>
				{headerText}
			</h4>
		</div>
	)
}

export default Header;