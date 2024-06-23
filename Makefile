build:
	pnpm run build

test-build:
	cd playground && rm -rf node_modules
	cd playground && pnpm install
	cd playground && pnpm run start