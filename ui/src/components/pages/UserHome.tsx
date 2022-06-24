import * as React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';
// import logo from '../../imic_logo.png';
import logo from '../../uhnpicture.png';

export default function UserHome () {
  return (
    <Container as={Segment}>
      <Image centered src={logo} />
      This is the PLBR homepage!
      <br /><br />
      TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST
    </Container>
  );
};
