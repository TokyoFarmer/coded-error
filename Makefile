build:
	tsc

publish: build
	npm version patch
	cp README.md build
	cp package.json build
	cd build && npm publish

default: build

.PHONY: build publish
