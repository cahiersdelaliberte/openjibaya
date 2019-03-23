#!/bin/bash

OPENFISCA_API_PORT=8000
# API_URL=http://localhost:${OPENFISCA_API_PORT}
API_URL=https://www.openfisca.tn/api/v0.13.0


.PHONY: all old-serve serve calc start


all: start

# http://127.0.0.1:2001
old-serve:
	paster serve --reload development-tunisia.ini

serve:
	openfisca serve -c openfisca_tunisia -p ${OPENFISCA_API_PORT} --reforms openfisca_tunisia.reforms.de_net_a_brut.de_net_a_brut

# make calc json=tests/toto.json
calc:
	curl -X POST ${API_URL}/calculate -H 'Content-Type: application/json' -d @${json}

start:
	npm start
