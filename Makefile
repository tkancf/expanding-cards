.DEFAULT_GOAL:=help

.PHONY: deploy
deploy: ## deploy && amend
	git add . && git commit -m "Update" && git push -f

.PHONY: help
help: ## Display this help screen
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'
