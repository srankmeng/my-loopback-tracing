jaeger:
	docker compose up jaeger -d

db:
	docker compose up db -d --build
	