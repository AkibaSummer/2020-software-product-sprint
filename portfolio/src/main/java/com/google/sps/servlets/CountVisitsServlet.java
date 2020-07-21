// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps.servlets;

import com.google.gson.Gson;
import java.io.IOException;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/visit-data")
public class CountVisitsServlet extends HttpServlet {

  private Map<Integer, Integer> visits = new HashMap<>();

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    response.setContentType("application/json");
    Gson gson = new Gson();
    Calendar calendar = Calendar.getInstance();
    calendar.setTime(new Date());
    int now = calendar.get(Calendar.HOUR_OF_DAY);
    for (int i = 0; i < 24; i++) {
      int visit = visits.containsKey(i) ? visits.get(i) : 0;
      visits.put(i, i == now ? visit + 1 : visit);
    }
    String json = gson.toJson(visits);
    response.getWriter().println(json);
  }
}
