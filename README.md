# Demo

## Installation
```bash
git clone https://github.com/justinyeh1995/django-nextjs-apartment-app.git
cd django-nextjs-apartment-app
```
---

## Build locally

### Database

In this demo, the default database engine is PostgreSQL, so it is required to download it either as a binary or a docker container.
It is important to expose `5432`, so Django backend can access it.

Once your `PostgreSQL` server is running

```bash
psql -U postgres
CREATE DATABASE apartment_db
exit
``` 

### Django Backend

```bash
python3 -m venv demo-venv
source demo-venv/bin/activate

cd django-nextjs-apartment-app/django_backend
python3 -m pip install -r requirements.txt

python3 manage.py makemigration
python3 manage.py migrate

python3 manage.py runserver 0.0.0.0:8000
```

### NextJS Frontend

Open another tab, and 

```bash
cd django-nextjs-apartment-app/nextjs_frontend
npm install
npm run dev
```
A webpage should be accessible on `localhost:3000`

---

## Build and Run with Docker Compose (Under Development)

```bash
docker-compose build -t demo-full-stack
docker-compose up
```
