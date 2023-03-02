<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
</head>
<body>

<!--
  <% userinfo.forEach((data)=>{%>
    
    <%=data%>
      <br>
      
      <%})%>
  -->
    <div class="container">
        <table class="table table-border table-bordered text-center shadow">
            <tr>
                <th>User ID</th>
                <th>User Name</th>
                <th>User Email</th>
                <th>User Password</th>
                <th>User Delete</th>
                <th>User Update</th>
            </tr>
            <% userinfo.forEach((user) => { %>
                <tr>
                    <td><%=user._id %></td>
                    <td><%=user.name %></td>
                    <td><%=user.email %></td>
                    <td><%=user.password %></td>
                    <td><a href="/delete/<%=user._id %>" class="btn btn-danger">Delete</a></td>
                    <td><a href="/edit/<%=user._id %>" class="btn btn-success">Edit</a></td>
                </tr>
            <% }) %>
        </table>
    </div>
</body>
</html>