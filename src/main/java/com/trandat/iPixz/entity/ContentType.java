package com.trandat.iPixz.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Getter
@Setter
@Entity
public class ContentType {
    @Id
    @Column(name="content_type_id")
    private String contentTypeId;
    @JoinColumn(name="parent_type_id", referencedColumnName="content_type_id")
    @ManyToOne(fetch=FetchType.LAZY)
    private  ContentType parentType;
    @Column(columnDefinition = "TEXT")
    private String description;
    @Column(name = "created_by_user_login")
    private String createdBy;
    @Column(name = "last_modified_by_user_login")
    private String lastModifiedBy;
    private Date createdStamp;
    private Date lastUpdatedStamp;

    public ContentType(String contentTypeId, ContentType parentType, String description, String createdBy, String lastModifiedBy) {
        this.contentTypeId = contentTypeId;
        this.parentType = parentType;
        this.description = description;
        this.createdBy = createdBy;
        this.lastModifiedBy = lastModifiedBy;
    }

    public ContentType() {
    }
}
