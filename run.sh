docker build -t dispatch-github-action .
docker run --env-file ./env.list dispatch-github-action


