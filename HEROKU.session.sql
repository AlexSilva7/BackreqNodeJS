/*
CREATE TABLE noticias(
     id_noticia SERIAL PRIMARY KEY,
     titulo VARCHAR(100) NOT NULL,
     conteudo TEXT NOT NULL,
     data_criacao TIMESTAMP WITHOUT TIME ZONE DEFAULT(NOW() AT TIME ZONE 'utc+3')
 )
 */

/*
INSERT INTO noticias (id_noticia, titulo, conteudo, data_criacao)
VALUES (
    'titulo:character varying',
    'conteudo:text',
  );*/
