import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey,
          <br />I am Rahul S Girish
        </SectionTitle>
        <SectionText>
          I am a Web Developer who has fun creating projects using React.js and
          Vue.js
        </SectionText>
        <Button
          onClick={() => (window.location = 'https://github.com/RahulSG39')}
        >
          Learn More
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
