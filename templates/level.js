<script type="text/template" id="level-template">
    <div class="level">
        <div class="level-number">Level <%- levelNumber %></div>
        <div class="url">Url: <a href="<%- url %>"><%- url %></a></div>
        <div class="username">Username: <%- username %></div>
        <div class="password">Password: <%- password %></div>
        <div class="data">
            Data:
            <!-- TODO: Fix this behaviour -->
            <%- data %>
        </div>
    </div>
</script>
