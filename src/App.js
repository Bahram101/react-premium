import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function App() {
	return (
		<div className='app'>
			<div className='app-top'>
				<div className='overlay'>
					<Container>
						<header className='container d-flex justify-content-between align-items-center'>
							<div className='left'>
								<img src='/img/logo.svg' />
							</div>
							<div className='right d-flex align-items-center'>
								<div className='launchApp'>Launch App</div>
								<div className='login'>Log In</div>
							</div>
						</header>
						<div className='content-top'>
							<h1>
								<span>Win</span> standard or premium plan
							</h1>
							<Row>
								<Col lg={7}>
									<div className='perform'>
										Perform simple tasks and collect
										entries. Weekly winners. You are always
										in the draw -{' '}
										<span>
											we do not reset the entries!
										</span>
									</div>
									<div className='standard'>
										<span className='firstWord'>
											Standart
										</span>{' '}
										<span className='valued'>
											(valued at 0.03 ETH)
										</span>{' '}
										<br></br>
										<span className='winner'>
											One winner every week for those with
											60-99 entries!
										</span>
									</div>
									<div className='premium'>
										<span className='firstWord'>
											Premium
										</span>
										<span className='valued'>
											(valued at 0.15 ETH)
										</span>
										<br></br>
										<span className='winner'>
											One winner every week for those with
											60-99 entries!
										</span>
									</div>
									<div className="start-contest">Start contest</div>
								</Col>
								<Col lg={5}>
									<img
										src='/img/social-block.png'
										width='100%'
									/>
								</Col>
							</Row>
						</div>
						<div className='content-bottom'>
							<Row>
								<Col lg={7}>
									<div className='contest-details'>
										<h1>Contest details</h1>
										<ul>
											<li>
												By registering for the contest
												and collecting enough entries to
												qualify, you will be able to
												participate in a prize draw
												every week.
											</li>
											<li>
												You can keep collecting more
												entries to win more valuable
												prizes.
											</li>
											<li>
												We will have more prizes for
												those with the most entries.
											</li>
											<li>
												Every week one winner is
												selected randomly in each group,
												according to the number of
												current entries.
											</li>
											<li>
												Some actions can be performed
												several times, such as inviting
												friends, writing articles, or
												sharing cases.
											</li>
											<li>
												If you have already purchased a
												plan, we will add another month.
											</li>
											<li>
												If you won Premium and are
												already on our Standard plan -
												we will upgrade your plan.
											</li>
											<li>
												If you already have one of our
												paid lifetime plans, we will
												give you the winning in ETH or
												BNB.
											</li>
											<li>
												We will publish the winners on
												Twitter. If you have not
												received your winning - please
												reach out to us via our Telegram
												group.
											</li>
											<li>
												If you want to help us market
												the project as an influencer or
												join our team - reach out to us.
											</li>
										</ul>
										<div className='buttons'>
											<button className='start-contest'>
												Start Contest
											</button>
											<button className='plans'>
												Plans
											</button>
										</div>
									</div>
								</Col>
							</Row>
						</div>
					</Container>
				</div>
			</div>
			<div className='app-bottom'></div>
		</div>
	);
}

export default App;
