package com.google.sps.data;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Query.SortDirection;
import com.google.gson.Gson;

public class Comment {
  private final long id;
  private final String comment;
  private final String name;
  private final String timestamp;

  public Comment(long id, String comment, String name, String timestamp) {
    this.id = id;
    this.comment = comment;
    this.name = name;
    this.timestamp = timestamp;
  }

  public long getId() {
    return id;
  }

  public String getCommentText() {
    return comment;
  }

  public String getName() {
    return name;
  }

  public String Timestamp() {
    return timestamp;
  }

  public static String getAllComments() {
    PreparedQuery results = DatastoreServiceFactory.getDatastoreService()
        .prepare(new Query("Comment").addSort("timestamp", SortDirection.DESCENDING));
    List<Comment> comments = new ArrayList<>();
    for (Entity entity : results.asIterable()) {
      long id = entity.getKey().getId();
      String comment = (String) entity.getProperty("comment");
      String name = (String) entity.getProperty("name");
      String timestamp = new Date((long) entity.getProperty("timestamp")).toString();

      comments.add(new Comment(id, comment, name, timestamp));
    }
    Gson gson = new Gson();
    return gson.toJson(comments);
  }
}
