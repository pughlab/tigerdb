
# Create volumes needed for dev
setup-volumes:
	docker volume create imic_minio_volume
	docker volume create imic_keycloak_volume
	
up:
	docker-compose up -d

logs:
	docker-compose logs -f

dev: up logs

down:
	docker-compose down

restart:
	docker-compose restart