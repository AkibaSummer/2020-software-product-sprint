package com.google.sps.util;

import javax.servlet.http.HttpServletRequest;

public class Utils {
  /**
   * @return the request parameter, or the default value if the parameter was not
   *         specified by the client
   */
  public static String getParameter(HttpServletRequest request, String name, String defaultValue) {
    String value = request.getParameter(name);
    if (value == null) {
      return defaultValue;
    }
    return value;
  }
}
