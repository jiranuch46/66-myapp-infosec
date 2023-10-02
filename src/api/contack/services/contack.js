'use strict';

/**
 * contack service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::contack.contack');
