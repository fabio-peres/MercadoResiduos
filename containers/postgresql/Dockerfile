FROM postgres:9.6
ENV POSTGRES_DB monitor
ENV POSTGRES_USER monitor
ENV POSTGRES_PASSWORD monitor123!
ADD ./script/*.sql /docker-entrypoint-initdb.d/
RUN echo "America/Sao_Paulo" > /etc/timezone && dpkg-reconfigure -f noninteractive tzdata