FROM postgres:9.6
ENV POSTGRES_DB mercado
ENV POSTGRES_USER mercado
ENV POSTGRES_PASSWORD mercado123!
ADD ./script/*.sql /docker-entrypoint-initdb.d/
RUN echo "America/Sao_Paulo" > /etc/timezone && dpkg-reconfigure -f noninteractive tzdata