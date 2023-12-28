import styled from 'styled-components';
import { color, display, space, typography } from 'styled-system';

const SectionTitle = styled.h2`
  word-break: break-word;
  letter-spacing: -0.8px;
  font-weight: bold;

  ${color}
  ${display}
  ${space}
  ${typography}

  @media screen and (min-width: 52em) {
    font-size: 40px;
    line-height: 48px;
    letter-spacing: -1.6px;
  }
`;

SectionTitle.defaultProps = {
  fontSize: '32px',
  lineHeight: '40px',
  color: 'black.800',
  fontWeight: 500,
  mb: 3,
};

export default SectionTitle;
