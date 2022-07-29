import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';

import { LeftSection } from './HeroStyles';


const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          Hi, I am Vishal Anthony a developer with keen interest in creating cool websites and apps check out some of my projects.
        </SectionText>

      </LeftSection>

    </Section>
  </>
);

export default Hero;