/*
  This config file contains settings shared across files.
  Toolset and REST API can be selected with this file, or by setting the RESTAPI
  environment variable. By default, Bitcoin.com's infrastructure is used.
  You can run your own infrastructure. See bchjs.cash for details.
*/

'use strict'

// By default choose a local rest API.
let RESTAPI = 'fullstack.cash'

// Override the RESTAPI setting if envronment variable is set.
if (process.env.RESTAPI && process.env.RESTAPI !== '') {
  RESTAPI = process.env.RESTAPI
}

// Ensure bch-js can pick up the env var.
process.env.RESTAPI = RESTAPI

const BCHJS = require('@chris.troutner/bch-js')

const config = {}

// Use bch-js but use it with the bitcoin.com infrastructure.
if (RESTAPI === 'fullstack.cash') {
  config.BCHLIB = BCHJS
  config.MAINNET_REST = `https://api.fullstack.cash/v3/`
  config.TESTNET_REST = `https://tapi.fullstack.cash/v3/`
  config.RESTAPI = 'bchjs'
}

// Use bch-js with local infrastructure.
if (RESTAPI === 'local') {
  config.BCHLIB = BCHJS
  // config.MAINNET_REST = `http://192.168.0.36:12400/v3/`
  // config.TESTNET_REST = `http://192.168.0.38:13400/v3/`
  config.MAINNET_REST = `http://127.0.0.1:3000/v3/`
  config.TESTNET_REST = `http://decatur.hopto.org:13400/v3/`
  config.RESTAPI = 'local'
}

// Use bch-js with decatur infrastructure.
if (RESTAPI === 'decatur') {
  config.BCHLIB = BCHJS
  config.MAINNET_REST = `http://decatur.hopto.org:12400/v3/`
  config.TESTNET_REST = `http://decatur.hopto.org:13400/v3/`
  config.RESTAPI = 'decatur'
}

module.exports = config
