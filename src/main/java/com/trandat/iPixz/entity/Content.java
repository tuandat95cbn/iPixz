package com.trandat.iPixz.entity;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Date;

@Getter
@Setter
@Entity
public class Content {
    @Id
    @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    private String contentId;
    @JoinColumn(name = "content_type_id")
    @ManyToOne(fetch = FetchType.LAZY)
    private ContentType contentType;
    private String mimeType;
    private String characterSet;
    private String url;
    @Column(columnDefinition = "TEXT")
    private String description;
    @Column(name = "created_by_user_login")
    private String createdBy;
    @Column(name = "last_modified_by_user_login")
    private String lastModidiedBy;
    private Date createdStamp;
    private Date lastUpdatedStamp;

    public Content(ContentType contentType, String mimeType, String characterSet, String url, String description, String createdBy, String lastModidiedBy) {
        this.contentType = contentType;
        this.mimeType = mimeType;
        this.characterSet = characterSet;
        this.url = url;
        this.description = description;
        this.createdBy = createdBy;
        this.lastModidiedBy = lastModidiedBy;
    }

    public Content() {
    }
}
