import React from "react";
import {
  Card,
  Page,
  Layout,
  Image,
  Box,
  LegacyStack,
  Link,
  Text,
  HorizontalStack,
  List,
  Button,
  Thumbnail,
  ResourceList,
  ResourceItem,
  VerticalStack,
  CalloutCard
} from "@shopify/polaris";
import { useTranslation, Trans } from "react-i18next";
import { GithubIcon } from '../utils/githubIcon.svg.js';

const live = false;
export default function HomePage() {
  const { t } = useTranslation();
  return (
      <Page title="A/Bimage (for Shopify)" >
        <Layout>
          <Layout.Section oneHalf>
            <Text variant="heading3xl" as="h1">
              Measure and optimize your product imagery
            </Text>
            <Text variant="heading4xl" as="span">auto-magically</Text>
            <Text variant="bodyLg" as="p">
            </Text>
          </Layout.Section>

          <Layout.Section oneHalf>
            <Image source={'/abimage-feature-1.png'} width="300" alt="Illustration, a Mage pointing wand to a laptop popping and floating product images" />
          </Layout.Section>
          {live === true ? (
            <>
              <Layout.Section fullWidth >
                <CalloutCard
                  illustration={'/abimage-code.png'}
                  secondaryAction={{
                    content: "Source Code",
                    url: "https://github.com/Shopify/",
                    // @ts-ignore
                    icon: GithubIcon,
                    external: true,
                    accessibilityLabel: "Source code url"
                  }}
                  primaryAction={{
                    content: "See here right now",
                  }}
                >
                  <Text variant="heading3xl" as="h2">How it works</Text>
                  {/* <Box minHeight="2em"></Box> */}
                  <Text variant="bodyLg" as="p">We track measure image visibility and conversion events in a anonymous manner, storing only session data. </Text>
                  <Text variant="bodyLg" as="p">Our tracking script is open source and available on Github. It is only 7kb gzipped.
                  </Text>
                </CalloutCard>
              </Layout.Section>

              <Layout.Section fullWidth>
                <div className="pricing-section">
                  <Text variant="heading3xl" as="h2">Pricing</Text>
                  <Box minHeight="2em"></Box>
                  <HorizontalStack align="start" gap={"16"} blockAlign="stretch">
                    <Card roundedAbove="sm">
                      <VerticalStack align="space-between" gap="4">
                        <Box>
                          <Text variant="heading3xl" as="h3"> Basic </Text>
                          <Text variant="bodyLg" as="p"> FREE </Text>
                        </Box>
                        <Box>
                          <List type="bullet">
                            <List.Item>Measuring and reporting</List.Item>
                            <List.Item>Manually set up experiments</List.Item>
                            <List.Item>Weekly reports</List.Item>
                          </List>
                        </Box>
                        <Button primary >Get started</Button>
                      </VerticalStack>
                    </Card>
                    <Card roundedAbove="sm" >
                      <VerticalStack align="space-between" gap="4">
                        <Box>
                          <Text variant="heading3xl" as="h3"> Not Basic </Text>
                          <Text variant="bodyLg" as="p"> $19.99/month </Text>
                        </Box>
                        <Box>
                          <List type="bullet">
                            <List.Item>Everything in basic plan</List.Item>
                            <List.Item>Auto experiments</List.Item>
                            <List.Item>In depth analysis reports, feature detection on converting images</List.Item>
                          </List>
                        </Box>
                        <Button primary >Get started</Button>
                      </VerticalStack>
                    </Card>
                    <Card roundedAbove="sm">
                      <VerticalStack align="space-between" gap="4">
                        <Box>
                          <Text variant="heading3xl" as="h3"> Not Basic at All </Text>
                          <Text variant="bodyLg" as="p"> $39.99/month </Text>
                        </Box>
                        <Box>
                          <List type="bullet">
                            <List.Item>Everything in pro plan</List.Item>
                            <List.Item>Weekly human readable reports</List.Item>
                            <List.Item>Unlimited number of candidate images</List.Item>
                          </List>
                        </Box>
                        <Button primary >Get started</Button>
                      </VerticalStack>
                    </Card>

                  </HorizontalStack>
                </div>
              </Layout.Section>

              <Layout.Section secondary fullWidth={false}>
                <Text variant="heading3xl" as="h2">Example products</Text>
                <ResourceList
                  resourceName={{ singular: 'product', plural: 'products' }}
                  items={[
                    {
                      id: '1',
                      url: 'https://example.com/products/1',
                      media: (
                        <Thumbnail
                          source="product-1.jpg"
                          alt="Product 1"
                        />
                      ),
                      name: 'Product 1',
                      price: '$49.99',
                    },
                    {
                      id: '2',
                      url: 'https://example.com/products/2',
                      media: (
                        <Thumbnail
                          source="product-2.jpg"
                          alt="Product 2"
                        />
                      ),
                      name: 'Product 2',
                      price: '$59.99',
                    },
                    {
                      id: '3',
                      url: 'https://example.com/products/3',
                      media: (
                        <Thumbnail
                          source="product-3.jpg"
                          alt="Product 3"
                        />
                      ),
                      name: 'Product 3',
                      price: '$69.99',
                    },
                  ]}
                  renderItem={(item) => {
                    const { id, url, media, name, price } = item;
                    return (
                      <ResourceItem
                        id={id}
                        url={url}
                        media={media}
                        accessibilityLabel={`View details for ${name}`}
                      >
                        {name} - {price}
                      </ResourceItem>
                    );
                  }}
                />
              </Layout.Section></>)
            :
            <Layout.Section secondary fullWidth={false}>
              <CalloutCard
                primaryAction={{
                  content: "Contact us",
                  url: "mailto:muhammet@abimage.app"
                }}
                title="Coming soon"
                illustration={'/abimage-code.png'}
              ></CalloutCard>
            </Layout.Section>
          }
        </Layout>
      </Page>
  );
}