package com.trandat.iPixz.service;

import com.trandat.iPixz.entity.Content;
import com.trandat.iPixz.repo.ContentRepo;
import com.trandat.iPixz.repo.ContentTypeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContentServiceImpl implements ContentService {
    @Autowired
    private ContentRepo contentRepo;
    @Autowired
    private ContentTypeRepo contentTypeRepo;
    @Override
    public Content createContent(String contentType, String url) {
        return contentRepo.save(new Content(contentTypeRepo.getOne(contentType),null,null,url,null,null,null));
    }

    @Override
    public Content findById(String id) {
        return contentRepo.getOne(id);
    }
}
