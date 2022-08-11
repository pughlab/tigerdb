
# Create volumes needed for dev
setup-volumes:
	docker volume create pibu_minio_volume
	docker volume create pibu_keycloak_volume
	docker volume create pibu_api_volume
	docker volume create pibu_neo4j_volume
	
up:
	docker-compose up -d

logs:
	docker-compose logs -f

dev: up logs

down:
	docker-compose down

restart:
	docker-compose restart