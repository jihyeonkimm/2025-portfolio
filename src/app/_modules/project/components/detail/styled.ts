import styled from 'styled-components';

export const ProjectDetailContainer = styled.div`
  width: 100%;
  max-width: 960px;
  padding: 20px;
  background-color: ${({ theme }) => theme.color.common.white};

  ${({ theme }) => theme.responsive.mobile} {
    margin: 0 0 20px;
    padding: 5px;
  }
`;

export const ProjectDetailInner = styled.div``;

export const ProjectTitleContainer = styled.div`
  padding-bottom: 40px;
  margin-bottom: 40px;
  border-bottom: 1px solid ${({ theme }) => theme.color.primary.lightgray};
`;

export const ProjectLogo = styled.span`
  position: relative;
  display: block;
  width: 150px;
  height: 50px;
  margin-bottom: 20px;

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
  }
`;

export const ProjectDetailTitle = styled.strong`
  font-size: 4rem;
  font-weight: 600;
  letter-spacing: -1px;
  line-height: 140%;

  ${({ theme }) => theme.responsive.mobile} {
    font-size: 3rem;
    line-height: 120%;
  }
`;

export const ProjectTitleList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 60px;

  ${({ theme }) => theme.responsive.mobile} {
    margin-top: 40px;
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
  background-color: ${({ theme }) => theme.color.primary.orange};
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
    border-bottom: 5px solid ${({ theme }) => theme.color.primary.orange};
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

export const DetailListContainer = styled.div``;

export const DetailListTitle = styled.strong`
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
    background-color: ${({ theme }) => theme.color.common.black};
    transform: translateY(7px);
  }

  ${({ theme }) => theme.responsive.mobile} {
    font-size: 1.4rem;
  }
`;
