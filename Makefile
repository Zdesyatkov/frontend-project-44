install-deps:
	npm ci

lint:
	npx eslint .

publish:
	npm publish --dry-run

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js

brain-gcd:
	node bin/gcd-game.js

brain-prime:
	node bin/brain-prime.js

brain-progression:
	node bin/brain-progression.js