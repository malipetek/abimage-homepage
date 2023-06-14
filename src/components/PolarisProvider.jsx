'use client';
import "@shopify/polaris/build/esm/styles.css";
import '../app/main.scss';
import NextLink from 'next/link';
import {
  AppProvider,
  Frame,
  TopBar,
  Navigation,
  Text,
  Link
} from '@shopify/polaris';
import { useState, useCallback } from 'react';
/**
 * Connects Nextjs Link with Polaris Links
 * @param props
 * @returns
 */
function LinkWrapper(props) {
  const { children, url, ...rest } = props;

  return (
    <NextLink href={url} {...rest} >
      {children}
    </NextLink>
  )
}

export function PolarisProvider({ children }) {
  const [mobileNavigationActive, setMobileNavigationActive] = useState(false);

  const toggleMobileNavigationActive = useCallback(
    () =>
      setMobileNavigationActive(
        (mobileNavigationActive) => !mobileNavigationActive,
      ),
    [],
  );
  const navigation = 1 ? [
   
  ] : [
    {
      label: 'Install',
      url: '/install',
    },
    {
      label: 'Pricing',
      url: '/pricing',
    },
    {
      label: 'Docs',
      url: '/docs',
    },
    {
      label: 'Support',
      url: '/support',
    }
  ];
  const topBarMarkup = (
    <TopBar
      showNavigationToggle
      userMenu={<span className="topnav">
        {navigation.map(nav => <Link url={nav.url} key={nav.label}>{nav.label}</Link>)}
      </span>}
      logoSuffix={(
        <div className="flex">
          <Text variant="headingXl" as="legend"> {"Abimage"} </Text>
        </div>
      )}
    />
  );

  const navigationMarkup = (
    <Navigation location="/">
      <Navigation.Section
        items={navigation}
      />
    </Navigation>
  );

  const logo = {
    width: 50,
    topBarSource: '/logo.jpg',
    url: '/',
    accessibilityLabel: 'Abimage',
  };

  return (
    <AppProvider  i18n={{
      Polaris: {
        Avatar: {
          label: 'Avatar',
          labelWithInitials: 'Avatar with initials {initials}',
        },
        ContextualSaveBar: {
          save: 'Save',
          discard: 'Discard',
        },
        TextField: {
          characterCount: '{count} characters',
        },
        TopBar: {
          toggleMenuLabel: 'Toggle menu',

          SearchField: {
            clearButtonLabel: 'Clear',
            search: 'Search',
          },
        },
        Modal: {
          iFrameTitle: 'body markup',
        },
        Frame: {
          skipToContent: 'Skip to content',
          navigationLabel: 'Navigation',
          Navigation: {
            closeMobileNavigationLabel: 'Close navigation',
          },
        },
      },
    }} linkComponent={LinkWrapper}>
      <Frame
        topBar={topBarMarkup}
        navigation={navigationMarkup}
        showMobileNavigation={mobileNavigationActive}
        onNavigationDismiss={toggleMobileNavigationActive}
        logo={logo}
      >
        {children}
      </Frame>
    </AppProvider>
  );
}
