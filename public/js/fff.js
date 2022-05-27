    <% if (success) { %>
                    <% success.forEach(function(article){ %>
                          <% if (article) { %>
                              <div class="content-card">
                                <div class="card-image">
                                  <a href="/detail/<%= article.id %>">
                                    <img src="<%= article.image %>" alt="">
                                  </a>
                                </div>
                                <div class="card-body">
                                  <p>
                                    <%= article.nom %>
                                      <%= article.model %> - <%= article.ecran %>" -<%= article.reseau %> - <%= article.rom %> - <%= article.ram %>
                                  </p>
                                  <p>
                                    <%= article.prix %> F CFA
                                  </p>
                                  <a href="/detail/<%= article.id %>" class="btndetail">Détail</a>
                                </div>
                              </div>
                          <% } else  {%>
                            <p>bonjour</p>
                          <% } %>
                    <% }); %>
                  <% } else if (success == " "){%>
                    <p>bonjour</p>
                    <% } %>