build:
	docker compose --env-file .env up --build -d 

up:
	docker compose --env-file .env up -d

down:
	docker compose down 

