python = python3
pip = pip

clean:
	rm -f -r .env

setup-backend: clean
	$(python) -m venv .env
	. .env/bin/activate
	$(pip) install -r backend/requirements.txt

start-backend: setup-backend
	$(python) backend/manage.py runserver

# Runs back-end in the background (make sure to kill manually with ps aux to find the PID)
start-backend-production: setup-backend
	nohup python backend/manage.py runserver 0.0.0.0:8000 &

start-frontend:
	cd front-end && \
	npm start
