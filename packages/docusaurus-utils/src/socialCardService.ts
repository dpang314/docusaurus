/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {addBaseUrl, isSocialCardString} from '@docusaurus/utils-common';
import type {LoadContext} from '@docusaurus/types';
import type {SocialCardData} from '@docusaurus/types/src/config';

export function getSocialCardUrl(
  context: LoadContext,
  data?: SocialCardData,
): string {
  return isSocialCardString(context.siteConfig.socialCardService)
    ? context.siteConfig.socialCardService
    : context.siteConfig.socialCardService.getUrl(
        data ?? {
          type: 'default',
        },
        {
          ...context.siteConfig.socialCardService.options,
          projectLogo: context.siteConfig.socialCardService.options?.projectLogo
            ? addBaseUrl(
                context.siteConfig.url,
                context.siteConfig.baseUrl,
                context.siteConfig.socialCardService.options.projectLogo,
                {absolute: true},
              )
            : undefined,
        },
      );
}
