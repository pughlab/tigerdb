import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SegmentPlaceholder from './common/SegmentPlaceholder'
import { Dimmer, Loader, Segment, Icon, Header } from 'semantic-ui-react';

export default function NotFoundRedirect({isLoggedIn}: {isLoggedIn: boolean}) {
  const navigate = useNavigate();

  let redirectRoute = isLoggedIn ? '/home' : '/public';
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(redirectRoute, { replace: true });
    }, 1000); // Redirect after 1 second

    return () => clearTimeout(timer); // Clean up timer on unmount
  }, [navigate]);

  return (
    // <SegmentPlaceholder
    //   // text="404 - Not Found! Redirecting Home in 3 seconds..."
    //   icon="exclamation triangle"
    // >
    // <Dimmer active inverted>
    //   <Loader inverted>Loading Page...</Loader>
    // </Dimmer>
    // </SegmentPlaceholder>
    	<Segment placeholder textAlign='center'>
			<Dimmer active inverted >
		    <Icon size='massive' name='react' loading color='grey' />
            <div style={{ marginTop: '1em', color: 'grey', fontSize: '2.2em' }}>
      Loading...
    </div>
			</Dimmer>
		  </Segment>
  );
};