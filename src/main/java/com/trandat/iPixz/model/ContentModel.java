package com.trandat.iPixz.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;
@Setter
@Getter
public class ContentModel {
    private MultipartFile file;
    private String contentType;

    public ContentModel(MultipartFile file, String contentType) {
        this.file = file;
        this.contentType = contentType;
    }

    public ContentModel() {
    }
}
