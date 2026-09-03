.PHONY: install dev build preview lint format test typecheck check

install:
	npm install

dev:
	npm run dev

build:
	npm run build

preview:
	npm run preview

lint:
	npm run lint

format:
	npm run format

test:
	npm run test

typecheck:
	npm run typecheck

check: typecheck lint test build
