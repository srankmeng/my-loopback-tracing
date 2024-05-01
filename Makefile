all: jaeger db api

jaeger:
	docker compose up jaeger -d

db:
	docker compose up coop_db user_db -d --build

api:
	docker compose up coop_api user_api -d --build

down:
	docker compose down
	