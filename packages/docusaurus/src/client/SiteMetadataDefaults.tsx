/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useLocation} from 'react-router';
import {usePluginData} from '@docusaurus/useGlobalData';
import logger from '@docusaurus/logger';

export default function SiteMetadataDefaults(): JSX.Element {
  const {
    siteConfig: {favicon, title},
    i18n: {currentLocale, localeConfigs},
  } = useDocusaurusContext();
  const faviconUrl = useBaseUrl(favicon);
  const {htmlLang, direction: htmlDir} = localeConfigs[currentLocale]!;
  const location = useLocation();
  const {socialCardUrls} = usePluginData('docusaurus-plugin-content-docs') as {
    socialCardUrls: {[key: string]: string};
  };
  if (!socialCardUrls[location.pathname]) {
    logger.warn(
      `${location.pathname} is missing a socialCardUrl; using default.`,
    );
  }

  return (
    <Head>
      <html lang={htmlLang} dir={htmlDir} />
      <title>{title}</title>
      <meta property="og:title" content={title} />
      {/* {pageImage && <meta property="og:image" content={pageImage} />}
      {pageImage && <meta name="twitter:image" content={pageImage} />} */}
      {socialCardUrls[location.pathname] && (
        <meta property="og:image" content={socialCardUrls[location.pathname]} />
      )}
      {socialCardUrls[location.pathname] && (
        <meta
          property="twitter:image"
          content={socialCardUrls[location.pathname]}
        />
      )}
      {favicon && <link rel="icon" href={faviconUrl} />}
    </Head>
  );
}
