build: test setup
	echo "noop"

test: setup
	python3 -m pytest

setup:
	python3 -m venv .venv
	source ./.venv/bin/activate
	pip install -r requirements.txt

clean:
	echo "noop"

