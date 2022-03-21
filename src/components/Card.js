import react from 'react';

const Card = ({ name, email, id }) =>{	
	return(
		<div className='bg-light-green dib br3 pa2 ma2 grow shadow-5 bw2'>
			<img alt = 'robot' src={`https://robohash.org/${id}?200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
		);
}

export default Card