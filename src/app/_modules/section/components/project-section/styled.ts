import styled from 'styled-components';

export const StyledProjectSection = styled.section`
  position: relative;
  padding: 4rem 0;
  background-color: ${({ theme }) => theme.color.background.gray};
`;

export const ProjectList = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 60px;
`;

export const ProjectItem = styled.li`
  position: relative;
  width: 50%;

  &:nth-child(even) {
    align-self: flex-end;
  }
`;

export const ProjectItemButton = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const ProjectItemImage = styled.span`
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 1 / 0.515;
  margin-bottom: 30px;
  border-radius: 20px;
  overflow: hidden;

  & img {
    width: 100%;
  }
`;

export const ProjectItemTitle = styled.strong`
  font-size: 1.6rem;
  font-weight: 500;
  letter-spacing: -0.5px;
`;

export const ProjectItemTag = styled.span`
  display: inline-block;
  /* max-width: 22px; */
  height: 22px;
  margin-top: 10px;
  line-height: 22px;
  padding: 0px 10px;
  border: 1px solid ${({ theme }) => theme.color.common.black};
  border-radius: 50px;
  background-color: ${({ theme }) => theme.color.common.white};
  overflow: hidden;
`;
