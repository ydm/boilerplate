#!/bin/bash

patch -p1 ./node_modules/jslint/lib/jslint-latest.js <./scripts/jslint.patch
