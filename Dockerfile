FROM ubuntu:latest
RUN apt update && apt install -y cowsay
#ENTRYPOINT /usr/games/cowsay
CMD /usr/games/cowsay I love docker
