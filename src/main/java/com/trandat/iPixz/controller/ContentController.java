package com.trandat.iPixz.controller;

import com.trandat.iPixz.entity.Content;
import com.trandat.iPixz.model.ContentModel;
import com.trandat.iPixz.service.ContentService;
import com.trandat.iPixz.utils.ResponseUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Map;

@RestController
@CrossOrigin
public class ContentController {
    public static Logger LOG = LoggerFactory.getLogger(ContentController.class);
    public static String uploadPath = "/contentRepository";
    @Autowired
    private ContentService contentService;

    @PostMapping("/create-content")
    public Map<String, Object> createContent(ContentModel contentModel) {
        Map<String, Object> suc = ResponseUtils.returnSuccess();
        try {
            byte[] bytes = contentModel.getFile().getBytes();
            Path path = Paths.get(uploadPath + contentModel.getFile().getOriginalFilename());
            Files.write(path, bytes);
            Content content = contentService.createContent(contentModel.getContentType(), uploadPath + contentModel.getFile().getOriginalFilename());
            suc.put("contentId", content.getContentId());
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseUtils.returnError();
        }
        return suc;
    }

    @GetMapping
            (value = {"content/{contentId}"}, produces = MediaType.IMAGE_JPEG_VALUE)
    public FileSystemResource getPublicContentFile(@PathVariable String contentId) throws IOException {

        Content content=contentService.findById(contentId);
        File file = new File(
                content.getUrl());
        LOG.info(("get-content::responce :: is file null: ")
                + (file == null ? " true " : (" false__path : "
                + file.getAbsolutePath() + " name : " + file.getName())));
        return new FileSystemResource(file);
    }


}
