import React from 'react'
import Header from '../../components/Header';
import Divider from '../../components/Divider';

export const Contact = () => {
	return (
		<div class="componentContainer">
			<Header text="Contact Information" />
			<Divider />

      <div style={{ position: 'relative', margin: '10px' }}>

        <p className="contentText">
          <strong>Email:</strong> avinash.dhillon@gmail.com
        </p>

        <p className="contentText">
          <strong>Website:</strong>	
          <a
            target="blank"
            href="http://myidlemind.com"
            style= {{ textDecoration: 'none', color: 'rgb(1, 43, 1)' }}
          >
            myidlemind.com
          </a>
        </p>

        <p className="contentText">
          <strong>LinkedIn:</strong> 
          <a
            target="blank"
            href="https://www.linkedin.com/in/avinashsingh6"
            style= {{ textDecoration: 'none', color: 'rgb(1, 43, 1)' }}
          >
            https://www.linkedin.com/in/avinashsingh6
          </a>
        </p>

        <p className="contentText">
          <strong>GitHub:</strong> 
          <a
            target="blank"
            href="https://github.com/avinashsinghdhillon"
            style= {{ textDecoration: 'none', color: 'rgb(1, 43, 1)' }}
          >
            https://github.com/avinashsinghdhillon
          </a>
        </p>

      </div>
    </div>
  )
};

export default Contact;