#!/usr/bin/env bash

echo
echo "Archiving Application"

registry=$(jq -r .archive.registry pipeline.json)
repository=$(jq -r .archive.repository pipeline.json)
image="haziqa/cloudcomputing:latest"

#DOCKER_USERNAME & DOCKER_PASSWORD are passed as environment variable through aws cli
docker login \
    -u "${DOCKER_USERNAME?:}" \
    -p "${DOCKER_PASSWORD?:}" \
    "${registry}"
docker build -t "${image}" .
docker push "${image}"
