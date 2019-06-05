package com.trandat.iPixz.model;

import com.trandat.iPixz.entity.ContentType;
import lombok.*;

import java.util.Date;


@Getter
@Setter
@NoArgsConstructor
public class ContentPreview {
    private String contentId;
    private Date createdStamp;
    private String url;
    private String contentType;

    public ContentPreview(String contentId, String contentType, String url, Date createdStamp){
        this.contentId=contentId;
        this.contentType=contentType;
        this.url=url;
        this.createdStamp=createdStamp;

    }

}
