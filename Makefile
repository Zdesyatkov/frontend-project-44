install: install-deps
	npx simple-git-hooks

run:
	bin/

install-deps:
	npm ci

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

lint:
	npx eslint .

publish:
	npm publish --dry-run

.PHONY: test

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js