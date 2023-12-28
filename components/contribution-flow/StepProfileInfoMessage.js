import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Container from '../Container';
import { Box } from '../Grid';
import { getI18nLink } from '../I18nFormatters';
import Link from '../Link';
import MessageBox from '../MessageBox';
import { P } from '../Text';

const StepProfileInfoMessage = ({ hasLegalNameField, hasIncognito, isGuest }) => {
  const nbItems = hasLegalNameField + hasIncognito + isGuest;
  const isList = nbItems > 1;
  const ItemContainer = isList ? 'li' : 'span';
  return (
    <MessageBox type="info" fontSize="12px" color="black.800" my={3} py={2}>
      <Container fontSize="12px" lineHeight="18px">
        <P fontWeight="bold" fontSize="12px" lineHeight="18px">
          <FormattedMessage defaultMessage="About privacy" />
        </P>
        <Box as={isList ? 'ul' : P} pl={isList ? '24px' : '0'} mt={2} fontSize="12px" lineHeight="18px">
          {isGuest && (
            <ItemContainer>
              <FormattedMessage defaultMessage="Every contribution must be linked to an email account for legal reasons. Please provide a valid email. We wont send any spam or advertising, pinky promise." />
            </ItemContainer>
          )}
          {hasLegalNameField && (
            <ItemContainer>
              <FormattedMessage defaultMessage="You can leave the name field empty if you want to keep your contribution anonymous, only the host admins and the platform will have access to your email." />
            </ItemContainer>
          )}
          {hasIncognito && (
            <ItemContainer>
              <FormattedMessage
                defaultMessage="When you contribute to a Collective we share your email address with the Administrators. If you wish to keep your contribution private choose the ‘incognito’ profile. Read our <PrivacyPolicyLink>privacy policy</PrivacyPolicyLink>."
                values={{ PrivacyPolicyLink: getI18nLink({ href: '/privacypolicy', openInNewTab: true, as: Link }) }}
              />
            </ItemContainer>
          )}
        </Box>
      </Container>
    </MessageBox>
  );
};

StepProfileInfoMessage.propTypes = {
  hasLegalNameField: PropTypes.bool,
  isGuest: PropTypes.bool,
  hasIncognito: PropTypes.bool,
};

StepProfileInfoMessage.defaultProps = {
  hasLegalNameField: false,
  isGuest: false,
  hasIncognito: false,
};

export default StepProfileInfoMessage;
