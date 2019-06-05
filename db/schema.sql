CREATE DATABASE ipixz CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
use ipixz;
CREATE TABLE content_type (
                            content_type_id VARCHAR(60) NOT NULL PRIMARY KEY,
                            parent_type_id VARCHAR(60),
                            description TEXT,
                            created_by_user_login VARCHAR(255),
                            last_modified_by_user_login VARCHAR(255),
                            last_updated_stamp TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
                            created_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                            CONSTRAINT cntnt_type_parent FOREIGN KEY (parent_type_id) REFERENCES content_type (content_type_id));

CREATE TABLE content(
                      content_id VARCHAR(60) NOT NULL PRIMARY KEY,
                      content_type_id VARCHAR(60),
                      mime_type VARCHAR(255),
                      character_set VARCHAR(100),
                      url VARCHAR(255),
                      description TEXT,
                      created_by_user_login VARCHAR(255),
                      last_modified_by_user_login VARCHAR(255),
                      last_updated_stamp TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
                      created_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                      CONSTRAINT FK_content_ContentType FOREIGN KEY (content_type_id) REFERENCES content_type(content_type_id));
