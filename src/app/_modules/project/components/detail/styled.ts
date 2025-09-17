import styled from 'styled-components';

export const ProjectDetailContainer = styled.div`
  width: 100%;
  /* padding: 20px; */
  /* background-color: ${({ theme }) => theme.color.common.white}; */

  ${({ theme }) => theme.responsive.mobile} {
    /* margin: 0 0 20px;
    padding: 5px; */
  }
`;

export const ProjectDetailInner = styled.div``;

export const ProjectTitleContainer = styled.div``;

export const ProjectCover = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 450px;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(18, 18, 18, 0.1) 0%, rgba(18, 18, 18, 0.9) 100%);
  }

  & > div {
    position: absolute;
  }

  ${({ theme }) => theme.responsive.mobile} {
    min-height: 250px;
  }
`;

export const ProjectLogo = styled.span`
  position: relative;
  display: block;
  width: 150px;
  height: 50px;
  margin-left: 20px;
  margin-bottom: 20px;
  z-index: 1;

  & img {
    position: absolute;
    left: 0;
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  ${({ theme }) => theme.responsive.mobile} {
    width: 70px;
    height: 30px;
    margin-left: 20px;
    margin-bottom: 10px;
  }
`;

export const ProjectDetailTitle = styled.strong`
  position: relative;
  margin: 0 30px 20px;
  color: ${({ theme }) => theme.color.common.white};
  font-size: 4rem;
  font-weight: 600;
  letter-spacing: -1px;
  line-height: 140%;
  z-index: 1;

  ${({ theme }) => theme.responsive.mobile} {
    margin: 0 20px 20px;
    font-size: 2.6rem;
    line-height: 120%;
  }
`;

export const ProjectTitleList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 60px;
  padding: 0 24px;

  ${({ theme }) => theme.responsive.mobile} {
    margin-top: 40px;
    padding: 0 20px;
  }
`;

export const ProjectTitleItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const DetailTitle = styled.p`
  color: ${({ theme }) => theme.color.primary.gray};
  font-size: 1.6rem;
  line-height: 140%;

  ${({ theme }) => theme.responsive.mobile} {
    font-size: 1.4rem;
  }
`;

export const DetailText = styled.p`
  color: ${({ theme }) => theme.color.common.white};
  font-size: 1.8rem;
  letter-spacing: -0.5px;
  line-height: 140%;

  & a {
    text-decoration: underline;
    text-underline-offset: 4px;
  }

  ${({ theme }) => theme.responsive.mobile} {
    font-size: 1.6rem;
  }
`;

export const SkillContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const SkillTooltip = styled.span`
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translate(-50%, 10px);
  padding: 6px;
  border-radius: 5px;
  color: ${({ theme }) => theme.color.common.white};
  font-size: 1.3rem;
  text-align: center;
  background-color: ${({ theme }) => theme.color.primary.blue};
  opacity: 0;
  visibility: hidden;
  transition: 0.25s;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: -9px;
    left: 50%;
    transform: translateX(-50%);
    width: 0px;
    height: 0px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid transparent;
    border-bottom: 5px solid ${({ theme }) => theme.color.primary.blue};
  }
`;

export const SkillImageContainer = styled.li`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 7px;
  border: 1px solid ${({ theme }) => theme.color.background.gray};
  cursor: pointer;

  & img {
    border-radius: 7px;
  }

  @media (hover: hover) {
    &:hover {
      ${SkillTooltip} {
        opacity: 1;
        transform: translate(-50%, 0px);
        visibility: visible;
      }
    }
  }

  ${({ theme }) => theme.responsive.mobile} {
    width: 30px;
    height: 30px;
  }
`;

export const DetailListContainer = styled.div`
  padding: 40px 0;
  margin: 40px 24px 0;
  border-top: 1px solid ${({ theme }) => theme.color.primary.lightgray};

  ${({ theme }) => theme.responsive.mobile} {
    margin: 40px 20px 0;
  }
`;

export const DetailListTitle = styled.strong`
  color: ${({ theme }) => theme.color.common.white};
  font-size: 2rem;
  line-height: 140%;

  ${({ theme }) => theme.responsive.mobile} {
    font-size: 1.8rem;
  }
`;

export const DetailList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 30px;

  ${({ theme }) => theme.responsive.mobile} {
    margin-top: 20px;
  }
`;

export const DetailItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const DetailItemTitle = styled.p`
  color: ${({ theme }) => theme.color.common.white};
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 140%;

  ${({ theme }) => theme.responsive.mobile} {
    font-size: 1.6rem;
  }
`;

export const DetailItemText = styled.span`
  position: relative;
  display: flex;
  color: ${({ theme }) => theme.color.common.white};
  font-size: 1.6rem;
  letter-spacing: -0.5px;
  line-height: 140%;

  &::before {
    content: '';
    display: block;
    position: relative;
    flex-shrink: 0;
    width: 4px;
    height: 4px;
    margin-right: 6px;
    border-radius: 100px;
    background-color: ${({ theme }) => theme.color.common.white};
    transform: translateY(7px);
  }

  ${({ theme }) => theme.responsive.mobile} {
    font-size: 1.4rem;
  }
`;
