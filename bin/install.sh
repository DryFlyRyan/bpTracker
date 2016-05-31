#!/bin/bash

set -o errexit

bower install
createdb bp_bot
knex migrate:latest
knex seed:run
npm start
