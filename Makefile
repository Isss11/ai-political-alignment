python = python3

clean:
	rm -f -r .env

start-backend: clean
	$(python) -m venv .env
	. .env/bin/activate
	cd backend
	ls backend
	pip install -r backend/requirements.txt
	$(python) backend/manage.py runserver

start-frontend:
	cd front-end && \
	npm start
