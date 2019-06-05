package com.trandat.iPixz.service;
import com.trandat.iPixz.entity.Content;
import java.util.List;


public interface ContentService {
    public Content createContent(String contentType,String url);
    public Content findById(String id);
    public List<Content> getAll();
}
