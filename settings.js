'use strict';

let feedbackUrl = process.env.FEEDBACK_URL || 'http://hootch.test.netflix.net/submit';
let gateHost = process.env.API_HOST || 'https://gate.white.springapps.io';
let bakeryDetailUrl = process.env.BAKERY_DETAIL_URL || 'http://bakery.test.netflix.net/#/?region={{context.region}}&package={{context.package}}&detail=bake:{{context.status.resourceId}}';
let authEndpoint = process.env.AUTH_ENDPOINT || 'https://spinnaker-api-prestaging.prod.netflix.net/auth/info';

window.spinnakerSettings = {
  defaultProviders: ['cf'],
  feedbackUrl: feedbackUrl,
  gateUrl: gateHost,
  bakeryDetailUrl: bakeryDetailUrl,
  authEndpoint: authEndpoint,
  pollSchedule: 30000,
  defaultTimeZone: 'America/Los_Angeles', // see http://momentjs.com/timezone/docs/#/data-utilities/
  providers: {
    cf: {
      defaults: {
        account: 'prod',
        region: 'spinnaker'
      },
      primaryAccounts: ['prod', 'staging', 'dev'],
      primaryRegions: ['spinnaker'],
      challengeDestructiveActions: ['prod'],
      defaultSecurityGroups: [],
      accountBastions : {
      },
      preferredZonesByAccount: {
        prod: {
          'spinnaker': ['production']
        },
        staging: {
          'spinnaker': ['staging']
        },
        dev: {
          'spinnaker': ['development']
        },
        default: {
          'spinnaker': ['production']
        }
      }
    },
    //aws: {}
  },
  whatsNew: {
    gistId: '32526cd608db3d811b38',
    fileName: 'news.md',
  },
  authEnabled: process.env.AUTH === 'enabled',
  feature: {
    pipelines: true,
    notifications: false,
    fastProperty: true,
    vpcMigrator: false,
    clusterDiff: true,
  },
};