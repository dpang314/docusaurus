/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const blogPostContainerID = 'post-content';
export {
  default as applyTrailingSlash,
  type ApplyTrailingSlashParams,
} from './applyTrailingSlash';
export {addBaseUrl} from './addBaseUrl';
export {hasProtocol, default as isInternalUrl} from './isInternalUrl';
