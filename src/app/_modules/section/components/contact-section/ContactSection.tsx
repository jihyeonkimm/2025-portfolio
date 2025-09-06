'use client';

import React from 'react';
import * as S from './styled';
import Inner from '@/app/_common/components/inner/Inner';
import SectionTitle from '@/app/_common/components/section-title/SectionTitle';

const ContactSection = () => {
  return (
    <S.StyledContactSection id='contact'>
      <Inner>
        <SectionTitle title='Contact' />
        <S.ContactContainer>
          <S.ContactList>
            <S.ContactItem>
              <S.ContactItemTitle>Email</S.ContactItemTitle>
              <S.ContactLink href='mailto:jh418531@gmail.com'>jh418531@gmail.com</S.ContactLink>
            </S.ContactItem>
            <S.ContactItem>
              <S.ContactItemTitle>More About</S.ContactItemTitle>
              <S.ContactLink
                href='https://drive.google.com/file/d/1ry_htjHyPM42bOyjp1PJdeqDKlq0bXmt/view?usp=sharing'
                target='_blank'
              >
                CV
              </S.ContactLink>
              <S.ContactLink href='https://jh-log.tistory.com/' target='_blank'>
                Blog
              </S.ContactLink>
              <S.ContactLink href='https://github.com/jihyeonkimm' target='_blank'>
                GitHub
              </S.ContactLink>
            </S.ContactItem>
          </S.ContactList>
        </S.ContactContainer>
      </Inner>
    </S.StyledContactSection>
  );
};

export default ContactSection;
