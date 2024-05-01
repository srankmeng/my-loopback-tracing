jaeger:
	docker compose up jaeger -d

db:
	docker compose up coop_db user_db -d --build
	