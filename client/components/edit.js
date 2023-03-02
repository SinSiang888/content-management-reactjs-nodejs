<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Update Data</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
</head>
<body>
    <div class="container">
        <form action="/update/<%=userinfo._id %>" method="post">
            <div class="form-group">
                <label for="name"><b>User Name: </b></label>
                <input type="text" name="name" id="name" class="form-control" value="<%=userinfo.name %>">
            </div>
            <div class="form-group">
                <label for="email"><b>User Email: </b></label>
                <input type="email" name="email" id="email" class="form-control" value="<%=userinfo.email %>">
            </div>
            <div class="form-group">
                <label for="password"><b>User Password: </b></label>
                <input type="password" name="password" id="password" class="form-control" value="<%=userinfo.password %>">
            </div>
            <input type="submit" name="update" value="Update" class="btn btn-success">
        </form>
    </div>
</body>
</html>